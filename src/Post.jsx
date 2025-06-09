import React, { useEffect, useState } from 'react'
import "./index.css"

function Post() {
    const [posts,setPosts] = useState([]);
    useEffect (()=> {
        fetch("/api/posts").then((data)=> data.json()).then((data)=> setPosts(data)).catch(err => console.log(err))
        
    },[]);

 return (
  <div className='cover  '>
    {posts.length > 0 ? (
      <div className='full '>
        {posts.map((post) => (
          <div key={post.key}>
            <div className=" head d-flex align-items-center"> 
              <img className='dp rounded-circle ' src={post.profilePic} alt='' />
              <h5 className=' text d-flex '>{post.username}</h5>
              </div>
               <div className='pic '>
              <img className= "post" src={post.image} alt='post'/> </div>
              <div className='post-below '>
                <i class="bi bi-heart"></i>
                <i class="bi bi-chat"></i>
                <i class="bi bi-send"></i> </div> 
                <div>
                  <b>{post.likes} Likes</b>
                  </div>
                <div>
                  <p className='caption'>{post.caption}</p>
                </div>
               </div>
        ))}
      </div>
    ) : (
      <div>loading posts</div>
    )}
  </div>
);
}

export default Post


                
          