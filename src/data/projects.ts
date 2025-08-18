export interface Project {
  slug: string;
  title: string;
  description: string;
  explanation: string;
  tags: string[];
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  jsonData: any;
}

// Configuration for site settings
export const siteConfig = {
  portfolioUrl: 'https://n8n-projects-portfolio.netlify.app/', // Edit this URL to point to your portfolio
};

// Sample project - replace with your actual projects
export const projectsData: Project[] = [
  {
    slug: 'email-automation-example',
    title: 'Email Automation Workflow',
    description: 'Automatically send personalized emails based on user actions and schedules.',
    explanation: 'This workflow demonstrates how to set up automated email sending using triggers, conditions, and email nodes. It includes user segmentation, personalization, and scheduling capabilities. The workflow monitors user activity and sends targeted emails based on predefined criteria, making it perfect for marketing campaigns, onboarding sequences, or notification systems.',
    tags: ['Email', 'Automation', 'Marketing'],
    complexity: 'Intermediate',
    jsonData: {
      "name": "Email Automation Workflow",
      "nodes": [
        {
          "parameters": {
            "rule": "every",
            "value": 1,
            "unit": "hours"
          },
          "id": "1",
          "name": "Schedule Trigger",
          "type": "n8n-nodes-base.scheduleTrigger",
          "position": [240, 300]
        },
        {
          "parameters": {
            "conditions": {
              "string": [
                {
                  "value1": "={{$json.status}}",
                  "operation": "equal",
                  "value2": "active"
                }
              ]
            }
          },
          "id": "2",
          "name": "Check User Status",
          "type": "n8n-nodes-base.if",
          "position": [460, 300]
        },
        {
          "parameters": {
            "fromEmail": "noreply@example.com",
            "toEmail": "={{$json.email}}",
            "subject": "Welcome to our service!",
            "text": "Thank you for joining us, {{$json.name}}!"
          },
          "id": "3",
          "name": "Send Email",
          "type": "n8n-nodes-base.emailSend",
          "position": [680, 300]
        }
      ],
      "connections": {
        "Schedule Trigger": {
          "main": [[{ "node": "Check User Status", "type": "main", "index": 0 }]]
        },
        "Check User Status": {
          "main": [[{ "node": "Send Email", "type": "main", "index": 0 }]]
        }
      }
    }
  },
  // Add more sample projects here as needed
];

// Helper function to add new projects
export const addProject = (project: Project) => {
  projectsData.push(project);
};