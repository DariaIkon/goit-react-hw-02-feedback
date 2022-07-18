import React from "react";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  const props = { good, neutral, bad, total };
  const keys = Object.keys(props);
  const values = Object.values(props);
  const component = keys.map((key, i) => {
    return (
      <li key={key}>
        <p>
          {key}:{values[i]}
        </p>
      </li>
    );
  });
  return (
    <ul>
      {component}
      <li>
        <p>positive feedback: {positivePercentage}</p>
      </li>
    </ul>
  );
}

export default Statistics;
