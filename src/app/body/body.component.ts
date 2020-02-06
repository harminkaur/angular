import {Component, OnInit} from '@angular/core';
import { MovieService } from "./body.service";
import { IMovie } from './body';

@Component ({
    selector : 'app-body',
    templateUrl : `body.component.html`,
    styleUrls: [ './body.component.css' ]
                
})

export class AppBody {
   
    showLogin : boolean = true;
    username : string = '';
    password : string = '';
    imageWidth : number = 200;
    // imageMargin : number ;
    imageAwardWidth : number = 50;
    // imageAwardMargin : number;

    movies : IMovie[] = [];

    toggleLogin() : void {
        if (this.username == 'Harmin' && this.password == 'harmin123') {
            this.showLogin = !this.showLogin;
    }
        

        else {alert("Invalid username/password")};


        console.log('Value of showing property:' + this.showLogin)};

        constructor ( private movieService: MovieService) {

        }

        ngOnInit() : void {
            this.movies = this.movieService.getMovie();
        
    }
}