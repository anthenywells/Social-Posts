"use strict";
const postform = {
  bindings: {
    onSubmit: "&",
    formToggle: "&"
  },
  templateUrl:"app/postform/postform.html",
};

angular.module("app").component("postform", postform)