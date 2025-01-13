import { LogoType } from "@shared/ui";
import cls from "./Footer.module.scss";
import { FacebookLogo } from "@shared/assets";

export const Footer = () => {
  return (
    <div className={cls.container}>
      <LogoType fill="hsl(0, 0%, 75%)" />
      <div>
        <div>
          <h4>Features</h4>
          <a href="#">Link Shortening</a>
          <a href="#">Branded Links</a>
          <a href="#">Analytics</a>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="#">Blog</a>
          <a href="#">Developers</a>
          <a href="#">Support</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div>
        <FacebookLogo className={cls.logo} />
        <FacebookLogo />
        <FacebookLogo />
        <FacebookLogo />
      </div>
    </div>
  );
};
