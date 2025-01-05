import React from "react";

interface TeacherCardProps {
  totalTeachers: number;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ totalTeachers }) => {
  return (
    <div className="flex flex-col items-center bg-pink-50 p-6 rounded-lg shadow-md w-64">
      <div className="flex items-center justify-center bg-pink-200 p-3 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-pink-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16l1.5-2.5m-3-5L12 9m5-2.5L8 16m9-6.5V17m0 0h2.5M17 17h-2.5m-5 0h-2.5m5-6.5V4.5m0 0h2.5M12 4.5H9.5"
          />
        </svg>
      </div>
      <p className="text-gray-700 mt-4 text-lg font-medium">Total Teacher</p>
      <p className="text-gray-900 mt-2 text-2xl font-bold">{totalTeachers}</p>
    </div>
  );
};

export default TeacherCard;
