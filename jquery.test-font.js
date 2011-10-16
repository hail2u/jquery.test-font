/*!
 * jQuery Plugin: Test Font - version 0.1
 * http://github.com/hail2u/jquery.test-font
 * Test font availability.
 *
 * Copyright (c) 2011 Kyo Nagashima <kyo@hail2u.net>
 * This library licensed under MIT license:
 * http://opensource.org/licenses/mit-license.php
 */

(function ($) {
  $.testFont = function (fontname) {
    var result = false;
    var text   = "abcdefghijklmnopqrstuvwxyz";

    // create yardstick
    var yardstick = $("<div/>").css({
      "display":     "none",
      "font-family": "jquery.test-font"
    }).append(text).appendTo("body");

    // create div for test and apped to body
    var test = yardstick.clone().css({
      "font-family": fontname
    }).appendTo("body");

    // compare
    if (test.width() !== yardstick.width()) {
      result = true;
    }

    // dispose
    yardstick.remove();
    test.remove();

    return result;
  };
})(jQuery);
