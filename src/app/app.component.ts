import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherCardComponent } from '../components/weather-card/weather-card.component';
import { HeaderComponent } from './header/header.component';
import {AngularFireModule} from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
// import { Environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,AngularFireModule,WeatherCardComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
}
