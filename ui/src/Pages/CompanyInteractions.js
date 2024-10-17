import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CompanyInteractions = () => {
  const { companyId } = useParams();
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInteractions = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/companies/${companyId}/interactions`);
        if (!response.ok) {
          throw new Error('Failed to fetch interactions');
        }
        const data = await response.json();
        setInteractions(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchInteractions();
  }, [companyId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Interactions for Company {companyId}</h1>
      <ul>
        {interactions.map(interaction => (
          <li key={interaction.id}>
            <h3>{interaction.description}</h3>
            <p>Contact Count: {interaction.contact_count}</p>
            <ul>
              {interaction.contacts.map(contact => (
                <li key={contact.id}>{contact.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyInteractions;
