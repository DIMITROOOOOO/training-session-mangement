import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from "./public/accueil/accueil.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestion_desSession';
}
