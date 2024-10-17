import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CompanyContacts = () => {
  const { companyId } = useParams();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/companies/${companyId}/contacts`);
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        setContacts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchContacts();
  }, [companyId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (contacts.length === 0) return <div>No contacts found for this company</div>;

  return (
    <div>
      <h1>Contacts for Company {companyId}</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <strong>{contact.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyContacts;
