import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const {title, image_url, _id, details,} = course;
    return (
      
        <div className='mb-6'>
          <div className="rounded-md shadow-md bg-teal-600 text-white font-bold">
	            <img src={image_url} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	            <div className="flex flex-col justify-between p-6 space-y-8">
		            <div className="space-y-2">
			            <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
			            <p className="dark:text-gray-100">
                     {
                        details.length > 250 ?
                        <p>{details.slice(0, 80) +'...'}<Link className='font-bold  text-green-900' to={`/course/${_id}`}>Read More</Link></p>
                        :
                        <p>{details}</p>
                      }
                  </p>
		            </div>
          </div>
           {/* <div className="max-w-sm w-80 rounded overflow-hidden shadow-lg bg-teal-600 text-white font-bold">
            <img className="w-full" src={image_url} alt="Sunset in the mountains" />
            <div className="px-6 py-4" >
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-white-700 text-base font-normal">
              {
                        details.length > 250 ?
                        <p>{details.slice(0, 80) +'...'}<Link className='font-bold  text-green-900' to={`/course/${_id}`}>Read More</Link></p>
                        :
                        <p>{details}</p>
                    }
              </p>
            </div>
              {/* <Link to={`/category/${_id}`}>
                 <button variant="primary"></button>
               </Link> */}
        </div>
      </div>
    );
};

export default CourseCard;