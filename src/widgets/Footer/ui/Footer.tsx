import { LogoType } from "@shared/ui";
import cls from "./Footer.module.scss";
import { Resources } from "./Resources/Resources";
import { SocialNets } from "./SocialNets/SocialNets";

export const Footer = () => {
  return (
    <div className={cls.container}>
      <LogoType fill="white" />
      <Resources />
      <SocialNets />
    </div>
  );
};
