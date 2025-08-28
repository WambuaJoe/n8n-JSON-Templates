export interface Project {
  slug: string;
  title: string;
  description: string;
  explanation: string;
  tags: string[];
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  jsonFileName: string; // Just the filename, e.g., 'rag-chatbot.json'
  screenshot?: string; // URL to screenshot image
  video?: string; // URL to demo video
}

// Configuration for site settings
export const siteConfig = {
  portfolioUrl: 'https://n8n-projects-portfolio.netlify.app/', // Edit this URL to point to your portfolio
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
    screenshot: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
  },
  {
    slug: 'gmail-ai',
    title: 'Gmail AI Assistant',
    description: 'AI-powered Gmail automation for intelligent email processing and responses.',
    explanation: 'This workflow integrates AI capabilities with Gmail to automatically process incoming emails, categorize them, and generate intelligent responses. It can handle customer inquiries, filter spam, prioritize important emails, and even draft replies based on email content and context.',
    tags: ['Gmail', 'AI', 'Email', 'Automation'],
    complexity: 'Advanced',
    jsonFileName: 'gmail-ai.json',
    screenshot: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1200',
    video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
  }
  // New workflow template
//   {
//     slug: 'my-new-workflow',
//     title: 'My New Workflow', 
//     description: 'Brief description...',
//     explanation: 'Detailed explanation...',
//     tags: ['Tag1', 'Tag2'],
//     complexity: 'Intermediate',
//     jsonFileName: 'my-new-workflow.json', // Just add the filename!
//     screenshot: 'https://your-screenshot-url.jpg', // Optional
//     video: 'https://your-video-url.mp4' // Optional
// }
];

// Helper function to add new projects
export const addProject = (project: Project) => {
  projectsData.push(project);
};