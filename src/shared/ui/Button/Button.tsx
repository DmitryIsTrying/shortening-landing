import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "@shared/lib";

export enum ButtonTheme {
  CLEAR = "CLEAR",
  FULLCYAN = "FULLCYAN",
  MODAL = "MODAL",
  CLOSE = "CLOSE",
}

// Базовый интерфейс для общих пропсов
interface BaseButtonProps {
  isLink?: boolean;
  children: ReactNode;
  className?: string;
  theme?: ButtonTheme;
}

type ButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

// Компонент с использованием условного типа
export const Button = ({
  isLink,
  children,
  className,
  theme = ButtonTheme.CLEAR,
  ...props
}: ButtonProps) => {
  if (isLink) {
    const { ...rest } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classNames(cls.common, {}, [className || "", cls[theme]])} {...rest}>
        {children}
      </a>
    );
  } else {
    const { ...rest } = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={classNames(cls.common, {}, [className || "", cls[theme]])} {...rest}>
        {children}
      </button>
    );
  }
};
