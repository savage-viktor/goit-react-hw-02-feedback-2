function FeedbackOptions({ options, onLeaveFeedback }) {
  function textTransformToCapitalCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      {options.map((option) => {
        return (
          <button key={option} onClick={onLeaveFeedback}>
            {textTransformToCapitalCase(option)}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;
