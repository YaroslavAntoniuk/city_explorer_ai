'use server';
import OpenAI from 'openai';
import { createTourPrompt } from './prompts';
import prisma from './db';

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
  return prisma.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });
};

export const generateTourResponse = async ({ city, country }) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a tour guide' },
        { role: 'user', content: createTourPrompt({ city, country }) },
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    });

    const tourData = JSON.parse(response.choices[0].message.content);

    if (!tourData.tour) {
      return null;
    }

    return tourData.tour;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createNewTour = async (tour) => {
  return prisma.tour.create({
    data: tour,
  });
};
