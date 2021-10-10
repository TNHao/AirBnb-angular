import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { AdminGuard } from './core/guard/admin.guard';
import { LogInComponent } from './shared/components/log-in/log-in.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';

const routes: Routes = [
  { path: "", loadChildren: () => ClientModule }, 
  { path: "admin", loadChildren: () => AdminModule, canActivate: [AdminGuard] }, 
  { path: "login", component: LogInComponent }, 
  { path: "signup", component: SignUpComponent }, 
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
