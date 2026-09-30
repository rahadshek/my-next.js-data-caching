import React from 'react';

// const getPosts = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return res.json()
// }

// const getPosts2 = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')

//     if (!res.ok) {
//         throw new error('Your fetch data failed');

//     } else {
//         return res.json()
//     }
// }

const getPosts3 = async () => {

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        return res.json()
    } catch (error) {
        console.log('Failed to your data loading')
    } finally {
        console.log('You data run successfully')
    }

}



const PostPage = async () => {
    const posts = await getPosts3()
    // console.log(posts)
    return (
        <div>
            <h2>Now posted: {posts.length}</h2>
        </div>
    );
};

export default PostPage;