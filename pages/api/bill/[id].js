import axios from 'axios';
import { summarizeBill } from '../../../lib/nlp';
import { analyzeSentiment } from '../../../lib/sentiment';
import { predictBillPassage } from '../../../lib/predict';
import { detectBias } from '../../../lib/bias';

export default async function handler(req, res) {
  const { id } = req.query;
  const API_KEY = process.env.OPENSTATES_API_KEY;

  try {

	const response = await axios.get(
  	`https://v3.openstates.org/bills/${id}?apikey=${API_KEY}`
	);
	const bill = response.data;

	const summary = summarizeBill(bill.description);
	const sentiment = analyzeSentiment(bill.description);
	const prediction = predictBillPassage(bill);
	const bias = detectBias(bill.description);

	res.status(200).json({
  	bill,
  	summary,
  	sentiment,
  	prediction,
  	bias,
	});
  } catch (error) {
	console.error('Error fetching bill details:', error);
	res.status(500).json({ message: 'Error fetching bill details' });
  }
}
