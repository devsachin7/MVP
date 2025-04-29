import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { dashboardApi, DashboardSummary, ChartData, RecentActivity } from '../api/dashboard.api';
import { getUserInfo } from '../utils/auth';


const Dashboard: React.FC = () => {
  const { accounts, instance } = useMsal();
  
  // Process any redirect responses to ensure tokens are captured
  useEffect(() => {
    instance.handleRedirectPromise().catch(error => {
      console.error("Error handling redirect in Dashboard:", error);
    });
  }, [instance]);
  
  // Get user info from our local storage helper
  const userInfo = getUserInfo();
  
  // Fallback to MSAL accounts if local storage doesn't have the data
  const userName = userInfo?.name || 
                 accounts[0]?.idTokenClaims?.given_name as string || 
                 (accounts[0]?.idTokenClaims?.name as string) || 
                 accounts[0]?.name || 
                 'User';
  
  // Log user info for debugging
  useEffect(() => {
    console.log("Dashboard rendered with user:", userName);
    console.log("Accounts:", accounts);
  }, [accounts, userName]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [summaryData, setSummaryData] = useState<DashboardSummary | null>(null);
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [activities, setActivities] = useState<RecentActivity[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Fetch dashboard summary data
        const summaryResponse = await dashboardApi.getSummary();
        setSummaryData(summaryResponse.data);
        
        // Fetch chart data
        const chartResponse = await dashboardApi.getChartData();
        setChartData(chartResponse.data);
        
        // Fetch recent activities
        const activitiesResponse = await dashboardApi.getRecentActivity();
        setActivities(activitiesResponse.data);
      } catch (err) {
        setError('Failed to load dashboard data. Please try again later.');
        console.error('Dashboard data fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);
  
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard data...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-red-50 p-6 rounded-lg border border-red-200">
          <h3 className="text-lg font-medium text-red-800">Error</h3>
          <p className="mt-2 text-sm text-red-700">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {userName}
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your account today.
        </p>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData && (
          <>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-gray-500 font-medium text-sm mb-2">Total Users</h3>
              <p className="text-3xl font-bold text-primary">{summaryData.totalUsers.toLocaleString()}</p>
              <div className="mt-2 text-xs text-green-600 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
                <span>+12% from last month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-gray-500 font-medium text-sm mb-2">Active Users</h3>
              <p className="text-3xl font-bold text-primary">{summaryData.activeUsers.toLocaleString()}</p>
              <div className="mt-2 text-xs text-green-600 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
                <span>+5% from last month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-gray-500 font-medium text-sm mb-2">Total Revenue</h3>
              <p className="text-3xl font-bold text-primary">
                ${summaryData.totalRevenue.toLocaleString()}
              </p>
              <div className="mt-2 text-xs text-green-600 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
                <span>+8% from last month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-gray-500 font-medium text-sm mb-2">Total Orders</h3>
              <p className="text-3xl font-bold text-primary">{summaryData.totalOrders.toLocaleString()}</p>
              <div className="mt-2 text-xs text-red-600 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd"></path>
                </svg>
                <span>-3% from last month</span>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Chart Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Monthly Revenue</h2>
        <div className="h-80 flex items-center justify-center border-t border-gray-100 pt-4">
          {chartData ? (
            <div className="w-full h-full">
              <p className="text-center text-gray-500 mt-20">
                Chart would be displayed here. Using a chart library like Chart.js or Recharts.
              </p>
            </div>
          ) : (
            <p className="text-gray-500">No chart data available</p>
          )}
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="overflow-x-auto">
          {activities.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((activity) => (
                  <tr key={activity.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {activity.userName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {activity.action}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(activity.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 py-4">No recent activities</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 