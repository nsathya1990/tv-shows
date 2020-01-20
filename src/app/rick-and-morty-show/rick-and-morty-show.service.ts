import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyShowService {

  constructor(private _httpClient: HttpClient) { }

  getRickAndMortyCharactersList(nexturl?: string): Observable<any> {
    const url = nexturl ? nexturl : environment.apiUrl;
    return this._httpClient.get<any>(url).pipe(
      retry(2)
    );
  }
}
