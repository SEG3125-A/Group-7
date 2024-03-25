import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExplorePage = () => {
  const [resumes, setResumes] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/explore')
      .then(response => setResumes(response.data))
      .catch(error => console.error("There was an error!", error));
  }, []);

  const handlePdfUpload = (e) => {
    const files = Array.from(e.target.files);
    const pdfs = files.map(file => ({
      url: URL.createObjectURL(file),
      name: file.name,
      likes: 0,
      comments: [],
    }));
    setPdfFiles([...pdfFiles, ...pdfs]);
  };

  const handleLikePdf = (index) => {
    const newPdfFiles = [...pdfFiles];
    newPdfFiles[index].likes += 1;
    setPdfFiles(newPdfFiles);
  };

  const handleCommentPdf = (index, comment) => {
    const newPdfFiles = [...pdfFiles];
    newPdfFiles[index].comments.push(comment);
    setPdfFiles(newPdfFiles);
  };

  const viewPdf = (url) => {
    window.open(url, '_blank');
  };

  const goToPreviousPdf = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : pdfFiles.length - 1);
  };

  const goToNextPdf = () => {
    setCurrentIndex((currentIndex + 1) % pdfFiles.length);
  };

  return (
    <div style={{ 
          backgroundImage: 'url("./hfhhf.jpeg")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center center',
          minHeight: '100vh' // Ensure it covers the full screen height
        }}>
      <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 100, padding: '10px', borderBottom: '1px solid #ccc', textAlign: 'center' }}>
        <h1>Explore Resumes</h1>
        <input type="file" accept="application/pdf" multiple onChange={handlePdfUpload} />
      </div>
      {pdfFiles.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={goToPreviousPdf}>Previous</button>
          <div style={{ border: '2px solid black', margin: '0 20px', padding: '10px' }}>
            <div onClick={() => viewPdf(pdfFiles[currentIndex].url)} style={{ cursor: 'pointer', textDecoration: 'underline', textAlign: 'center' }}>
              <p>{pdfFiles[currentIndex].name}</p>
              <p style={{ fontSize: '12px' }}>(Click on the name to view the full document)</p>
            </div>
            <iframe src={pdfFiles[currentIndex].url} style={{ width: '600px', height: '400px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} title="PDF Viewer"></iframe>
            <div style={{ textAlign: 'left', paddingLeft: '10px' }}>
              <button onClick={() => handleLikePdf(currentIndex)}>Like ({pdfFiles[currentIndex].likes})</button>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleCommentPdf(currentIndex, e.target.elements[`comment-${currentIndex}`].value);
                e.target.reset();
              }}>
                <input type="text" name={`comment-${currentIndex}`} placeholder="Write a comment..." />
                <button type="submit">Comment</button>
              </form>
              <div style={{ overflowY: 'scroll', maxHeight: '200px', padding: '5px', borderLeft: '2px solid #ccc' }}>
                {pdfFiles[currentIndex].comments.map((comment, cIndex) => (
                  <p key={cIndex} style={{ marginTop: '5px' }}>{comment}</p>
                ))}
              </div>
            </div>
          </div>
          <button onClick={goToNextPdf}>Next</button>
        </div>
      )}
    </div>
  );
}

export default ExplorePage;
