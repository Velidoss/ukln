import React from 'react';
import useAppSelector from './../../store/hooks/useAppSelector';
import { itemsSelector } from './../../store/selectors';

const placeholder = [
  {
    name: "Anthony",
    score: 3,
  },
  {
    name: "Bill",
    score: 2,
  },
  {
    name: "Celly",
    score: 1,
  },
  {
    name: "Dan",
    score: 0,
  },
];

const Score = () => {

  const items = useAppSelector(itemsSelector);
  console.log(items)

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
            placeholder.map((item) => (
              <tr key={item.name}>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.score}
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