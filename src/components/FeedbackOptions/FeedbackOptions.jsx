import styles from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => {
        return (
          <button
            className={styles.button}
            key={option}
            onClick={onLeaveFeedback}
          >
            {textTransformToCapitalCase(option)}
          </button>
        );
      })}
    </div>
  );
}

function textTransformToCapitalCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default FeedbackOptions;
