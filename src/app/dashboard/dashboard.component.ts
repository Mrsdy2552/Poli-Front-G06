import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { RouterModule, RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent,RouterOutlet, RouterModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
