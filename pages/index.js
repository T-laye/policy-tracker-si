import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [query, setQuery] = useState('');
  const [state, setState] = useState('ca');
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBills = async () => {
	setLoading(true);
	setError(null);

	try {
  	const res = await axios.get(`/api/bills?query=${query}&state=${state}`);
  	console.log('Bills fetched:', res.data); // Debugging log
  	setBills(res.data.results || []);
	} catch (err) {
  	console.error('Error fetching bills:', err);
  	setError('Error fetching bills');
	}

	setLoading(false);
  };

  return (
	<div className="min-h-screen bg-gray-50 p-6">
  	<h1 className="text-4xl font-bold text-center mb-6">Policy Tracker Simulator</h1>

  	<div className="flex justify-center py-8">
    	<input
      	value={query}
      	onChange={(e) => setQuery(e.target.value)}
      	className="w-2/3 p-3 border border-gray-300 rounded-md shadow-sm"
      	placeholder="Search for bills"
    	/>
    	<select
      	value={state}
      	onChange={(e) => setState(e.target.value)}
      	className="ml-4 p-3 bg-white border border-gray-300 rounded-md shadow-sm"
    	>
      	<option value="ca">California</option>
      	<option value="ny">New York</option>
      	<option value="tx">Texas</option>
      	<option value="fl">Florida</option>
    	</select>
    	<button
      	onClick={searchBills}
      	className="ml-4 p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
    	>
      	Search
    	</button>
  	</div>

  	{loading && <p>Loading bills...</p>}
  	{error && <p className="text-red-500">{error}</p>}

  	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    	{bills.length > 0 ? (
      	bills.map((bill) => (
        	<div key={bill.id} className="p-6 bg-white rounded-lg shadow-lg">
          	<h2 className="text-xl font-semibold mb-4 text-gray-700">{bill.title}</h2>
          	<p className="text-gray-500">Summary: {bill.summary || 'No summary available'}</p>
          	<p className="text-gray-500">Sentiment: {bill.sentiment || 'Unknown sentiment'}</p>
          	<p className="text-gray-500">Bias: {bill.bias || 'No bias detected'}</p>
          	<p className="text-gray-500">Prediction: {bill.prediction || 'No prediction available'}</p>
          	<a
            	href={bill.openstates_url}
            	target="_blank"
            	className="mt-4 inline-block text-indigo-600 hover:underline"
          	>
            	View Details
          	</a>
        	</div>
      	))
    	) : (
      	!loading && <p>No bills found.</p>
    	)}
  	</div>
	</div>
  );
}


