import React from 'react';
import useAppSelector from './../../store/hooks/useAppSelector';
import { workersSelector } from './../../store/selectors';
import Worker from './Worker/Worker';

const Score = () => {

  const workers = useAppSelector(workersSelector);

  console.log(workers);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              Item
            </td>
            <td>
              Score
            </td>
          </tr>
        </thead>
        <tbody>
          {
            workers.map((worker) => (
              <Worker workerData={worker} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
};

export default Score;