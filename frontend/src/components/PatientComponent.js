import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientComponent = () => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make the API call to the gateway
    axios.get('http://localhost:8000/patient/67379c08150f7fd4348151ea')
      .then((response) => {
        setPatientData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Patient Data</h2>
      <pre>{JSON.stringify(patientData, null, 2)}</pre>
    </div>
  );
};

export default PatientComponent;
