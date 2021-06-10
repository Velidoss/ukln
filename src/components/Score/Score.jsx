import React from 'react';
import useAppSelector from './../../store/hooks/useAppSelector';
import { workersSelector } from './../../store/selectors';
import Worker from './Worker/Worker';

const Score = () => {

  const workers = useAppSelector(workersSelector);

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
              <Worker key={worker.workerName} workerData={worker} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
};

export default Score;