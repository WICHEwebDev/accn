// $Id: share_widget_settings.js,v 1.1 2011/03/15 19:06:39 rdahiya Exp $

if (Drupal.jsEnabled) {
  $(document).ready(function() {
    shareOpenTab("div.tab-title");
  });
}

function shareOpenTab(name) {
  $(name).each(function(i) {
    var id = $(this).parent().attr('id');
    $(this).click(function() {
      var image = $(this).parent();
      $("#" + id + " div.tab-settings").animate({
        height: 'toggle'
      },function() {
        $(image).toggleClass('opened');
      });
    });
  });
}
