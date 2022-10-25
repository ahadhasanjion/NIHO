import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    const {title, image_url, details, category_id} = courses;

    return (
        <article class="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
  <img
    alt="Office"
    src={image_url}    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900">
        {title}
      </h3>
    </a>

    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
      {details}
    </p>

    <a
      href="#"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Find out more

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
      <Link to={`/category/${category_id}`}>
               <button variant="primary">Go somewhere</button>
          </Link>
    </a>
  </div>
</article>

    );
};

export default Courses;