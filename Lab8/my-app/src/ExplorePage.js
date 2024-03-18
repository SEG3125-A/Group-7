import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExplorePage = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/explore')
      .then(response => setResumes(response.data))
      .catch(error => console.error("There was an error!", error));
  }, []);

  const handleLike = (resumeId) => {
    axios.post(`http://localhost:3001/likes`, { resumeId })
      .then(response => {
        setResumes(resumes.map(resume => resume.id === resumeId ? { ...resume, likes: resume.likes + 1 } : resume));
      })
      .catch(error => console.error("There was an error!", error));
  };

  const handleComment = (resumeId, comment) => {
  };

  return (
    <div>
      <h1>Explore Resumes</h1>
      {resumes.map(resume => (
        <div key={resume.id}>
          <h2>{resume.name}</h2>
          <p>{resume.summary}</p>
          <div>
            <button onClick={() => handleLike(resume.id)}>Like ({resume.likes})</button>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleComment(resume.id, e.target.elements.comment.value);
              e.target.elements.comment.value = ''; 
            }}>
              <input type="text" name="comment" placeholder="Write a comment..." />
              <button type="submit">Comment</button>
            </form>
          </div>
          <div>
            {resume.comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ExplorePage;
