import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import LeftSide from '../Shared/LeftSide/LeftSide'


const Courses = () => { 
  const allCourse = useLoaderData();

  return (
    <div className='flex lg:flex'>
      <div className='w-1/4'>
        
      <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400"></h2>
      <div className="flex flex-col space-y-1">
				{
          allCourse.map(course => <Link to={`/course/${course._id}`} className='btn' key={course._id}>{course.name}</Link>)
        }
			</div>
		</div>
		
	</nav>
</aside>
        
      </div>
      <div className='grid grid-cols-3 gap-4 w-3/4'>
        {
          allCourse.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
        }
      </div>
    </div>
  );
};

export default Courses;