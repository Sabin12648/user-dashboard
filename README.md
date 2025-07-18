# User Dashboard

A modern, responsive React dashboard that displays a list of users fetched from a public API, with search and detail view functionality.

## Features

### ✅ User List Page
- **API Integration**: Fetches users from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)
- **Responsive Layout**: Clean table and card layouts with toggle functionality
- **Layout Persistence**: Selected layout persists upon page refresh using localStorage
- **Search Functionality**: Filter users by name, email, or username
- **Loading States**: Shows loading spinner while fetching data
- **Error Handling**: Displays proper error messages when requests fail

### ✅ User Detail Page
- **Dynamic Routing**: Navigate to `/user/:id` for individual user details
- **Complete Information**: Displays full user profile, company, and address details
- **Back Navigation**: "Back to list" button for easy navigation

### ✅ Modern UI/UX
- **Tailwind CSS**: Modern, responsive styling
- **Mobile-First**: Works seamlessly on both mobile and desktop
- **Interactive Elements**: Hover effects, transitions, and smooth animations
- **Accessibility**: Proper semantic HTML and ARIA attributes

### ✅ React Best Practices
- **Functional Components**: Modern React with hooks
- **State Management**: Uses `useState` and `useEffect` appropriately
- **Custom Hooks**: Reusable `useUsers` and `useLayout` hooks
- **TypeScript**: Full type safety throughout the application
- **React Router**: Client-side routing with React Router DOM

### ✅ Testing
- **Unit Tests**: Basic tests with React Testing Library and Vitest
- **Component Testing**: Tests for LoadingSpinner component

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd user-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ErrorMessage.tsx
│   ├── LayoutToggle.tsx
│   ├── LoadingSpinner.tsx
│   ├── SearchBar.tsx
│   ├── UserCard.tsx
│   └── UserTable.tsx
├── hooks/              # Custom React hooks
│   ├── useLayout.ts
│   └── useUsers.ts
├── pages/              # Page components
│   ├── UserDetailPage.tsx
│   └── UserListPage.tsx
├── types/              # TypeScript type definitions
│   └── user.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## API Integration

The application fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users), which provides mock user data for testing and development.

### User Data Structure
```typescript
interface User {
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
```

## Features in Detail

### Search Functionality
- Real-time filtering as you type
- Searches across name, email, and username fields
- Case-insensitive search
- Shows result count

### Layout Toggle
- Switch between table and card views
- Layout preference saved in localStorage
- Responsive design adapts to screen size

### Error Handling
- Network error detection
- User-friendly error messages
- Retry functionality
- Graceful fallbacks

### Performance
- Efficient re-rendering with React.memo
- Optimized search with useMemo
- Lazy loading of components
- Minimal bundle size with Vite

## Deployment

The application is ready for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE). 