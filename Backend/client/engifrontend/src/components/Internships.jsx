import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Internships = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async (retries = 3) => {
    const options = {
      method: 'GET',
      url: 'https://startup-jobs-api.p.rapidapi.com/active-jb-7d',
      params: {
        source: 'ycombinator',
      },
      headers: {
        'x-rapidapi-key': 'f6a68b2480msh73a435efd1707e5p156532jsnb6dfcf2b5744',
        'x-rapidapi-host': 'startup-jobs-api.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setJobs(response.data);
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 429 && retries > 0) {
        // If we get a 429, wait for a while and retry
        const retryAfter = error.response.headers['retry-after'];
        const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : 5000; // Default to 5 seconds if no retry-after header
        console.log(`Rate limit hit. Retrying in ${waitTime / 1000} seconds...`);
        setTimeout(() => fetchJobs(retries - 1), waitTime); // Retry after waiting
      } else {
        setError(`Error fetching job data: ${error.message}`);
        setLoading(false);
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchJobs(); // Start the fetch process
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Startup Jobs (Y Combinator)</h1>
      {jobs && jobs.length > 0 ? (
        jobs.map((job, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-lg overflow-hidden mb-6">
            <div className="p-4">
              <h2 className="text-xl text-gray-800">{job.title}</h2>
              <p className="text-gray-600">{job.organization}</p>

              

              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-semibold mt-4 block"
              >
                Apply Now
              </a>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="flex justify-between items-center">
                <img
                  src={job.organization_logo || 'fallback-image-url.jpg'}
                  alt="Logo"
                  className="h-8 w-8"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">No jobs found.</div>
      )}
    </div>
  );
};

export default Internships;
