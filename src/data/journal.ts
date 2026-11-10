// Generado desde revista-draft/assets/journal-data.js
// Datos de muestra para el prototipo de diagramación.

export interface Author {
  name: string;
  affiliation: string;
  orcid: string;
  email: string;
  corresponding: boolean;
}

export interface Editorial {
  title: string;
  author: string;
  text: string;
}

export interface Article {
  id: string;
  issueId: string;
  section: string;
  type: string;
  title: string;
  abstractEs: string;
  abstractEn: string;
  keywordsEs: string[];
  keywordsEn: string[];
  authors: Author[];
  doi: string;
  pages: string;
  publishedAt: string;
  license: string;
  pdf: string;
  html: string;
  featured?: boolean;
}

export interface Issue {
  id: string;
  volumeId: string;
  volume: number;
  number: number;
  year: number;
  title: string;
  subtitle: string;
  publishedAt: string;
  sectionOrder: string[];
  editorial: Editorial;
}

export interface Volume {
  id: string;
  year: number;
  number: number;
  title: string;
  description: string;
  issueIds: string[];
}

export interface JournalMeta {
  name: string;
  shortName: string;
  faculty: string;
  university: string;
  issn: string;
  frequency: string;
  email: string;
  address: string;
  license: string;
  site: string;
}

export const meta: JournalMeta = {
  name: "Revista Académica",
  shortName: "Revista Académica",
  faculty: "Facultad de Ingeniería",
  university: "Universidad Católica de Temuco",
  issn: "ISSN: ABC-XYZ",
  frequency: "Publicación continua",
  email: "sample.email@prototype.cl",
  address: "Av. Rudecindo Ortega 03694, Temuco, Chile",
  license: "CC BY 4.0",
  site: "https://facultadingenieria.uct.cl",
};

export const volumes: Volume[] = [
  {
    id: "v1",
    year: 2026,
    number: 1,
    title: "Volumen 1 (2026)",
    description:
      "Primer volumen de la Revista de Ingeniería UCT. Reúne artículos de investigación, notas técnicas y revisiones sobre problemas de ingeniería con impacto regional.",
    issueIds: ["v1n1", "v1n2"],
  },
];

export const issues: Issue[] = [
  {
    id: "v1n1",
    volumeId: "v1",
    volume: 1,
    number: 1,
    year: 2026,
    title: "Número 1",
    subtitle: "Publicación continua",
    publishedAt: "2026-06-30",
    sectionOrder: ["Artículos", "Notas técnicas", "Revisiones"],
    editorial: {
      title: "Una revista para la ingeniería que se hace en la UCT",
      author: "Comité Editorial",
      text: "La Revista de Ingeniería UCT nace como un espacio para compartir el conocimiento que se produce en la Facultad de Ingeniería y en su entorno. Este primer número reúne trabajos sobre logística, materiales, energía y calidad del aire, todos con una mirada aplicada a los desafíos del territorio. La publicación adopta un modelo de publicación continua y revisión por pares doble ciego, con el objetivo de asegurar rigor, trazabilidad y acceso abierto.",
    },
  },
  {
    id: "v1n2",
    volumeId: "v1",
    volume: 1,
    number: 2,
    year: 2026,
    title: "Número 2",
    subtitle: "Publicación continua",
    publishedAt: "2026-10-30",
    sectionOrder: ["Artículos", "Revisiones"],
    editorial: {
      title: "Ingeniería, territorio y evidencia",
      author: "Comité Editorial",
      text: "Este segundo número profundiza en la relación entre infraestructura, energía y formación en ingeniería. Los artículos abordan la vulnerabilidad sísmica de puentes peatonales, la inspección automatizada de caminos, la eficiencia energética en plantas de tratamiento y el aprendizaje basado en proyectos. Son problemas concretos, con métodos reproducibles y resultados que esperamos sean útiles para la toma de decisiones en la región.",
    },
  },
];

