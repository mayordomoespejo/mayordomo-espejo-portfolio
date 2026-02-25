/**
 * Translated content for each project (es/en). Merged with project base data in components.
 */

import type { Locale } from "../translations"

export interface ProjectTranslation {
  title: string
  subtitle: string
  challenge: string
  myRole: string
  features: string[]
  results: string[]
  imageAlts: string[]
}

type ProjectTranslations = Record<string, ProjectTranslation>

export const projectTranslations: Record<Locale, ProjectTranslations> = {
  es: {
    "turbowash-terminal": {
      title: "Turbowash Terminal",
      subtitle: "Interfaz de pago para kioscos de lavado de coches",
      challenge:
        "Turbowash necesitaba una interfaz de pago para kioscos en exterior: legible a pleno sol, soporte de tarjeta y efectivo, y comunicación con el hardware de lavado mediante señales de pulso.",
      myRole:
        "Desarrollo frontend en React Native. Desafío principal: integrar la comunicación en tiempo real por pulsos para inicio, pausa y fin del lavado.",
      features: [
        "Pago con tarjeta y efectivo",
        "Modos de lavado por tiempo y por euros",
        "Comunicación por pulsos en tiempo real con el hardware",
        "UI optimizada para exterior (alto contraste, objetivos táctiles grandes)",
      ],
      results: [
        "Desplegado en más de 5 ubicaciones procesando transacciones reales a diario",
        "Interfaz que no requiere formación: los clientes la usan sin ayuda",
      ],
      imageAlts: [
        "Pantalla principal del terminal Turbowash con precios de pago por uso",
        "Lavado en curso con temporizador",
        "Lavado activo con tiempo y cantidad",
        "Precios para socios con créditos bonus",
        "Pantalla de selección de cupones",
      ],
    },
    "turbowash-portal": {
      title: "Turbowash Área Cliente",
      subtitle: "Panel del cliente para gestión de vehículos y servicios",
      challenge:
        "Los clientes de Turbowash necesitaban gestionar su cuenta en línea: historial de lavados, vehículos, facturas y cupones de fidelidad. Aspecto premium y navegación sencilla.",
      myRole:
        "Desarrollo frontend. Secciones clave: perfil de usuario, gestión de vehículos con selector de tipo/color, historial de facturas y sistema de cupones.",
      features: [
        "Gestión de vehículos con selector visual de tipo y color",
        "Historial de servicios con detalle de lavados",
        "Descarga de facturas y gestión de facturación",
        "Programa de fidelidad con canje de cupones",
      ],
      results: [
        "Panel claro e intuitivo para los clientes de Turbowash",
        "Menos consultas de soporte sobre facturación",
      ],
      imageAlts: [
        "Panel de Turbowash con código QR e historial de servicios",
        "Lista de cupones de fidelidad",
        "Pantalla de gestión de vehículos",
      ],
    },
    wetour: {
      title: "Wetour",
      subtitle: "Plataforma comunitaria de la red de fitness líder en España",
      challenge:
        "Wezone, una red de fitness con 11 centros y más de 15.000 socios, necesitaba una plataforma para unificar la comunidad: descubrir eventos, conectar con centros y participar en el contenido.",
      myRole:
        "Desarrollo frontend. Investigación UX y construcción en producción con Next.js (prioridad SEO).",
      features: [
        "Directorio de más de 300 centros deportivos",
        "Más de 800 eventos mensuales con inscripción",
        "Sistema de gamificación (retos, pasaporte WZN)",
        "Integración de pago para suscripciones a eventos",
        "Más de 1.200 publicaciones de la comunidad",
      ],
      results: [
        "Plataforma en marcha con crecimiento orgánico gracias a una arquitectura orientada al SEO",
        "Nueva fuente de ingresos mediante inscripciones de pago a eventos",
      ],
      imageAlts: [
        "Feed de la comunidad WeTour con filtros y publicaciones",
        "Página de detalle de gimnasio Wezone Plaza Castilla",
        "Perfil de usuario WeTour con insignias y logros",
        "Listado de eventos en móvil",
        "Vista de mapa móvil con ubicación de gimnasios",
        "Detalle de gimnasio en móvil con reseñas",
      ],
    },
    "goiko-ordering": {
      title: "Goiko Ordering",
      subtitle: "Plataforma eCommerce para la cadena de hamburguesas icónica en España",
      challenge:
        "Goiko, una de las cadenas de hamburguesas más reconocidas en España con más de 100 locales, necesitaba una plataforma de pedidos online a medida. La solución debía gestionar entrega y recogida, integrar múltiples servicios externos y ofrecer una experiencia que reflejara su marca.",
      myRole:
        "Responsable del desarrollo frontend de toda la plataforma eCommerce. En colaboración con el equipo de backend, construí una aplicación rápida y responsive que gestiona pedidos reales en todos sus locales.",
      features: [
        "Asignación de restaurante por geolocalización para entrega y recogida",
        "Autenticación sin contraseña por enlace mágico por email",
        "Seguimiento en tiempo real con ubicación del repartidor en Google Maps",
        "Sincronización automática del menú con Deliverect en todos los locales",
        "Integración Paycomet para pagos con tarjeta y tokenización",
        "Pedidos programados según capacidad de cocina",
        "Upselling en carrito y checkout",
        "Validación de cupones integrada con la plataforma de BI de Goiko",
      ],
      results: [
        "Plataforma en producción con pedidos reales en más de 100 locales",
        "Integración con sistemas TPV existentes vía Deliverect",
        "Menor dependencia de apps de reparto externas",
        "Seguimiento de conversión integrado con business intelligence",
      ],
      imageAlts: [
        "Modal de producto Goiko con opciones de personalización de hamburguesa",
        "Checkout escritorio con resumen del pedido",
        "Menú móvil con combos y categorías de hamburguesas",
        "Carrito móvil con productos y total",
        "Checkout móvil con datos personales y recogida",
      ],
    },
    "turbowash-admin": {
      title: "Turbowash Admin",
      subtitle: "Panel interno para ubicaciones, precios y operaciones",
      challenge:
        "Turbowash necesitaba una herramienta interna para que el equipo gestionara ubicaciones, configuraciones de lavado, precios y datos operativos sin depender de desarrollo en cada cambio.",
      myRole:
        "Desarrollo frontend del panel SPA: tablas de datos con filtros y paginación, formularios con validación (Formik/Yup) e integración con la API existente.",
      features: [
        "Gestión de ubicaciones y terminales",
        "Precios y configuración de lavados",
        "Tablas con ordenación, filtros y paginación",
        "Flujos de formularios con validación y manejo de errores",
      ],
      results: [
        "El equipo operativo puede actualizar configuración y consultar datos de forma autónoma",
        "Una sola SPA en React alineada con el resto del stack front de Turbowash",
      ],
      imageAlts: ["Turbowash Admin — placeholder para captura"],
    },
    "goiko-customer-area": {
      title: "Goiko Área Cliente",
      subtitle: "Cuenta, pedidos y fidelidad para clientes de Goiko",
      challenge:
        "Goiko necesitaba un área de cliente donde los usuarios gestionaran su perfil, historial de pedidos, direcciones guardadas y beneficios de fidelidad, con una experiencia coherente en todos los dispositivos.",
      myRole:
        "Desarrollo frontend: perfil y direcciones con Google Maps, historial de pedidos, integración con Firebase Auth y códigos QR / fidelidad.",
      features: [
        "Gestión de perfil y direcciones con Google Maps",
        "Historial de pedidos y flujo de repetir pedido",
        "Firebase Authentication y reCAPTCHA opcional",
        "Códigos QR y sección de fidelidad",
      ],
      results: [
        "Área de cliente unificada que acompaña al flujo principal de pedidos de Goiko",
        "Reutilización de direcciones y preferencias para un checkout más rápido",
      ],
      imageAlts: ["Goiko Área Cliente — placeholder para captura"],
    },
    "goiko-invoicing": {
      title: "Goiko Facturación",
      subtitle: "Gestión de facturas y facturación para franquiciados Goiko",
      challenge:
        "Los franquiciados necesitaban una interfaz dedicada para consultar y gestionar facturas y datos de facturación, con una estructura clara y opciones de exportación.",
      myRole:
        "Desarrollo frontend con Vue 3 y Pinia: listado de facturas, filtros e integración con la API de facturación; UI con Naive UI para consistencia.",
      features: [
        "Listado de facturas con búsqueda y filtros",
        "Vistas de facturación y estado de pago",
        "Vue 3 Composition API y Pinia para estado",
        "Set de componentes Naive UI",
      ],
      results: [
        "Los franquiciados pueden acceder a la facturación sin pasar por la app principal de pedidos",
        "UX alineada con otras herramientas internas de Goiko",
      ],
      imageAlts: ["Goiko Facturación — placeholder para captura"],
    },
    "goiko-online-menu": {
      title: "Goiko Menú Online",
      subtitle: "Menú digital y navegación de productos para Goiko",
      challenge:
        "Goiko necesitaba una experiencia de menú digital independiente para uso en tienda o enlace compartido: navegable, con búsqueda y coherente con la marca de pedidos.",
      myRole:
        "Desarrollo frontend: estructura del menú, búsqueda y filtros, imágenes con lazy loading e i18n; analytics con GTM.",
      features: [
        "Navegación completa del menú con categorías y búsqueda",
        "Detalle de producto e información nutricional",
        "i18n y maquetación responsive",
        "Soporte de código QR para acceso en tienda",
      ],
      results: [
        "Menú independiente utilizable desde QR o enlace directo",
        "Datos de producto y marca compartidos con la app principal de pedidos",
      ],
      imageAlts: ["Goiko Menú Online — placeholder para captura"],
    },
    "goiko-table-ordering": {
      title: "Goiko Pedidos en Mesa",
      subtitle: "Pedidos desde la mesa en restaurante",
      challenge:
        "Goiko quería un flujo sencillo para que los clientes pidieran desde la mesa en una app dedicada: mínimos pasos y feedback claro para cocina.",
      myRole:
        "Desarrollo frontend: flujo de pedido en mesa, validación de formularios e integración con el backend de pedidos; GTM para analytics.",
      features: [
        "Flujo de pedido por mesa",
        "Selección de menú y carrito con validación",
        "Confirmación de pedido y estado",
        "Integración de analytics (GTM)",
      ],
      results: [
        "Pedidos en restaurante más rápidos sin depender de dispositivos del personal",
        "Experiencia coherente con el resto de productos digitales de Goiko",
      ],
      imageAlts: ["Goiko Pedidos en Mesa — placeholder para captura"],
    },
    "aee-corporate-web": {
      title: "AEE Corporate Web",
      subtitle: "Web corporativa con contenido desde CMS e i18n",
      challenge:
        "AEE necesitaba una web corporativa moderna con contenido gestionado por CMS (Strapi), soporte multiidioma y una estructura escalable para nuevas secciones y campañas.",
      myRole:
        "Desarrollo frontend con Next.js: renderizado de bloques Strapi, i18n (i18next), maquetación responsive y carruseles/secciones para campañas.",
      features: [
        "Páginas dinámicas con Strapi Blocks renderer",
        "Multiidioma (i18next) y formato de fechas",
        "Maquetación responsive y optimización de imágenes",
        "Carruseles y secciones dinámicas",
      ],
      results: [
        "El equipo de marketing puede actualizar contenido sin tocar código",
        "Estructura SEO-friendly y marca consistente",
      ],
      imageAlts: ["AEE Corporate Web — placeholder para captura"],
    },
    "guido-portfolio": {
      title: "Guido Portfolio",
      subtitle: "Sitio portfolio personal con Radix UI y Framer Motion",
      challenge:
        "Se necesitaba un portfolio personal con identidad propia, accesible, animaciones suaves, formularios y una presentación clara de proyectos y habilidades.",
      myRole:
        "Desarrollo frontend: layout, componentes con Radix UI, animaciones con Framer Motion, validación de formularios con Zod/React Hook Form y diseño responsive.",
      features: [
        "Secciones de proyectos y experiencia con motion",
        "Formulario de contacto con validación",
        "Soporte de tema y maquetación responsive",
        "Recharts para visualización de datos donde aplica",
      ],
      results: [
        "Portfolio pulido con buena UX y accesibilidad",
        "Patrones reutilizables para futuros proyectos",
      ],
      imageAlts: ["Guido Portfolio — placeholder para captura"],
    },
    "project-v-libraries": {
      title: "Proyecto V — Librerías Front",
      subtitle: "Monorepo de UI compartida y plantilla cliente para el ecosistema de producto",
      challenge:
        "Proyecto V necesitaba una base frontend compartida: librería de UI con tokens y Storybook, más una plantilla cliente (Next.js) que la consumiera, para mantener varios productos consistentes y mantenibles.",
      myRole:
        "Contribución al monorepo: paquete UI con primitivos y tokens, documentación en Storybook y client-template-web consumiendo la librería; changesets para versionado.",
      features: [
        "Librería UI con tokens de diseño y variantes",
        "Storybook para documentación de componentes",
        "Plantilla Next.js cliente que consume la librería",
        "Changesets y scripts de workspaces",
      ],
      results: [
        "Una única fuente de verdad para la UI en los proyectos cliente",
        "Desarrollo de features más rápido con componentes documentados",
      ],
      imageAlts: ["Proyecto V Librerías — placeholder para captura"],
    },
    "pulse-video-manager": {
      title: "Pulse Video Manager",
      subtitle: "Biblioteca de vídeos, listas de reproducción y programación diaria de entrenamientos",
      challenge:
        "Un equipo de fitness/contenidos necesitaba una app para gestionar una biblioteca de vídeos, organizar listas de reproducción, etiquetar contenido y programar los entrenamientos \"de hoy\", con una UX clara y orden por drag-and-drop.",
      myRole:
        "Desarrollo frontend: CRUD de vídeos y listas, ordenación con drag-and-drop (FormKit), gestión de etiquetas, vista Hoy e integración de reproductor (Media Chrome / Castable).",
      features: [
        "Biblioteca de vídeos con subida, metadatos y etiquetas",
        "Listas de reproducción con reordenación por arrastre",
        "Página Hoy para entrenamientos programados",
        "Auth y layout responsive con sidebar/nav",
      ],
      results: [
        "El equipo de contenidos puede mantener listas y programación sin intervención de desarrollo",
        "Experiencia de reproducción y programación consistente",
      ],
      imageAlts: ["Pulse Video Manager — placeholder para captura"],
    },
    "time-tracking-billing": {
      title: "Time Tracking — Facturación y Licencias",
      subtitle: "Facturación, licencias y gestión de clientes del producto de control de tiempo",
      challenge:
        "El producto de control de tiempo necesitaba una app de administración para facturación, gestión de licencias y datos de clientes, con auth segura y una visión clara para los gestores de cuenta.",
      myRole:
        "Desarrollo frontend: auth (Firebase, Google OAuth), gestión de clientes y licencias, vistas de facturación e integración con la API backend.",
      features: [
        "Google OAuth y Firebase para autenticación",
        "Gestión de clientes y licencias",
        "Vistas de facturación y suscripciones",
        "Búsqueda, filtros y tablas responsive",
      ],
      results: [
        "Los gestores de cuenta pueden manejar licencias y facturación en un solo lugar",
        "Acceso seguro y UX consistente con la app de workspace",
      ],
      imageAlts: ["Time Tracking Facturación — placeholder para captura"],
    },
    "time-tracking-workspace": {
      title: "Time Tracking — Workspace",
      subtitle: "Registro de tiempo, proyectos y facturación para equipos",
      challenge:
        "Los usuarios necesitaban un workspace para registrar tiempo, gestionar proyectos y clientes, y generar o consultar facturas, con rangos de fechas, informes y navegación sencilla.",
      myRole:
        "Desarrollo frontend: formularios de registro de tiempo, gestión de proyectos y clientes, vistas de facturas e historial con selector de rango de fechas.",
      features: [
        "Registro de tiempo e historial con selector de rango de fechas",
        "Gestión de proyectos y clientes",
        "Gestión y generación de facturas",
        "i18n y maquetación responsive",
      ],
      results: [
        "Los equipos pueden registrar tiempo y gestionar proyectos en una sola app",
        "Alineado con la app de facturación para una suite de producto completa",
      ],
      imageAlts: ["Time Tracking Workspace — placeholder para captura"],
    },
    wayvo: {
      title: "Wayvo",
      subtitle: "Planificación de viajes con IA e itinerarios en móvil",
      challenge:
        "Wayvo necesitaba una app móvil para que los viajeros planificaran viajes con itinerarios asistidos por IA, planes día a día, recomendaciones y desbloqueo premium opcional, con auth y notificaciones push.",
      myRole:
        "Desarrollo frontend en React Native (Expo): listado y detalle de viajes, pestañas de itinerario, checklist, vistas de alojamiento y actividades, auth (Firebase, Apple/Google Sign-In) y deep linking.",
      features: [
        "Listado de viajes (futuros/pasados) y detalle con itinerario",
        "Plan día a día con actividades y recomendaciones",
        "Checklist y enlaces a alojamiento",
        "Firebase auth, Apple/Google Sign-In, notificaciones push",
      ],
      results: [
        "Los viajeros pueden planificar y seguir el viaje desde una sola app",
        "Desbloqueo de contenido premium y engagement vía push",
      ],
      imageAlts: ["Wayvo planificador de viajes — placeholder para captura"],
    },
    "wezone-plan-recommendator": {
      title: "Wezone Plan Recommendator",
      subtitle: "Recomendación guiada de plan para socios Wezone",
      challenge:
        "Wezone quería un flujo web donde los socios respondieran unas preguntas (centro, objetivos, preferencias) y recibieran un plan recomendado, con opción de formulario de contacto para recibir el resultado por email.",
      myRole:
        "Desarrollo frontend: formulario multi-paso (selección de centro, preguntas), vista de resultado, formulario de contacto e integración con la API de recomendación.",
      features: [
        "Selección de centro y preguntas paso a paso",
        "Resultado de recomendación y CTA",
        "Formulario de contacto para recibir el plan por email",
        "i18n y maquetación responsive",
      ],
      results: [
        "Los socios obtienen una recomendación clara sin ir al centro",
        "Captación de leads y seguimiento para el equipo comercial",
      ],
      imageAlts: ["Wezone Plan Recommendator — placeholder para captura"],
    },
  },
  en: {
    "turbowash-terminal": {
      title: "Turbowash Terminal",
      subtitle: "Payment interface for automated car wash kiosks",
      challenge:
        "Turbowash needed a payment interface for outdoor kiosks — crystal clear in bright sunlight, supporting card and cash, and communicating with wash hardware via pulse signals.",
      myRole:
        "Frontend development in React Native. Key challenge: integrating real-time pulse communication for wash start, pause, and completion states.",
      features: [
        "Card and cash payment support",
        "Time-based and euro-based wash modes",
        "Real-time pulse communication with hardware",
        "Outdoor-optimized UI (high contrast, large touch targets)",
      ],
      results: [
        "Deployed across 5+ locations processing real transactions daily",
        "Zero-training interface — customers use it without assistance",
      ],
      imageAlts: [
        "Turbowash terminal home screen with pay-per-use pricing",
        "Turbowash wash in progress with countdown timer",
        "Turbowash active wash with elapsed time and amount",
        "Turbowash club member pricing with bonus credits",
        "Turbowash coupon selection screen",
      ],
    },
    "turbowash-portal": {
      title: "Turbowash Client Portal",
      subtitle: "Customer dashboard for vehicle and service management",
      challenge:
        "Turbowash customers needed a way to manage their accounts online — wash history, vehicles, invoices, and loyalty coupons. Premium feel, simple navigation.",
      myRole:
        "Frontend development. Key sections: user profile, vehicle management with type/color selector, invoice history, and coupon system.",
      features: [
        "Vehicle management with visual type/color selector",
        "Service history with detailed wash records",
        "Invoice download and billing management",
        "Loyalty program with coupon redemption",
      ],
      results: [
        "Clean, intuitive dashboard serving Turbowash customers",
        "Reduced support requests for billing inquiries",
      ],
      imageAlts: [
        "Turbowash client dashboard with QR code and service history",
        "Turbowash loyalty coupons list",
        "Turbowash vehicle management screen",
      ],
    },
    wetour: {
      title: "Wetour",
      subtitle: "Community platform for Spain's leading fitness network",
      challenge:
        "Wezone, a fitness network with 11 centers and 15K+ active members, needed a platform to unify their community — discover events, connect with sports centers, and engage with content.",
      myRole:
        "Frontend development. UX research and production build with Next.js (SEO-first).",
      features: [
        "300+ sports centers directory",
        "800+ monthly events with registration",
        "Gamification system (challenges, WZN passport)",
        "Payment integration for event subscriptions",
        "1.2K+ community publications",
      ],
      results: [
        "Platform live with organic growth via SEO-first architecture",
        "New revenue stream through paid event registrations",
      ],
      imageAlts: [
        "WeTour community feed with topic filters and publications",
        "WeTour gym detail page showing Wezone Plaza Castilla",
        "WeTour user profile with badges and achievements",
        "WeTour mobile events listing",
        "WeTour mobile map view with gym locations",
        "WeTour mobile gym detail with reviews",
      ],
    },
    "goiko-ordering": {
      title: "Goiko Ordering",
      subtitle: "Full eCommerce platform for Spain's iconic burger chain",
      challenge:
        "Goiko, one of Spain's most recognized burger chains with 100+ locations, needed a custom online ordering platform. The solution had to handle delivery and pickup orders, integrate with multiple third-party services, and provide a seamless experience that matched their bold brand identity.",
      myRole:
        "I was responsible for the frontend development of the entire eCommerce platform. Working closely with backend developers and the team, I built a fast, responsive application that handles real orders across all their locations daily.",
      features: [
        "Geolocation-based restaurant assignment for delivery and pickup",
        "Password-less authentication via magic link email",
        "Real-time order tracking with rider location on Google Maps",
        "Automatic menu sync with Deliverect across all locations",
        "Paycomet integration for secure card payments with tokenization",
        "Scheduled orders based on kitchen capacity",
        "Smart upselling at cart and checkout stages",
        "Coupon validation integrated with Goiko's BI platform",
      ],
      results: [
        "Live platform processing real orders daily across 100+ locations",
        "Seamless integration with existing POS systems via Deliverect",
        "Reduced dependency on third-party delivery apps",
        "Conversion tracking feeding directly into business intelligence",
      ],
      imageAlts: [
        "Goiko product detail modal with burger customization options",
        "Goiko desktop checkout with order summary sidebar",
        "Goiko mobile menu with combos and burger categories",
        "Goiko mobile cart with order items and total",
        "Goiko mobile checkout with personal data and pickup details",
      ],
    },
    "turbowash-admin": {
      title: "Turbowash Admin",
      subtitle: "Internal admin panel for locations, pricing, and operations",
      challenge:
        "Turbowash needed an internal tool for staff to manage locations, wash configurations, pricing, and operational data without depending on developers for every change.",
      myRole:
        "Frontend development of the admin SPA: data tables with filters and pagination, forms with validation (Formik/Yup), and integration with the existing API.",
      features: [
        "Location and terminal management",
        "Pricing and wash configuration",
        "Data tables with sorting, filters, and pagination",
        "Form flows with validation and error handling",
      ],
      results: [
        "Operational team can update settings and view data autonomously",
        "Single React SPA aligned with the rest of the Turbowash front stack",
      ],
      imageAlts: ["Turbowash Admin — placeholder for screenshot"],
    },
    "goiko-customer-area": {
      title: "Goiko Customer Area",
      subtitle: "Account management, orders, and loyalty for Goiko customers",
      challenge:
        "Goiko needed a customer area where users could manage their profile, view order history, save addresses, and access loyalty benefits — with a consistent experience across devices.",
      myRole:
        "Frontend development: profile and address management, order history, integration with Firebase Auth and Google Maps, and QR/loyalty features.",
      features: [
        "Profile and address management with Google Maps",
        "Order history and reorder flow",
        "Firebase Authentication and optional reCAPTCHA",
        "QR codes and loyalty section",
      ],
      results: [
        "Unified customer area supporting the main Goiko ordering flow",
        "Reuse of addresses and preferences for faster checkout",
      ],
      imageAlts: ["Goiko Customer Area — placeholder for screenshot"],
    },
    "goiko-invoicing": {
      title: "Goiko Invoicing",
      subtitle: "Invoice management and billing for Goiko franchisees",
      challenge:
        "Franchisees needed a dedicated interface to consult and manage invoices and billing data, with a clear structure and export options.",
      myRole:
        "Frontend development with Vue 3 and Pinia: invoice listing, filters, and integration with the billing API; UI with Naive UI for consistency.",
      features: [
        "Invoice listing with search and filters",
        "Billing and payment status views",
        "Vue 3 Composition API and Pinia for state",
        "Naive UI component set",
      ],
      results: [
        "Franchisees can access billing data without going through the main ordering app",
        "Aligned UX with other Goiko internal tools",
      ],
      imageAlts: ["Goiko Invoicing — placeholder for screenshot"],
    },
    "goiko-online-menu": {
      title: "Goiko Online Menu",
      subtitle: "Digital menu and product browsing for Goiko",
      challenge:
        "Goiko needed a standalone digital menu experience for in-store or link sharing — browsable, searchable, and consistent with the main ordering brand.",
      myRole:
        "Frontend development: menu structure, search and filters, lazy-loaded images, and i18n; analytics via GTM.",
      features: [
        "Full menu browsing with categories and search",
        "Product detail and nutritional info",
        "i18n and responsive layout",
        "QR code support for in-store access",
      ],
      results: [
        "Standalone menu usable from QR or direct link",
        "Shared product data and branding with the main ordering app",
      ],
      imageAlts: ["Goiko Online Menu — placeholder for screenshot"],
    },
    "goiko-table-ordering": {
      title: "Goiko Table Ordering",
      subtitle: "In-restaurant ordering from the table",
      challenge:
        "Goiko wanted a simple in-restaurant flow so customers could order from the table via a dedicated app — minimal steps and clear feedback for the kitchen.",
      myRole:
        "Frontend development: table ordering flow, form validation, and integration with the ordering backend; GTM for analytics.",
      features: [
        "Table-based ordering flow",
        "Menu selection and cart with validation",
        "Order confirmation and status feedback",
        "Analytics integration (GTM)",
      ],
      results: [
        "Faster in-restaurant orders without depending on staff devices",
        "Consistent experience with other Goiko digital products",
      ],
      imageAlts: ["Goiko Table Ordering — placeholder for screenshot"],
    },
    "aee-corporate-web": {
      title: "AEE Corporate Web",
      subtitle: "Corporate website with CMS-driven content and i18n",
      challenge:
        "AEE needed a modern corporate site with content managed via CMS (Strapi), multi-language support, and a structure that could scale with new sections and campaigns.",
      myRole:
        "Frontend development with Next.js: rendering Strapi block content, i18n (i18next), responsive layout, and carousels/sections for campaigns.",
      features: [
        "CMS-driven pages with Strapi Blocks renderer",
        "Multi-language (i18next) and date formatting",
        "Responsive layout and image optimization",
        "Carousels and dynamic sections",
      ],
      results: [
        "Marketing team can update content without code changes",
        "SEO-friendly structure and consistent branding",
      ],
      imageAlts: ["AEE Corporate Web — placeholder for screenshot"],
    },
    "guido-portfolio": {
      title: "Guido Portfolio",
      subtitle: "Personal portfolio site with Radix UI and Framer Motion",
      challenge:
        "A personal portfolio needed a distinctive, accessible site with smooth animations, form handling, and a clear presentation of projects and skills.",
      myRole:
        "Frontend development: layout, components with Radix UI, animations with Framer Motion, form validation with Zod/React Hook Form, and responsive design.",
      features: [
        "Project and experience sections with motion",
        "Contact form with validation",
        "Theme support and responsive layout",
        "Recharts for data visualization where needed",
      ],
      results: [
        "Polished portfolio with strong UX and accessibility",
        "Reusable patterns for future projects",
      ],
      imageAlts: ["Guido Portfolio — placeholder for screenshot"],
    },
    "project-v-libraries": {
      title: "Proyecto V — Front Libraries",
      subtitle: "Monorepo of shared UI and client template for product ecosystem",
      challenge:
        "Proyecto V needed a shared frontend foundation: a UI library with design tokens and Storybook, plus a client template (Next.js) that consumes it, to keep multiple products consistent and maintainable.",
      myRole:
        "Contribution to the monorepo: UI package with primitives and tokens, Storybook documentation, and client-template-web consuming the library; changesets for versioning.",
      features: [
        "UI library with design tokens and variants",
        "Storybook for component documentation",
        "Next.js client template consuming the library",
        "Changesets and workspace scripts",
      ],
      results: [
        "Single source of truth for UI across client projects",
        "Faster feature development with documented components",
      ],
      imageAlts: ["Proyecto V Libraries — placeholder for screenshot"],
    },
    "pulse-video-manager": {
      title: "Pulse Video Manager",
      subtitle: "Video library, playlists, and daily workout scheduling",
      challenge:
        "A fitness/content team needed an app to manage a video library, organize playlists, tag content, and schedule \"today's\" workouts — with a clear UX for browsing and drag-and-drop ordering.",
      myRole:
        "Frontend development: video and playlist CRUD, drag-and-drop ordering (FormKit), tags management, Today view, and video player integration (Media Chrome / Castable).",
      features: [
        "Video library with upload, metadata, and tags",
        "Playlists with drag-and-drop reordering",
        "Today page for scheduled workouts",
        "Auth and responsive layout with sidebar/nav",
      ],
      results: [
        "Content team can maintain playlists and schedules without dev involvement",
        "Consistent playback and scheduling experience",
      ],
      imageAlts: ["Pulse Video Manager — placeholder for screenshot"],
    },
    "time-tracking-billing": {
      title: "Time Tracking — Billing & Licenses",
      subtitle: "Billing, licenses, and customer management for time-tracking product",
      challenge:
        "The time-tracking product needed an admin app for billing, license management, and customer data — with secure auth and a clear overview for account managers.",
      myRole:
        "Frontend development: auth (Firebase, Google OAuth), customer and license management, billing views, and integration with the backend API.",
      features: [
        "Google OAuth and Firebase authentication",
        "Customer and license management",
        "Billing and subscription views",
        "Search, filters, and responsive tables",
      ],
      results: [
        "Account managers can handle licenses and billing in one place",
        "Secure access and consistent UX with the workspace app",
      ],
      imageAlts: ["Time Tracking Billing — placeholder for screenshot"],
    },
    "time-tracking-workspace": {
      title: "Time Tracking — Workspace",
      subtitle: "Time entries, projects, and invoicing for teams",
      challenge:
        "Users needed a workspace to log time, manage projects and customers, and generate or track invoices — with date ranges, reports, and a simple navigation.",
      myRole:
        "Frontend development: time entry forms, project and customer management, invoice views, and history with date range selection.",
      features: [
        "Time tracking and history with date range picker",
        "Projects and customers management",
        "Invoice management and generation",
        "i18n and responsive layout",
      ],
      results: [
        "Teams can track time and manage projects in one app",
        "Aligned with the billing app for a full product suite",
      ],
      imageAlts: ["Time Tracking Workspace — placeholder for screenshot"],
    },
    wayvo: {
      title: "Wayvo",
      subtitle: "AI-assisted trip planning and itineraries on mobile",
      challenge:
        "Wayvo needed a mobile app for travelers to plan trips with AI-assisted itineraries, day-by-day plans, recommendations, and optional premium unlock — with auth and push notifications.",
      myRole:
        "Frontend development in React Native (Expo): trip list and detail, itinerary tabs, checklist, accommodation and activity views, auth (Firebase, Apple/Google Sign-In), and deep linking.",
      features: [
        "Trip list (future/past) and trip detail with itinerary",
        "Day-by-day plan with activities and recommendations",
        "Checklist and accommodation links",
        "Firebase auth, Apple/Google Sign-In, push notifications",
      ],
      results: [
        "Travelers can plan and follow trips from a single app",
        "Premium content unlock and engagement via push",
      ],
      imageAlts: ["Wayvo trip planner — placeholder for screenshot"],
    },
    "wezone-plan-recommendator": {
      title: "Wezone Plan Recommendator",
      subtitle: "Guided plan recommendation for Wezone fitness members",
      challenge:
        "Wezone wanted a focused web flow where members answer a short set of questions (center, goals, preferences) and receive a recommended plan — with optional contact form to receive the result by email.",
      myRole:
        "Frontend development: multi-step form (center selection, questions), result view, contact form, and integration with the recommendation API.",
      features: [
        "Center selection and step-by-step questions",
        "Plan recommendation result and CTA",
        "Contact form to receive plan by email",
        "i18n and responsive layout",
      ],
      results: [
        "Members get a clear recommendation without visiting the center",
        "Lead capture and follow-up for the sales team",
      ],
      imageAlts: ["Wezone Plan Recommendator — placeholder for screenshot"],
    },
  },
}

/**
 * Returns translated content for a given project and locale.
 */
export function getProjectTranslation(
  slug: string,
  locale: Locale
): ProjectTranslation | undefined {
  return projectTranslations[locale][slug]
}
