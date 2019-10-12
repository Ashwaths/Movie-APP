import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Location } from '@angular/common';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    public movie: any;
    public url: any;
    public result:any;

    public constructor(private http: Http, private location: Location) {
        this.movie = {
            "name": "",
            "genre": "",
            "image": "",
            "formats": {
                "digital": false,
                "bluray": false,
                "dvd": false
            },
            "rating": "",
        };
    }

    public ngOnInit() { }

    public save() {
        if(this.movie.name && this.movie.genre) {
            let headers = new Headers({ "Content-Type": "application/json" });
            let options = new RequestOptions({ "headers": headers });
            this.http.post("http://localhost:4200/movies", JSON.stringify(this.movie), options)
                .subscribe(result => {
                    this.location.back();
                    //console.log(headers);
                });
        }
    }
    onSelectFile(event) { 
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
    
          reader.readAsDataURL(event.target.files[0]); 
    
        //   reader.onload = (event) => { 
        //     this.url = event.target.result;
        //   }
        }
    }

}