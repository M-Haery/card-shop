import React, { useState } from 'react';

const CopyBTN = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('متن کپی شد!');
    } catch (err) {
      setCopySuccess('خطا در کپی کردن متن');
    }

    setTimeout(() => {
      setCopySuccess('');
    }, 1000);
  };

  return (
    <div className="flex justify-between w-[300px] copy-text-component">
      <span>{text}</span>
      <button className=' bg-cyan-400 hover:bg-cyan-300 transition-colors duration-75 w-16 h-7 rounded-lg text-white mr-3' onClick={copyToClipboard}>کپی</button>
      {copySuccess && <span className=' bg-slate-300 py-[1px] px-[1px] rounded-md'>{copySuccess}</span>}
    </div>
  );
};

export default CopyBTN;