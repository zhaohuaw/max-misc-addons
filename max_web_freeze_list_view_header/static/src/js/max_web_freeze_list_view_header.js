;(function ($, window, undefined){
    var one2many_length = $('.o_form_field.o_form_field_one2many').length;
    var scrollArea = $(".o_content")[0];
    if(scrollArea && one2many_length == 0) {
        $('table.o_list_view').each(function () {
            $(this).stickyTableHeaders({scrollableArea: scrollArea});
        });
    }

    $(window).resize(function() {
        $('table.o_list_view').each(function () {
            $(this).stickyTableHeaders({scrollableArea: scrollArea});
        });
    });
})(jQuery,window);
