import axios from 'axios';
import { detectBias } from '../../../lib/biasDetection';
import { predictBillPassage } from '../../../lib/predict';
import { summarizeBill } from '../../../lib/summarize';
import { analyzeSentiment } from '../../../lib/sentiment';

export default async function handler(req, res) {
  const { query, state } = req.query;
 
  try {
	const apiKey = process.env.OPENSTATES_API_KEY;
	const response = await axios.get(`https://v3.openstates.org/bills`, {
  	params: {
    	state,
    	search_query: query,
    	apikey: apiKey,
  	},
	});

	const bills = await Promise.all(
  	response.data.results.map(async (bill) => {
    	const inputText = bill.title || bill.summary || 'No text available';  // Fallback text
    	const summary = await summarizeBill(inputText);
    	const sentiment = await analyzeSentiment(inputText);
    	const bias = await detectBias(inputText);

    	return {
      	...bill,
      	summary,
      	sentiment,
      	bias,
    	};
  	})
	);

	console.log('Final bills data:', bills); // Debugging log

	res.status(200).json({ results: bills });
  } catch (error) {
	console.error('Error fetching bills:', error.response?.data || error.message);
	res.status(500).json({ message: 'Error fetching bills' });
  }
}


