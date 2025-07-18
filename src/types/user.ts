export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserListProps {
  users: User[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  layout: 'table' | 'card';
  onUserClick: (user: User) => void;
  onSearchChange: (term: string) => void;
  onLayoutChange: (layout: 'table' | 'card') => void;
}

export interface UserDetailProps {
  user: User | null;
  loading: boolean;
  error: string | null;
  onBack: () => void;
} 