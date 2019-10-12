import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { fakeBackendProvider } from './_helpers';
import { AppRoutingModule }        from '../app/app-routing.module';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { MoviesComponent } from './movies/movies.component';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

let routes: any = [
    { path: "", component: MoviesComponent },
    { path: "create", component: CreateComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent}
];

@NgModule({
    declarations: [
    AppComponent,
        CreateComponent,
        MoviesComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        AppComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        RatingModule,
        JsonpModule,
        RouterModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
      ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
