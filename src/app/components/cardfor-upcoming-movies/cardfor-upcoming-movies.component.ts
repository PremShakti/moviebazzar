import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardfor-upcoming-movies',
  templateUrl: './cardfor-upcoming-movies.component.html',
  styleUrls: ['./cardfor-upcoming-movies.component.css']
})
export class CardforUpcomingMoviesComponent implements OnInit {
  @Input() cardData: any;
  ngOnInit(): void {
// console.log(this.cardData)
  }
}
