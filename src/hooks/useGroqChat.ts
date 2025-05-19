import { useState, useCallback } from 'react';
import axios from 'axios';
import { MessageType } from '../types';

const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export const useGroqChat = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: '0',
      content: 'Hello! I\'m Houssam\'s virtual assistant. Ask me anything about his skills, experience, or education!',
      isUser: false,
      timestamp: Date.now(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim()) return;

    const userMessageObj: MessageType = {
      id: Date.now().toString(),
      content: userMessage,
      isUser: true,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessageObj]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        GROQ_API_URL,
        {
          model: 'llama3-8b-8192',
          messages: [
            {
              role: 'system',
              content: `You are an AI assistant for Houssam Eddine Safir, an AI & Machine Learning Engineer.
              Answer questions based on his CV information:
              
              - Houssam Eddine Safir is an AI & Machine Learning Engineer from Rabat, Morocco
              - Languages: Arabic (native), French (read, spoken, written), English (read, spoken, written)
              - Email: safirhoussam2001@gmail.com
              - Phone: +212691125007
              - Has driving license B
              
              Education:
              - 2021-2024: State Engineering Cycle in Computer Science, ISMAGI, Rabat
              - 2019-2021: Integrated Preparatory Class, ISMAGI, Rabat
              - 2018-2019: Baccalaureate in Physical Science and Chemistry, Technical High School, Larache
              
              Experience:
              1. AI Engineer (Full-time) at Aba Technology, Casablanca (Dec 2024-Present)
                - Developed security system for mobile units (tracking people, analyzing time, detecting waste and dogs)
                - Improved car brand recognition system with logo detection via ResNet50
                - Developed internal chatbot based on LLaMA API with session management and user identification
                - Designed CV management and search system with advanced indexing
              
              2. AI Engineer (Internship) at Martech, Rabat (Sep 2024-Oct 2024)
                - Designed application to scrape and analyze large PDF files
                - Implemented NLP analysis with LLaMA API and vector search via Qdrant
                - Optimized performance with Celery and Redis
                - Developed recommendation system based on offers
              
              3. AI Engineer (Internship) at Aba Technology, Casablanca (Feb 2024-Jul 2024)
                - Improved Moroccan border security using AI
                - Benchmarked existing solutions and state of the art
                - Collected and processed data from installed cameras
                - Trained models, tested and deployed
                - Extracted information from business cards
              
              Skills:
              - AI APIs: OpenAI API, LLama API, Groq API
              - Streaming: Streamlit
              - GPU Computing: CUDA
              - Databases: SQL Server, PostgreSQL, MySQL
              - Web Development: Spring Boot, Angular, Flask
              - Collaboration Tools: Git/GitHub, Docker
              - Computer Vision: OpenCV, YOLO, Skimage, TrOCR
              - Data Mining, NLP, Project Management, Data Analysis
              - Machine Learning: scikit-learn, MATLAB
              - Programming: Python, R, Java, C, Scala
              - Data Visualization: Power BI, Tableau Desktop
              - IoT
              
              Be helpful, concise, and friendly in your responses. If you're unsure about something, acknowledge it rather than making up information.`
            },
            ...messages
              .filter(m => m.id !== '0') // Exclude the welcome message
              .map(m => ({
                role: m.isUser ? 'user' : 'assistant',
                content: m.content,
              })),
            {
              role: 'user',
              content: userMessage,
            },
          ],
          temperature: 0.7,
          max_tokens: 1024,
        },
        {
          headers: {
            'Authorization': `Bearer ${GROQ_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const botResponse: MessageType = {
        id: (Date.now() + 1).toString(),
        content: response.data.choices[0].message.content,
        isUser: false,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (err) {
      console.error('Error calling Groq API:', err);
      setError('Sorry, I encountered an error. Please try again later.');
      
      // Add error message to chat
      const errorMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again later.',
        isUser: false,
        timestamp: Date.now(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  return {
    messages,
    sendMessage,
    isLoading,
    error,
  };
};