(function() {

'use strict';
/*jshint latedef: false */
/**
 * @ngdoc function
 * @name benLugavereApp.controller:LibraryCtrl
 * @description
 * # LibraryCtrl
 * Controller of the benLugavereApp
 */

angular.module('resources.module')
  .controller('ResourcesCtrl', Controller);

  Controller.$inject = ['$scope', '$filter'];

  function Controller($scope, $filter) {
    var vm = this;
    vm.options = {};

    vm.products = [
          {
            name: 'Iconifier',
            url: 'http://iconifier.net/',
            img: 'https://pbs.twimg.com/profile_images/378800000326850092/1f6d2899d212d567b689ba03c84a7f04.png',
            description: 'Free Favicon & Apple Icon Generator',
            cost: 'Free',
            group: 'Tools'
          },
          {
            name: 'MongoDB',
            description: 'NoSQL Database',
            img:'https://cdn.rawgit.com/dtgm/chocolatey-packages/8f7101024b11677be45a74b45114000b428a9c9b/icons/mongodb.png',
            group: 'Database',
            url:'https://www.mongodb.org/'
          },
          {
            name: 'MongoVUE',
            description: 'GUI interface to work with MongoDB.',
            img:'https://raw.githubusercontent.com/zippy1981/Chocolatey-Packages-Zippy/master/MongoVUE/MongoVUE.png',
            group: 'Database',
            url:'www.mongovue.com/'
          },
          {
            name: 'Karma',
            description: 'Test runner (formerly Testacular)',
            command: 'npm install karma karma-chrome-launcher',
            img: 'https://cldup.com/0286W-2y27.png',
            group: 'Testing',
            url:'karma-runner.github.io/'
          },
          {
            name: 'Jasmine',
            description: 'Testing framework',
            command: 'npm install jasmine',
            img:'http://devstickers.com/assets/img/pro/xvmc.png',
            group: 'Testing',
            url:'http://jasmine.github.io/'
          },
          {
            name: 'Batarang',
            description: 'Google Chrome debugging tool',
            img:'http://stepansuvorov.com/blog/wp-content/uploads/2013/07/angular-batarang1-300x75.png',
            group:'Debugging Tool',
            url:'https://github.com/angular/batarang'
          },
          {
            name: 'Protractor',
            description: 'Lorem ipsum dolor sit e ex id porta. Etiam vitae libero ac augue pellentesque tempor at id felis',
            command:'npm install protractor',
            group:'Testing',
            url:'https://angular.github.io/protractor/'
          },
          {
            name: 'Bower',
            description: 'Front-End Package Manager',
            img:'http://bower.io/img/bower-logo.png',
            group: 'Front-End Package Manager',
            url:'http://bower.io/'
          },
          {
            name: 'Git',
            description:'Source of all things godly',
            group: 'Tools',
            url: 'https://git-scm.com/'
          },
          {
            name: 'GitHub',
            description:'Open source code community',
            group: 'Community',
            url:'https://github.com/'
          },
          {
            name: 'Gulp',
            description:'Task-Runner',
            img:'https://i.imgur.com/yFeBvMO.png',
            group: 'Task-Runner',
            url:'http://gulpjs.com/'
          },
          {
            name: 'Bootstrap',
            description:'Front-End CSS Framework',
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/2000px-Boostrap_logo.svg.png',
            group:'CSS Framework',
            url:'http://getbootstrap.com/'

          },
          {
            name: 'Formly',
            description:'Great library for building forms.',
            img:'https://pbs.twimg.com/media/CA_oPjBUQAIhiqk.png:large',
            group:'Front-End Library',
            url:'http://angular-formly.com'
          },
          {
            name: 'Grunt',
            description:'Task-Runner',
            img:'https://blog.toggl.com/wp-content/uploads/2014/04/grunt-logo.png',
            group:'Task-Runner',
            url:'http://gruntjs.com/'
          },
          {
            name: 'QViewer',
            description:'QVD File Previewer',
            cost: 'Free',
            img:'http://2.bp.blogspot.com/-GYVvx1HB3H4/T-JX2ssE8QI/AAAAAAAACf0/UXhqhQnTWVM/s1600/logo240.png',
            group:'Productivity',
            url:'http://easyqlik.com/'
          },
          {
            name: 'Qlikview',
            description: 'Great in-memory BI tool.',
            img:'http://romacode.com/media/2495/qlikview.png',
            group:'Software',
            url:'http://www.qlik.com/products/qlikview'
          },
          {
            name: 'Yeoman',
            description: 'Scaffolding app.',
            img: 'http://yeoman.io/static/yeoman-02.dc21b7fc1d.png',
            group: 'Productivity',
            url:'http://yeoman.io/'
          },
          {
            name:'Browserify',
            description: 'Front-End Package Manager',
            group:'Tools',
            url:'http://browserify.org/',
            img:'http://browserify.org/images/browserify.png'
          },
          {
            name:'RequireJS',
            description: 'Front-End Dependency Manager',
            group:'Productivity',
            url:'http://requirejs.org/',
            img:'http://requirejs.org/i/logo.png'
          },
          {
            name:'Ionic Framework',
            url:'http://ionicframework.com/',
            description: 'Mobile-First CSS Framework',
            group: 'CSS Framework'
          },
          {
            name: 'LumX',
            description: 'Responsive front-end framework based on AngularJS & Google Material Design specifications.',
            url: 'http://ui.lumapps.com/',
            img:'http://ui.lumapps.com/images/logo/lumx-color.png',
            group: 'CSS Framework'
          },
          {
            name: 'JSHint',
            description: 'JavaScript quality control tool.',
            url:'http://jshint.com/',
            img:'http://jshint.com/res/jshint-dark.png',
            group:'Productivity'
          }
        ];
  }
})();
