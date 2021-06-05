import { LoginPage } from './pages/login/login.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksPage } from './tasks/tasks.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuComponent } from './components/side.menu/side.menu.component';
import { ApiService } from './services/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddTaskPage } from './pages/add.task.page.ts/add.task.page';
import { FormsModule } from '@angular/forms';
import { ViewTaskPage } from './pages/view.task.page.ts/view.task.page';
import { UpdateTaskPage } from './pages/update.task.page.ts/update.task.page';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './interceptors/auth.token.interceptor';

@NgModule({
  declarations: [
    //Components
    AppComponent,
    NavbarComponent,
    SideMenuComponent,

    //Pages
    AddTaskPage,
    ViewTaskPage,
    UpdateTaskPage,
    LoginPage,
    TasksPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ApiService, AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
