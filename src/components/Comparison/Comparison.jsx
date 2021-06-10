import React from 'react';
import useAppSelector from './../../store/hooks/useAppSelector';
import { comparisonsSelector } from './../../store/selectors';

const Comparison = () => {

  const comparisons = useAppSelector(comparisonsSelector);

  return (
    <div>
      <div>
        Compare items
      </div>
      <div>
        {
          comparisons.map((item, index) => (
            <div key={index} style={{display: 'flex'}}>
              <p style={{color: 'green'}}>{item.better}</p>
              <p>  better than ---  </p>
              <p>{item.worse}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Comparison;