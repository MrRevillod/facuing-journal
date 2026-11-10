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
  receivedAt: string;
  acceptedAt: string;
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
  issn: "e-ISSN en trámite",
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
      text: "Este primer número reúne cuatro trabajos: una optimización de rutas de recolección de residuos en cuatro comunas de La Araucanía, una evaluación térmica de muros con materiales de cambio de fase, un pronóstico de demanda eléctrica para el campus y una nota técnica sobre sensores de bajo costo para medir calidad del aire en Temuco. Tres usan datos de la región; el cuarto describe una experiencia piloto y sus límites. Con este número la revista inicia su publicación continua: los artículos se incorporan cuando completan la evaluación y se agrupan en números semestrales.",
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
      text: "El segundo número reúne cuatro trabajos: dos sobre infraestructura, uno sobre eficiencia energética en plantas de tratamiento y uno sobre aprendizaje basado en proyectos. El primero evalúa la vulnerabilidad sísmica de puentes peatonales de la región; el segundo revisa el uso de visión computacional para inspeccionar caminos; el tercero mide cuánto puede bajar el consumo eléctrico de una planta de lodos activados; el cuarto sintetiza la evidencia sobre docencia en ingeniería. Los tres primeros usan datos locales y el cuarto revisa literatura internacional, con un apartado sobre lo que falta en América Latina.",
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
      "La recolección de residuos sólidos urbanos representa entre 30 y 50% del costo operativo de un municipio, y las rutas suelen diseñarse por experiencia del personal. Este trabajo aborda el problema como un ruteo de vehículos con ventanas de tiempo y múltiples depósitos, formulado como programación entera mixta. Como el modelo exacto no escala a las instancias reales, se comparan tres metaheurísticas: búsqueda tabú, recocido simulado y un algoritmo genético con reparación de rutas. Las instancias corresponden a cuatro comunas de La Araucanía, con 38 a 112 puntos de recolección y datos de demanda de una semana. En las cuatro comunas, la mejor configuración reduce entre 14 y 18% la distancia recorrida y entre 9 y 12% las emisiones de CO2 respecto de la operación registrada, con tiempos de cómputo de 6 a 22 minutos. La búsqueda tabú obtuvo los mejores resultados en tres de las cuatro instancias; el algoritmo genético fue más estable cuando aumentó el número de puntos. El trabajo discute la sensibilidad a la calidad de los datos catastrales y entrega las rutas resultantes para su uso por los municipios participantes.",
    abstractEn:
      "Municipal solid waste collection accounts for 30 to 50% of a municipality's operating cost, and routes are often designed from staff experience. This study addresses the problem as a vehicle routing problem with time windows and multiple depots, formulated as a mixed-integer program. Because the exact model does not scale to real instances, three metaheuristics are compared: tabu search, simulated annealing and a genetic algorithm with route repair. Instances cover four municipalities in the Araucanía Region, with 38 to 112 collection points and one week of demand data. Across the four municipalities, the best configuration reduces distance travelled by 14 to 18% and CO2 emissions by 9 to 12% relative to the recorded operation, with computing times of 6 to 22 minutes. Tabu search performed best in three of the four instances; the genetic algorithm was more stable as the number of points increased. The paper discusses sensitivity to the quality of cadastral data and provides the resulting routes for use by the participating municipalities.",
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
        email: "camila.rojas@prototype.cl",
        corresponding: true,
      },
      {
        name: "Diego Salazar Méndez",
        affiliation:
          "Departamento de Ingeniería Informática, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0001-7764-2210",
        email: "diego.salazar@prototype.cl",
        corresponding: false,
      },
    ],
    doi: "",
    pages: "1-14",
    publishedAt: "2026-06-30",
    receivedAt: "2025-11-12",
    acceptedAt: "2026-04-28",
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
      "Los materiales de cambio de fase permiten almacenar calor latente y amortiguar la oscilación térmica de un muro, pero su desempeño depende del clima, de la fracción volumétrica y de la temperatura de fusión. Se evaluó un muro de hormigón de 20 cm con una capa de material microencapsulado en viviendas de Temuco y Chillán. Se construyó un modelo térmico unidimensional validado con mediciones de dos prototipos durante 45 días de verano, y se simularon 24 combinaciones de fracción volumétrica (5, 10 y 15%) y punto de fusión (23, 25 y 27 °C). Los resultados muestran que la configuración de 10% y 25 °C reduce la demanda de refrigeración entre 11 y 16% en Temuco y entre 8 y 12% en Chillán, sin efecto apreciable en invierno. El sobrecosto de material se estima en 6 a 9% del costo del muro y se recupera en 9 a 14 años, según la tarifa eléctrica. El artículo entrega una tabla de selección por zona climática y advierte que los resultados no son extrapolables a muros ventilados.",
    abstractEn:
      "Phase change materials store latent heat and smooth the thermal oscillation of a wall, but their performance depends on climate, volumetric fraction and melting point. A 20 cm concrete wall with a layer of microencapsulated material was assessed in dwellings in Temuco and Chillán. A one-dimensional thermal model was validated against measurements from two prototypes over 45 summer days, and 24 combinations of volumetric fraction (5, 10 and 15%) and melting point (23, 25 and 27 °C) were simulated. The 10% and 25 °C configuration reduces cooling demand by 11 to 16% in Temuco and 8 to 12% in Chillán, with no appreciable winter effect. The material surcharge is estimated at 6 to 9% of wall cost and pays back in 9 to 14 years, depending on the electricity tariff. The article provides a selection table by climate zone and notes that the results cannot be extrapolated to ventilated walls.",
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
        email: "valentina.perez@prototype.cl",
        corresponding: true,
      },
      {
        name: "Andrés Muñoz Rivas",
        affiliation:
          "Departamento de Ingeniería Civil, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0002-9034-1176",
        email: "andres.munoz@prototype.cl",
        corresponding: false,
      },
    ],
    doi: "",
    pages: "15-29",
    publishedAt: "2026-06-30",
    receivedAt: "2025-12-03",
    acceptedAt: "2026-05-14",
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
      "Los campus universitarios concentran una demanda eléctrica con patrones propios: caídas en vacaciones, peaks en horarios de laboratorio y una base nocturna relativamente estable. Este trabajo compara cuatro modelos de pronóstico horario para el campus San Juan Pablo II de la UCT: un modelo autorregresivo integrado, un suavizado exponencial, una red LSTM y una red GRU. Se usaron 18 meses de datos de 42 medidores, con resolución de 15 minutos agregada a hora. Los modelos se entrenaron con ventanas móviles de 90 días y se evaluaron con el error absoluto medio porcentual en un horizonte de 24 horas. La red GRU obtuvo el menor error (4,8%), seguida de la LSTM (5,3%); los modelos clásicos superaron el 7%. Al incorporar el calendario académico como variable, el error de la GRU bajó a 4,1% en semanas de clases y a 3,6% en periodos sin actividad. El artículo describe el preprocesamiento, los hiperparámetros y los errores por franja horaria, y deja disponible el código de entrenamiento.",
    abstractEn:
      "University campuses show a distinctive electricity demand pattern: drops during holidays, peaks in laboratory hours and a relatively stable night base. This study compares four hourly forecasting models for the San Juan Pablo II campus of UCT: an integrated autoregressive model, exponential smoothing, an LSTM network and a GRU network. Eighteen months of data from 42 meters were used, with 15-minute resolution aggregated to hourly values. Models were trained on rolling 90-day windows and evaluated with mean absolute percentage error over a 24-hour horizon. The GRU obtained the lowest error (4.8%), followed by the LSTM (5.3%); classical models exceeded 7%. Adding the academic calendar as a variable lowered the GRU error to 4.1% during teaching weeks and 3.6% during breaks. The article describes preprocessing, hyperparameters and errors by time band, and releases the training code.",
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
        email: "ignacio.herrera@prototype.cl",
        corresponding: true,
      },
      {
        name: "Paula Contreras Vidal",
        affiliation:
          "Departamento de Ingeniería Informática, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0002-3390-6158",
        email: "paula.contreras@prototype.cl",
        corresponding: false,
      },
    ],
    doi: "",
    pages: "30-44",
    publishedAt: "2026-06-30",
    receivedAt: "2026-01-20",
    acceptedAt: "2026-05-30",
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
      "Temuco presenta episodios de material particulado fino durante el invierno, y las estaciones de referencia no cubren todos los barrios. Esta nota describe una red piloto de 12 sensores ópticos de bajo costo instalados entre junio y septiembre de 2025 en cuatro sectores de la ciudad. Cada nodo mide PM2.5 y PM10 cada cinco minutos, transmite por red celular y almacena respaldo local. El protocolo de calibración incluyó 21 días de co-ubicación con la estación oficial del centro y un ajuste por humedad relativa. Tras la calibración, la correlación con la estación de referencia fue de 0,86 para PM2.5, con un sesgo de -3,2 microgramos por metro cúbico. La red detectó diferencias de hasta 40% entre sectores en las mismas horas, lo que sugiere la influencia de la combustión residencial. Se describen los costos (USD 180 por nodo), los fallos más frecuentes y las condiciones de mantenimiento. Los autores advierten que estos sensores complementan, pero no reemplazan, el monitoreo de referencia.",
    abstractEn:
      "Temuco experiences fine particulate episodes during winter, and reference stations do not cover every neighbourhood. This note describes a pilot network of 12 low-cost optical sensors installed between June and September 2025 in four areas of the city. Each node measures PM2.5 and PM10 every five minutes, transmits over the cellular network and keeps a local backup. The calibration protocol included 21 co-location days with the official downtown station and a relative humidity adjustment. After calibration, correlation with the reference station was 0.86 for PM2.5, with a bias of -3.2 micrograms per cubic metre. The network found differences of up to 40% between areas at the same hours, suggesting the influence of residential combustion. Costs (USD 180 per node), the most frequent failures and maintenance conditions are described. The authors note that these sensors complement, but do not replace, reference monitoring.",
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
        email: "benjamin.cardenas@prototype.cl",
        corresponding: true,
      },
      {
        name: "Javiera Ortiz Poblete",
        affiliation:
          "Departamento de Ingeniería Ambiental, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0003-1173-5260",
        email: "javiera.ortiz@prototype.cl",
        corresponding: false,
      },
    ],
    doi: "",
    pages: "45-56",
    publishedAt: "2026-06-30",
    receivedAt: "2026-02-10",
    acceptedAt: "2026-06-05",
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
      "Los puentes peatonales de La Araucanía se construyeron en su mayoría entre 1995 y 2010, con diseños que no incorporan los criterios de desempeño actuales. Se evaluó la vulnerabilidad sísmica de 6 tipologías representativas mediante análisis no lineal incremental con 22 registros escalados. Las variables estudiadas fueron el tipo de apoyo (neopreno, deslizante y fijo), la longitud (25, 35 y 45 m) y el material de la superestructura (hormigón y acero). Para cada caso se construyó un modelo de fibras y se calcularon curvas de fragilidad para cuatro estados de daño. La longitud y el tipo de apoyo explican la mayor parte de la variabilidad: los puentes sobre 35 m con apoyos fijos duplican la probabilidad de daño severo frente a la tipología base. El material tiene un efecto menor que el esperado, cercano al 8% en la mediana de colapso. Con esos resultados se propone una priorización de inspección en tres niveles y un umbral de intervención para las estructuras de mayor exposición. Las curvas y los modelos quedan disponibles para revisión.",
    abstractEn:
      "Most pedestrian bridges in the Araucanía Region were built between 1995 and 2010, under design criteria that do not reflect current performance requirements. The seismic vulnerability of six representative typologies was assessed through incremental dynamic analysis with 22 scaled records. The variables studied were bearing type (elastomeric, sliding and fixed), span (25, 35 and 45 m) and superstructure material (concrete and steel). A fibre model was built for each case and fragility curves were derived for four damage states. Span and bearing type explain most of the variability: bridges over 35 m with fixed bearings double the probability of severe damage relative to the base typology. Material has a smaller effect than expected, close to 8% in the collapse median. Based on these results, a three-level inspection priority and an intervention threshold for the most exposed structures are proposed. Curves and models are available for review.",
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
        email: "rodrigo.fuentes@prototype.cl",
        corresponding: true,
      },
      {
        name: "María José Sepúlveda",
        affiliation:
          "Departamento de Ingeniería Civil, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0001-4408-3375",
        email: "maria.sepulveda@prototype.cl",
        corresponding: false,
      },
    ],
    doi: "",
    pages: "57-73",
    publishedAt: "2026-10-30",
    receivedAt: "2026-03-02",
    acceptedAt: "2026-09-12",
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
      "La inspección de caminos en Chile todavía se hace en gran medida con recorridos visuales y fichas manuales, lo que limita la frecuencia y la comparabilidad de los registros. Esta revisión examina 84 publicaciones entre 2015 y 2025 sobre visión computacional aplicada a la detección de grietas, baches y deterioro superficial. Se clasificaron los trabajos por tarea (clasificación, detección, segmentación), arquitectura, conjunto de datos y métricas. La segmentación semántica con redes U-Net y sus variantes concentra el 46% de los estudios; los conjuntos públicos más usados son Crack500, DeepCrack y RDD2022, con sesgo hacia pavimentos asfálticos en buen estado de iluminación. Solo 11 trabajos reportan validación en condiciones de campo y 6 describen el costo computacional de despliegue. Las métricas no son comparables entre estudios: el F1 reportado varía entre 0,62 y 0,94 según el conjunto y el preprocesamiento. La revisión concluye con una propuesta de protocolo mínimo de reporte y con las brechas para el contexto chileno: pavimentos de hormigón, sombra, polvo y cámaras de bajo costo.",
    abstractEn:
      "Road inspection in Chile still relies largely on visual surveys and manual records, which limits the frequency and comparability of data. This review examines 84 publications from 2015 to 2025 on computer vision applied to crack, pothole and surface deterioration detection. Studies were classified by task (classification, detection, segmentation), architecture, dataset and metrics. Semantic segmentation with U-Net and its variants accounts for 46% of the studies; the most used public datasets are Crack500, DeepCrack and RDD2022, with a bias towards asphalt pavements under good lighting. Only 11 studies report field validation and 6 describe deployment computing cost. Metrics are not comparable across studies: reported F1 ranges from 0.62 to 0.94 depending on dataset and preprocessing. The review closes with a proposal for a minimum reporting protocol and with gaps for the Chilean context: concrete pavements, shadow, dust and low-cost cameras.",
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
        email: "francisca.aravena@prototype.cl",
        corresponding: true,
      },
      {
        name: "Tomás Vergara Ruiz",
        affiliation:
          "Departamento de Ingeniería Civil, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0001-9932-7046",
        email: "tomas.vergara@prototype.cl",
        corresponding: false,
      },
    ],
    doi: "",
    pages: "74-92",
    publishedAt: "2026-10-30",
    receivedAt: "2026-02-18",
    acceptedAt: "2026-09-05",
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
      "El tratamiento de aguas residuales puede consumir entre 0,3 y 0,6 kWh por metro cúbico tratado, y en plantas con aireación extendida la mayor parte se destina al soplado. Este trabajo modela el consumo de una planta de lodos activados de 45.000 metros cúbicos por día y evalúa tres medidas: control de oxígeno disuelto por soplado intermitente, cambio de bombas por equipos de mayor eficiencia y recuperación de biogás en el digestor. Se calibró un modelo biocinético con 12 meses de datos de operación y se simularon escenarios por separado y combinados. La aireación representa el 54% del consumo; el control por oxígeno disuelto reduce 17% del total sin afectar la demanda química de oxígeno del efluente. Las bombas aportan 6% y la recuperación de biogás cubre 23% del consumo eléctrico. La combinación de las tres medidas reduce 38% el consumo y tiene un payback de 4,2 años con la tarifa actual. Se discuten los supuestos de carga y las condiciones de operación que podrían alterar ese resultado.",
    abstractEn:
      "Wastewater treatment can consume between 0.3 and 0.6 kWh per cubic metre treated, and in extended aeration plants most of it goes to blowing. This study models the consumption of a 45,000 cubic metre per day activated sludge plant and assesses three measures: dissolved oxygen control through intermittent blowing, replacement of pumps with higher efficiency units and biogas recovery from the digester. A biokinetic model was calibrated with 12 months of operating data and scenarios were simulated separately and combined. Aeration accounts for 54% of consumption; dissolved oxygen control cuts 17% of the total without affecting effluent chemical oxygen demand. Pumps contribute 6% and biogas recovery covers 23% of electricity consumption. The three measures combined reduce consumption by 38% and pay back in 4.2 years at the current tariff. Load assumptions and operating conditions that could change that result are discussed.",
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
        email: "matias.villarroel@prototype.cl",
        corresponding: true,
      },
      {
        name: "Constanza Reyes Muñoz",
        affiliation:
          "Departamento de Ingeniería Industrial, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0003-5581-2247",
        email: "constanza.reyes@prototype.cl",
        corresponding: false,
      },
    ],
    doi: "",
    pages: "93-108",
    publishedAt: "2026-10-30",
    receivedAt: "2026-04-06",
    acceptedAt: "2026-09-22",
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
      "El aprendizaje basado en proyectos se usa cada vez más en la formación de ingenieros, aunque su efecto sobre los resultados de aprendizaje no está claro. Esta revisión sistemática siguió el protocolo PRISMA y analizó 52 estudios publicados entre 2010 y 2025 en revistas indexadas, con muestras de educación superior en ingeniería. Se extrajeron datos sobre diseño, duración, tamaño de la muestra, instrumentos y resultados. Los estudios reportan mejoras en competencias transversales como trabajo en equipo y comunicación (38 de 52), mientras que los resultados en pruebas estandarizadas son mixtos (14 a favor, 9 sin diferencia, 3 en contra). La duración del proyecto y la formación docente aparecen asociadas a mejores resultados; el tamaño del curso no muestra relación consistente. La mayoría de los estudios usa muestras pequeñas y mediciones de percepción, lo que limita la comparación. Se identifican vacíos para Latinoamérica: solo 4 trabajos provienen de la región y ninguno evalúa seguimiento a egresados.",
    abstractEn:
      "Project-based learning is increasingly used in engineering education, although its effect on learning outcomes remains unclear. This systematic review followed the PRISMA protocol and analysed 52 studies published between 2010 and 2025 in indexed journals, with higher education engineering samples. Data on design, duration, sample size, instruments and outcomes were extracted. Studies report gains in transferable skills such as teamwork and communication (38 of 52), while standardised test results are mixed (14 in favour, 9 with no difference, 3 against). Project duration and teacher training appear associated with better results; course size shows no consistent relationship. Most studies use small samples and perception measures, which limits comparison. Gaps for Latin America are identified: only 4 studies come from the region and none evaluates graduate follow-up.",
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
        email: "daniela.espinoza@prototype.cl",
        corresponding: true,
      },
      {
        name: "Felipe Guzmán Leal",
        affiliation:
          "Departamento de Ingeniería Informática, Universidad Católica de Temuco",
        orcid: "https://orcid.org/0000-0002-4406-1193",
        email: "felipe.guzman@prototype.cl",
        corresponding: false,
      },
    ],
    doi: "",
    pages: "109-126",
    publishedAt: "2026-10-30",
    receivedAt: "2026-01-30",
    acceptedAt: "2026-09-18",
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

export interface InPressItem {
  title: string;
  authors: string;
  section: string;
  acceptedAt: string;
}

export const inPress: InPressItem[] = [
  {
    title:
      "Estimación de la escorrentía urbana con datos abiertos: aplicación a la cuenca del estero Coihueco",
    authors: "Paula Contreras Vidal, Ignacio Herrera Lagos",
    section: "Artículo de investigación",
    acceptedAt: "2026-10-08",
  },
  {
    title:
      "Diseño de un índice de vulnerabilidad para edificios de hormigón armado en ciudades intermedias",
    authors: "Rodrigo Fuentes Cárcamo",
    section: "Artículo de investigación",
    acceptedAt: "2026-09-26",
  },
];
