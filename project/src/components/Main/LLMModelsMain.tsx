import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LLMModelsMain = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssistantResponse = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiUrl = "http://192.168.1.43:8000/";
        console.log('API URL:', apiUrl);

        if (!apiUrl) {
          throw new Error('API URL is not defined in environment variables');
        }

        const response = await axios.post(
          `${apiUrl}api/assistant_query/`,
          {
            question: 'Do you know about Goldenhiils?',
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        console.log('API Response:', response.data);
        setResponseData(response.data.answer || JSON.stringify(response.data));
      } catch (error) {
        setError('Failed to fetch assistant response');
        console.error('Error fetching assistant response:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssistantResponse();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">LLM Assistant Response</h1>

      {loading && <p>Loading response...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && responseData && (
        <div className="border rounded-md p-4 bg-gray-100 text-gray-800 shadow-md">
          {responseData}
        </div>
      )}
    </div>
  );
};

export default LLMModelsMain;
