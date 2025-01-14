import { classNames } from "@shared/lib";
import cls from "./Navigation.module.scss";

type NavigationProps = {
  className?: string;
};

export const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={classNames(cls.navigation, {}, [className || ""])}>
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
  );
};
