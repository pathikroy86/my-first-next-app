import React from 'react';

const postDetailsPage = async ({ params }) => {
    const { postId } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post = await res.json()

    return (
        <div className='w-10/12 mx-auto px-10 py-5 mt-5 border-2 border-gray-500'>
            <h1 className='text-2xl font bold'>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default postDetailsPage;