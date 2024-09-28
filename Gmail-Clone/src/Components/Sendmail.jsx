import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Sendmail = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission notification

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'to') setTo(value);
    if (id === 'subject') setSubject(value);
    if (id === 'message') setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic validation
    if (!to || !message) {
      alert('Please fill out all required fields.'); // Notify user
      return;
    }

    const formData = { to, subject, message };
    console.log('Form Data:', formData);

    // Reset form fields
    setTo('');
    setSubject('');
    setMessage('');
    setIsFormVisible(false);
    setIsSubmitted(true); // Indicate that the form was submitted

    // Optionally, reset the submission notification after a few seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="absolute">
      {/* Sidebar Section */}
      <div className="bg-[#F6F8FC] p-4 w-60">
        <button 
          onClick={toggleFormVisibility}
          className="bg-[#C2E7FF] shadow-md hover:shadow-lg transition-shadow duration-300 w-[162px] h-[56px] rounded-xl flex items-center justify-center space-x-3 text-gray-700 font-medium border border-gray-300 mb-4"
        >
          <FaPencilAlt className="text-xl" />
          <span className="text-gray-800">Compose</span>
        </button>
      </div>

      {/* Form Section */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[450px] h-auto max-h-[80vh] bg-white p-6 rounded-lg shadow-lg overflow-auto z-50 ${isFormVisible ? 'block' : 'hidden'}`}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Header for the compose form */}
          <div className="bg-slate-100 p-2 rounded-md mb-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">New Message</h2>
            <button 
              type="button"
              onClick={toggleFormVisibility}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              <IoMdClose />
            </button>
          </div>

          {/* To Field */}
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
            <input
              id="to"
              type="email"
              value={to}
              onChange={handleChange}
              placeholder="Recipient's email"
              className="outline-none w-full p-2 mt-1 border-b border-gray-300"
              required // New attribute for validation
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={handleChange}
              placeholder="Subject"
              className="outline-none w-full p-2 mt-1 border-b border-gray-300"
            />
          </div>

          {/* Message Body */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={handleChange}
              placeholder="Compose your message here..."
              rows="6"
              className="outline-none w-full p-2 mt-1 border-none resize-none"
              style={{ overflowY: 'auto', height: 'auto', minHeight: '150px' }}
              required // New attribute for validation
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </form>
        
        {/* Success Notification */}
        {isSubmitted && <div className="text-green-500 mt-4">Email sent successfully!</div>} {/* Notification */}
      </div>
    </div>
  );
};

export default Sendmail;
