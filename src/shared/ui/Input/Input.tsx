import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";
import cls from "./Input.module.scss";
import { classNames } from "@shared/lib";

export enum InputTheme {
  CLEAR = "CLEAR",
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: InputTheme.CLEAR;
  className?: string;
}

export const Input = forwardRef(
  (
    { theme = InputTheme.CLEAR, className, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <input
        {...props}
        ref={ref}
        className={classNames(cls.input, {}, [className || "", cls[theme]])}
      />
    );
  }
);
