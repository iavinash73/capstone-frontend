import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FeedbackFormInterface {
    isUser : boolean
}

const FeedbackForm: React.FC<FeedbackFormInterface> = ({isUser}) => {
const [cleanliness, setCleanliness] = useState(1);
const [overallRating, setOverallRating] = useState(1);
const [punctuality, setPunctuality] = useState(1);    
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ cleanliness, overallRating, punctuality });
    if(isUser){
        navigate("/user/home");
    }
    else{
        navigate("/captain/home");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">How was the {isUser ? "Driver" : "Rider"}?</h2>
      <div>
        <label className="block mb-1">Cleanliness Rating (1-5):</label>
        <input
          type="number"
          min="1"
          max="5"
          value={cleanliness}
          onChange={(e) => setCleanliness(Number(e.target.value))}
          className="border rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Overall Rating (1-5):</label>
        <input
          type="number"
          min="1"
          max="5"
          value={overallRating}
          onChange={(e) => setOverallRating(Number(e.target.value))}
          className="border rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Punctuality Rating (1-5):</label>
        <input
          type="number"
          min="1"
          max="5"
          value={punctuality}
          onChange={(e) => setPunctuality(Number(e.target.value))}
          className="border rounded p-2"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white rounded p-2">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;