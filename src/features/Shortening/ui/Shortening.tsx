import { Button, ButtonTheme, InputWithError } from "@shared/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import cls from "./Shortening.module.scss";
import { useSetShortLinkMutation } from "../api/shorteningApi";

interface ShorteningForm {
  address: string;
}

export const Shortening = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<ShorteningForm>({
    mode: "onSubmit",
  });

  const [setLink, { data }] = useSetShortLinkMutation();

  const onSubmit: SubmitHandler<ShorteningForm> = (data) => {
    // manual validate
    if (!data.address) {
      setError("address", {
        type: "required",
        message: "Please provide a link",
      });
    } else if (!/^(https?:\/\/)?([^\s]+\.[^\s]+)$/.test(data.address)) {
      setError("address", {
        type: "pattern",
        message: "Please enter a valid URL (e.g., https://example.com)",
      });
    } else {
      setLink(data.address);
    }
  };
  console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.container}>
      <InputWithError
        {...register("address")}
        onChange={() => clearErrors("address")}
        error={errors.address?.message}
        className={cls.input}
        placeholder="Shorten a link here..."
      />
      <Button className={cls.btn} theme={ButtonTheme.FULLCYAN}>
        Shorten It!
      </Button>
    </form>
  );
};
