import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from "../app.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-teste-comp',
    standalone: true,
    templateUrl: './teste-comp.component.html',
    styleUrl: './teste-comp.component.css',
    imports: [AppComponent,RouterOutlet]
})
export class TesteCompComponent {

}
