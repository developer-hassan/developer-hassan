import type { StaticImageData } from "next/image";

// import forkify from "@/../public/portfolio/forkify.png";
// import omnifood from "@/../public/portfolio/omnifood.png";
import crownClothing from "@/../public/portfolio/crown-clothing.png";
// import antheia from "@/../public/portfolio/antheia.png";
// import retrosGallery from "@/../public/portfolio/retros-gallery.png";
import triform from "@/../public/portfolio/triform.png";
// import truebrydge from "@/../public/portfolio/truebrydge.png";
// import allonia from "@/../public/portfolio/allonia.png";
// import voytravel from "@/../public/portfolio/voytravel.png";
// import bankist from "@/../public/portfolio/bankist.png";
// import wishbux from "@/../public/portfolio/wishbux.png";
// import natours from "@/../public/portfolio/natours.png";
// import natoursApp from "@/../public/portfolio/natours-app.png";

const PROJECT_TYPES = {
  MACHINE_DEEP_LEARNING: "Machine Learning / Deep Learning",
  GENERATIVE_AI: "Generative AI",
  API_INTEGRATION: "APIs Development and Integration",
  WEB_APP: "Web Application",
  CUSTOM_APP: "Custom Application Development",
  PYTHON_GUI: "Python GUI and Frontend",
  SPA: "Single Page Application (SPA)",
} as const;

export type ProjectType = (typeof PROJECT_TYPES)[keyof typeof PROJECT_TYPES];

export type PortfolioItem = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: StaticImageData;
  url: string;
};

type Portfolios = {
  [key in ProjectType]: PortfolioItem[];
};

let PORTFOLIO: Portfolios = {
  // Machine Learning and Deep Learning
  [PROJECT_TYPES.MACHINE_DEEP_LEARNING]: [
    {
      title: "VocalMolder",
      description: "Speak Your Mind, Bear Your Personalized Voice. ",
      technologies: ["FastAPI", "MySQL", "Python", "GitHub", "Text-to-speech"],
      imageUrl: triform,
      url: "#",
    },
    {
      title: "HeartGuard ML: Analysis and Classification",
      description: "Predicting Heart Disease, Safeguarding Hearts.",
      technologies: ["Scikit-Learn", "Pandas", "Matplotlib", "NumPy", "Seaborn", "Python", "GitHub"],
      imageUrl: triform,
      url: "#",
    },
    {
      title: "TensorFlow Visionary: Image Classification Mastery",
      description: "See the Unseen, Unleashing the Power of TensorFlow for Image Classification.",
      technologies: ["Scikit-Learn", "TensorFlow", "Keras", "Pandas", "Matplotlib", "NumPy", "Seaborn", "Python", "GitHub"],
      imageUrl: triform,
      url: "#",
    }
  ],
  // Generative AI
  [PROJECT_TYPES.GENERATIVE_AI]: [
    {
      title: "Intellyfriend",
      description: "Where knowledge becomes friendship",
      technologies: ["LangChain", "LLMs", "FastAPI", "Python", "GitHub"],
      imageUrl: triform,
      url: "#",
    },
    {
      title: "Ringneck AI",
      description: "AI Agents, Human Touch: Redefining Customer Service",
      technologies: [
        "FastAPI",
        "LangChain",
        "MySQL",
        "WebSockets",
        "Python",
        "GitHub",
      ],
      imageUrl: triform,
      url: "https://ringneck.ai/",
    },
  ],

  [PROJECT_TYPES.API_INTEGRATION]: [
    {
      title: "Manyface",
      description: "Revolutionizing Content Creation with AI-Generated Videos",
      technologies: [
        "TensorFlow",
        "PyTorch",
        "Django",
        "FastAPI",
        "Python",
        "GitHub",
        "OpenCV",
        "OOP",
      ],
      imageUrl: triform,
      url: "https://manyface.io/",
    },
    {
      title: "BoardBuddy",
      description: "Effortless Control, Powerful Automation: Trello, Your Way",
      technologies: [
        "FastAPI",
        "LangChain",
        "MySQL",
        "RestAPI",
        "OOP",
        "Python",
        "GitHub",
      ],
      imageUrl: triform,
      url: "#",
    },
  ],

  [PROJECT_TYPES.CUSTOM_APP]: [
    {
      title: "Ringneck AI",
      description: "AI Agents, Human Touch: Redefining Customer Service",
      technologies: [
        "FastAPI",
        "LangChain",
        "MySQL",
        "WebSockets",
        "Python",
        "GitHub",
      ],
      imageUrl: triform,
      url: "https://ringneck.ai/",
    },
    {
      title: "Serpent Adventure",
      description: "Dive into the Classic Snake Game with Python's Turtle Graphics!",
      technologies: ["Python", "Turtle", "OOP", "GitHub"],
      imageUrl: triform,
      url: "#",
    }
  ],

  // Web app
  [PROJECT_TYPES.WEB_APP]: [
    {
      title: "Triform",
      description: "Unleashing AI Potential",
      technologies: [
        "Laravel",
        "PHP",
        "Livewire",
        "Alpine",
        "Ace",
        "Lodash",
        "Axios",
      ],
      imageUrl: triform,
      url: "https://triform.movs.ai/",
    },
  ],
} as const;

export default PORTFOLIO;
