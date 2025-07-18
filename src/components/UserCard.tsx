import React from 'react';
import { User } from '../types/user';
import { Mail, Phone, MapPin, Building, Globe } from 'lucide-react';

interface UserCardProps {
  user: User;
  onUserClick: (user: User) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onUserClick }) => {
  return (
    <div
      onClick={() => onUserClick(user)}
      className="card hover:shadow-lg transition-shadow duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{user.name}</h3>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 font-semibold text-lg">
            {user.name.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Mail className="w-4 h-4 mr-2 text-gray-400" />
          <span className="truncate">{user.email}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <Phone className="w-4 h-4 mr-2 text-gray-400" />
          <span>{user.phone}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Building className="w-4 h-4 mr-2 text-gray-400" />
          <span className="truncate">{user.company.name}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
          <span className="truncate">{user.address.city}, {user.address.street}</span>
        </div>

        {user.website && (
          <div className="flex items-center text-sm text-gray-600">
            <Globe className="w-4 h-4 mr-2 text-gray-400" />
            <span className="truncate">{user.website}</span>
          </div>
        )}
      </div>
    </div>
  );
}; 