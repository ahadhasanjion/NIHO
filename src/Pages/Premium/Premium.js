import React from 'react';
import {useLoaderData} from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const Premium = () => {
    const course = useLoaderData();
    const {title,details,price,Enroll,image_url} = course;
    const downloadpdf = () => {
      html2canvas(document.getElementById('course')).then(canvas => {

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("download.pdf");  
      });
    }  
      return ( 
        <div className='mt-10 mb-10'>
          <div className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-md bg-teal-600 m-auto" id="premium">
	<div>
		<img src={image_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
    <div className='flex justify-between align-center px-5'>
		    <h2 className="mb-1 text-xl font-bold text-white">{title}</h2>
        <button onClick={downloadpdf} type="button" className="px-2 font-semibold border rounded  text-white flex">PDF <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg></button>
    </div>
    <p className='px-5 text-white font-normal pt-5'>{details}</p>
	</div>
	<div className="flex flex-wrap justify-between px-5 pb-5">
      <p className='text-white font-bold'>Enroll: <span className='text-white font-normal'>{Enroll}</span></p>
      <p className='text-white font-bold'>Price: <span className='text-white font-normal'>{price}</span></p>
		
	</div>
</div>

        </div>
      );
    };
  export default Premium;
