import {Injectable} from '@angular/core';
import {HttpService} from '../../../../core/services/http/http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpService) {
  }

  /* Get City Weather */
  getWeather(url): Observable<any> {
    return this.http.get(url);
  }
}
