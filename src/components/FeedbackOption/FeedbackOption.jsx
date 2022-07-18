import React from "react";

function FeedbackOption({ options, onLeaveFeedback }) {
  const props = Object.keys(options);
  const component = props.map((prop) => {
    return (
      <li key={prop}>
        <button type="button" onClick={onLeaveFeedback}>
          {prop}
        </button>
      </li>
    );
  });
  return (
    <div>
      <ul>{component}</ul>
    </div>
  );
}

export default FeedbackOption;
