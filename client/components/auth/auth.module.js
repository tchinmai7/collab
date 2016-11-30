'use strict';

angular.module('collabApp.auth', [
  'collabApp.constants',
  'collabApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
