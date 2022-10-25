import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import LanguageSummary from '../LanguageSummary/LanguageSummary';

const Home = () => {
    const allLanguage = useLoaderData();
    return (
        <div>
        <h2>AHJ News Home {allLanguage.length}</h2>
        {
            allLanguage.map(news => <LanguageSummary key={category._id} courses={Courses}>

            </LanguageSummary>)
        }
    </div>
          
    );    
};

export default Home;