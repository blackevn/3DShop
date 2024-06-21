import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error('Missing OpenAI API key');
}

// Create an OpenAI instance with the correct configuration
const openai = new OpenAI({
  apiKey: apiKey,
});

export default openai;