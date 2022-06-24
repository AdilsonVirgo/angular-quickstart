import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PhotographyComponent } from './photography/photography.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'photography', component: PhotographyComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
