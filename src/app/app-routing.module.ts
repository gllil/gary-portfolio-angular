import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: '', component: AboutMePageComponent, data: {title: "About Gary Llil"} },
{
  path: '**', component: PageNotFoundComponent, data: {title: "404 Page Not Found"}
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [AboutMePageComponent, PageNotFoundComponent]
