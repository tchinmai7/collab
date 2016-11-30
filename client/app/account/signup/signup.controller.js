'use strict';

class SignupController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }
  $scope.tags =  [
  { "text":"hydra" },
  { "text":"chimera" },
  { "text":"ats" },
  { "text":"trafficserver" },
  { "text":"lbctrld" },
  { "text":"cfr" },
  { "text":"sahara" },
  { "text":"nevada" },
  { "text":"iptables" },
  { "text":"nat" },
  { "text":"rawsocket" },
  { "text":"kernel" },
  { "text":"apprep" },
  { "text":"healthmon" },
  { "text":"wccp" },
  { "text":"dpdk" }

  ];
  $scope.loadTags = function(query) {
      return $http.get('/tags?query=' + query).then(function(response) {
                            console.log(response);
                                              return response;
  });
      }
  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
        tags: this.user.tags
  })
      .then(() => {
        // Account created, redirect to home
        this.$state.go('main');
      })
      .catch(err => {
        err = err.data;
        this.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, (error, field) => {
          form[field].$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });
      });
    }
  }
}

angular.module('collabApp')
  .controller('SignupController', SignupController);
