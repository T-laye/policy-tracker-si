import { Bar } from 'react-chartjs-2';

export default function SentimentChart({ sentiment }) {
  const data = {
	labels: ['Positive', 'Neutral', 'Negative'],
	datasets: [
  	{
    	label: 'Sentiment Analysis',
    	data: [sentiment.pos, sentiment.neu, sentiment.neg],
    	backgroundColor: [
      	'rgba(75, 192, 192, 0.6)',
      	'rgba(255, 206, 86, 0.6)',
      	'rgba(255, 99, 132, 0.6)',
    	],
    	borderColor: [
      	'rgba(75, 192, 192, 1)',
      	'rgba(255, 206, 86, 1)',
      	'rgba(255, 99, 132, 1)',
    	],
    	borderWidth: 1,
  	},
	],
  };

  return <Bar data={data} />;
}
