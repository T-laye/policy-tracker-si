import axios from 'axios'

export async function summarizeBill(text) {
  const apiKey = process.env.HUGGING_FACE_API_KEY;
  const model = 'facebook/bart-large-cnn';

  console.log(`Summarizing the following text: "${text}"`); // Log input for debugging

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

	console.log('Raw summarization response:', response.data); // Log raw response

	return response.data[0]?.summary_text || 'No summary available';
  } catch (error) {
	console.error('Error in summarization:', error.response?.data || error.message);
	return 'No summary available';
  }
}


