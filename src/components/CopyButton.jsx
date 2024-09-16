import React, { useState } from 'react';

const CopyButton = ({ textToCopy, buttonText = 'Hire Me on E-mail', successMessage = 'E-mail Copied!' }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-4 py-2 rounded ${
        isCopied
          ? 'bg-green-500 text-white'
          : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
      } transition-colors duration-200`}
    >
      {isCopied ? successMessage : buttonText}
    </button>
  );
};

export default CopyButton;