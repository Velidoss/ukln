import React from 'react';
import useAppSelector from './../../store/hooks/useAppSelector';
import { workersSelector } from './../../store/selectors';

const Score = () => {

  const workers = useAppSelector(workersSelector);
  console.log(workers)

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
            workers.map((workers) => (
              <tr key={workers.workerName}>
                <td>
                  {workers.workerName}
                </td>
                <td>
                  {workers.workHours}
                </td>
                <td>
                  {workers.score}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
};

export default Score;