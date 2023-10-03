import { Component } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';
@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent {

  constructor(private wikipedia: WikipediaService){}

  onTerm(term: string){
    const results = this.wikipedia.search(term);
    console.log(results);
  }
}
