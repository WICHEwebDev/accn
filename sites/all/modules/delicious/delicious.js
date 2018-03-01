/**
 * $Id: delicious.js,v 1.1 2011/03/15 19:05:50 rdahiya Exp $
 * menuExpandable2.js - implements an expandable menu based on a HTML list
 * Author: Dave Lindquist (dave@gazingus.org)
 */


Drupal.deliciousAttach = function() {
if (!document.getElementById)
    document.getElementById = function() { return null; }

function deliciousInitializeMenu(menuId, actuatorId) { 
    var menu = document.getElementById(menuId);
    var actuator = document.getElementById(actuatorId);

    if (menu == null || actuator == null) return;

    // if (window.opera) return; // Opera 7 works well, so commenting this

    actuator.parentNode.style.backgroundImage = "url(sites/all/modules/delicious/plus.gif)";
    actuator.onclick = function() { alert('actuator.onclick = function');
        var display = menu.style.display;
        this.parentNode.style.backgroundImage =
            (display == "block") ? "url(sites/all/modules/delicious/plus.gif)" : "url(sites/all/modules/delicious/minus.gif)";
        menu.style.display = (display == "block") ? "none" : "block";

        return false;
    }

}

if (Drupal.jsEnabled) { 
  $(document).ready(Drupal.deliciousAttach) ;
}

}