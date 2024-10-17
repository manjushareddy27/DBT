import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CompanyDetails = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/companies/${companyId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch company details');
        }
        const data = await response.json();
        setCompany(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCompany();
  }, [companyId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!company) return <div>No company found</div>;

  return (
    <div>
      <h1>{company.name}</h1>
      <p><strong>ID:</strong> {company.id}</p>
      <p><strong>Description:</strong> {company.description}</p>
      <p>
        <Link to={`/companies/${companyId}/contacts`}>View Contacts</Link>
      </p>
      <p>
        <Link to={`/companies/${companyId}/interactions`}>View Interactions</Link>
      </p>
    </div>
  );
};

export default CompanyDetails;
