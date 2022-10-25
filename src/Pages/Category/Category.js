import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LanguageSummary from '../Shared/LanguageSummary/LanguageSummary';

const Category = () => {
    const categoryLanguage = useLoaderData();
    return (
        <div>
            {
                categoryLanguage.map(courses => <LanguageSummary className="grid grid-cols-3 gap-5"key={courses._id} courses={courses}></LanguageSummary>)
            }
        </div>
    );
};

export default Category;