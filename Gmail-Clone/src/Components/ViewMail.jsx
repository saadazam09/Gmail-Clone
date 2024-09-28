import React from 'react';
import { useParams } from 'react-router-dom';

const ViewMail = () => {
  const { mailId } = useParams();
  // Dummy mail data for display
  const mail = {
    id: mailId,
    subject: 'Hello World',
    sender: 'john.doe@example.com',
    date: '2024-08-25',
    content: 'This is the detailed content of the mail.'
  };
  
  return (
    <div className=" flex flex-col w-full h-full p-4 bg-white border-l border-gray-300">
      <div className="border-b border-gray-300 pb-2 mb-4">
        <h1 className="text-2xl font-semibold">{mail.subject}</h1>
        <div className="text-sm text-gray-600">
          <span>From: {mail.sender} | Date: {mail.date}</span>
        </div>
      </div>


      
      <div className="flex-grow overflow-auto">
        <p>{mail.content}</p>
      </div>
    </div>
  );
};

export default ViewMail;
