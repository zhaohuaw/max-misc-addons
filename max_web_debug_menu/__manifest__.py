# -*- coding: utf-8 -*-
{
    'name': "Web Debug Menu",

    'summary': """
        To show debug options on the top right menu.
    """,

    'description': """
        To show debug options on the top right menu.
    """,

    'author': "MAXodoo",
    'website': "http://www.maxodoo.com",
    'category': 'web',
    'version': '10.0.0.1',
    'depends': ['base'],
    'data': [
        'views/max_web_db_name_menu_view.xml',
    ],
    'qweb': [
        "static/src/xml/max_web_db_name_menu_template.xml",
    ],
}
