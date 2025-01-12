import { LogoType } from "@shared/ui";
import cls from "./Navigation.module.scss";
import { classNames } from "@shared/lib";

export const Navigation = () => {
  return (
    <div className={classNames(cls.container)}>
      <LogoType />
      <nav className={classNames(cls.navigation)}>
        <li className={classNames(cls.item_nav)}>
          <a href="#Features">Features</a>
        </li>
        <li className={classNames(cls.item_nav)}>
          <a href="#Pricing">Pricing</a>
        </li>
        <li className={classNames(cls.item_nav)}>
          <a href="#Resources">Resources</a>
        </li>
      </nav>
    </div>
  );
};
