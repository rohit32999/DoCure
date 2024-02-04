import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="position-absolute bottom-0 w-full bg-gradient-to-r from-sky-400 via-gray-50 to-blue-500 text-center lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        ©{currentYear} by Semicolon
      </div>
    </footer>
  );
};

export default Footer;
