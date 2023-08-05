import HintItem from "./FormHint";
import "./styles.css";

const FormHints = ({ hintsArray }) => {
  return (
    <ul className="form__hints-list">
      {hintsArray.map((hint, i) => (
        <HintItem key={`hint-${i}`} active={hint.valid}>
          {hint.message}
        </HintItem>
      ))}
    </ul>
  );
};

export default FormHints;
