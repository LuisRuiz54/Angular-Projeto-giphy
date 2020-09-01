import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../giphy.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gifServices: GiphyService ) { }

  ngOnInit(): void {
  }

  search(searchterm: string){
    if (searchterm !== '') {
      this.gifServices.searchGifs(searchterm);
      
  }

  }
}

