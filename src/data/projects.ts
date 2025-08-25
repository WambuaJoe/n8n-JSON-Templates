export interface Project {
  slug: string;
  title: string;
  description: string;
  explanation: string;
  tags: string[];
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  jsonFileName: string; // Just the filename, e.g., 'rag-chatbot.json'
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

// Sample project - replace with your actual projects
export const projectsData: Project[] = [
  {
    slug: 'rag-chatbot',
    title: 'RAG Chatbot Workflow',
    description: 'Chat with your documents and get instant, smart answers in Telegram.',
    explanation: "This chatbot uses Retrieval-Augmented Generation (RAG) to answer user questions with accurate, context-specific responses. Instead of relying only on AI's memory, it retrieves relevant documents from a vector database, then feeds them into an AI model for response generation. Users interact through Telegram, making it accessible and easy to use. It’s ideal for internal knowledge bases, customer support, or educational resources. The bot can handle large datasets, update its knowledge base automatically, and ensure answers remain accurate over time.",
    tags: ['AI', 'Chatbot', 'RAG'],
    complexity: 'Advanced',
    jsonFileName: 'rag-chatbot.json'
  },
  {
    slug: 'gmail-ai',
    title: 'Gmail AI Assistant',
    description: 'From inbox to Slack, minus the noise.',
    explanation: 'This project combines two connected workflows to streamline how incoming enquiries and emails are handled. The first workflow captures form submissions, classifies them with AI, and directs them into the right path - either scheduling follow-ups or gracefully declining irrelevant entries. The second workflow then listens to Gmail for incoming enquiries, automatically labels and summarizes the content, and prepares a draft response. Instead of sending replies directly, the draft is pushed to Slack, where a human teammate can quickly review, edit if needed, and approve before the message goes out. Together, these workflows reduce manual sorting, ensure every enquiry gets acknowledged, and give teams a faster way to collaborate on responses without sacrificing quality or human oversight.',
    tags: ['Gmail', 'AI', 'Email', 'Automation'],
    complexity: 'Advanced',
    jsonFileName: 'gmail-ai.json'
  }
];

// Helper function to add new projects
export const addProject = (project: Project) => {
  projectsData.push(project);
};