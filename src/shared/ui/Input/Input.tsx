import { InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";
import { classNames } from "@shared/lib";

export enum InputTheme {
  CLEAR = "CLEAR",
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  theme?: InputTheme.CLEAR;
  className?: string;
};

export const Input = ({ theme = InputTheme.CLEAR, className, ...props }: InputProps) => {
  return <input {...props} className={classNames(cls.input, {}, [className || "", cls[theme]])} />;
};
