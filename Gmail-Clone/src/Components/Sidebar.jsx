import React, { useEffect, useState } from 'react';
import { RiInbox2Fill } from 'react-icons/ri';
import { CiStar } from 'react-icons/ci';
import { LuClock } from 'react-icons/lu';
import { TbSend2 } from 'react-icons/tb';
import { FaCopy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  
  return (
    <div className="outline-none mt-24 h-screen bg-[#F6F8FC] w-60 min-h-screen p-4 border-r border-gray-200 flex flex-col items-center transition-all duration-300">
      <Link
        to="/inbox"
        className="flex items-center gap-2 w-full max-w-[280px] h-12 hover:bg-gray-200 text-gray-700 font-medium"
      >
        <RiInbox2Fill />
        <span>Inbox</span>
      </Link>
      <Link
        to="/starred"
        className="flex items-center gap-2 w-full max-w-[280px] h-12 hover:bg-gray-200 text-gray-700 font-medium"
      >
        <CiStar />
        <span>Starred</span>
      </Link>
      <Link
        to="/snoozed"
        className="flex items-center gap-2 w-full max-w-[280px] h-12 hover:bg-gray-200 text-gray-700 font-medium"
      >
        <LuClock />
        <span>Snoozed</span>
      </Link>
      <Link
        to="/sent"
        className="flex items-center gap-2 w-full max-w-[280px] h-12 hover:bg-gray-200 text-gray-700 font-medium"
      >
        <TbSend2 />
        <span>Sent</span>
      </Link>
      <Link
        to="/drafts"
        className="flex items-center gap-2 w-full max-w-[280px] h-12 hover:bg-gray-200 text-gray-700 font-medium"
      >
        <FaCopy />
        <span>Drafts</span>
      </Link>

      {showMore && (
        <>
          <Link
            to="/important"
            className="flex items-center gap-1 w-full max-w-[280px] h-12 hover:bg-gray-200 text-gray-700 font-medium"
          >
            <span>Important</span>
          </Link>
          <Link
            to="/chats"
            className="flex items-center gap-2 w-full max-w-[280px] h-12 hover:bg-gray-200 text-gray-700"
          >
            <span>Chats</span>
          </Link>
          <Link
            to="/scheduled"
            className="flex items-center gap-2 w-full max-w-[280px] h-10 hover:bg-gray-200 text-gray-700"
          >
            <span>Scheduled</span>
          </Link>
          <Link
            to="/all-mail"
            className="flex items-center gap-2 w-full max-w-[280px] h-10 hover:bg-gray-200 text-gray-700"
          >
            <span>All Mail</span>
          </Link>
          <Link
            to="/spam"
            className="flex items-center gap-2 w-full max-w-[280px] h-10 hover:bg-gray-200 text-gray-700"
          >
            <span>Spam</span>
          </Link>
          <Link
            to="/trash"
            className="flex items-center gap-2 w-full max-w-[280px] h-10 hover:bg-gray-200 text-gray-700"
          >
            <span>Trash</span>
          </Link>
          <Link
            to="/manage-labels"
            className="flex items-center gap-2 w-full max-w-[280px] h-10 hover:bg-gray-200 text-gray-700"
          >
            <span>Manage Labels</span>
          </Link>
        </>
      )}

      <button
        onClick={handleToggle}
        className="flex items-center gap-2 w-full max-w-[280px] h-12 hover:bg-gray-200 text-gray-700 font-medium"
      >
        <span className="text-gray-800">{showMore ? 'See Less' : 'See More'}</span>
      </button>
    </div>
  );
}

export default Sidebar;
