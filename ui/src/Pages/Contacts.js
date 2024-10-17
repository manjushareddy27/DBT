import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '@govuk-react/main';
import { H1 } from '@govuk-react/heading';

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/contacts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setContacts(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load contacts');
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Main>
      <H1>All Contacts</H1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <h3>{contact.name}</h3>
            <p>Company:<Link to={`/companies/${contact.company_id}`}>
                 {contact.company.name}
               </Link>
            </p>
          </li>
        ))}
      </ul>
    </Main>
  );
};

export default AllContacts;
