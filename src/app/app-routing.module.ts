import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PhotographyComponent } from './photography/photography.component';
import { SayhelloComponent } from './sayhello/sayhello.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'photography', component: PhotographyComponent },  
  { path: 'sayhello', component: SayhelloComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
