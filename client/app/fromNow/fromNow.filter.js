'use strict';

angular.module('collabApp')
  .filter('fromNow', function () {
    return function (input) {
      return moment(input).locale(window.navigator.language).fromNow();
    };
  });
