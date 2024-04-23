import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [RouterOutlet,AppComponent],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {

}
