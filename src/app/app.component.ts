import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteCompComponent } from "./teste-comp/teste-comp.component";
import { title } from 'process';
import {MatCardModule} from '@angular/material/card';
import { Comp2Component } from "./comp2/comp2.component";
/*angular material*/import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
/*angular material*/import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatMenu } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MatButtonModule,
      MatButtonModule,
      MatCardModule,
      MatRadioModule,
      RouterOutlet,
      MatMenuModule,
       TesteCompComponent, 
       MatFormFieldModule,
       MatIconModule,
       MatInputModule,
       MatToolbarModule,
       MatMenu,
       MatGridListModule,
       InicioComponent,
       LoginComponent,
       MenuComponent,
       RodapeComponent,
       Comp2Component]
})
export class AppComponent {
  title = 'projeto-angular';

}



