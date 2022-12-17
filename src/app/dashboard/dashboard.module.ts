import {NgModule} from '@angular/core';
import {DashboardRouteModule} from './dashboard.route.module';
import { DashboardComponent } from './dashboard.component';
import { TodosService } from '../shared/services/todos.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule,
        DashboardRouteModule
    ],
    declarations:[
        DashboardComponent
    ],
    providers:[
        TodosService,
       ]
})
    export class DashboardModule{

    }