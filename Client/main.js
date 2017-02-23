console.log('js loaded');
$('document'). ready(function(){
    $('.icon').click(function(){
        $('.topnav').toggle();
    });
});

var myApp = angular.module('myApp',['ngRoute']);

    myApp.config(function($routeProvider){
        $routeProvider.when('/blog', {
                   templateUrl : 'partials/blog.html',
                   controller  : 'BlogController',
                   controllerAs: 'BC'
    })
     
                  .when('/about', {
                   templateUrl : 'partials/about.html',
                   controller  : 'AboutController',
                   controllerAs: 'AC'
    })
                  .when('/contact',{
                  templateUrl: 'partials/contact.html',
                  controller  : 'ContactController',
                  controllerAs: 'CC'
    })
    
});


    myApp.controller('BlogController', function($scope){
        $scope.BlogPage ='Welcome to my Blog!';

    });

    myApp.controller('AboutController', function($scope){
        $scope.aboutPage ='Who are we?';

    });

    myApp.controller('ContactController', function($scope){
        $scope.contactPage ='Contact us';

    });


   /* myApp.controller('BenefitsController', function($scope){
        debugger;
        $scope.benefitsPage ='WHAT ARE OUR BENEFITS?';

    });
    myApp.controller('JoinController', function($scope){
        $scope.joinpage = "Come, Work with us";
    });*/