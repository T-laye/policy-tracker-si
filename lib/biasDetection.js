const axios = require('axios');

export async function detectBias(text) {
  const apiKey = process.env.HUGGING_FACE_API_KEY;
  const model = 'facebook/bart-large-mnli';

  console.log(`Detecting bias for: "${text}"`);

  try {
	const response = await axios.post(
  	`https://api-inference.huggingface.co/models/${model}`,
  	{
    	inputs: text,
    	parameters: {
      	candidate_labels: ['neutral', 'biased left', 'biased right'],
    	},
  	},
  	{
    	headers: {
      	Authorization: `Bearer ${apiKey}`,
    	},
  	}
	);

	console.log('Raw bias detection response:', response.data); // Log raw response

	if (response.data && response.data.labels) {
  	return response.data.labels[0]; // Return most confident label
	}
	return 'No bias detected';
  } catch (error) {
	console.error('Error in bias detection:', error.response?.data || error.message);
	return 'No bias detected';
  }
}


