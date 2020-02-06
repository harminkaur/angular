import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';
import { AppNavigation } from './navigation/navigation.component';
import { AppBody } from './body/body.component';
import { AppFooter } from './footer/footer.component';
//import { RouterModule, Routes } from '@angular/router';
// import { AppMovies } from './movies/movies.component';

// const appRoutes:Routes = [
//   {
//     path: '',
//     component: AppLogin
//   },
//   {
//     path: 'movies',
//     component: AppMovies
//   }
// ]
@NgModule({
  declarations: [
    AppComponent, AppHeader, AppNavigation, AppBody, AppFooter
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

