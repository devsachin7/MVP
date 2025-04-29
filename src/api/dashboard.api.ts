import { apiService } from '../services/api';
import { ApiResponse } from '../types/api';
import { mockDashboardSummary, mockChartData, mockRecentActivities } from './mock';

// Flag to determine if we should use mock data (useful for development)
const USE_MOCK = import.meta.env.MODE === 'development';

// Define types for dashboard data
export interface DashboardSummary {
  totalUsers: number;
  activeUsers: number;
  totalRevenue: number;
  totalOrders: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string;
  }[];
}

export interface RecentActivity {
  id: string;
  userId: string;
  userName: string;
  action: string;
  timestamp: string;
  details?: Record<string, unknown>;
}

export const dashboardApi = {
  getSummary: (): Promise<ApiResponse<DashboardSummary>> => {
    if (USE_MOCK) {
      return Promise.resolve({
        data: mockDashboardSummary,
        message: 'Dashboard summary retrieved successfully',
        success: true,
      });
    }
    
    return apiService.get<DashboardSummary>('/dashboard/summary');
  },
  
  getChartData: (period: 'daily' | 'weekly' | 'monthly' = 'monthly'): Promise<ApiResponse<ChartData>> => {
    if (USE_MOCK) {
      return Promise.resolve({
        data: mockChartData,
        message: `${period.charAt(0).toUpperCase() + period.slice(1)} chart data retrieved successfully`,
        success: true,
      });
    }
    
    return apiService.get<ChartData>(`/dashboard/chart-data?period=${period}`);
  },
  
  getRecentActivity: (limit = 10): Promise<ApiResponse<RecentActivity[]>> => {
    if (USE_MOCK) {
      return Promise.resolve({
        data: mockRecentActivities.slice(0, limit),
        message: 'Recent activities retrieved successfully',
        success: true,
      });
    }
    
    return apiService.get<RecentActivity[]>(`/dashboard/activity?limit=${limit}`);
  },
}; 