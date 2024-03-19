import type { StaticImageData } from "next/image";

import triform from "@/../public/portfolio/triform.png";
import manyface from "@/../public/portfolio/manyface.png";
import rag from "@/../public/portfolio/rag.png";
import heart_disease from "@/../public/portfolio/heart_disease.jpg";
import image_classification from "@/../public/portfolio/image_classification.jpg";
import ringneck from "@/../public/portfolio/ringneck.png";
import snake from "@/../public/portfolio/snake.png";
import voice_clone from "@/../public/portfolio/text-to-speech.png";
import boardbuddy from "@/../public/portfolio/trello.png";


const PROJECT_TYPES = {
  MACHINE_DEEP_LEARNING: "Machine Learning / Deep Learning",
  GENERATIVE_AI: "Generative AI",
  API_INTEGRATION: "APIs Development and Integration",
  WEB_APP: "Web Application",
  CUSTOM_APP: "Custom Application Development",
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
      imageUrl: voice_clone,
      url: "#",
    },
    {
      title: "HeartGuard ML",
      description: "Predicting Heart Disease, Safeguarding Hearts.",
      technologies: ["Scikit-Learn", "Pandas", "Matplotlib", "NumPy", "Seaborn", "Python", "GitHub"],
      imageUrl: heart_disease,
      url: "#",
    },
    {
      title: "Food Vision",
      description: "See the Unseen, AI Classifies Food images.",
      technologies: ["Scikit-Learn", "TensorFlow", "Keras", "Pandas", "Matplotlib", "NumPy", "Seaborn", "Python", "GitHub"],
      imageUrl: image_classification,
      url: "#",
    }
  ],
  // Generative AI
  [PROJECT_TYPES.GENERATIVE_AI]: [
    {
      title: "Intellyfriend",
      description: "Where knowledge becomes friendship",
      technologies: ["LangChain", "LLMs", "FastAPI", "Python", "GitHub"],
      imageUrl: rag,
      url: "#",
    },
    {
      title: "Ringneck AI",
      description: "Visionary AI: Redefining Customer Service",
      technologies: [
        "FastAPI",
        "LangChain",
        "MySQL",
        "WebSockets",
        "Python",
        "GitHub",
      ],
      imageUrl: ringneck,
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
      imageUrl: manyface,
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
      imageUrl: boardbuddy,
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
      imageUrl: ringneck,
      url: "https://ringneck.ai/",
    },
    {
      title: "Serpent Adventure",
      description: "Dive into the Classic Snake Game with Python's Turtle Graphics!",
      technologies: ["Python", "Turtle", "OOP", "GitHub"],
      imageUrl: snake,
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
