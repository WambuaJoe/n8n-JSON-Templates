export interface Project {
  slug: string;
  title: string;
  description: string;
  explanation: string;
  tags: string[];
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  jsonFileName: string; // Just the filename, e.g., 'rag-chatbot.json'
  screenshot?: string; // URL to screenshot image
}

// Configuration for site settings
export const siteConfig = {
  portfolioUrl: 'https://flowcv.me/joseph-katuawambua', // Edit this URL to point to your portfolio
  githubUsername: 'WambuaJoe', // Replace with your GitHub username
  githubRepo: 'n8n-JSON-Templates', // Replace with your GitHub repository name
  githubRawBaseUrl: 'https://raw.githubusercontent.com/WambuaJoe/n8n-Portfolio-Projects/refs/heads/main/design/assets/workflows/',
};

// Helper function to get the full GitHub raw URL
export const getGithubJsonUrl = (jsonFileName: string): string => {
  return `${siteConfig.githubRawBaseUrl}${jsonFileName}`;
};

// Replace with your actual projects
export const projectsData: Project[] = [
  {
    slug: 'rag-chatbot',
    title: 'RAG Chatbot Workflow',
    description: 'AI-powered chatbot with retrieval-augmented generation capabilities.',
    explanation: 'This workflow creates an intelligent chatbot that uses retrieval-augmented generation (RAG) to provide accurate, context-aware responses. It combines document retrieval with AI generation to answer questions based on your knowledge base.',
    tags: ['AI', 'Chatbot', 'RAG'],
    complexity: 'Advanced',
    jsonFileName: 'rag-chatbot.json',
    screenshot: 'src/data/screenshots/Telegram Chatbot.png'
  },
  {
    slug: 'gmail-ai',
    title: 'Gmail AI Assistant',
    description: 'AI-powered Gmail automation for intelligent email processing and responses.',
    explanation: 'This workflow integrates AI capabilities with Gmail to automatically process incoming emails, categorize them, and generate intelligent responses. It can handle customer inquiries, filter spam, prioritize important emails, and even draft replies based on email content and context.',
    tags: ['Gmail', 'AI', 'Email', 'Automation'],
    complexity: 'Advanced',
    jsonFileName: 'gmail-ai.json',
    screenshot: '/src/data/screenshots/gmail-AI.png'
  }
];

// Helper function to add new projects
export const addProject = (project: Project) => {
  projectsData.push(project);
};