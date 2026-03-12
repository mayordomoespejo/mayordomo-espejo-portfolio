import type { Locale } from "../translations"

export interface LabTranslation {
  subtitle: string
  features: string[]
  howItWorks?: string[]
}

type LabTranslations = Record<string, LabTranslation>

export const labTranslations: Record<Locale, LabTranslations> = {
  es: {
    citadex: {
      subtitle: "Explorador de personajes de Rick & Morty construido con Angular 21",
      features: [
        "Componentes standalone de Angular 21 con reactividad basada en signals y el patrón inject() — sin NgModules, alineado con la arquitectura recomendada actual de Angular",
        "Búsqueda con debounce y filtros múltiples (estado, género, página) codificados en query params de la URL mediante ActivatedRoute, haciendo cada vista filtrada marcable y compartible",
        "Pipeline HTTP reactivo con queryParamMap → switchMap → HttpClient (withFetch()) → signals; catchError dentro del switchMap mantiene el stream vivo tras errores del servidor sin reiniciar la paginación",
        "TitleStrategy personalizada que actualiza el <title> del documento en cada transición de ruta, registrada como un único provider en la raíz de la app",
        "Animación de entrada en cascada mediante una custom property CSS --card-index asignada por índice en el bucle @for — sin dependencia de @angular/animations",
        "Select personalizado accesible implementado como ControlValueAccessor, integrado de forma nativa con Reactive Forms",
        "Suite de tests completa con Vitest, Angular TestBed y HttpTestingController; las peticiones HTTP se mockean a nivel de transporte",
      ],
      howItWorks: [
        "La ruta home obtiene estadísticas globales del universo (personajes, episodios, localizaciones) al iniciarse a través de una señal de HomeService.",
        "La ruta de personajes se carga de forma lazy; un FormControl gestiona la búsqueda con debounce que se añade a la URL como query param.",
        "Los filtros activos y la página actual también se guardan en query params — la URL es la única fuente de verdad y el botón Atrás del navegador funciona sin código adicional.",
        "Cada tarjeta de personaje enlaza a una página de detalle que resuelve el personaje y su lista de episodios en paralelo mediante forkJoin.",
        "FavoritesService persiste los IDs seleccionados en localStorage; el ControlValueAccessor del Select personalizado conecta el desplegable con el FormGroup.",
      ],
    },
    dayfold: {
      subtitle: "Explorador de eventos históricos con una rueda radial controlada por scroll",
      features: [
        "Rueda radial controlada por scroll que mapea la posición de desplazamiento al ángulo de rotación en tiempo real, con un snap timer que se asienta en el evento más cercano al dejar de hacer scroll",
        "URL como estado canónico: mes y día codificados en search params mediante un hook useTimelineDate personalizado; los valores fuera de rango se recortan automáticamente a fechas válidas",
        "TanStack Query v5 con staleTime: Infinity y claves de query compuestas [lang, mes, día] — sin re-fetch en cada re-render; cambiar de idioma invalida únicamente la entrada afectada de la caché",
        "Respuestas de la API Wikimedia On This Day mapeadas a modelos tipados TimelineEvent[] ordenados ascendentemente por año, desacoplando la UI completamente del esquema de la API",
        "11 idiomas de UI con i18next y detección automática del idioma del navegador; el idioma del contenido de Wikipedia se guarda por separado en localStorage, permitiendo que el idioma de la UI y el de los artículos sean distintos",
        "Responsabilidades aisladas en hooks personalizados: useTimelineDate (estado URL), useOnThisDayEvents (capa de datos), useTheme (sincronización de clases y persistencia)",
      ],
      howItWorks: [
        "Al cargar, useTimelineDate lee mes y día de la URL y los recorta a una fecha válida; se usa la fecha de hoy como valor por defecto.",
        "useOnThisDayEvents consulta la API Wikimedia mediante TanStack Query — los resultados se cachean indefinidamente con clave [lang, mes, día].",
        "La rueda radial renderiza el array TimelineEvent[] como segmentos de arco; el scroll rota la rueda y el snap timer se asienta en el elemento más cercano.",
        "Seleccionar un segmento muestra la tarjeta del evento con título, año, extracto y enlace al artículo de Wikipedia.",
        "Cambiar de idioma regenera la clave de query, obteniendo la edición de Wikipedia en el nuevo idioma mientras los datos anteriores permanecen visibles durante la transición.",
      ],
    },
    dealwing: {
      subtitle: "Buscador de vuelos baratos con mapa interactivo y capa BFF completa",
      features: [
        "Interfaz de pantalla dividida: MapLibre GL JS v5 con teselas de OpenFreeMap (sin API key) que dibuja rutas de arco GeoJSON curvas y marcadores animados de precio por resultado",
        "Capa BFF mediante Vercel Serverless Functions que proxifica Duffel y RapidAPI — las credenciales de API nunca llegan al bundle del cliente",
        "Formulario de búsqueda de vuelos validado con react-hook-form y un resolver de esquema Zod v4; autocompletado de aeropuertos con búsqueda con debounce sobre un dataset local IATA/ciudad",
        "Algoritmo Deal Score (0–100) calculado relativamente al conjunto completo de resultados: precio 60%, duración 30%, escalas 10%; CO₂ estimado por pasajero con el método ICAO simplificado",
        "Historial de búsqueda (últimas 8 consultas en localStorage) y ruta /saved separada con React.lazy; React.memo en FlightCard evita re-renders por interacciones con el mapa",
        "Framer Motion v12: stagger en las tarjetas de resultados, modal con animación spring, toasts con fade, y animaciones de layout en el colapso del panel lateral",
        "Accesibilidad: atajos de teclado (/ → búsqueda, Esc → cerrar modal), focus trap en el modal, etiquetado ARIA completo y navegación por teclado en el autocompletado y selects personalizados",
        "Tests unitarios con Vitest y Testing Library para deal scoring, CO₂ y formatters; E2E con Playwright en los flujos principales; pipeline CI con GitHub Actions",
      ],
      howItWorks: [
        "El usuario rellena origen, destino y fechas; Zod valida el esquema y react-hook-form muestra los errores por campo.",
        "Al enviar, la petición va a /api/offers — una función serverless de Vercel que la reenvía a la API sandbox de Duffel y transforma la respuesta.",
        "TanStack Query cachea los resultados durante 5 minutos; el mapa dibuja arcos entre aeropuertos y coloca marcadores de precio animados en el destino.",
        "El Deal Score ordena todas las ofertas devueltas; hacer clic en una tarjeta abre un modal con animación spring con el itinerario completo, desglose de escalas y tarjeta de CO₂.",
        "Los marcadores de aeropuerto en el mapa son interactivos: hacer clic en uno rellena el campo de formulario correspondiente y actualiza la capa de arcos en tiempo real.",
      ],
    },
    pokelocator: {
      subtitle: "Explorador de Pokémon con scroll infinito, filtros, comparaciones y modo oscuro",
      features: [
        "Grid con scroll infinito usando useInfiniteQuery de TanStack Query; el filtro por tipo cambia transparentemente a un useQuery estándar cuando la PokéAPI devuelve una lista completa no paginada",
        "Búsqueda en cliente: todos los ~1 300 nombres de Pokémon se obtienen una sola vez (staleTime: Infinity) y se filtran con un debounce de 300 ms — sin peticiones por cada tecla pulsada",
        "Generación estática con generateStaticParams para las primeras 151 páginas de detalle; caché fetch del servidor con revalidate: 86400 para el resto",
        "Tailwind CSS v4 con la nueva API @theme de tokens CSS: tokens definidos en :root / .dark y mapeados a clases de utilidad mediante @theme inline — sin tailwind.config.js",
        "Comparación Pokémon lado a lado (Zustand v5 + middleware Persist) que lee de la caché existente de TanStack Query — sin peticiones de red duplicadas",
        "Promise.allSettled en las peticiones de detalle en lote: los 404 individuales de la PokéAPI (formas no estándar) se absorben sin abortar el renderizado de la lista",
        "Modo oscuro con next-themes: preferencia del sistema respetada en el primer render del servidor, override del usuario persistido en localStorage, sin FOUC",
        "Pipeline de calidad completo: tests unitarios e integración con Vitest, E2E con Playwright, ESLint 9, Prettier, hooks pre-commit con Husky, CI con GitHub Actions",
      ],
      howItWorks: [
        "La página de lista ejecuta useInfiniteQuery contra la PokéAPI, obteniendo 24 elementos a la vez y resolviendo los detalles de cada página en paralelo con Promise.allSettled.",
        "Activar un filtro de tipo cambia la fuente de datos a /type/{nombre} y sustituye el scroll infinito por un grid normal — el search param de la URL gestiona tanto la clave de query como el estado de la UI.",
        "El desplegable de búsqueda obtiene todos los ~1 300 nombres una vez al montar y filtra en cliente con un debounce de 300 ms; los resultados se muestran como una lista de sugerencias navegable por teclado.",
        "La vista de comparación lee ambos Pokémon de la caché existente de TanStack Query — si ya se visitó la página de detalle, no se realiza ninguna petición nueva.",
        "En la página de detalle, la cadena evolutiva se resuelve recursivamente desde el endpoint de especie; las barras de estadísticas se animan al montar con Framer Motion.",
      ],
    },
    pulse: {
      subtitle: "App de descubrimiento de vídeo con acceso protegido y la API de Pexels Videos",
      features: [
        "SPA con acceso protegido: formulario de login con Formik + Yup que valida las credenciales antes de almacenar la sesión en un slice de Zustand v5 con middleware Persist, protegiendo todas las rutas entre recargas",
        "Feed de vídeos y búsqueda por palabra clave contra la API de Pexels Videos mediante un cliente Axios tipado; filtros de orientación, tamaño y región aplicados como query params sin reiniciar innecesariamente la clave de caché de TanStack Query",
        "Reproductor de vídeo personalizado compuesto con react-player dentro de un shell de media-chrome, que expone controles de reproducción accesibles y agnósticos al estilo sin sobrescribir la UI nativa del navegador",
        "Navegación entre vídeos del playlist y selector de calidad en la página de detalle; TanStack Query gestiona la caché y la semántica stale-while-revalidate en todas las peticiones",
        "Arquitectura SCSS/BEM en todos los componentes con tokens de diseño para color, espaciado y transiciones definidos en un único _variables.scss",
        "Internacionalización EN/ES con react-i18next y archivos JSON de locale cargados de forma lazy; preferencia de idioma persistida en localStorage",
        "Atribución a la API de Pexels implementada según sus términos de servicio: enlace de atribución en el pie de página y crédito por autor en cada pantalla con contenido",
      ],
      howItWorks: [
        "Al cargar, la app comprueba el almacenamiento persistido de Zustand en busca de una sesión válida; si no existe, todas las rutas redirigen al login.",
        "Formik gestiona el formulario de login; Yup valida el formato del email y los campos requeridos antes de que el servicio de autenticación compare las credenciales con las variables de entorno y Zustand almacene la sesión.",
        "Las páginas del feed destacado y de búsqueda consultan la API de Pexels mediante Axios, con los resultados cacheados y paginados por TanStack Query.",
        "Cada tarjeta de vídeo navega a una página de detalle donde react-player renderiza el vídeo dentro de un shell de media-chrome con un selector de calidad generado a partir del array de archivos de Pexels.",
        "Cambiar la búsqueda o los filtros actualiza la clave de TanStack Query, lanzando una nueva petición mientras los datos cacheados anteriores se muestran como skeleton durante la transición.",
      ],
    },
    portfolio: {
      subtitle: "Portfolio personal construido con Next.js 16, Tailwind CSS y Framer Motion",
      features: [
        "Next.js 16 App Router con generateStaticParams que pre-renderiza todas las páginas de detalle de proyectos y lab en tiempo de build — sin runtime de servidor necesario en producción",
        "Contexto de locale personalizado que expone un getter t() tipado contra una constante translations.ts — sin librería i18n externa, locale persistido en localStorage sin flash al cargar",
        "Animaciones de entrada con Framer Motion definidas como objetos de variantes reutilizables en lib/motion.ts; los delays de stagger se componen por sección sin repetir la configuración",
        "Modo oscuro/claro con next-themes: preferencia del sistema respetada en el primer render, override del usuario guardado en localStorage, tokens de color aplicados mediante CSS custom properties",
        "Marquee infinito construido con CSS @keyframes translateX(-50%) sobre una lista de elementos duplicada; animation-play-state: paused al hacer hover, animación desactivada completamente con prefers-reduced-motion",
        "Layout responsive con Tailwind CSS y tokens de diseño centralizados; sin CSS personalizado fuera de los keyframes del marquee y algunos resets globales",
      ],
      howItWorks: [
        "El layout raíz envuelve el árbol en ThemeProvider y LocaleProvider; el locale se resuelve desde localStorage en el cliente, con el idioma del navegador como fallback.",
        "Las páginas de detalle de proyectos y lab se generan estáticamente desde módulos de datos TypeScript tipados — añadir un proyecto nuevo es solo una entrada en los datos, sin cambios de rutas.",
        "Las variantes de Framer Motion en lib/motion.ts se aplican a elementos motion.div; cada sección añade un offset de delay de stagger para crear una revelación secuenciada.",
        "El marquee duplica el array de elementos antes de renderizar para que el loop CSS parezca continuo independientemente del número de tarjetas.",
        "Las traducciones son objetos planos con clave de locale; la función t() hace una única búsqueda de propiedad y devuelve cadena vacía para claves inexistentes.",
      ],
    },
  },
  en: {},
}

export function getLabTranslation(slug: string, locale: Locale): LabTranslation | undefined {
  return labTranslations[locale]?.[slug]
}
