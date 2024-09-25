const axios = require('axios');

export async function predictBillPassage(text) {
  const apiKey = process.env.HUGGING_FACE_API_KEY;
  const model = 'facebook/bart-large-mnli';

  console.log(`Predicting passage likelihood for: "${text}"`);

  try {
	const response = await axios.post(
  	`https://api-inference.huggingface.co/models/${model}`,
  	{
    	inputs: text,
    	parameters: {
      	candidate_labels: ['likely to pass', 'unlikely to pass'],
    	},
  	},
  	{
    	headers: {
      	Authorization: `Bearer ${apiKey}`,
    	},
  	}
	);

	console.log('Raw prediction response:', response.data); // Log raw response

	if (response.data && response.data.labels) {
  	return response.data.labels[0]; // Return prediction label
	}
	return 'No prediction available';
  } catch (error) {
	console.error('Error in prediction:', error.response?.data || error.message);
	return 'No prediction available';
  }
}


