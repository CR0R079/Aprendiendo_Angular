# Educa Unión Diversa

## 📚 Descripción del Proyecto

**Educa Unión Diversa** es una plataforma web educativa inclusiva diseñada específicamente para colegios rurales. El proyecto tiene como objetivo democratizar la educación y proporcionar herramientas de aprendizaje accesibles que se adapten a las diversas necesidades de estudiantes en entornos rurales, promoviendo la inclusión educativa y reduciendo las brechas de aprendizaje.

## 🎯 Objetivos

- **Inclusión Educativa**: Crear un entorno de aprendizaje que se adapte a diferentes estilos y necesidades educativas
- **Accesibilidad Rural**: Proporcionar contenido educativo optimizado para conexiones limitadas y recursos tecnológicos básicos
- **Diversidad de Aprendizaje**: Ofrecer múltiples formatos de contenido para atender diferentes tipos de inteligencias y capacidades
- **Interfaz Amigable**: Desarrollar una experiencia de usuario intuitiva para estudiantes y educadores

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos responsivos y diseño inclusivo
- **JavaScript**: Funcionalidades interactivas del lado del cliente
- **Angular**: Framework principal para el desarrollo de la aplicación web

### Características Técnicas
- **Diseño Responsive**: Adaptable a diferentes dispositivos y tamaños de pantalla
- **Accesibilidad Web**: Cumplimiento de estándares WCAG para usuarios con discapacidades
- **Optimización para Conectividad Limitada**: Código optimizado para entornos con internet limitado

## 🚀 Características Principales

### Para Estudiantes
- **Contenido Multimedia Inclusivo**: Videos, audios, texto e imágenes adaptados
- **Interfaz Intuitiva**: Navegación simple y clara
- **Modo Offline**: Funcionalidades básicas disponibles sin conexión
- **Personalización**: Ajustes de accesibilidad (tamaño de fuente, contraste, etc.)

### Para Educadores
- **Panel de Gestión**: Herramientas para crear y administrar contenido
- **Seguimiento de Progreso**: Monitoreo del avance de los estudiantes
- **Recursos Didácticos**: Biblioteca de materiales educativos inclusivos
- **Comunicación**: Sistema de mensajería entre docentes, estudiantes y familias

### Características de Inclusión
- **Soporte Multilenguaje**: Adaptación a idiomas locales
- **Accesibilidad Visual**: Alto contraste, lectores de pantalla compatibles
- **Accesibilidad Auditiva**: Subtítulos y transcripciones
- **Accesibilidad Motriz**: Navegación por teclado y comandos de voz


## 🔧 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn
- Angular CLI

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/usuario/educa-union-diversa.git
   cd educa-union-diversa
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar entorno**
   ```bash
   cp src/environments/environment.example.ts src/environments/environment.ts
   # Editar environment.ts con la configuración local
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   ng serve
   ```

5. **Acceder a la aplicación**
   ```
   http://localhost:4200
   ```

## 🎨 Principios de Diseño UX/UI

### Diseño Centrado en el Usuario
- **Investigación de Usuario**: Basado en necesidades reales de colegios rurales
- **Pruebas de Usabilidad**: Testeo continuo con usuarios finales
- **Iteración Constante**: Mejoras basadas en feedback de la comunidad educativa

### Principios de Accesibilidad
- **Contraste Adecuado**: Ratio mínimo 4.5:1 para texto normal
- **Navegación por Teclado**: Todos los elementos interactivos accesibles
- **Lectores de Pantalla**: Compatibilidad con tecnologías asistivas
- **Texto Alternativo**: Descripción de todas las imágenes

## 🧪 Testing

### Tipos de Pruebas
- **Pruebas Unitarias**: Jest + Angular Testing Utilities
- **Pruebas de Integración**: Cypress
- **Pruebas de Accesibilidad**: axe-core
- **Pruebas de Performance**: Lighthouse

```bash
# Ejecutar pruebas unitarias
npm run test

# Ejecutar pruebas e2e
npm run e2e

# Análisis de accesibilidad
npm run accessibility-test
```

## 📱 Responsive Design

La aplicación está optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px  
- **Desktop**: 1024px+
- **Dispositivos de baja resolución**: Optimización especial para hardware limitado

## 🌐 Consideraciones para Entornos Rurales

### Conectividad
- **Modo Offline**: Funcionalidades esenciales sin internet
- **Sincronización Inteligente**: Actualización eficiente cuando hay conexión
- **Compresión de Assets**: Reducción del peso de imágenes y recursos

### Hardware
- **Compatibilidad Amplia**: Soporte para navegadores y dispositivos antiguos
- **Optimización de Memoria**: Uso eficiente de recursos del sistema
- **Carga Progresiva**: Lazy loading de contenido no crítico

## 🤝 Contribución

### Guías para Contribuidores
1. Fork del repositorio
2. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -am 'Agregar nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

### Estándares de Código
- **ESLint**: Configuración estricta para consistencia
- **Prettier**: Formateo automático de código
- **Conventional Commits**: Formato estándar para mensajes de commit

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 👥 Equipo de Desarrollo

**Curso de Interacción Humano-Computadora (IHC)**
- Institución: [Nombre de la Universidad/Institución]
- Semestre: [Semestre/Año]
- Instructor: [Nombre del Profesor]

## 📞 Contacto y Soporte

- **Email**: soporte@educauniondiversa.edu
- **Documentación**: [Link a documentación técnica]
- **Issues**: [Link al sistema de tickets]
- **Comunidad**: [Link al foro o Discord]

## 🎖️ Reconocimientos

Agradecimientos especiales a:
- Comunidades educativas rurales que inspiraron este proyecto
- Docentes y estudiantes que participaron en las pruebas de usuario
- Organizaciones que promueven la inclusión educativa

## 📈 Roadmap

### Versión 1.0 (Actual)
- ✅ Interfaz básica inclusiva
- ✅ Sistema de navegación accesible
- ✅ Contenido multimedia adaptativo

### Versión 1.1 (Próximo)
- 🔲 Integración con LMS populares
- 🔲 Sistema de gamificación inclusivo
- 🔲 App móvil nativa

### Versión 2.0 (Futuro)
- 🔲 Inteligencia artificial para personalización
- 🔲 Realidad aumentada educativa
- 🔲 Blockchain para certificaciones

---

*Este proyecto es parte del compromiso con la educación inclusiva y el cierre de brechas digitales en entornos rurales.*