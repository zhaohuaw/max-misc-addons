function freeze_list_view_header(){
    var one2many_length = $('.o_form_field.o_form_field_one2many').length;
    var many2many_length = $('.o_form_field.o_form_field_many2many').length;
    var scrollArea = $(".o_content")[0];

    if(scrollArea && one2many_length == 0 && many2many_length == 0) {
        function do_freeze (){
            $('table.o_list_view').each(function () {
                $(this).stickyTableHeaders({scrollableArea: scrollArea});
            });
        }
        do_freeze();
        $(window).unbind('resize', do_freeze).bind('resize', do_freeze);
    }
}

freeze_list_view_header();