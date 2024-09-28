import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'; 
import Sendmail from './Components/Sendmail';
import Mailbox from './Components/Mailbox'; // Import the dynamic Mailbox component
import ViewMail from './Components/ViewMail';

function App() {
  return (
    <Router> 
      <Header />
      <Sendmail />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            {/* Route for Mailbox with a dynamic type */}
            <Route path="/:mailboxType" element={<MailboxWrapper />} />
            {/* Route for specific mail view */}
            <Route path="/mail/:mailId" element={<ViewMail />} />
            {/* Default Route */}
            <Route path="/" element={<MailboxWrapper />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Wrapper to pass the mailboxType as a prop to the Mailbox component
function MailboxWrapper() {
  const { mailboxType } = useParams();
  return <Mailbox type={mailboxType ? mailboxType.charAt(0).toUpperCase() + mailboxType.slice(1) : 'Inbox'} />;
}

export default App;
