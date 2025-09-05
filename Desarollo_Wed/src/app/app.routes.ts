import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'inicio', 
    loadComponent: () => import('./pages/inicio/inicio').then(m => m.Inicio) 
  },
  { 
    path: 'mision', 
    loadComponent: () => import('./pages/mision/mision').then(m => m.Mision) 
  },
  { 
    path: 'programas', 
    loadComponent: () => import('./pages/programas/programas').then(m => m.Programas) 
  },
  { 
    path: 'galeria', 
    loadComponent: () => import('./pages/galeria/galeria').then(m => m.Galeria) 
  },
  { 
    path: 'contacto', 
    loadComponent: () => import('./pages/contacto/contacto').then(m => m.Contacto) 
  },
  { 
    path: '', 
    redirectTo: '/inicio', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: '/inicio' 
  }
];