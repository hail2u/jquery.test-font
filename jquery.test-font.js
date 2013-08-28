/**
 * @preserve jQuery Plugin: Test Font v0.2.0
 *
 * LICENSE: http://hail2u.mit-license.org/2011
 */

/*jslint indent: 2 */
/*global jQuery, $ */

(function ($) {
  "use strict";

  $.testFont = function (fontname) {
    var result = false,
      text   = "abcdefghijklmnopqrstuvwxyz",
      yardstick = $("<div/>").css({
        "display":     "none",
        "font-family": "jquery.test-font"
      }).append(text).appendTo("body"),
      test = yardstick.clone().css({
        "font-family": fontname
      }).appendTo("body");

    if (test.width() !== yardstick.width()) {
      result = true;
    }

    yardstick.remove();
    test.remove();

    return result;
  };
}(jQuery));
