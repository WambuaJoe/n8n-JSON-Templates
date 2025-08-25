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
    slug: 'rag-telegram-automation',
    title: 'Telegram Chatbot',
    description: 'Provide instant responses and personalized content answers through a Telegram chatbot.',
    explanation: "This chatbot uses Retrieval-Augmented Generation (RAG) to answer user questions with accurate, context-specific responses. Instead of relying only on AI's memory, it retrieves relevant documents from a vector database, then feeds them into an AI model for response generation. Users interact through Telegram, making it accessible and easy to use. It’s ideal for internal knowledge bases, customer support, or educational resources. The bot can handle large datasets, update its knowledge base automatically, and ensure answers remain accurate over time.",
    tags: ['Email', 'Automation', 'Marketing'],
    complexity: 'Intermediate',
    jsonData: {
      "name": "Email Automation Workflow",
      {
  "nodes": [
    {
      "parameters": {
        "updates": [
          "message"
        ],
        "additionalFields": {}
      },
      "id": "7b0c3115-016b-463c-912d-7625fa01b810",
      "name": "Telegram Trigger",
      "type": "n8n-nodes-base.telegramTrigger",
      "position": [
        -720,
        160
      ],
      "webhookId": "b178f034-9997-4832-9bb4-a43c3015506e",
      "typeVersion": 1.1,
      "credentials": {
        "telegramApi": {
          "id": "c3bpoPicnzmbBkzC",
          "name": "Telegram account"
        }
      }
    },
    {
      "parameters": {
        "dataType": "binary",
        "options": {}
      },
      "id": "7526e8ab-8ea8-4993-9bc6-d3b36e75ff01",
      "name": "Default Data Loader",
      "type": "@n8n/n8n-nodes-langchain.documentDefaultDataLoader",
      "position": [
        352,
        384
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "chunkSize": 3000,
        "chunkOverlap": 200,
        "options": {}
      },
      "id": "6d84e4b0-44ee-4e99-aadc-60c58d7a981d",
      "name": "Recursive Character Text Splitter",
      "type": "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter",
      "position": [
        352,
        608
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "errorMessage": "An error occurred"
      },
      "id": "bdc3149f-b599-4dcc-a9fe-3effb6ba3615",
      "name": "Stop and Error",
      "type": "n8n-nodes-base.stopAndError",
      "position": [
        -256,
        720
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "={{ $json.message.text }}\nSearch the database with the retriever for information for the answer",
        "options": {}
      },
      "id": "fb85f94a-4ff4-4773-ba74-cab771b9be60",
      "name": "Question and Answer Chain",
      "type": "@n8n/n8n-nodes-langchain.chainRetrievalQa",
      "position": [
        -768,
        432
      ],
      "typeVersion": 1.3
    },
    {
      "parameters": {},
      "id": "8229fe95-e429-476b-908f-c3d2969e3ad9",
      "name": "Vector Store Retriever",
      "type": "@n8n/n8n-nodes-langchain.retrieverVectorStore",
      "position": [
        -736,
        608
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "pineconeIndex": {
          "__rl": true,
          "value": "tg-chatbot",
          "mode": "list",
          "cachedResultName": "tg-chatbot"
        },
        "options": {}
      },
      "id": "0d944806-f675-43f1-b1c6-65a2c7fde857",
      "name": "Pinecone Vector Store1",
      "type": "@n8n/n8n-nodes-langchain.vectorStorePinecone",
      "position": [
        -768,
        784
      ],
      "typeVersion": 1,
      "credentials": {
        "pineconeApi": {
          "id": "L1L1vqzbzXQsHwfR",
          "name": "PineconeApi account"
        }
      }
    },
    {
      "parameters": {
        "content": "# Load data into database\nFetch file from **Telegram**, split it into chunks and insert into **Pinecone** index, a message from **Telegram** will be sent just to let the user know that the process finished",
        "height": 873.6068151028411,
        "width": 1139.5159692915001,
        "color": 7
      },
      "id": "282bb308-e4be-4070-b081-11d03020f95c",
      "name": "Sticky Note",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        0,
        0
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "content": "# Chat with Database\n\n1. **Receive** the incoming chat message.\n2. **Retrieve** relevant chunks from the _vector store_.\n3. **Pass** these chunks to the model.\n\nThe model will use the retrieved information to **formulate a precise response**.\n",
        "height": 806.8716167324012,
        "width": 1344.7918019808176,
        "color": 7
      },
      "id": "930dc99f-401a-4e15-a92e-401ee9623b97",
      "name": "Sticky Note1",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        -1376,
        320
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict",
            "version": 1
          },
          "conditions": [
            {
              "id": "8839993b-9fe7-4e1e-a1cc-fe5de6b0bb62",
              "operator": {
                "type": "object",
                "operation": "exists",
                "singleValue": true
              },
              "leftValue": "={{ $json.message.document }}",
              "rightValue": ""
            }
          ],
          "combinator": "and"
        },
        "options": {}
      },
      "id": "501b9d18-e7fa-448a-984d-857ff92bc98f",
      "name": "Check If is a document",
      "type": "n8n-nodes-base.if",
      "position": [
        -272,
        160
      ],
      "typeVersion": 2
    },
    {
      "parameters": {
        "jsCode": "// Função para modificar os metadados do arquivo binário\nfunction modifyBinaryMetadata(items) {\n  for (const item of items) {\n    if (item.binary && item.binary.data) {\n      // Modifica o tipo MIME\n      item.binary.data.mimeType = 'application/pdf';\n      \n      // Garante que o nome do arquivo termine com .pdf\n      if (!item.binary.data.fileName.toLowerCase().endsWith('.pdf')) {\n        item.binary.data.fileName += '.pdf';\n      }\n      \n      // Atualiza o contentType no fileType (se existir)\n      if (item.binary.data.fileType) {\n        item.binary.data.fileType.contentType = 'application/pdf';\n      }\n    }\n  }\n  return items;\n}\n\n// Aplica a modificação e retorna os itens atualizados\nreturn modifyBinaryMetadata($input.all());"
      },
      "id": "02eee654-80f3-4f71-97a6-b5ccde2206cc",
      "name": "Change to application/pdf",
      "type": "n8n-nodes-base.code",
      "position": [
        208,
        144
      ],
      "typeVersion": 2
    },
    {
      "parameters": {
        "resource": "file",
        "fileId": "={{ $json.message.document.file_id }}"
      },
      "id": "f76e470c-8e2e-4c3b-9144-9cd62498fd1b",
      "name": "Telegram get File",
      "type": "n8n-nodes-base.telegram",
      "position": [
        32,
        144
      ],
      "typeVersion": 1.2,
      "webhookId": "6d111da9-4704-46a7-a2f1-17c4371d7912",
      "credentials": {
        "telegramApi": {
          "id": "c3bpoPicnzmbBkzC",
          "name": "Telegram account"
        }
      }
    },
    {
      "parameters": {
        "chatId": "={{ $('Telegram Trigger').item.json.message.chat.id }}",
        "text": "={{ $json[\"response\"][\"text\"].replace(/<think>[\\s\\S]*?<\\/think>\\s*/g, '').trim() }}\n",
        "additionalFields": {
          "appendAttribution": false
        }
      },
      "id": "3e4758b2-60ff-4fcf-afeb-81c9d3a06099",
      "name": "Telegram Response",
      "type": "n8n-nodes-base.telegram",
      "position": [
        -320,
        432
      ],
      "typeVersion": 1.2,
      "webhookId": "68b30000-5fa1-4459-9af4-a91dcfbb4379",
      "credentials": {
        "telegramApi": {
          "id": "c3bpoPicnzmbBkzC",
          "name": "Telegram account"
        }
      },
      "onError": "continueErrorOutput"
    },
    {
      "parameters": {
        "chatId": "={{ $('Telegram Trigger').item.json.message.chat.id }}",
        "text": "={{ $json.metadata.pdf.totalPages }} pages saved on Pinecone",
        "additionalFields": {
          "appendAttribution": false
        }
      },
      "id": "8e343c1e-d802-4b28-bf0a-cf56efece203",
      "name": "Telegram Response about Database",
      "type": "n8n-nodes-base.telegram",
      "position": [
        912,
        144
      ],
      "typeVersion": 1.2,
      "webhookId": "5bdc754b-047c-40e0-9716-e707cfc87c86",
      "credentials": {
        "telegramApi": {
          "id": "c3bpoPicnzmbBkzC",
          "name": "Telegram account"
        }
      },
      "onError": "continueErrorOutput"
    },
    {
      "parameters": {
        "errorMessage": "An error occurred."
      },
      "id": "50439993-2f81-43e7-8b36-e0af56d507ea",
      "name": "Stop and Error1",
      "type": "n8n-nodes-base.stopAndError",
      "position": [
        912,
        512
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "mode": "insert",
        "pineconeIndex": {
          "__rl": true,
          "value": "tg-chatbot",
          "mode": "list",
          "cachedResultName": "tg-chatbot"
        },
        "options": {}
      },
      "id": "540ae8ff-6f5d-4f9f-bdb6-0de9fd54d43b",
      "name": "Pinecone Vector Store",
      "type": "@n8n/n8n-nodes-langchain.vectorStorePinecone",
      "position": [
        384,
        144
      ],
      "typeVersion": 1,
      "credentials": {
        "pineconeApi": {
          "id": "L1L1vqzbzXQsHwfR",
          "name": "PineconeApi account"
        }
      }
    },
    {
      "parameters": {},
      "id": "e487ed0f-ceab-4b6c-8279-a230f39c8dbc",
      "name": "Limit to 1",
      "type": "n8n-nodes-base.limit",
      "position": [
        720,
        144
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "model": {
          "__rl": true,
          "mode": "list",
          "value": "gpt-4.1-mini"
        },
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1.2,
      "position": [
        -880,
        640
      ],
      "id": "3fb81aab-edff-465e-8a72-91eb1d7f5ee7",
      "name": "OpenAI Chat Model",
      "credentials": {
        "openAiApi": {
          "id": "YPy4QjTE6oQcP8wC",
          "name": "OpenAi account"
        }
      }
    },
    {
      "parameters": {
        "model": "text-embedding-3-large",
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
      "typeVersion": 1.2,
      "position": [
        176,
        384
      ],
      "id": "9a90f93d-187f-4d26-b04c-723652053eeb",
      "name": "Embeddings OpenAI",
      "credentials": {
        "openAiApi": {
          "id": "YPy4QjTE6oQcP8wC",
          "name": "OpenAi account"
        }
      }
    },
    {
      "parameters": {
        "model": "text-embedding-3-large",
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
      "typeVersion": 1.2,
      "position": [
        -768,
        960
      ],
      "id": "4488b8ff-1c62-445e-b5e6-edb060cd98cf",
      "name": "Embeddings OpenAI1",
      "credentials": {
        "openAiApi": {
          "id": "YPy4QjTE6oQcP8wC",
          "name": "OpenAi account"
        }
      }
    }
  ],
  "connections": {
    "Telegram Trigger": {
      "main": [
        [
          {
            "node": "Check If is a document",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Default Data Loader": {
      "ai_document": [
        [
          {
            "node": "Pinecone Vector Store",
            "type": "ai_document",
            "index": 0
          }
        ]
      ]
    },
    "Recursive Character Text Splitter": {
      "ai_textSplitter": [
        [
          {
            "node": "Default Data Loader",
            "type": "ai_textSplitter",
            "index": 0
          }
        ]
      ]
    },
    "Question and Answer Chain": {
      "main": [
        [
          {
            "node": "Telegram Response",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Vector Store Retriever": {
      "ai_retriever": [
        [
          {
            "node": "Question and Answer Chain",
            "type": "ai_retriever",
            "index": 0
          }
        ]
      ]
    },
    "Pinecone Vector Store1": {
      "ai_vectorStore": [
        [
          {
            "node": "Vector Store Retriever",
            "type": "ai_vectorStore",
            "index": 0
          }
        ]
      ]
    },
    "Check If is a document": {
      "main": [
        [
          {
            "node": "Telegram get File",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Question and Answer Chain",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Change to application/pdf": {
      "main": [
        [
          {
            "node": "Pinecone Vector Store",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Telegram get File": {
      "main": [
        [
          {
            "node": "Change to application/pdf",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Telegram Response": {
      "main": [
        [],
        [
          {
            "node": "Stop and Error",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Telegram Response about Database": {
      "main": [
        [],
        [
          {
            "node": "Stop and Error1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Pinecone Vector Store": {
      "main": [
        [
          {
            "node": "Limit to 1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Limit to 1": {
      "main": [
        [
          {
            "node": "Telegram Response about Database",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "Question and Answer Chain",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Embeddings OpenAI": {
      "ai_embedding": [
        [
          {
            "node": "Pinecone Vector Store",
            "type": "ai_embedding",
            "index": 0
          }
        ]
      ]
    },
    "Embeddings OpenAI1": {
      "ai_embedding": [
        [
          {
            "node": "Pinecone Vector Store1",
            "type": "ai_embedding",
            "index": 0
          }
        ]
      ]
    }
  },
  "pinData": {},
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "79ce73b1f8991442affe33db811b4c263acdc6589375a4d2e1d9d97ce87d3463"
  }
},
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