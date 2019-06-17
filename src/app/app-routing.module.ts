import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AboutComponent } from './components/about/about.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { EditComponent } from './components/edit/edit.component';
import { NewArticleComponent } from './components/new-article/new-article.component';


const routes: Routes = [
    {path: '', component: HomeComponent  },
    {path: 'login', component: LoginPageComponent},
    {path: 'private', canActivate:[AuthGuardService], component: AdminComponent },
    { path: 'new-article', canActivate:[AuthGuardService] , component: NewArticleComponent },
    { path: 'update-article/:id', canActivate:[AuthGuardService] , component: EditComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'wait', component: WaitingComponent },
    { path: 'edit', canActivate:[AuthGuardService], component: EditComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})

export class AppRoutingModule { }