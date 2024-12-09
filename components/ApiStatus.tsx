import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface ApiStatusProps {
  apiUrl: string;
  status: 'normal' | 'degraded' | 'disruption';
}

const statusColors = {
  normal: 'bg-green-500',
  degraded: 'bg-yellow-500',
  disruption: 'bg-red-500',
};

export const ApiStatus: React.FC<ApiStatusProps> = ({ apiUrl, status }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return ( //flex j p-4 bg-gray-100 rounded-lg shadow-md
    <Card
      className="mb-8 ustify-center items-center gap-8 md:flex-row"
    >
      <CardHeader>
        <CardTitle>API Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-col  content-around ">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center flex-grow">
              <span className="mr-2 ">Mainnet</span>
              <input
                type="text"
                value={apiUrl}
                readOnly
                className="border p-2 rounded w-full"
              />
              <button onClick={copyToClipboard} className="ml-2 p-2 bg-blue-500 text-white rounded">
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div
              className={`w-4 h-4 rounded-full ${statusColors[status]}`}
              title={`Status: ${status}`}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
