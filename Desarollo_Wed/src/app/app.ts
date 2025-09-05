// app.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, RouterLink, CommonModule]
})
export class App {
  title = 'educa-union-diversa';
  
  // Variable para el menú móvil
  mobileMenuActive = false;

  // FUNCIONES DEL NAVBAR
  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }

  closeMobileMenu() {
    this.mobileMenuActive = false;
  }
}