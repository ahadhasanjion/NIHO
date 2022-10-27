import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';




const Course = () => {
    const course = useLoaderData();
    const {title, details, image_url, category_id} = course;
    const downloadPDF =() => {
      html2canvas(document.getElementById('course')).then(canvas => {

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("download.pdf");
    });
    }
    return (
        <div>
          <div className='mb-10 mt-10'>
               <div className="max-w-sm rounded overflow-hidden mx-auto shadow-lg bg-teal-600" id="course">
              <img className="w-full" src={image_url} alt="Sunset in the mountains" />
              <div className="px-6 py-4" >
                <div className="font-bold text-xl mb-2 text-white flex justify-between align-center">
                  {title}
                  <button onClick={downloadPDF} type="button" className="px-2 font-semibold border rounded  text-white flex" >PDF <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
</button>
                </div>
                <p className="text-white font-normal text-base pt-1">
                  {details}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2 mb-5">
                    
              <span className="px-12 py-4 border outline text-white font-bold"><Link to={`/premium/${category_id}`}>Premium Access</Link></span>
              </div>
                
          </div>
          </div>
        </div>
    );
};

export default Course;