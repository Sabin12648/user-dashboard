import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/user';
import { useUsers } from '../hooks/useUsers';
import { useLayout } from '../hooks/useLayout';
import { SearchBar } from '../components/SearchBar';
import { LayoutToggle } from '../components/LayoutToggle';
import { UserTable } from '../components/UserTable';
import { UserCard } from '../components/UserCard';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export const UserListPage: React.FC = () => {
  const navigate = useNavigate();
  const { users, loading, error } = useUsers();
  const { layout, changeLayout } = useLayout();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    if (!searchTerm.trim()) return users;
    
    const term = searchTerm.toLowerCase();
    return users.filter(user => 
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.username.toLowerCase().includes(term)
    );
  }, [users, searchTerm]);

  const handleUserClick = (user: User) => {
    navigate(`/user/${user.id}`);
  };

  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) {
    return <LoadingSpinner size="lg" text="Loading users..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={handleRetry} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">User Dashboard</h1>
          <p className="text-gray-600">Manage and view user information</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>
          <div className="flex-shrink-0">
            <LayoutToggle
              layout={layout}
              onLayoutChange={changeLayout}
            />
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing {filteredUsers.length} of {users.length} users
          </p>
        </div>

        {/* Content */}
        {filteredUsers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No users found matching your search.</p>
          </div>
        ) : (
          <>
            {layout === 'table' ? (
              <UserTable
                users={filteredUsers}
                onUserClick={handleUserClick}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    onUserClick={handleUserClick}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}; 