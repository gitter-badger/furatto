// Generated by CoffeeScript 1.6.3
(function($, window) {
  "use strict";
  var Panel;
  Panel = (function() {
    Panel.DEFAULTS = {
      element: null,
      dragger: null,
      disable: 'right',
      addBodyClasses: true,
      hyperextensible: true,
      resistance: 0.5,
      flickThreshold: 50,
      transitionSpeed: 0.3,
      easing: 'ease',
      maxPosition: 266,
      minPosition: -266,
      tapToClose: true,
      touchToDrag: false,
      slideIntent: 40,
      minDragDistance: 5
    };

    function Panel(el, options) {
      this.options = $.extend(options, {
        element: el
      });
      this.menu = $($('[data-toggle="panel"]').data('target'));
      this.append_menu_to_panel();
      this.snapper = new Snap(this.options);
    }

    Panel.prototype.apply_ios_devices_fix = function() {
      if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
        return $('.panel-content').css({
          'overflow': 'visible'
        });
      }
    };

    Panel.prototype.append_menu_to_panel = function() {
      return $('.panel-left').html(this.menu.html());
    };

    Panel.prototype.toggle = function() {
      $('.panel').css('display', 'block');
      if (this.snapper.state().state === "left") {
        return this.snapper.close();
      } else {
        return this.snapper.open('left');
      }
    };

    return Panel;

  })();
  $.fn.panel = function(option) {
    return this.each(function() {
      var $this, data, options;
      $this = $(this);
      data = $this.data('Panel');
      options = $.extend({}, Panel.DEFAULTS, $this.data(), typeof option === 'object' && option);
      if (!data) {
        $this.data('Panel', (data = new Panel(this, options)));
      }
      if (typeof option === 'string') {
        return data[option]();
      }
    });
  };
  $(document).on('click', '[data-toggle="panel"]', function(e) {
    e.preventDefault();
    return $('.panel-content').panel('toggle');
  });
  return $(document).ready(function() {
    return $('.panel-content').panel('apply_ios_devices_fix');
  });
})(window.jQuery, window);
