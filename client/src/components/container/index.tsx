import { ContainerInterface } from "./types";
import "./styles.css";

const Container = ({ className, children }: ContainerInterface) => {
  return (
    <div className={`container${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
};

export default Container;
