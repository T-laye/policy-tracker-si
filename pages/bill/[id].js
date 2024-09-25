import axios from 'axios';
import { useState, useEffect } from 'react';
import SentimentChart from '../../components/SentimentChart';

export default function BillDetails({ id }) {
  const [bill, setBill] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
	const fetchBill = async () => {
  	const res = await axios.get(`/api/bill/${id}`);
  	setBill(res.data);
  	setLoading(false);
	};
	fetchBill();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
	<div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
  	<h1 className="text-3xl font-bold mb-4">{bill.bill.title}</h1>
  	<p className="text-lg mb-6">{bill.summary}</p>

  	<div className="mt-8">
    	<h2 className="text-2xl font-semibold mb-4">AI Analysis</h2>
    	<div className="mb-6">
      	<h3 className="text-xl font-semibold">Sentiment Analysis</h3>
      	<SentimentChart sentiment={bill.sentiment} />
    	</div>
    	<p><strong>Prediction:</strong> {bill.prediction}</p>
    	<p><strong>Bias Detection:</strong> {bill.bias}</p>
  	</div>
	</div>
  );
}

export async function getServerSideProps({ params }) {
  return {
	props: { id: params.id },
  };
}
