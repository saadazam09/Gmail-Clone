import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mailboxConfig from '../mailboxConfig'; // Adjust path if necessary
import { PiSelectionBold } from "react-icons/pi";
import { IoMdRefresh, IoMdArchive, IoMdMailUnread } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEllipsisV, FaImage, FaPencilAlt, FaUser } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

const Mailbox = ({ type }) => {
  const [selectedMails, setSelectedMails] = useState([]);
  const [activeButton, setActiveButton] = useState('primary'); // Default to 'Primary'
  const [mailList, setMailList] = useState([
    { id: 1, subject: 'Hello World', type: 'Inbox', sender: 'Ali', time: '10:30 AM', read: false, starred: false, category: 'primary' },
    { id: 2, subject: 'React Router', type: 'Sent', sender: 'Saad', time: '2:15 PM', read: false, starred: false, category: 'primary' },
    { id: 3, subject: 'This Is The Clone Of Gmail', type: 'Inbox', sender: 'Saad Azam', time: '10:30 AM', read: false, starred: false, category: 'social' },
    { id: 4, subject: 'React Basics', type: 'Inbox', sender: 'Alice', time: '4:45 PM', read: false, starred: false, category: 'promotion' },
    // Add more mail items as needed
  ]);

  // Filter mails based on the selected category
  const filteredMails = mailList.filter(mail => mail.type === type && mail.category === activeButton);

  // Ensure mailboxConfig[type] exists, or provide a fallback to avoid accessing undefined
  const config = mailboxConfig[type] || {
    className: 'default-mailbox',
    noMailMessage: 'No mail to show',
  };

  
  const handleSelectAll = () => {
    if (selectedMails.length === filteredMails.length) {
      setSelectedMails([]);
    } else {
      setSelectedMails(filteredMails.map(mail => mail.id));
    }
  };

  const toggleSelection = (mailId) => {
    setSelectedMails(prevSelected =>
      prevSelected.includes(mailId)
        ? prevSelected.filter(id => id !== mailId)
        : [...prevSelected, mailId]
    );
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Update the active category
  };

  const handleDelete = () => {
    setMailList(prevList => prevList.filter(mail => !selectedMails.includes(mail.id)));
    setSelectedMails([]);
  };

  const markAsRead = (mailId) => {
    setMailList(prevList => prevList.map(mail =>
      mail.id === mailId ? { ...mail, read: true } : mail
    ));
  };

  const handleStar = (mailId) => {
    setMailList(prevList =>
      prevList.map(mail =>
        mail.id === mailId ? { ...mail, starred: !mail.starred } : mail
      )
    );
  };

  return (
    <div className={`flex flex-col w-full h-full p-6 px-4 outline-none ${config.className} border border-gray-300 rounded-md`}>
      {/* Top Bar with Select, Delete, Refresh, and More */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleSelectAll}
            className="flex items-center space-x-2 text-gray-600 hover:bg-gray-200 p-2 rounded-md transition duration-150 ease-in-out"
          >
            <PiSelectionBold />
          </button>
          <button
            onClick={handleDelete}
            className="text-gray-600 hover:bg-gray-200 p-2 rounded-md transition duration-150 ease-in-out"
          >
            <RiDeleteBin6Line />
          </button>
          <button
            className="text-gray-600 hover:bg-gray-200 p-2 rounded-md transition duration-150 ease-in-out"
          >
            <IoMdRefresh />
          </button>
          <button
            className="text-gray-600 hover:bg-gray-200 p-2 rounded-md transition duration-150 ease-in-out"
          >
            <FaEllipsisV />
          </button>
        </div>
      </div>

      {type === 'Inbox' && (
        <div className="border-b border-gray-300 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-24">
              <button
                onClick={() => handleButtonClick('primary')}
                className={`flex items-center space-x-2 p-2 rounded-none transition duration-150 ease-in-out
                  ${activeButton === 'primary' ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-600 hover:bg-gray-200 border-transparent border-b-4'}`}
              >
                <FaImage className="w-5 h-5" />
                <span>Primary</span>
              </button>

              <button
                onClick={() => handleButtonClick('promotion')}
                className={`flex items-center space-x-3 p-3 rounded-none transition duration-150 ease-in-out
                  ${activeButton === 'promotion' ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-600 hover:bg-gray-200 border-transparent border-b-4'}`}
              >
                <FaPencilAlt className="w-5 h-5" />
                <span>Promotion</span>
              </button>

              <button
                onClick={() => handleButtonClick('social')}
                className={`flex items-center space-x-2 p-2 rounded-none transition duration-150 ease-in-out
                  ${activeButton === 'social' ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-600 hover:bg-gray-200 border-transparent border-b-4'}`}
              >
                <FaUser className="w-5 h-5" />
                <span>Social</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mails List */}
      <div className="flex-grow overflow-auto">
        <ul className="list-none p-0 m-0">
          {filteredMails.length ? (
            filteredMails.map(mail => (
              <li
                key={mail.id}
                className={`relative flex items-center py-3 px-1 border-b border-gray-300 h-10 
                  hover:border hover:border-gray-500 transition-all duration-200 ease-in-out ${
                    mail.read ? 'bg-gray-100' : 'bg-white'
                  }`}
              >
                <input
                  type="checkbox"
                  checked={selectedMails.includes(mail.id)}
                  onChange={() => toggleSelection(mail.id)}
                  className="mr-2 accent-blue-600"
                />
                {/* Star Icon */}
                <CiStar
                  className={`mr-2 cursor-pointer ${mail.starred ? 'text-yellow-600' : 'text-gray-400'}`}
                  onClick={() => handleStar(mail.id)}
                />
                <div className="flex-grow">
                  {/* Display sender first, then subject */}
                  <Link to={`/mail/${mail.id}`} className="font-semibold">
                    {mail.sender} - {mail.subject}
                  </Link>
                </div>
                {/* Display time on the top right */}
                <div className={`text-sm text-gray-500 absolute top-1 right-4 transition-opacity duration-200 ${selectedMails.includes(mail.id) ? 'opacity-0' : 'opacity-100'}`}>
                  {mail.time}
                </div>
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 flex space-x-2 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out">
                  <button
                    onClick={() => markAsRead(mail.id)}
                    className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                  >
                    <IoMdMailUnread />
                  </button>
                  <button
                    onClick={() => handleDelete(mail.id)}
                    className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500">{config.noMailMessage}</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Mailbox;
