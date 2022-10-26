import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    const {title, details, image_url, category_id} = course;
    return (
        <div>
               <div className="max-w-sm rounded overflow-hidden mx-auto shadow-lg">
              <img className="w-full" src={image_url} alt="Sunset in the mountains" />
              <div className="px-6 py-4" >
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                  {details}
                </p>
              </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
                <Link to={`/category/${category_id}`}>
                   <button variant="primary"></button>
                 </Link>
          </div>
        </div>
    );
};

export default Course;