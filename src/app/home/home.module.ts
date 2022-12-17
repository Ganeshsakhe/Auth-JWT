import {NgModule} from '@angular/core';
import { HomeRouterModule } from './home.route.module';
import { HomeComponent } from './home.component';
@NgModule({
    imports:[HomeRouterModule],
    declarations:[
        HomeComponent
    ]
})
export class HomeModule {}