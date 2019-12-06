import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { AngularFireStorageModule } from 'angularfire2/storage';
import { FooterComponent } from './components/footer/footer.component';
import { WaitingComponent } from './components/waiting/waiting.component';

import { CarouselModule } from 'ngx-bootstrap';
import { EditComponent } from './components/edit/edit.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { ArticleService } from './services/article.service';
import { UpdateArticleComponent } from './components/update-article/update-article.component';
import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { ObrasMoiraComponent } from './components/obras-moira/obras-moira.component';
import { ObrasAmigosComponent } from './components/obras-amigos/obras-amigos.component';
import { TodoComponent } from './components/todo/todo.component';
import { ResultViewComponent } from './components/result-view/result-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AdminComponent,
    AboutComponent,
    NotFoundComponent,
    ContactComponent,
    LoginPageComponent,
    FooterComponent,
    WaitingComponent,
    EditComponent,
    NewArticleComponent,
    UpdateArticleComponent,
    ObrasMoiraComponent,
    ObrasAmigosComponent,
    TodoComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'taul-fire'),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireModule,
    FormsModule,
    AngularFireStorageModule,
    CarouselModule.forRoot(),
    HttpClientModule
    
  ],
  providers: [AuthService, ArticleService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
