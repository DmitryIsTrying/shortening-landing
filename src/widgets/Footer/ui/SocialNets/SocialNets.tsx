import { FacebookLogo, InstagramLogo, PinterestLogo, TwitterLogo } from "@shared/assets";
import cls from "./SocialNets.module.scss";

export const SocialNets = () => {
  return (
    <div className={cls.container}>
      <a className={cls.logoLink} href="#Facebook">
        <FacebookLogo width={24} height={24} className={cls.logo} />
      </a>
      <a className={cls.logoLink} href="#Twitter">
        <TwitterLogo width={24} height={20} className={cls.logo} />
      </a>
      <a className={cls.logoLink} href="#Pinterest">
        <PinterestLogo width={24} height={24} className={cls.logo} />
      </a>
      <a className={cls.logoLink} href="#Instagram">
        <InstagramLogo width={24} height={24} className={cls.logo} />
      </a>
    </div>
  );
};
