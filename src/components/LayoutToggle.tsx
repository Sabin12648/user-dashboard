import React from 'react';
import { Table, Grid } from 'lucide-react';

interface LayoutToggleProps {
  layout: 'table' | 'card';
  onLayoutChange: (layout: 'table' | 'card') => void;
}

export const LayoutToggle: React.FC<LayoutToggleProps> = ({ layout, onLayoutChange }) => {
  return (
    <div className="flex bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => onLayoutChange('table')}
        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
          layout === 'table'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <Table className="w-4 h-4 mr-2" />
        Table
      </button>
      <button
        onClick={() => onLayoutChange('card')}
        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
          layout === 'card'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <Grid className="w-4 h-4 mr-2" />
        Cards
      </button>
    </div>
  );
}; 