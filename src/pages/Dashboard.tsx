import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
// import { dashboardApi, DashboardSummary, RecentActivity } from '../api/dashboard.api';
import { getUserInfo } from '../utils/auth';
import Card from '../components/Card';


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
  // const [summaryData, setSummaryData] = useState<DashboardSummary | null>(null);
  // const [activities, setActivities] = useState<RecentActivity[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch dashboard summary data
        // const summaryResponse = await dashboardApi.getSummary();
        // setSummaryData(summaryResponse.data);

        // Fetch recent activities
        // const activitiesResponse = await dashboardApi.getRecentActivity();
        // setActivities(activitiesResponse.data);
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
      {/* New Safety Audit Card */}
      <Card title="New Safety Audit" className="w-full mb-8">
        <h6 className="text-base font-semibold text-gray-800 mb-4">
          Beginning of Safety Audit
        </h6>
        <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-2">
          <li>
            Commit a maximum of one hour to perform a Safety Audit. Smaller projects may take less time.
          </li>
          <li>
            All project leadership must participate, including Superintendents, Project Managers, Assistant Superintendents, Project Engineers, Quality, and Safety personnel.
          </li>
          <li>
            Use any method (iPad, iPhone, or pen and paper) to record observations and severity.
          </li>
          <li>
            If using pen and paper, complete the Safety Audit Form after the walkthrough.
          </li>
          <li>
            Each of the 15 categories in the form includes dropdowns for specific violations and responsible parties.
          </li>
          <li>
            Assign a severity level to each violation.
          </li>
          <li>
            If the observed violation isn't listed, select "Other" and describe it in the Notes area.
          </li>
          <li>
            Use the form to note if work was stopped due to IDLH (Immediately Dangerous to Life or Health) conditions.
          </li>
          <li>
            The audit checks for both compliance (e.g., rigging inspection) and unsafe conditions/acts.
          </li>
          <li>
            Examples:
            <ul className="list-disc list-inside ml-5">
              <li>Unsafe condition: tripping hazard like a board in a walkway.</li>
              <li>Unsafe act: someone walking over that board.</li>
            </ul>
          </li>
          <li>
            Special attention is given to risk areas like lower back strain, line of fire, and pinch points.
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Dashboard; 