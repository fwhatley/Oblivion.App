(function () {
    'use strict';

    angular
        .module('OblivionApp')
        .factory('URLsRepoSvc', URLsRepoSvc);

    function URLsRepoSvc() {

        var service  = {
            getAllURLs : getAllURLs
        };

        return service;

        ////////////////////////

        function getAllURLs() {
            var feedSources = 
            [
                {
                    order: 0,
                    title: 'kotaku',
                    url: 'http://feeds.feedburner.com/TechCrunch/gaming',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 1,
                    title: 'kotaku',
                    url: 'http://feeds.feedburner.com/TechCrunch/gaming',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 2,
                    title: 'neoseaker',
                    url: 'http://www.neoseeker.com/feeds/news/?type=rss0.91',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 3,
                    title: 'ps4daily',
                    url: 'http://ps4daily.com/feed/',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 4,
                    title: 'gamingbolt',
                    url: 'http://gamingbolt.com/feed',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 5,
                    title: 'gamespot',
                    url: 'http://www.gamespot.com/feeds/video/',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 6,
                    title: 'giantbomb',
                    url: 'http://www.giantbomb.com/feeds/mashup/',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 7,
                    title: 'rockpapershotgun',
                    url: 'http://feeds.feedburner.com/RockPaperShotgun',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 8,
                    title: 'attackerofthefanboy',
                    url: 'http://attackofthefanboy.com/feed/',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 9,
                    title: 'alphabetagamer',
                    url: 'http://www.alphabetagamer.com/feed/',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 10,
                    title: ' destructoid',
                    url: ' http://www.destructoid.com//?mode=atom',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 11,
                    title: 'robertsspaceindustries ',
                    url: ' https://robertsspaceindustries.com/comm-link/rss',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 12,
                    title: 'artstation ',
                    url: ' https://www.artstation.com/artwork.rss',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 13,
                    title: 'tentonhammer ',
                    url: 'http://www.tentonhammer.com/rss ',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 14,
                    title: ' theonion',
                    url: ' http://feeds.theonion.com/Gameological ',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 15,
                    title: ' nag',
                    url: ' http://www.nag.co.za/feed/',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 16,
                    title: ' nonfictiongaming',
                    url: ' http://www.nonfictiongaming.com/feed/',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 17,
                    title: 'nerdreactor ',
                    url: 'http://nerdreactor.com/feed/',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 18,
                    title: ' thisisxbox',
                    url: 'http://www.thisisxbox.com/feed',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 19,
                    title: ' gameinformer',
                    url: 'http://www.gameinformer.com/feeds/topfiverss.aspx?p=home',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 20,
                    title: ' GamasutraFeatureArticles',
                    url: ' http://feeds.feedburner.com/GamasutraFeatureArticles',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 21,
                    title: 'eurogamer ',
                    url: 'http://www.eurogamer.net/?format=rss',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 22,
                    title: ' GameRant',
                    url: ' http://feeds.feedburner.com/GameRant',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 23,
                    title: ' ps4daily',
                    url: 'http://ps4daily.com/feed',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 24,
                    title: ' gawker',
                    url: ' http://feeds.gawker.com/kotaku/full',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 25,
                    title: ' WiiUDaily',
                    url: ' http://feeds.feedburner.com/WiiUDaily',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 26,
                    title: ' gamezebo',
                    url: ' http://www.gamezebo.com/rss',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 27,
                    title: ' Co-optimus',
                    url: 'http://feeds.feedburner.com/Co-optimus ',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 28,
                    title: ' gametrailers',
                    url: ' http://www.gametrailers.com/videos-trailers/feed',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 29,
                    title: ' stealthybox',
                    url: ' http://www.stealthybox.com/feed',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 30,
                    title: ' theverge',
                    url: ' http://www.theverge.com/gaming/rss/index.xml',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 31,
                    title: ' gamespot',
                    url: 'http://www.gamespot.com/feeds/video/',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 32,
                    title: ' WeGotThisCoveredGaming',
                    url: ' http://feeds.feedburner.com/WeGotThisCoveredGaming',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 33,
                    title: ' polygon',
                    url: ' http://www.polygon.com/rss/index.xml',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 34,
                    title: ' GameRant',
                    url: ' http://feeds.feedburner.com/GameRant',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 35,
                    title: ' ps4daily',
                    url: 'http://ps4daily.com/feed ',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 36,
                    title: ' gawker',
                    url: ' http://feeds.gawker.com/kotaku/full',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 37,
                    title: ' WiiUDaily',
                    url: ' http://feeds.feedburner.com/WiiUDaily',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 38,
                    title: ' gamezebo',
                    url: ' http://www.gamezebo.com/rss',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 39,
                    title: ' Co-optimus',
                    url: 'http://feeds.feedburner.com/Co-optimus ',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 40,
                    title: ' gametrailers',
                    url: ' http://www.gametrailers.com/videos-trailers/feed',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 41,
                    title: ' stealthybox',
                    url: ' http://www.stealthybox.com/feed',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 42,
                    title: ' theverge',
                    url: ' http://www.theverge.com/gaming/rss/index.xml',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 43,
                    title: ' gamespot',
                    url: 'http://www.gamespot.com/feeds/video/ ',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 44,
                    title: ' WeGotThisCoveredGaming',
                    url: ' http://feeds.feedburner.com/WeGotThisCoveredGaming',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }, {
                    order: 45,
                    title: ' polygon',
                    url: ' http://www.polygon.com/rss/index.xml',
                    src: 'http://lorempixel.com/g/280/357/?1642'
                }

            ];

            return feedSources;
        }
    }

}());
