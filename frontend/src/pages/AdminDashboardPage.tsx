import React from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const AdminDashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <p className="text-gray-500 text-sm">Total Users</p>
            <p className="text-3xl font-bold">1,234</p>
          </Card>
          <Card>
            <p className="text-gray-500 text-sm">Active Projects</p>
            <p className="text-3xl font-bold">567</p>
          </Card>
          <Card>
            <p className="text-gray-500 text-sm">API Requests</p>
            <p className="text-3xl font-bold">89,234</p>
          </Card>
          <Card>
            <p className="text-gray-500 text-sm">Success Rate</p>
            <p className="text-3xl font-bold">99.2%</p>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="border-t-2 border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="secondary" className="w-full">
              View All Users
            </Button>
            <Button variant="secondary" className="w-full">
              API Settings
            </Button>
            <Button variant="secondary" className="w-full">
              System Logs
            </Button>
            <Button variant="secondary" className="w-full">
              Security Alerts
            </Button>
          </div>
        </div>

        {/* Admin Sections */}
        <div className="border-t-2 border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Admin Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'User Management', href: '#' },
              { name: 'AI Models', href: '#' },
              { name: 'API Keys', href: '#' },
              { name: 'System Config', href: '#' },
              { name: 'Monitoring', href: '#' },
              { name: 'Security', href: '#' }
            ].map((section) => (
              <Button
                key={section.name}
                variant="secondary"
                className="w-full"
                onClick={() => console.log(`Navigate to ${section.name}`)}
              >
                {section.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
