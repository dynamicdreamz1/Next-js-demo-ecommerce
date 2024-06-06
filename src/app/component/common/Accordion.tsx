// components/Accordion.js
"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ title, content, isLast }:any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${!isLast || isOpen ? 'border-b border-[#FFD1A6]' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
      >
        <span className="text-[#1E1E1E] text-[16px]">{title}</span>
        <span className="text-[#1E1E1E]">{isOpen ? '-' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#888888] text-[16px]">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
