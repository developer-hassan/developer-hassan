const SKILLS = {
  "Machine Learning / Deep learning": [
    // Languages
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "Keras",
    "NumPy",
    "Pandas",
    "Jupyter Notebooks",
    "Google Colab",
    "Matplotlib",
    "Seaborn",
    "TensorBoard",
    "Weights and Biases",
    "Transformers",
    "Peft",
    "CNN",
    "ANN",
    "RNN",
    "NLP",
    "Classification",
    "Regression",
    "Computer Vision",
    "Git",
    "GitHub",
    "GitLab",
  ],
  "Generative AI Development": [
    "LLMs",
    "LangChain",
    "OpenAI",
    "Llama2",
    "Gemini",
    "Mistral",
    "Groq",
    "Pinecone",
    "ChromaDB",
    "FAISS",
    "Llama-Index",
    "Ollama",
    "HuggingFace",
    "Gpt4all",
    "LangServe",
    "LangGraph",
    "Streaming",
    "Websockets",
    "RAG",
    "Prompt Engineering",
    "Automation",
    "Synthetic Data Generation",
    "Image Generation",
    "AI Assistant",
    "Transformers",
    "GANs (Generative Adversarial Networks)",
    "Stable Diffusion",
    "Peft",
    "NLP (Natural Language Processing)",
  ],
  "API Integration and Development": [
    "RestAPI",
    "WebSockets",
    "API Integration",
    "Python Development",
    "FastAPI",
    "Django",
    "Flask",
    "Requests",
    "Git",
    "PyCharm",
    "VSCode",
    "Web Development",
    "Postman",
    "OAuth",
    "AWS API Gateway",
    "OpenAPI",
    "Swagger",
    "Serverless Functions",
    "JSON",
    "API Testing",
    "Validation",
    "CORS",
    "Asyncio",
    "HTTP",
    "HTTPs",
    "API Versioning",
    "GraphQL",
  ],
  "Back-End Development": [
    // Databases
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLite",

    // APIs
    "RESTful APIs",
    "GraphQL",
    "WebSockets",

    // Infrastructure
    "Docker",

    "AWS",
    "Google Cloud",
    "Azure",
    "Heroku",
    "Netlify",
    "Vercel",

    // Serverless Computing
    "AWS Lambda",

    // Backend Testing
    "Postman",

    // API Documentation
    "Swagger",
    "FastAPI Redoc",

    // New Back-End Techniques
    "WebSockets",
    "Microservices",
  ],
  "Software Development": [
    // Version Control
    "Git",
    "GitHub",
    // "GitLab",

    // Debugging
    "Browser DevTools",

    // CI/CD Orchestration
    // "GitLab CI",
    "GitHub Actions",

    // Virtualization
    "VirtualBox",
    "VMware",

    // DevOps Culture
    // "Collaborative Culture",
    // "Continuous Learning",
    "Automation",
    // "Infrastructure as Code (IaC)",

    // Project Management
    // "Asana",
    "Jira",
    "Trello",
    "Testiny",
    "Linear",

    // Cloud Storage
    "Amazon S3",
    // "Azure Blob Storage",

    // Code Review
    "Pull Requests",
    "Code Reviews",

    // Remote Collaboration Tools
    "Zoom",
    "MS Teams",
    "Skype",
    "Discord",

    "Slack",

    // Soft Skills
    "Communication",
    "Teamwork",
    "Problem-Solving",
    "Time Management",

    // Presentation Skills
    "Public Speaking",
    // "PowerPoint",

    // New Additional Skills
    "Emotional Intelligence",
    // "Conflict Resolution",
    "Leadership",
    "Adaptability",

    // New Soft Skills
    "Empathy",
    // "Resilience",
    "Critical Thinking",
    // "Decision Making",

    // Project Collaboration
    "Cross-Functionality",
    // "Agile Ceremonies",
    "Team Building",
    "Remote Team Management",
  ],
};

export default SKILLS;

type SkillsType = typeof SKILLS;

export type SkillKeyType = keyof SkillsType;
