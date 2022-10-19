import { FC, MouseEventHandler } from "react";

type HeaderProps = {
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};
const Header: FC<HeaderProps> = ({ clickHandler }) => {
  return (
    <header className="header-box">
      <div className="bar">
        <div className="flex-wrapper">
          <button
            data-language="en"
            onClick={clickHandler}
            title="English"
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
