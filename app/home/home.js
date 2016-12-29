(function() {
    'use strict';

    var app = angular.module('GamingRapApp')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl(feedListApiSvc) { //Feed is a google service

        var vm = this;
        vm.boardFeedStatus = {};
        vm.name = 'fredy';
        vm.retrieve = retrieve;

        //////////////////////

        function initBoardContainer() {
            var PAGE_SIZE = 20;
            vm.boardFeedStatus.list = [];
            vm.boardFeedStatus.totalCount = 0;
            vm.boardFeedStatus.totalPages = 0;
            vm.boardFeedStatus.currentPage = 0;
            vm.boardFeedStatus.pageSize = PAGE_SIZE;
            vm.boardFeedStatus.retrieving = false;
        }

        function retrieve() {

            if (_.isEmpty(vm.boardFeedStatus)) {
                initBoardContainer();
            }

            console.log('retrieve() called');
            feedListApiSvc.get(vm.boardFeedStatus);

        }
    }

    app.factory('feedListApiSvc', function($rootScope, $q, feedLoaderFromGoogleSvc, URLDataProviderSvc) {

        var service = {
            get: get
        };

        return service;

        ////////////////////////

        function get(boardFeedStatus) {

            var results = URLDataProviderSvc.getNextURLBatch(boardFeedStatus);

            // There is no more URLs to return
            if (_.isEmpty(results.URLsList)) {
                return;
            }

            var feedSources = results.URLsList;
            //kanbanArtifactStatus.list.push.apply(kanbanArtifactStatus.list, data.results);

            // updating feeds object
            boardFeedStatus.totalCount = results.totalCount;
            boardFeedStatus.totalPages = results.totalPages;

            var deferred = $q.defer();
            var retrivedCount = 0;
            boardFeedStatus.retrieving = true;

            for (var i = 0; i < feedSources.length; i++) {
                feedLoaderFromGoogleSvc.fetch({
                    q: feedSources[i].url,
                    num: 1
                }, {}, function(data) {
                    if (data.responseData.feed) {
                        var feed = data.responseData.feed;
                        var firstFeed = feed.entries[0];
                        var  randNum = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
                        //firstFeed.src = 'http://lorempixel.com/280/357/?333';
                        firstFeed.src = getImageUrl(firstFeed.content);
                        boardFeedStatus.list.push(firstFeed);
                        retrivedCount++;
                        if (retrivedCount >= feedSources.length) {
                            deferred.resolve(boardFeedStatus);
                            boardFeedStatus.currentPage += 1;
                            boardFeedStatus.retrieving = false;
                        }
                    } else {
                        console.log('This feed didn\'t have any feed entries: ' + feedSources[i].url);
                    }
                });

            }

            return deferred.promise;
        }


    });


    function getImageUrl(feedContent){
        // from: http://stackoverflow.com/questions/14939296/extract-image-src-from-a-string
        var imageSrc,
            urls = [], 
            regex = /<img.*?src="([^">]*\/([^">]*?))".*?>/g;

        while ( imageSrc = regex.exec( feedContent ) ) {
            urls.push( imageSrc[1] );
        }

        if (urls.length > 0){
            return urls[0];
        } else {
            return 'http://lorempixel.com/280/357/?333';
        }
    }


    app.factory('URLDataProviderSvc', function(URLsRepoSvc) {

        var service = {
            getNextURLBatch: getNextURLBatch
        };

        return service;

        ////////////////////////

        function getNextURLBatch(boardFeedStatus) {

            var results = {
                URLsList: [],
                totalCount: 0,
                totalPages: 0
            };

            var URLs = URLsRepoSvc.getAllURLs();
            results.totalCount = URLs.length;
            results.totalPages = Math.ceil(URLs.length / boardFeedStatus.pageSize);

            var start = boardFeedStatus.currentPage * boardFeedStatus.pageSize;
            var end = start + boardFeedStatus.pageSize;

            // there is no more URLs to return
            if ( start > results.totalCount){
                return results;
            }

            if (end > results.totalCount){
                end = results.totalCount;
            }

            results.URLsList = getObjectsInRange(URLs, start, end);

            return results;
        }

        // min inclusive, max exclusive. [ )
        function getObjectsInRange (list, min, max) {
            var results = [];
            for (var i = min; i < max ; i++){
                results.push(list[i]);
            }
            return results;
        }

    });


})();


// vm.feeds.push.apply(vm.feeds, data);
//vm.retrieveStatus = false;
// _.each(data, function(value) {
//     //  //Embed Parsing + Lookup
//     var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
//     var urlRegex = new RegExp(expression);

//     var images = value.content.match(urlRegex);
//     if (images){
//        value.sampleImage = images[0];
//     }

//     value.sampleImage = $(value.content).find('img').eq(0).attr('src');
//     if (!value.sampleImage) {
//         value.sampleImage = $(value.content).find('iframe').eq(0).attr('src');
//     } else {
//         console.log('Couldn\'t find a picture or a youtube video for this feed entry');
//     }
// });
