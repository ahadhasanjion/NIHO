import React from 'react';

const Faq = () => {
    return (
        <div className='' style={{width:"50%", margin:"0 auto"}}>
            <div className="space-y-4 mt-10 mb-10">
                <details class="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary class="flex cursor-pointer items-center justify-between">
                        <h2 class="text-lg font-medium text-gray-900">What is NiHo?
                        </h2>
                        <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                          <svg xmlns="http://www.w3.org/2000/svg"class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20"fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"clip-rule="evenodd"/>
                          </svg>
                        </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                    NiHO is a community of millions of people around the world who are learning to code together. You can learn to code with free online courses, programming projects, and interview preparation for developer jobs.
                    </p>
                </details>
                <details class="group border-l-4 border-green-500 bg-gray-50 p-6" open>
                    <summary class="flex cursor-pointer items-center justify-between">
                        <h2 class="text-lg font-medium text-gray-900">How can you help me learn to code?</h2>
                        <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0 transition duration-300  group-open:-rotate-45"viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd"d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"clip-rule="evenodd"/>
                         </svg>
                        </span>
                    </summary>
                    <p class="mt-4 leading-relaxed text-gray-700">
                    You'll learn to code by completing coding challenges and building projects. You'll also earn verified certifications along the way.
                    </p>
                </details>
                <details class="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary class="flex cursor-pointer items-center justify-between">
                        <h2 class="text-lg font-medium text-gray-900">How long will it take me to finish each of NiHo's certifications??
                        </h2>
                        <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                          <svg xmlns="http://www.w3.org/2000/svg"class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20"fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"clip-rule="evenodd"/>
                          </svg>
                        </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                    Each certification takes around 300 hours of dedicated learning. Some people may take longer. These certifications are completely self-paced, so take as long as you need.
                    </p>
                </details>
                <details class="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary class="flex cursor-pointer items-center justify-between">
                        <h2 class="text-lg font-medium text-gray-900">Do Programiz PRO have any mobile apps?
                        </h2>
                        <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                          <svg xmlns="http://www.w3.org/2000/svg"class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20"fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"clip-rule="evenodd"/>
                          </svg>
                        </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                    No, currently, we only have a web app. However, Programiz PRO is well optimized for all devices.
                    </p>
                </details>
                <details class="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary class="flex cursor-pointer items-center justify-between">
                        <h2 class="text-lg font-medium text-gray-900">What is the difference between a Completion Certificate and a Professional Certificate?
                        </h2>
                        <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                          <svg xmlns="http://www.w3.org/2000/svg"class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20"fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"clip-rule="evenodd"/>
                          </svg>
                        </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      You will get a Professional Certificate once you complete a learning path. However, you can get a Completion Certificate after completing each level in a learning path.
                      If you are signed in, you can also track your progress and closeness of certificates in the progress page which you can visit from navbar
                    </p>
                </details>
             </div>

        </div>
    );
};

export default Faq;