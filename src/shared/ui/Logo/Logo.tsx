import { classNames } from "@shared/lib";
import cls from "./Logo.module.scss";
import { Logo } from "@shared/assets";

export const LogoType = () => {
  return (
    <a className={classNames(cls.logo)} href="#main">
      <Logo fill="#34313D" />
    </a>
  );
};
