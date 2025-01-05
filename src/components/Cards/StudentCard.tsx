import React from "react";

interface StudentCardProps {
  totalStudents: number;
}

const StudentCard: React.FC<StudentCardProps> = ({ totalStudents }) => {
  return (
    <div className="flex flex-col items-center bg-purple-50 p-6 rounded-lg shadow-md w-64">
      <div className="flex items-center justify-center bg-purple-200 p-3 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-7-6l7 4 7-4"
          />
        </svg>
      </div>
      <p className="text-gray-700 mt-4 text-lg font-medium">Total Students</p>
      <p className="text-gray-900 mt-2 text-2xl font-bold">{totalStudents}</p>
    </div>
  );
};

export default StudentCard;
