import React from 'react'
import "./index.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Story() {
  const [stories, setSetstories] = useState([]);
  const navigate = useNavigate()

  let tot=0

  useEffect(() => {
    fetch('/api/Story')
      .then((data) => data.json()) 
      .then((data) => setSetstories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='Stories h-4 d-flex'>
      <div className='d-none'>{tot=stories.length}</div>
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} className='mx-3' onClick={() => {navigate(`/api/story/${story.id}`)}}>
            <div className='gradient-border'>
                <img src={story.profilePic} alt='sto' className='story-dp rounded-circle ' />
              </div>
            <p className='text-truncate' style={{ width :"50px"}} > {story.username} </p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Story;
