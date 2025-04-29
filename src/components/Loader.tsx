import React from 'react';

const Loader: React.FC = () => (
  <div className="flex items-center justify-center h-full w-full">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-4 border-gray-200 border-t-primary"></div>
  </div>
);

export default Loader; 