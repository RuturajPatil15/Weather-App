import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
  providers: [WeatherService],
})
export class WeatherCardComponent implements OnInit {

  cityName = '';
  Data = {
    temp: "",
    temp1: "",
    temp2: "",
    feelsLike: "",
    pressure: "",
    humidity: "",
    city: "",
    main: "",
    imageUrl: ""
  }

  
  constructor(private readonly weatherService: WeatherService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    if (this.cityName) {
      this.weatherService.fetchData(this.cityName).subscribe({
        next: (data: any) => {
          this.Data.temp = data.data[0].temp;
          this.Data.temp1 = data.data[1].temp;
          this.Data.temp2 = data.data[2].temp;
          this.Data.city = data.city_name;
          console.log(data)
        },
        error: (err) => {
          console.log("Error fetching weather data", err);
        },
      });
    }
  }

}
