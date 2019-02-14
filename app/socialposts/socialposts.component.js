"use strict";
const socialposts = {
  templateUrl: "app/socialposts/socialposts.html",
  controller: [function () {
    const vm = this;
    vm.tweets = [
      // { title: "Dog", thought: "is sooooo like cool" }
      // { title: "Cat", thought: "are also pretty cool, but not quite as cool as dogs" }
      // { title: "Dog", thought: "is sooooo like cool" }
    ]
    vm.onSubmit = function (title,thought) {
      const tweet = {}
      tweet.title = title;
      tweet.thought = thought;
      vm.tweets.push({ ...tweet });
      console.log(vm.tweets);
    };
    vm.removeTweet = function (index) {
      vm.tweets.splice(index, 1);
      console.log(index);
    };
    vm.formBool = true;
    vm.formToggle = function(){
      console.log("YOYO")
      vm.formBool = !vm.formBool;
    }
  }]
};

angular.module("app").component("socialposts", socialposts)

