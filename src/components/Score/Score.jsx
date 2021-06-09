import React from 'react';

const placeholder = [
  {
    name: "A",
    score: 3,
  },
  {
    name: "B",
    score: 2,
  },
  {
    name: "C",
    score: 1,
  },
  {
    name: "D",
    score: 0,
  },
]

const Score = () => {

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
              <tr>
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