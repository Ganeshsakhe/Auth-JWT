import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login.component';
import { LoginRouteModules } from './login.route.module';
 
@NgModule({
  declarations:[
   LoginComponent
  ],
  imports:[
   LoginRouteModules,
   FormsModule
  ]
})
export class LoginModule{}