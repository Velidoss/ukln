import React from 'react';
import { useDispatch } from 'react-redux';
import useAppSelector from './../../store/hooks/useAppSelector';
import { comparisonsSelector } from './../../store/selectors';

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

  const dispatch = useDispatch();

  const comparisons = useAppSelector(comparisonsSelector);
  console.log(comparisons);

  return (
    <div>
      <div>
        Compare items
      </div>
      <div>
        {
          placeholder.map((item, index) => (
            <div key={index} style={{display: 'flex'}}>
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