import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavigationComponent,ContentComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
 }
