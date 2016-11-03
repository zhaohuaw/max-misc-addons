odoo.define('max_web_freeze_list_View_header.grouping', function (require) {
'use strict';

    var ListView = require('web.ListView');

    ListView.Groups.include({
        render_groups: function () {
            var self = this;
            var placeholder = this._super.apply(this, arguments);
            var grouping_freezer = document.createElement("script");
            grouping_freezer.innerText = "$('.o_group_header').click(function(){setTimeout('freeze_list_view_header();',500);})";
            placeholder.appendChild(grouping_freezer);
            return placeholder;
        },
    });
});
