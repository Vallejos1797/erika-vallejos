import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {isPlatformBrowser, NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterLink,
    NgForOf
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Propuestas que se muestran en la sección de propuestas
  propuestas = [
    { titulo: 'Seguridad Ciudadana', descripcion: 'Fortalecer los cuerpos de seguridad y justicia para combatir la delincuencia organizada.', icono: '🔒' },
    { titulo: 'Educación de Calidad', descripcion: 'Impulsar programas educativos modernos y accesibles.', icono: '📚' },
    { titulo: 'Salud Eficiente', descripcion: 'Garantizar acceso a servicios de salud de calidad y mejorar la infraestructura sanitaria.', icono: '🏥' },
    { titulo: 'Apoyo al Sector Agrícola', descripcion: 'Fomentar la productividad del sector agrícola y apoyar a los pequeños productores.', icono: '🌾' },
    { titulo: 'Lucha contra la Desnutrición Infantil', descripcion: 'Implementar políticas para erradicar la desnutrición crónica infantil.', icono: '🍎' },
    { titulo: 'Generación de Empleo Digno', descripcion: 'Impulsar reformas para crear más y mejores empleos.', icono: '💼' },
  ];

  // Información de contacto del formulario
  contacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


  // ✅ Método que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Verifica si está en el navegador
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.classList.add('hidden');  // Oculta el preloader
        }
      });
    }
  }

  // ✅ Función para enviar el formulario de contacto vía WhatsApp
  enviarFormulario(): void {
    if (this.contacto.nombre && this.contacto.mensaje) {
      const numeroWhatsApp = '593960927932';  // Número de WhatsApp (Ecuador)
      const mensaje = `Hola, soy ${this.contacto.nombre}. ${this.contacto.mensaje}`;
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');  // Abre WhatsApp en una nueva pestaña
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  // ✅ Función para hacer scroll suave a una sección específica
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });  // Scroll suave
    }
  }
}
