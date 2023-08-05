import { BsInfo, BsCheck2 } from "react-icons/bs";

const HintItem = ({ active, message, children }) => {
  return (
    <li className={`form__hint-item${active ? " active" : ""}`}>
      {active ? (
        <BsCheck2 className="hint-item__icon" />
      ) : (
        <BsInfo className="hint-item__icon" />
      )}
      <span className="hint-item__message">{message || children}</span>
    </li>
  );
};

export default HintItem;
