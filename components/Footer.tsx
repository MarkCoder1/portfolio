import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Mark Alber.
        </p>
      </div>
    </footer>
  );
};