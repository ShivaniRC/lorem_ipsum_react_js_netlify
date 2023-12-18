import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState('1'); // Initialize count with '1'
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, parseInt(count, 10)));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => {
            e.preventDefault();
            let inputValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
            inputValue = Math.min(Math.max(parseInt(inputValue, 10), 1), 8).toString(); // Ensure it's within the range

            setCount(inputValue);
          }}
        />
        <button  type = 'submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
