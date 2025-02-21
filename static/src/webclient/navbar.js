/** @odoo-module **/

import { Component } from "@odoo/owl";
import { useTodoStore } from "../todo/todo_store";

export class Navbar extends Component{
    static template = 'todo_app.Navbar';
    static props = {
        currentApp : String,
        apps : Array,
        selectApp : Function,
    };
    setup()
    {
        this.todoStore = useTodoStore();
    }
}