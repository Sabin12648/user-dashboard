import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User } from '../types/user';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { ArrowLeft, Mail, Phone, MapPin, Building, Globe, Map } from 'lucide-react';

export const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) {
    return <LoadingSpinner size="lg" text="Loading user details..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={handleRetry} />;
  }

  if (!user) {
    return <ErrorMessage message="User not found" onRetry={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Users
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">User Details</h1>
        </div>

        {/* User Profile Card */}
        <div className="card mb-8">
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-2xl">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h2>
              <p className="text-lg text-gray-600 mb-4">@{user.username}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3 text-gray-400" />
                  <span>{user.phone}</span>
                </div>
                {user.website && (
                  <div className="flex items-center text-gray-600">
                    <Globe className="w-5 h-5 mr-3 text-gray-400" />
                    <span>{user.website}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="card mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Building className="w-5 h-5 mr-2 text-gray-400" />
            Company Information
          </h3>
          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-gray-500">Company Name</span>
              <p className="text-gray-900">{user.company.name}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Catch Phrase</span>
              <p className="text-gray-900 italic">"{user.company.catchPhrase}"</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Business</span>
              <p className="text-gray-900">{user.company.bs}</p>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-gray-400" />
            Address Information
          </h3>
          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-gray-500">Street</span>
              <p className="text-gray-900">{user.address.street}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Suite</span>
              <p className="text-gray-900">{user.address.suite}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">City</span>
              <p className="text-gray-900">{user.address.city}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Zipcode</span>
              <p className="text-gray-900">{user.address.zipcode}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Coordinates</span>
              <div className="flex items-center text-gray-900">
                <Map className="w-4 h-4 mr-2 text-gray-400" />
                <span>Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 