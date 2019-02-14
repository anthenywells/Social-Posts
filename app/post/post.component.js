"use strict";
const post = {
  bindings: {
    post: "<",
    removeTweet: "&"
  },
  templateUrl:"app/post/post.html",
};

angular.module("app").component("post", post)