export const articles: Article[] = [
  {
    id: "art-001",
    issueId: "v1n1",
    section: "Artículos",
    type: "Artículo de investigación",
    title:
      "Optimización de rutas de recolección de residuos sólidos urbanos mediante metaheurísticas",
    abstractEs:
      "La gestión de residuos sólidos urbanos enfrenta presiones crecientes de costo y sostenibilidad. Este trabajo formula el problema de ruteo como un modelo de programación entera y compara tres metaheurísticas sobre instancias reales de la Región de La Araucanía. Los resultados muestran reducciones de hasta 18% en distancia recorrida y 12% en emisiones respecto de la operación actual, con tiempos de cómputo compatibles con la planificación semanal.",
    abstractEn:
      "Municipal solid waste management faces growing cost and sustainability pressures. This study formulates the routing problem as an integer programming model and compares three metaheuristics on real instances from the Araucanía Region. Results show reductions of up to 18% in distance and 12% in emissions compared with current operations, with computing times suitable for weekly planning.",
    keywordsEs: [
      "optimización de rutas",
      "residuos sólidos",
      "metaheurísticas",
      "logística urbana",
      "sostenibilidad",
    ],
    keywordsEn: [
      "route optimization",
      "solid waste",
      "metaheuristics",
      "urban logistics",
      "sustainability",
    ],
    authors: [
      {
        name: "Camila Rojas Fuentes",
        affiliation:
          "Departamento de Ingeniería Industrial, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0002-1841-3027",
        email: "camila.rojas@uct.cl",
        corresponding: true,
      },
      {
        name: "Diego Salazar Méndez",
        affiliation:
          "Departamento de Ingeniería Informática, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0001-7764-2210",
        email: "diego.salazar@uct.cl",
        corresponding: false,
      },
    ],
    doi: "https://doi.org/10.5555/riuct.2026.001",
    pages: "1-14",
    publishedAt: "2026-06-30",
    license: "CC BY 4.0",
    pdf: "#",
    html: "#",
    featured: true,
  },
  {
    id: "art-002",
    issueId: "v1n1",
    section: "Artículos",
    type: "Artículo de investigación",
    title:
      "Evaluación térmica de materiales de cambio de fase integrados en muros de hormigón",
    abstractEs:
      "Se evalúa el desempeño térmico de muros de hormigón con materiales de cambio de fase en condiciones climáticas de la zona central-sur de Chile. Mediante simulación dinámica se comparan distintas fracciones volumétricas y puntos de fusión. Los resultados indican una reducción de la demanda de climatización y una mejora del confort térmico en verano, con un costo adicional que debe analizarse por caso.",
    abstractEn:
      "The thermal performance of concrete walls with phase change materials is evaluated under the climate conditions of south-central Chile. Dynamic simulation is used to compare different volumetric fractions and melting points. Results show a reduction in cooling demand and improved summer thermal comfort, with an additional cost that must be assessed case by case.",
    keywordsEs: [
      "materiales de cambio de fase",
      "eficiencia energética",
      "confort térmico",
      "simulación",
      "construcción",
    ],
    keywordsEn: [
      "phase change materials",
      "energy efficiency",
      "thermal comfort",
      "simulation",
      "construction",
    ],
    authors: [
      {
        name: "Valentina Pérez Soto",
        affiliation:
          "Departamento de Ingeniería Civil, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0003-4412-9081",
        email: "valentina.perez@uct.cl",
        corresponding: true,
      },
      {
        name: "Andrés Muñoz Rivas",
        affiliation:
          "Departamento de Ingeniería Civil, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0002-9034-1176",
        email: "andres.munoz@uct.cl",
        corresponding: false,
      },
    ],
    doi: "https://doi.org/10.5555/riuct.2026.002",
    pages: "15-29",
    publishedAt: "2026-06-30",
    license: "CC BY 4.0",
    pdf: "#",
    html: "#",
  },
  {
    id: "art-003",
    issueId: "v1n1",
    section: "Artículos",
    type: "Artículo de investigación",
    title:
      "Predicción de demanda eléctrica en campus universitarios mediante redes neuronales recurrentes",
    abstractEs:
      "La planificación energética de campus universitarios requiere pronósticos de demanda con horizonte horario. Se comparan modelos autorregresivos y redes neuronales recurrentes utilizando datos de medidores inteligentes de un campus de la UCT. El modelo propuesto reduce el error medio absoluto porcentual frente a la línea base y permite identificar patrones asociados a la actividad académica.",
    abstractEn:
      "Energy planning for university campuses requires demand forecasts with an hourly horizon. Autoregressive models and recurrent neural networks are compared using smart meter data from a UCT campus. The proposed model reduces the mean absolute percentage error against the baseline and reveals patterns associated with academic activity.",
    keywordsEs: [
      "demanda eléctrica",
      "aprendizaje profundo",
      "series temporales",
      "campus universitario",
      "eficiencia energética",
    ],
    keywordsEn: [
      "electricity demand",
      "deep learning",
      "time series",
      "university campus",
      "energy efficiency",
    ],
    authors: [
      {
        name: "Ignacio Herrera Lagos",
        affiliation:
          "Departamento de Ingeniería Eléctrica, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0001-5520-7743",
        email: "ignacio.herrera@uct.cl",
        corresponding: true,
      },
      {
        name: "Paula Contreras Vidal",
        affiliation:
          "Departamento de Ingeniería Informática, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0002-3390-6158",
        email: "paula.contreras@uct.cl",
        corresponding: false,
      },
    ],
    doi: "https://doi.org/10.5555/riuct.2026.003",
    pages: "30-44",
    publishedAt: "2026-06-30",
    license: "CC BY 4.0",
    pdf: "#",
    html: "#",
  },
  {
    id: "art-004",
    issueId: "v1n1",
    section: "Notas técnicas",
    type: "Nota técnica",
    title:
      "Monitoreo de calidad del aire con sensores de bajo costo: una experiencia piloto en Temuco",
    abstractEs:
      "Se describe el diseño y la operación de una red piloto de sensores de bajo costo para monitorear material particulado en Temuco. La nota presenta la arquitectura de hardware y software, el protocolo de calibración y los primeros resultados. Se discuten las limitaciones de los sensores frente a estaciones de referencia y las condiciones necesarias para su uso en vigilancia complementaria.",
    abstractEn:
      "The design and operation of a low-cost sensor network for particulate matter monitoring in Temuco is described. The note presents the hardware and software architecture, the calibration protocol, and initial results. Limitations relative to reference stations and the conditions required for complementary monitoring are discussed.",
    keywordsEs: [
      "calidad del aire",
      "sensores de bajo costo",
      "material particulado",
      "monitoreo",
      "Temuco",
    ],
    keywordsEn: [
      "air quality",
      "low-cost sensors",
      "particulate matter",
      "monitoring",
      "Temuco",
    ],
    authors: [
      {
        name: "Benjamín Cárdenas Silva",
        affiliation:
          "Departamento de Ingeniería Ambiental, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0002-8821-4409",
        email: "benjamin.cardenas@uct.cl",
        corresponding: true,
      },
      {
        name: "Javiera Ortiz Poblete",
        affiliation:
          "Departamento de Ingeniería Ambiental, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0003-1173-5260",
        email: "javiera.ortiz@uct.cl",
        corresponding: false,
      },
    ],
    doi: "https://doi.org/10.5555/riuct.2026.004",
    pages: "45-56",
    publishedAt: "2026-06-30",
    license: "CC BY 4.0",
    pdf: "#",
    html: "#",
  },
  {
    id: "art-005",
    issueId: "v1n2",
    section: "Artículos",
    type: "Artículo de investigación",
    title:
      "Vulnerabilidad sísmica de puentes peatonales: evaluación paramétrica en La Araucanía",
    abstractEs:
      "Se evalúa la vulnerabilidad sísmica de puentes peatonales típicos de la Región de La Araucanía mediante análisis no lineal incremental. Se estudian distintas configuraciones de apoyo, longitud y material. Los resultados identifican las variables con mayor influencia en la probabilidad de daño y entregan recomendaciones para la priorización de inspecciones y refuerzos.",
    abstractEn:
      "The seismic vulnerability of typical pedestrian bridges in the Araucanía Region is assessed through incremental nonlinear analysis. Different support, length, and material configurations are studied. Results identify the variables with the greatest influence on damage probability and provide recommendations for prioritizing inspections and retrofits.",
    keywordsEs: [
      "vulnerabilidad sísmica",
      "puentes peatonales",
      "análisis estructural",
      "riesgo",
      "La Araucanía",
    ],
    keywordsEn: [
      "seismic vulnerability",
      "pedestrian bridges",
      "structural analysis",
      "risk",
      "Araucanía",
    ],
    authors: [
      {
        name: "Rodrigo Fuentes Cárcamo",
        affiliation:
          "Departamento de Ingeniería Civil, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0002-6674-9128",
        email: "rodrigo.fuentes@uct.cl",
        corresponding: true,
      },
      {
        name: "María José Sepúlveda",
        affiliation:
          "Departamento de Ingeniería Civil, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0001-4408-3375",
        email: "maria.sepulveda@uct.cl",
        corresponding: false,
      },
    ],
    doi: "https://doi.org/10.5555/riuct.2026.005",
    pages: "57-73",
    publishedAt: "2026-10-30",
    license: "CC BY 4.0",
    pdf: "#",
    html: "#",
    featured: true,
  },
  {
    id: "art-006",
    issueId: "v1n2",
    section: "Revisiones",
    type: "Artículo de revisión",
    title:
      "Visión computacional para la inspección automatizada de infraestructura vial: una revisión",
    abstractEs:
      "La inspección de infraestructura vial aún depende en gran medida de recorridos manuales. Esta revisión analiza el uso de visión computacional y aprendizaje profundo para detectar grietas, baches y deterioro superficial. Se comparan conjuntos de datos, arquitecturas y métricas, y se discuten los desafíos de generalización y despliegue en condiciones reales.",
    abstractEn:
      "Road infrastructure inspection still relies heavily on manual surveys. This review examines the use of computer vision and deep learning to detect cracks, potholes, and surface deterioration. Datasets, architectures, and metrics are compared, and the challenges of generalization and deployment under real conditions are discussed.",
    keywordsEs: [
      "visión computacional",
      "inspección vial",
      "aprendizaje profundo",
      "mantenimiento",
      "infraestructura",
    ],
    keywordsEn: [
      "computer vision",
      "road inspection",
      "deep learning",
      "maintenance",
      "infrastructure",
    ],
    authors: [
      {
        name: "Francisca Aravena Díaz",
        affiliation:
          "Departamento de Ingeniería Informática, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0003-2094-8811",
        email: "francisca.aravena@uct.cl",
        corresponding: true,
      },
      {
        name: "Tomás Vergara Ruiz",
        affiliation:
          "Departamento de Ingeniería Civil, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0001-9932-7046",
        email: "tomas.vergara@uct.cl",
        corresponding: false,
      },
    ],
    doi: "https://doi.org/10.5555/riuct.2026.006",
    pages: "74-92",
    publishedAt: "2026-10-30",
    license: "CC BY 4.0",
    pdf: "#",
    html: "#",
  },
  {
    id: "art-007",
    issueId: "v1n2",
    section: "Artículos",
    type: "Artículo de investigación",
    title:
      "Optimización energética de plantas de tratamiento de aguas residuales: caso de estudio",
    abstractEs:
      "Las plantas de tratamiento de aguas residuales son consumidoras intensivas de energía. Este trabajo modela el consumo de una planta de lodos activados y evalúa medidas de eficiencia en aireación, bombeo y recuperación de biogás. La combinación de medidas permite reducir el consumo eléctrico sin comprometer la calidad del efluente.",
    abstractEn:
      "Wastewater treatment plants are energy-intensive. This study models the consumption of an activated sludge plant and evaluates efficiency measures in aeration, pumping, and biogas recovery. The combination of measures reduces electricity consumption without compromising effluent quality.",
    keywordsEs: [
      "tratamiento de aguas",
      "eficiencia energética",
      "optimización",
      "lodos activados",
      "sostenibilidad",
    ],
    keywordsEn: [
      "wastewater treatment",
      "energy efficiency",
      "optimization",
      "activated sludge",
      "sustainability",
    ],
    authors: [
      {
        name: "Matías Villarroel Pinto",
        affiliation:
          "Departamento de Ingeniería Ambiental, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0002-7715-6603",
        email: "matias.villarroel@uct.cl",
        corresponding: true,
      },
      {
        name: "Constanza Reyes Muñoz",
        affiliation:
          "Departamento de Ingeniería Industrial, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0003-5581-2247",
        email: "constanza.reyes@uct.cl",
        corresponding: false,
      },
    ],
    doi: "https://doi.org/10.5555/riuct.2026.007",
    pages: "93-108",
    publishedAt: "2026-10-30",
    license: "CC BY 4.0",
    pdf: "#",
    html: "#",
  },
  {
    id: "art-008",
    issueId: "v1n2",
    section: "Revisiones",
    type: "Artículo de revisión",
    title:
      "Aprendizaje basado en proyectos en ingeniería: revisión sistemática de su impacto",
    abstractEs:
      "El aprendizaje basado en proyectos se ha extendido en la formación de ingenieros, pero su impacto sigue siendo discutido. Esta revisión sistemática sintetiza estudios sobre resultados académicos, competencias transversales y percepciones estudiantiles. Se identifican condiciones de implementación asociadas a mejores resultados y vacíos en la evidencia disponible en Latinoamérica.",
    abstractEn:
      "Project-based learning has spread in engineering education, but its impact remains debated. This systematic review synthesizes studies on academic outcomes, transferable skills, and student perceptions. Implementation conditions associated with better results and gaps in the evidence available for Latin America are identified.",
    keywordsEs: [
      "aprendizaje basado en proyectos",
      "educación en ingeniería",
      "revisión sistemática",
      "competencias",
      "docencia",
    ],
    keywordsEn: [
      "project-based learning",
      "engineering education",
      "systematic review",
      "competencies",
      "teaching",
    ],
    authors: [
      {
        name: "Daniela Espinoza Torres",
        affiliation:
          "Departamento de Ingeniería Industrial, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0001-2258-9036",
        email: "daniela.espinoza@uct.cl",
        corresponding: true,
      },
      {
        name: "Felipe Guzmán Leal",
        affiliation:
          "Departamento de Ingeniería Informática, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0002-4406-1193",
        email: "felipe.guzman@uct.cl",
        corresponding: false,
      },
    ],
    doi: "https://doi.org/10.5555/riuct.2026.008",
    pages: "109-126",
    publishedAt: "2026-10-30",
    license: "CC BY 4.0",
    pdf: "#",
    html: "#",
  },
];

export const keywordSuggestions: string[] = [
  "optimización",
  "sostenibilidad",
  "eficiencia energética",
  "materiales",
  "logística",
  "calidad del aire",
  "infraestructura",
  "aprendizaje profundo",
  "educación en ingeniería",
  "tratamiento de aguas",
  "vulnerabilidad sísmica",
  "visión computacional",
  "economía circular",
  "gestión de residuos",
  "modelación numérica",
];
