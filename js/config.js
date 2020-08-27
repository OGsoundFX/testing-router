angular
    .module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController as ctrl',
                template: `<p> {{ ctrl.viewName }} </p>`
                // templateUrl: '../templates/home.html'
            })
            .state('about', {
                url: '/about',
                controller: 'AboutController as ctrl',
                template: `<p> {{ ctrl.viewName }} </p>`
                // templateUrl: '../templates/about.html'
            });
            $urlRouterProvider.otherwise('/');
    });
