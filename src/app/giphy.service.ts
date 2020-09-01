import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  gifs = new BehaviorSubject<any>([]);
  api_key= ''
  constructor(private http: HttpClient) { }

  getTrendingGifs(){
    return this.http.get('http://api.giphy.com/v1/gifs/trending?api_key=Hxk7c9LyFDXCdPca7pnj06yNOZrtETdi&limit=24')
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    });
  }


  searchGifs(gifName: string){
    return this.http.get('http://api.giphy.com/v1/gifs/search?q='+gifName+'&api_key=Hxk7c9LyFDXCdPca7pnj06yNOZrtETdi&limit=24')
    .subscribe((response: any) => {
      this.gifs.next(response.data);
      console.log('data', response);
    });
  }
  getGifs(){
    return this.gifs.asObservable();
  }
}