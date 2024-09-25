import axios from 'axios';
import { summarizeBill } from '../../lib/summarize';
import { analyzeSentiment } from '../../lib/sentiment';
import { detectBias } from '../../lib/biasDetection';
import { predictBillPassage } from '../../lib/predict';

export default async function handler(req, res) {
  const { query, state } = req.query;

  if (!query || !state) {
	return res.status(400).json({ message: "Both 'query' and 'state' parameters are required." });
  }

  try {
	const apiKey = process.env.OPENSTATES_API_KEY;
	const jurisdiction = `ocd-jurisdiction/country:us/state:${state}/government`; // Proper jurisdiction format
	const response = await axios.get(`https://v3.openstates.org/bills`, {
  	params: {
    	jurisdiction,
    	q: query,
    	apikey: apiKey,
  	},
	});

	console.log('Bills fetched from OpenStates:', response.data.results);

	const bills = await Promise.all(
  	response.data.results.map(async (bill) => {
    	const summary = await summarizeBill(bill.title || bill.summary || '');
    	const sentiment = await analyzeSentiment(bill.title || bill.summary || '');
    	const bias = await detectBias(bill.title || bill.summary || '');
    	const prediction = await predictBillPassage(bill.title || bill.summary || '');

    	return {
      	...bill,
      	summary,
      	sentiment,
      	bias,
      	prediction,
    	};
  	})
	);

	console.log('Final bills data with sentiment, bias, and prediction:', bills);

	res.status(200).json({ results: bills });
  } catch (error) {
	console.error('Error fetching bills:', error.response?.data || error.message);
	res.status(500).json({ message: 'Error fetching bills' });
  }
}


