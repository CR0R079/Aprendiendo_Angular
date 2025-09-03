// app.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, OnDestroy {
  title = 'educa-union-diversica';
  
  // Variables para el carousel
  currentSlideIndex = 0;
  totalSlides = 3;
  autoplayInterval: any;
  
  // Variable para el menú móvil
  mobileMenuActive = false;

  ngOnInit() {
    // Iniciar el autoplay del carousel
    this.startAutoplay();
  }

  ngOnDestroy() {
    // Limpiar el intervalo cuando se destruya el componente
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  // FUNCIONES DEL NAVBAR
  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }

  closeMobileMenu() {
    this.mobileMenuActive = false;
  }

  // FUNCIONES DEL CAROUSEL
  showSlide(index: number) {
    const carousel = document.getElementById('carousel');
    if (carousel) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }
    
    // Actualizar indicadores
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  moveSlide(direction: number) {
    this.currentSlideIndex += direction;
    
    if (this.currentSlideIndex >= this.totalSlides) {
      this.currentSlideIndex = 0;
    } else if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.totalSlides - 1;
    }
    
    this.showSlide(this.currentSlideIndex);
  }

  currentSlide(index: number) {
    this.currentSlideIndex = index - 1;
    this.showSlide(this.currentSlideIndex);
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.moveSlide(1);
    }, 5000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  // Pausar autoplay cuando el usuario interactúa
  onUserInteraction() {
    this.stopAutoplay();
    // Reiniciar después de 10 segundos
    setTimeout(() => {
      this.startAutoplay();
    }, 10000);
  }
}