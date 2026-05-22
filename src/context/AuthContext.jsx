import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  
  // Load initial state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // Sync currentUser changes to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      // Update the user in the "database" (users object)
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      users[currentUser.email] = currentUser;
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[email]) {
      throw new Error('User with this email already exists.');
    }
    
    const newUser = {
      name,
      email,
      password, // In a real app, never store plain text passwords
      activityProfile: {} // Tracks { category: count }
    };
    
    users[email] = newUser;
    localStorage.setItem('users', JSON.stringify(users));
    setCurrentUser(newUser);
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const user = users[email];
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password.');
    }
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const logActivity = (category) => {
    if (!currentUser) return;
    
    setCurrentUser(prev => {
      const currentProfile = prev.activityProfile || {};
      const newProfile = {
        ...currentProfile,
        [category]: (currentProfile[category] || 0) + 1
      };
      return {
        ...prev,
        activityProfile: newProfile
      };
    });
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout, logActivity }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
