import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DatePipe, DecimalPipe, NgForOf} from '@angular/common';
import {TemperaturePipe} from './temperature.pipe';
import {SortPipe} from './sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, NgForOf, DecimalPipe, TemperaturePipe, SortPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PipesDeepDive';

  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };
  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,]
  ;

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
    // const newTemps = [...this.historicTemperatures];
    // newTemps[index] = 18;
    // this.historicTemperatures = newTemps;
  }
}
