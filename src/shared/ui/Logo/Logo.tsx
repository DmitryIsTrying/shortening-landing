import { classNames } from "@shared/lib";
import cls from "./Logo.module.scss";
import { Logo } from "@shared/assets";

type LogoTypeProps = {
  fill: string;
};

export const LogoType = ({ fill }: LogoTypeProps) => {
  return (
    <a className={classNames(cls.logo)} href="#main">
      <Logo className={cls.fillLogo} fill={fill} />
    </a>
  );
};
