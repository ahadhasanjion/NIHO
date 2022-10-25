import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LanguageSummary from '../Shared/LanguageSummary/LanguageSummary';

const Home = () => {
    const allLanguage = useLoaderData();
    return (
        <div>
        {
            allLanguage.map(courses => <LanguageSummary className="grid grid-cols-3" key={courses._id} courses={courses}>
            </LanguageSummary>)
        }
    </div>
          
    );    
};

export default Home;