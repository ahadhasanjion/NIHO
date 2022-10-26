import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const {title, image_url, _id, details,} = course;
    return (
        <div>
           <div className="w-80 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image_url} alt="Sunset in the mountains" />
            <div className="px-6 py-4" >
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">
              {
                        details.length > 250 ?
                        <p>{details.slice(0, 100) +'...'}<Link to={`/course/${_id}`}>Read More</Link></p>
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