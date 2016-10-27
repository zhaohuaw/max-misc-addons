odoo.define('max_web_draggable_dialog.max_web_draggable_dialog', function (require) {
'use strict';

    var Dialog = require('web.Dialog');

    Dialog.include({
        open: function () {
            var self = this;
            this._super.apply(this, arguments);

            // To make export data dialog draggable
            self.$modal.modal('show');

            $(".modal.in").draggable({
                handle: ".modal-header"
            });
            return this;
        },
    });
});
