import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RhymeService {
  private apiUrl = 'https://wordsapiv1.p.rapidapi.com/words/{word}/rhymes'; 
  private rapidApiKey = '0442c2037cmsh7298cee3129fa80p12e8a1jsn3991e1bfd900';
  
  constructor(public http: HttpClient) { }

  getRhyme(rhyme: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.rapidApiKey,
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    });

    const url = this.apiUrl.replace('{word}', rhyme);
    return this.http.get(url, { headers });
  }
}
