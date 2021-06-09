import React from 'react';

  const placeholder = [
    {
      better: 'A',
      worse: 'B'
    },
    {
      better: 'A',
      worse: 'C'
    },
    {
      better: 'B',
      worse: 'C'
    },
    {
      better: 'A',
      worse: 'D'
    },
    {
      better: 'B',
      worse: 'D'
    },
    {
      better: 'C',
      worse: 'D'
    },
  ];

const Comparison = () => {

  return (
    <div>
      <div>
        Compare items
      </div>
      <div>
        {
          placeholder.map((item) => (
            <div style={{display: 'flex'}}>
              <p style={{color: 'green'}}>{item.better}</p>
              <p>{item.worse}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Comparison;