import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home-service/home.service';

@Component({
  selector: 'bizbo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  temperature: string;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getWeather();
  }

  /* Get Applicant Requests */
  getWeather(): void {
    const url = 'http://api.weatherapi.com/v1/current.json?key=c0d42e57ad7f45bcbfd184444200911&q=Cairo';
    this.homeService.getWeather(url).subscribe(response => {
      if (response) {
        this.temperature = response.current.temp_c;
      }
    });
  }

}
