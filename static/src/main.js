/** @odoo-module */

import { mount , whenReady } from "@odoo/owl";
import { WebClient } from './webclient/web_client';
import { templates } from '@web/core/assets';

whenReady(()=>{
    mount(WebClient,document.body,{
    templates,
    dev:true,
    name : "Todo App : Web Client",
    });
});