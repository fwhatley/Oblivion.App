module.exports = function(grunt) {

	grunt.initConfig({
		clean: ["dist/**", ".tmp/**/*"],
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					open: true,
					livereload: true
				}
			}
		},
		copy: {
			prod: {
				files: [
					//copy everything that will NOT be minified.
					{expand: true, src: ['app/**/*', '!**/*.js', '!**/*.styl', '!**/*.html'], dest: 'dist/'},
					{expand: true, src: ['Content/**/*', '!**/*.css', '!**/*.styl'], dest: 'dist/'},
					{expand: true, src: ['index.html'], dest: 'dist/'}, //copy this so we can replace the blocks later.
					{expand: true, src: ['web.config'], dest: 'dist/'},
					{expand: true, src: ['static/**/*'], dest: 'dist/'}
				]
			}
		},
		//Take a look at Karma Server with Grunt Watch in grunt-karma's readme
		karma: {
			options: {
    			configFile: 'karma.conf.js'
    		},
			prod: {
				basePath: 'dist',
				options: { //files needs to be wrapped inside an options obj.
					files: [
						'Scripts/thirdparty.min.js', //minified third party
						'../scripts-for-testing/angular-mocks.js',
						'../scripts-for-testing/**/*.js',
						'app/app.min.js', //minified app
						'../app/**/*.spec.js'
					]
				},
				browsers: ['PhantomJS'],
    			logLevel: 'ERROR',
    			singleRun: true,
    			reporters: ['teamcity']
			},
			dev: {
				background: true,  //run in a child process so it doesn't block subsequent grunt tasks
				autoWatch: false, //watch task handles this.
				singleRun: false  //leave the karma server running.
			}
		},
		ngAnnotate: {
			//Reason: http://scotch.io/tutorials/javascript/declaring-angularjs-modules-for-minification
			app: {
				//process concat'd files in-line
				files: [{
					expand: true,
					cwd: '.tmp',
					src: '**/*.js',
					dest: '.tmp'
				}]
			}
		},
		ngtemplates:  {
			//concatenate .html files and append them to app.min.js, which is generated by concat:generated task
		    "GamingRapApp": { //module name
			    src: 'app/**/*.html',
			    dest: '.tmp/concat/app/app.min.js', // append the minfied html to app.min.js
			    options: {
			    	append: true,
			    	htmlmin: {
						collapseBooleanAttributes:      true,
						collapseWhitespace:             true,
						removeAttributeQuotes:          true,
						removeComments:                 true, // Only if you don't use comment directives! 
						removeEmptyAttributes:          true,
						removeRedundantAttributes:      true,
						removeScriptTypeAttributes:     true,
						removeStyleLinkTypeAttributes:  true
			    	}
			    }
		    }
		},
		stylus: {
			compile: {
				files: {
					'Content/site.css': ['app/**/*.styl', 'Content/**/*.styl']
				},
				options: {
					import: ['nib']
				}
			}
		},

		// useminPrepare will generate the commented code below on the fly. For more info look at the usemin
		// documentation: https://github.com/yeoman/grunt-usemin.

		// concat:                                                       
		// 		{ generated:  { ... } }                                                
		// uglify:                                                                       
		// 		{ generated:  { ... } }                                                                                              
		// cssmin:                                                                       
		// 		{ generated:  { ... } }                                                                                                             
	 	useminPrepare: {
			html: 'index.html', //parse this file for the blocks of scripts to minify
			options: {
				dest: 'dist'
			}
		},
		usemin: {
			html: 'dist/index.html', //in this file, replace the blocks of script paths with minified ones
			options: {
				blockReplacements: {
					css: function (block) {
						if (block.dest === 'Content/thirdparty.min.css') {
							return '<link ng-if="!removeThirdPartyCSS" rel="stylesheet" href="' + block.dest + '">';
						}
						return '<link rel="stylesheet" href="' + block.dest + '">';
					}
				}
			}
		},
		watch: {
			// reload the browser when changes are made
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'index.html',
					'content/**/*.css',
					'Scripts/**/*.js',
					'app/**/*.html',
					'app/**/*.js',
					'!app/**/*.spec.js',
					'app/**/*.json'
				]
			},

			karma: {
				files: ['Scripts/**/*.js', 'scripts-for-testing/**/*.js', 'app/**/*.js'],
				tasks: ['karma:dev:run']
			},
			stylus: {
				files: ['app/**/*.styl', 'Content/**/*.styl'],
				tasks: ['stylus']
			}
		},
		uglify: {
			options: {
				report: 'min',
				sourceMap: true,
				sourceMapIncludeSources: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-angular-templates');

	grunt.registerTask('dev',[
		'stylus',
		'connect',
		'karma:dev:start',
		'watch'
	]);

	grunt.registerTask('prod',[
		'clean',
		'stylus',
		'copy:prod',
		'useminPrepare',
		'concat:generated',
		'ngtemplates', // ngtemplates has to go right after concat:generated, order is important
		'ngAnnotate',
		'cssmin:generated',
		'uglify:generated',
		'usemin'
	]);

};