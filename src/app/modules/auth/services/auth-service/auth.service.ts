import {Injectable} from '@angular/core';
import {HttpService} from '../../../../core/services/http/http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) {
  }

  /* Log User In */
  login(body): Observable<object> {
    return this.http.post('api/login', body);
  }
}
