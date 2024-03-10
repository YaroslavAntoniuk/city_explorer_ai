'use server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (messages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant that can provide any info about the cities and countries.',
        },
        ...messages,
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    });

    return response.choices[0].message;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getExistingTour = async ({ city, country }) => {
  return null;
};

export const generateTourResponse = async ({ city, country }) => {
  return null;
};

export const createNewTour = async (tour) => {
  return null;
};
