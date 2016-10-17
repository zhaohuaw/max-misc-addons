odoo.define('max_web_debug_menu.max_web_db_name_menu', function (require) {
    "use strict";
    var session = require('web.session');
    var core = require('web.core');
    var _t = core._t;

    var UserMenu = require('web.UserMenu');
    UserMenu.include({
        on_menu_debug: function(){
            window.location = $.param.querystring(window.location.href, 'debug');
        },
        on_menu_debugassets: function(){
            window.location = $.param.querystring(window.location.href, 'debug=assets');
        },
        on_menu_quitdebug: function(){
            window.location.search="?";
        },
    });
})
