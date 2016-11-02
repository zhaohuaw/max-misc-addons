var freeze_list_view_header_window_resize_event_is_bound = false;

function freeze_list_view_header(){
    var one2many_length = $('.o_form_field.o_form_field_one2many').length;
    var many2many_length = $('.o_form_field.o_form_field_many2many').length;
    var scrollArea = $(".o_content")[0];

    if(scrollArea && one2many_length == 0 && many2many_length == 0) {
        $('table.o_list_view').each(function () {
            $(this).stickyTableHeaders({scrollableArea: scrollArea});
        });
        if(!freeze_list_view_header_window_resize_event_is_bound) {
            $(window).resize(function () {
                $('table.o_list_view').each(function () {
                    $(this).stickyTableHeaders({scrollableArea: scrollArea});
                });
            });
            freeze_list_view_header_window_resize_event_is_bound = true;
        }
    }
}

freeze_list_view_header();