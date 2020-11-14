import React from "react";

interface Props {
  someNumber: number;
  someSecondString: String;
}

const Header: React.FC<Props> = ({ someNumber, someSecondString }) => {
  return (
    <div>
      {someNumber}
      <div>{someSecondString}</div>
    </div>
  );
};

export default Header;
