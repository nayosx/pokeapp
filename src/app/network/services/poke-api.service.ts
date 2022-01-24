import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  public options: any;
  private path: string = 'pokemon';

  constructor(private http: HttpClient) {
    this.options = { observe: 'response' };
  }

  public retrieve(offset:number = 0, limit:number = 9): Observable<any> {
    return this.http.get<any>(environment.BASE_URL.concat(this.path, `?offset=${offset}&limit=${limit}`), this.options);
  }

  public getByURL(url: string): Observable<any> {
    return this.http.get<any>(url, this.options);
  }

  public get(pokemon: any): Observable<any> {
    return this.http.get<any>(environment.BASE_URL.concat(this.path, '/', `${pokemon}`), this.options);
  }
}
