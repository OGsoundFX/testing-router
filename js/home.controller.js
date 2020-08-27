function HomeController() {
    this.viewName = "Home";
};

angular
    .module('app')
    .controller('HomeController', HomeController);
    