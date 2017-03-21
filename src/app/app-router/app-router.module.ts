import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {NotfoundComponent} from "../notfound/notfound.component";
import {AppComponent} from "../app.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
    // {path:'', redirectTo:'/', pathMatch:'full'},
    {path:'', component: AppComponent},
    {path: '**', component: NotfoundComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
}) export class AppRouterModule{}
