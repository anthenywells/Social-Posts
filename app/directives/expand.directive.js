"use strict";

function expand() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs) {
      $element.on("focus", function() {
        $element.css("transform-origin", "center");
        $element.css("transform", "scale(1.05, 1.05"); 
      });
      $element.on("blur", function() {
        $element.css("transform", "");
      });
    }
  };
}

angular 
  .module("app")
  .directive("expand", expand)