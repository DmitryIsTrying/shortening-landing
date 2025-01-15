import { forwardRef } from "react";
import { Input, InputProps } from "../Input/Input";
import cls from "./InputWithError.module.scss";

interface InputWithErrorProps extends InputProps {
  error?: string;
}

export const InputWithError = forwardRef<HTMLInputElement, InputWithErrorProps>(
  ({ error, ...props }, ref) => {
    return (
      <>
        <Input {...props} ref={ref} />
        {error && (
          <span className={cls.error}>
            {error.length > 25 ? `${error.slice(0, 25)}...` : error}
          </span>
        )}
      </>
    );
  }
);
