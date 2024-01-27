import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  searchResults: any[] = [];
  searchTerms = new Subject<string>();

  constructor(private http: HttpClient) {
    this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.searchMovies(term))
      )
      .subscribe({
        next: (data) => {
          this.searchResults = data.results;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  searchMovies(term: string) {
    const apiKey = 'e1de54df63c942396e0a9eb1af7ff908';
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${term}`;

    return this.http.get<any>(apiUrl);
  }

  onSearchInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.searchTerms.next(inputValue);
    console.log(inputValue);
  }
}
