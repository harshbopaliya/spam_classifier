import React, { useState } from 'react';
import './spamClassifier.css'; // Import your CSS file

const SpamClassifier = () => {
  const [inputText, setInputText] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handlePredictClick = async () => {
    try {
      // Make a POST request to your Python backend
      const response = await fetch('http://your-backend-url/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input_sms: inputText }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch prediction');
      }

      // Parse the response and update the state
      const result = await response.json();
      setPrediction(result.prediction === 1 ? 'Spam' : 'Not Spam');
    } catch (error) {
      console.error('Error predicting:', error);
    }
  };

  return (
    <div className="spam-classifier">
      <div className="input-container">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter the message"
        />
        <button className="predict-button" onClick={handlePredictClick}>
          Predict
        </button>
      </div>
      {prediction && <h2>{prediction}</h2>}
    </div>
  );
};

export default SpamClassifier;
