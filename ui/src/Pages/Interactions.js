import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '@govuk-react/main';
import { H1 } from '@govuk-react/heading';

const AllInteractions = () => {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllInteractions = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/interactions');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setInteractions(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load interactions');
        setLoading(false);
      }
    };

    fetchAllInteractions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Main>
      <H1>All Interactions</H1>
      <ul>
        {interactions.map((interaction) => (
          <li key={interaction.id}>
            <h3>{interaction.description}</h3>
            <p>Company ID: <Link to={`/companies/${interaction.company_id}`}>
                {interaction.company_id}
               </Link>
            </p>
            <p><strong>Contact Count:</strong> {interaction.contact_count}</p>
          </li>
        ))}
      </ul>
    </Main>
  );
};

export default AllInteractions;
