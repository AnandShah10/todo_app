from odoo import http
from odoo.http import request, route

class TodoAppPage(http.Controller):
    @http.route(['/todoapp'], type='http', auth='public')
    def show_page(self):
        """
        Renders the oxp demo page
        """
        return request.render('todo_app.page')