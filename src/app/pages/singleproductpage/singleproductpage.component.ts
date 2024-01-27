import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleproductpage',
  templateUrl: './singleproductpage.component.html',
  styleUrls: ['./singleproductpage.component.css']
})
export class SingleproductpageComponent implements OnInit {
  arrdata:any
  constructor(private route: ActivatedRoute,private http: HttpClient){}

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      this.http
      .get<any>(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e1de54df63c942396e0a9eb1af7ff908`
      )
      .subscribe({
        next: (data) => {
          this.arrdata=data ;
         console.log(this.arrdata)
        },
        error: (error) => {
          console.log(error);
        },
      });

    });


    
  }

  
}
