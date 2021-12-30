import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'about', loadChildren: () => import('./about/about.module').then(m=>m.AboutModule),
  canLoad: [AuthGuard],
  data: {preload: true}
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: CustomElementRegistry})
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }