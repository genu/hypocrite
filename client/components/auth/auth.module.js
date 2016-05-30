'use strict';

angular.module('hypocriteApp.auth', ['hypocriteApp.constants', 'hypocriteApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
