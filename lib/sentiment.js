const axios = require('axios');

export async function analyzeSentiment(text) {
  const apiKey = process.env.HUGGING_FACE_API_KEY;
  const model = 'nlptown/bert-base-multilingual-uncased-sentiment';

  console.log(`Analyzing sentiment for: "${text}"`);

  try {
	const response = await axios.post(
  	`https://api-inference.huggingface.co/models/${model}`,
  	{
    	inputs: text,
  	},
  	{
    	headers: {
      	Authorization: `Bearer ${apiKey}`,
    	},
  	}
	);

	console.log('Raw sentiment response:', response.data); // Log raw response

	if (response.data && Array.isArray(response.data)) {
  	return response.data[0]?.label || 'Unknown sentiment';
	}
	return 'Unknown sentiment';
  } catch (error) {
	console.error('Error in sentiment analysis:', error.response?.data || error.message);
	return 'Unknown sentiment';
  }
}


