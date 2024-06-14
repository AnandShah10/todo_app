/**@odoo-module**/
import { Component } from "@odoo/owl";
import { useAutofocus } from "../utils";
import { TodoItem } from "./todo_item";
import { useTodoStore } from "./todo_store";


export class TodoList extends Component
{
    static template = "todo_app.TodoList";
    static components = { TodoItem };
    static props = { list : Object };

    setup()
    {
        this.store = useTodoStore();
        useAutofocus("input");
    }
    addTodo(ev)
    {
        if(ev.keyCode === 13 && ev.target.value != '')
        {
            this.store.addTodo(this.props.list.id,ev.target.value);
            ev.target.value = '';
        }
    }
    onRemove() {
        const listId = this.props.list.id;
        this.store.removeList(listId);
  }
}