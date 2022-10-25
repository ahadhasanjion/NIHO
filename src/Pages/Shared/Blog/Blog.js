import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='mx-8 mb-10'>
            <div className="space-y-6">
                <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">What is Cors?</h2>
                            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5    flex-shrink-0 transition duration-300 group-open:-rotate-45"viewBox="0 0 20 20"fill="currentColor">
                                <path fill-rule="evenodd"d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"clip-rule="evenodd"/>
                               </svg>
                            </span>
                    </summary>
                     <p className="mt-4 leading-relaxed text-gray-700">
                        CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                    </p>
                </details>
                <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">why are you use firebase? what other options do you have to implement authentication?</h2>
                            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5    flex-shrink-0 transition duration-300 group-open:-rotate-45"viewBox="0 0 20 20"fill="currentColor">
                                <path fill-rule="evenodd"d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"clip-rule="evenodd"/>
                               </svg>
                            </span>
                    </summary>
                     <p className="mt-4 leading-relaxed text-gray-700">
                     It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don't have to send requests to get new data, you only need to subscribe once.
                     What other options do you have to implement authentication without Firebase?
                    Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
                    </p>
                </details>
                <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">How does private route work</h2>
                            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5    flex-shrink-0 transition duration-300 group-open:-rotate-45"viewBox="0 0 20 20"fill="currentColor">
                                <path fill-rule="evenodd"d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"clip-rule="evenodd"/>
                               </svg>
                            </span>
                    </summary>
                     <p className="mt-4 leading-relaxed text-gray-700">
                     PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
                    </p>
                </details>
                <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">what is Node? How does Node work?</h2>
                            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5    flex-shrink-0 transition duration-300 group-open:-rotate-45"viewBox="0 0 20 20"fill="currentColor">
                                <path fill-rule="evenodd"d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"clip-rule="evenodd"/>
                               </svg>
                            </span>
                    </summary>
                     <p className="mt-4 leading-relaxed text-gray-700">
                     Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications
                     It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                    </p>
                </details>
            </div>
        </div>

    );
};

export default Blog;