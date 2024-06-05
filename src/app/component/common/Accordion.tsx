// components/Accordion.js
"use client"
import { useState } from 'react';

const Accordion = ({ title, content,isLast }:any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${!isLast || isOpen ? 'border-b border-[#FFD1A6]' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
      >
        <span className="text-[#1E1E1E] text-[16px] bold">{title}</span>
        <span className="text-[#1E1E1E]">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-[#888888] text-[16px]">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
