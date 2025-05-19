import { ExperienceType, EducationType, ProjectType, SkillType } from '../types';

export const experiences: ExperienceType[] = [
  {
    id: 1,
    title: "Ingénieur IA",
    company: "Aba Technology",
    location: "Casablanca, Morocco",
    startDate: "Décembre 2024",
    endDate: "Présent",
    type: "CDI",
    responsibilities: [
      "Développement d'un système de sécurité pour les unités mobiles (suivi des personnes, analyse de temps, détection de déchets et chiens)",
      "Amélioration du système de reconnaissance de marques de voitures avec détection de logos via ResNet50",
      "Développement d'un chatbot interne basé sur LLaMA API avec gestion des sessions et identification des utilisateurs",
      "Conception d'un système de gestion et recherche de CVs avec indexations avancées"
    ],
    technologies: "Python, YOLO, OpenCV, TensorFlow, ResNet50, PyTorch, LLaMA, Flask, SQLite, MySQL, Qdrant"
  },
  {
    id: 2,
    title: "Ingénieur IA",
    company: "Martech",
    location: "Rabat, Morocco",
    startDate: "Septembre 2024",
    endDate: "Octobre 2024",
    type: "Stage",
    responsibilities: [
      "Conception d'une application pour scraper et analyser des fichiers PDF volumineux",
      "Implémentation d'analyse NLP avec LLaMA API et recherche vectorielle via Qdrant",
      "Optimisation des performances avec Celery et Redis",
      "Développement d'un système de recommandation basé sur des offres"
    ],
    technologies: "Python, Flask, Qdrant, MySQL, Docker, Redis, Celery, LLaMA Model"
  },
  {
    id: 3,
    title: "Ingénieur IA",
    company: "Aba Technology",
    location: "Casablanca, Morocco",
    startDate: "Février 2024",
    endDate: "Juillet 2024",
    type: "Stage",
    responsibilities: [
      "Amélioration de la sécurité des frontières marocaines à l'aide de l'IA",
      "Benchmark des solutions existantes et état de l'art",
      "Collecte et traitement des données d'après les caméras installées",
      "Entraînement des modèles, tests et déploiement",
      "Extraction des informations des cartes de visite"
    ],
    technologies: "Python, Skimage, OpenCV, Ultralytics, PyTorch, LabelImg, CUDA, Streamlit, TrOCR, LLama3"
  }
];

export const education: EducationType[] = [
  {
    id: 1,
    degree: "Cycle d'ingénierie d'Etat en Informatique",
    institution: "ISMAGI",
    location: "Rabat, Morocco",
    startYear: "2021",
    endYear: "2024"
  },
  {
    id: 2,
    degree: "Classe Préparatoire Intégrée",
    institution: "ISMAGI",
    location: "Rabat, Morocco",
    startYear: "2019",
    endYear: "2021"
  },
  {
    id: 3,
    degree: "Baccalauréat Option Science Physique et Chimie",
    institution: "Lycée Technique",
    location: "Larache, Morocco",
    startYear: "2018",
    endYear: "2019"
  }
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Système de Sécurité pour Les Unités Mobile",
    description: "Développement de solutions basées sur l'IA pour suivre les personnes, analyser leur temps passé dans des zones spécifiques, et détecter les déchets et les chiens.",
    technologies: ["Python", "YOLO", "OpenCV", "TensorFlow"],
    imageUrl: "https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg"
  },
  {
    id: 2,
    title: "Reconnaissance de Marques de Voitures avec Logos",
    description: "Amélioration du système de reconnaissance de marques de voitures en intégrant la détection de logos via ResNet50.",
    technologies: ["Python", "ResNet50", "PyTorch"],
    imageUrl: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg"
  },
  {
    id: 3,
    title: "Chatbot Interne avec LLaMA",
    description: "Développement d'un chatbot intelligent basé sur LLaMA API, avec gestion des sessions personnalisées et identification des utilisateurs.",
    technologies: ["Python", "LLaMA", "Flask", "SQLite"],
    imageUrl: "https://images.pexels.com/photos/7550519/pexels-photo-7550519.jpeg"
  },
  {
    id: 4,
    title: "Système de Recommandation basé sur des offres",
    description: "Conception d'une application pour scraper, analyser des fichiers PDF volumineux, et recommander des offres adaptées aux utilisateurs avec analyse NLP et recherche vectorielle.",
    technologies: ["Python", "Flask", "Qdrant", "MySQL", "Docker", "Redis", "Celery", "LLaMA"],
    imageUrl: "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg"
  },
  {
    id: 5,
    title: "Gestion et Recherche de CVs",
    description: "Conception d'un système pour stocker et rechercher des CVs par noms et domaines, avec indexations avancées pour une recherche rapide.",
    technologies: ["Python", "Flask", "LLaMA", "MySQL", "Qdrant"],
    imageUrl: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg"
  },
  {
    id: 6,
    title: "Sécurité des Frontières avec IA",
    description: "Amélioration de la sécurité des frontières marocaines à l'aide de l'IA avec collecte de données et entraînement de modèles.",
    technologies: ["Python", "OpenCV", "Ultralytics", "PyTorch", "CUDA", "Streamlit"],
    imageUrl: "https://images.pexels.com/photos/1770808/pexels-photo-1770808.jpeg"
  }
];

export const skills: SkillType[] = [
  {
    id: 1,
    category: "ai_apis",
    items: ["OpenAI API", "LLama API", "Groq API"]
  },
  {
    id: 2,
    category: "streaming",
    items: ["Streamlit"]
  },
  {
    id: 3,
    category: "gpu",
    items: ["CUDA"]
  },
  {
    id: 4,
    category: "databases",
    items: ["SQL Server", "PostgreSQL", "MySQL"]
  },
  {
    id: 5,
    category: "web_dev",
    items: ["Spring Boot", "Angular", "Flask"]
  },
  {
    id: 6,
    category: "collab_tools",
    items: ["Git/GitHub", "Docker"]
  },
  {
    id: 7,
    category: "computer_vision",
    items: ["OpenCV", "YOLO", "Skimage", "TrOCR"]
  },
  {
    id: 8,
    category: "data_mining",
    items: ["Data Mining Techniques", "Feature Engineering"]
  },
  {
    id: 9,
    category: "nlp",
    items: ["NLP", "Text Processing", "Sentiment Analysis"]
  },
  {
    id: 10,
    category: "machine_learning",
    items: ["scikit-learn", "MATLAB"]
  },
  {
    id: 11,
    category: "programming",
    items: ["Python", "R", "Java", "C", "Scala"]
  },
  {
    id: 12,
    category: "data_viz",
    items: ["Power BI", "Tableau Desktop"]
  },
  {
    id: 13,
    category: "iot",
    items: ["IoT Devices", "Sensors Integration"]
  }
];

export const contactInfo = {
  email: "safirhoussam2001@gmail.com",
  phone: "+212691125007",
  location: "Rabat, Morocco"
};