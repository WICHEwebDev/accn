// $Id: share_widget_link.js,v 1.1 2011/03/15 19:06:39 rdahiya Exp $

Drupal.SharePlugin = Drupal.SharePlugin || {};
Drupal.SharePlugin.migrate = function() {
  var shares = Drupal.settings.share;
  for (var i in shares) {
    var share = shares[i];
    var link = $("li.share_" + share.shareID + "_" + share.nid);

    $(link).append(share.widget);

    var widget = $(link).children('.share-widget');
    var left = link.get(0).offsetLeft - 2;
    var top = link.get(0).offsetTop + link.height();
    widget.css({ left: left, top: top });
  }
  Drupal.SharePlugin.init();
}
