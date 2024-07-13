import React from 'react';

const page = () => {
    const blogs = [
        {
            id: 1,
            title: 'Understanding React Hooks',
            description: 'An introduction to React Hooks, explaining how and why to use them in your React projects.'
        },
        {
            id: 2,
            title: 'JavaScript ES6 Features',
            description: 'A comprehensive guide to the new features introduced in ECMAScript 6, including arrow functions, classes, and template literals.'
        },
        {
            id: 3,
            title: 'Mastering CSS Grid Layout',
            description: 'A detailed tutorial on CSS Grid Layout, covering the basics to advanced techniques for creating responsive web designs.'
        },
        {
            id: 4,
            title: 'Node.js Performance Tips',
            description: 'Tips and best practices for optimizing the performance of your Node.js applications.'
        },
        {
            id: 5,
            title: 'Understanding TypeScript',
            description: 'A beginner\'s guide to TypeScript, explaining its features, benefits, and how to get started with it in your projects.'
        },
        {
            id: 6,
            title: 'Introduction to Redux',
            description: 'An overview of Redux, a state management tool for JavaScript apps, including key concepts and how to integrate it with React.'
        },
        {
            id: 7,
            title: 'Building REST APIs with Express.js',
            description: 'Step-by-step instructions on how to build robust REST APIs using Express.js, a popular Node.js framework.'
        },
        {
            id: 8,
            title: 'Responsive Web Design with Tailwind CSS',
            description: 'Learn how to create responsive and modern web designs using Tailwind CSS, a utility-first CSS framework.'
        }
    ];
    return (
        <div className='my-20'>
            <h3>This is blogs page</h3>
            <div className='grid grid-cols-3 gap-10'>
                {blogs.map(blog => <div key={blog.id} className="card bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">{blog.title}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn">Details</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default page;