import { User, AuthResponse } from '../types/auth';
import { DashboardSummary, ChartData, RecentActivity } from './dashboard.api';

// Mock user data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    avatar: '',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    avatar: '',
  }
];

// Mock login response
export const mockLogin = (email: string, password: string): Promise<AuthResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful login with the default admin user
      if (email === 'admin@example.com' && password === 'password') {
        resolve({
          user: mockUsers[0],
          token: 'mock-jwt-token-' + Date.now(),
        });
      } else if (email && password.length >= 6) {
        // Simulate successful login with any valid credentials
        resolve({
          user: {
            id: '999',
            name: email.split('@')[0],
            email: email,
            role: 'user',
          },
          token: 'mock-jwt-token-' + Date.now(),
        });
      } else {
        // Simulate login failure
        reject({ message: 'Invalid email or password' });
      }
    }, 800); // Add delay to simulate network
  });
};

// Mock signup response
export const mockSignup = (name: string, email: string): Promise<AuthResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check if email already exists in mock users
      const existingUser = mockUsers.find(user => user.email === email);
      if (existingUser) {
        reject({ message: 'User with this email already exists' });
        return;
      }
      
      // Create new user
      const newUser: User = {
        id: (mockUsers.length + 1).toString(),
        name,
        email,
        role: 'user',
      };
      
      resolve({
        user: newUser,
        token: 'mock-jwt-token-' + Date.now(),
      });
    }, 800);
  });
};

// Mock dashboard summary data
export const mockDashboardSummary: DashboardSummary = {
  totalUsers: 1254,
  activeUsers: 843,
  totalRevenue: 48650,
  totalOrders: 267,
};

// Mock chart data
export const mockChartData: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [3500, 4200, 5100, 4800, 5300, 6200, 5800, 6500, 7200, 6800, 7500, 8200],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    },
  ],
};

// Mock recent activities
export const mockRecentActivities: RecentActivity[] = [
  {
    id: '1',
    userId: '1',
    userName: 'John Doe',
    action: 'Updated profile settings',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
  },
  {
    id: '2',
    userId: '2',
    userName: 'Jane Smith',
    action: 'Completed onboarding',
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
  },
  {
    id: '3',
    userId: '1',
    userName: 'John Doe',
    action: 'Created a new project',
    timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(), // 4 hours ago
  },
  {
    id: '4',
    userId: '3',
    userName: 'Sarah Johnson',
    action: 'Joined the platform',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(), // 6 hours ago
  },
  {
    id: '5',
    userId: '4',
    userName: 'Robert Williams',
    action: 'Submitted a support ticket',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
  },
]; 