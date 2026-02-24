/**
 * Translated content for each project (es/en). Merged with project base data in components.
 */

import type { Locale } from "./translations"

export interface ProjectTranslation {
  title: string
  subtitle: string
  role: string
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
      role: "Desarrollo",
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
      role: "Desarrollo",
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
      role: "Desarrollo",
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
      role: "Desarrollo frontend",
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
  },
  en: {
    "turbowash-terminal": {
      title: "Turbowash Terminal",
      subtitle: "Payment interface for automated car wash kiosks",
      role: "Development",
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
      role: "Development",
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
      role: "Development",
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
      role: "Frontend Development",
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
  },
}

export function getProjectTranslation(
  slug: string,
  locale: Locale
): ProjectTranslation | undefined {
  return projectTranslations[locale][slug]
}
