import React from 'react';
import './globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col">
          <header className="bg-primary py-4">
            {/* Add your header content here */}
          </header>
          <main className="flex-grow">
            {/* Add your main content here */}
            {children}
          </main>
          <footer className="bg-primary py-4">
            {/* Add your footer content here */}
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
