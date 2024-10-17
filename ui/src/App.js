import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageHeader from './Header';  // Import the updated header (PageHeader)
import Companies from './Pages/Companies';  // Import Companies component
import AllContacts from './Pages/Contacts';    // Import Contacts component
import AllInteractions from './Pages/Interactions';  // Import Interactions component
import CompanyDetails from './Pages/CompanyDetails';
import CompanyContacts from './Pages/CompanyContacts';
import CompanyInteractions from './Pages/CompanyInteractions';

function App() {
  return (
    <div>
      <PageHeader />
      <Switch>
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/companies/:companyId" component={CompanyDetails} />
        <Route exact path="/companies/:companyId/contacts" component={CompanyContacts} />
        <Route exact path="/companies/:companyId/interactions" component={CompanyInteractions} />

        <Route exact path="/contacts" component={AllContacts} />
        <Route exact path="/interactions" component={AllInteractions} />
      </Switch>
    </div>
  );
}

export default App;
