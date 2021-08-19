
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './persefone/hero/hero.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./persefone/persefone.module').then(m => m.PersefoneModule), },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
