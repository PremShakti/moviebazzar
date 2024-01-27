import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upcomingmovies',
  templateUrl: './upcomingmovies.component.html',
  styleUrls: ['./upcomingmovies.component.css'],
})
export class UpcomingmoviesComponent implements OnInit {
  upcomingMovies: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=e1de54df63c942396e0a9eb1af7ff908'
      )
      .subscribe({
        next: (data) => {
          this.upcomingMovies = data.results.slice(0, 12);
          // console.log(data.results.length)
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
