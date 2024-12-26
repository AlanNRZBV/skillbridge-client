import { FC } from "react";

interface Props {
  title?: string;
  onClick: () => void;
}
const CustomButton: FC<Props> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default CustomButton;
