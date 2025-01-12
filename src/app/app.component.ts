import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterLink,
    NgForOf
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'erikaVallejos';

  propuestas = [
    { titulo: 'Educación de calidad', descripcion: 'Impulsar programas educativos inclusivos y de calidad.' },
    { titulo: 'Salud para todos', descripcion: 'Garantizar el acceso a servicios de salud eficientes.' },
    { titulo: 'Empleo digno', descripcion: 'Fomentar la creación de empleo digno y bien remunerado.' }
  ];

  biografia = 'Soy una líder comprometida con el bienestar de nuestra comunidad y con experiencia en gestión pública.';

  contacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };


  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  enviarFormulario(): void {
    if (this.contacto.nombre && this.contacto.mensaje) {
      const numeroWhatsApp = '593986837291'; // 🔥 Número de WhatsApp con código de país (ejemplo: 593 para Ecuador)
      const mensaje = `Hola, soy ${this.contacto.nombre}. ${this.contacto.mensaje}`;
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

      window.open(url, '_blank'); // 🔥 Abre WhatsApp en una nueva pestaña
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

}
