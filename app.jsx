
jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('(link unavailable)')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex].text);
        setAuthor(data[randomIndex].author);
      });
  };

  const tweetQuote = () => {
    const tweetUrl = `(link unavailable)"${quote}" - ${author}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div id="quote-box" className="container text-center mt-5">
      <div id="text" className="quote-text mb-3">
        <i className="fas fa-quote-left"></i>
        {quote}
        <i className="fas fa-quote-right"></i>
      </div>
      <div id="author" className="quote-author mb-3">
        - {author}
      </div>
      <button id="new-quote" className="btn btn-primary mr-2" onClick={getQuote}>
        New Quote
      </button>
      <a id="tweet-quote" className="btn btn-info" onClick={tweetQuote}>
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
