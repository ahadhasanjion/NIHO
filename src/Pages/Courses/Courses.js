import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import LeftSide from '../Shared/LeftSide/LeftSide'


const Courses = () => { 
  const allCourse = useLoaderData();

  return (
    <div className='lg:flex md:flex'>
      <div className='lg:w-1/4 md:w-1/3 sm:w-4/4'>
        
      <aside className="w-full p-6 dark:bg-gray-900 dark:text-gray-100">
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400"></h2>
      <div className="flex md:flex-col lg:flex-col sm:flex-row sm:m-auto sm:justify-center justify-center">
				{
          allCourse.map(course => <Link to={`/course/${course._id}`} className="p-4 border-2 bg-teal-600 text-white font-bold" key={course._id}>{course.name}</Link>)
        }
			</div>
		</div>
		
	</nav>
</aside>
        
      </div>
      <div className='grid lg:grid-cols-3 gap-4 w-3/4 md:grid-cols-2 md:w-3/4 md:gap-3 sm:w-4/4 sm:gap-0 sm:justify-center sm:m-auto justify-center'>
        {
          allCourse.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
        }
      </div>
    </div>
  );
};

export default Courses;
// grid lg:grid-cols-3 gap-4 w-3/4 md:grid-cols-2 md:gap-4 sm:grid-col-1 sm:w-4/4