import React from 'react';
import PostPage from './post/page';

const PostsPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                posts.map(post => <PostPage key={post.id} post={post}></PostPage>)
            }
        </div>
    );
};

export default PostsPage;