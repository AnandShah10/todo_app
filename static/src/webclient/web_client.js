/** @odoo-module **/

import { Component, useState, useSubEnv } from "@odoo/owl";
import { Navbar } from "./navbar";
import { Todo } from "../todo/todo";
import { TodoStore } from "../todo/todo_store";

export class WebClient extends Component {
    static template = "todo_app.WebClient";
    static components = { Navbar };

    setup()
    {
         this.apps = [
      { id: "todo", name: "Todo", Component: Todo },
        ];
    this.state = useState({
      currentApp: this.apps[0],
    });
    const todoStore = useState(new TodoStore());
    useSubEnv({ todoStore });
    }
    selectApp(appId)
    {
        const newApp = this.apps.find((app)=>app.id === appId);
        this.state.currentApp = newApp;
    }
}