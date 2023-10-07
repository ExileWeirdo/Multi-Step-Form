import React, { useState } from 'react';

import PersonalInfo from './PersonalInfo';
import './PersonalInfo.css';

import SelectPlan from './SelectPlan';
import './SelectPlan.css';

import AddOns from './Addons'
import './Addons.css';

import Summary from './Summary'
import './Summary.css';


function App() {
  // Initialize state to store current page
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  // Initialize state to store user data
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  }); 

  // Initialize state to store plan and payment frequency
  const [subscriptionData, setSubscriptionData] = useState({
    selectedPlan: null, // Default to none
    paymentFrequency: 'monthly', // Default to monthly
  });

  // Initialize state to store selected addons
  const [addonsData, setAddonsData] = useState({
    onlineServices: false,
    largerStorage: false,
    customizableProfile: false,
  });

  // Function to handle page navigation
  const goToPage = (page) => {
    setCurrentPage(page);
    setActivePage(page);
  };

  const goToSelectPlanPage = () => {
    setCurrentPage(2);
    setActivePage(2);
  }

  return (
    <div className="App">
      {currentPage === 1 && (
        <PersonalInfo
          userData={userData}
          setUserData={setUserData}
          nextPage={() => goToPage(2)}
          activePage={activePage}
        />
      )}
      {currentPage === 2 && (
        <SelectPlan
          subscriptionData={subscriptionData}
          setSubscriptionData={setSubscriptionData}
          nextPage={() => goToPage(3)}
          prevPage={() => goToPage(1)}
          activePage={activePage}
        />
      )}
      {currentPage === 3 && (
        <AddOns
          addonsData={addonsData}
          setAddonsData={setAddonsData}
          nextPage={() => goToPage(4)}
          prevPage={() => goToPage(2)}
          activePage={activePage}
          subscriptionData={subscriptionData}

        />
      )}
      {currentPage === 4 && (
        <Summary
          userData={userData}
          subscriptionData={subscriptionData}
          addonsData={addonsData}
          prevPage={() => goToPage(3)}
          activePage={activePage}
          goToSelectPlanPage={goToSelectPlanPage}
        />
      )}
    </div>
  );
}

export default App;
