import { LogoType } from "@shared/ui";
import cls from "./Footer.module.scss";
import { Resources } from "./Resources/Resources";
import { SocialNets } from "./SocialNets/SocialNets";
import { useTheme } from "@shared/appHooks";
import { AppTheme } from "@shared/model";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className={cls.container}>
      <LogoType fill={theme === AppTheme.LIGHT ? "white" : "black"} />
      <Resources />
      <SocialNets />
    </div>
  );
};
