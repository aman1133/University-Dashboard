import React from "react";

interface CourseCardProps {
  totalCourses: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ totalCourses }) => {
  return (
    <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-md w-64">
      <div className="flex items-center justify-center bg-blue-200 p-3 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253L8.207 4.5 4 6.253V17.5l4.207 1.753L12 17.5m0-11.247l3.793 1.753L20 6.253V17.5l-4.207 1.753L12 17.5m0-11.247v11.247"
          />
        </svg>
      </div>
      <p className="text-gray-700 mt-4 text-lg font-medium">Total Courses</p>
      <p className="text-gray-900 mt-2 text-2xl font-bold">{totalCourses}</p>
    </div>
  );
};

export default CourseCard;
