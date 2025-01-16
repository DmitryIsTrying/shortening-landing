import { Button, ButtonTheme, InputWithError } from "@shared/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSetShortLinkMutation } from "../api/shorteningApi";
import { isValidData } from "../lib/isValidData/isValidData";
import { useMemoizedError } from "../lib/useMemoizedError/useMemoizedError";
import cls from "./Shortening.module.scss";
import { UrlBlock } from "./UrlBlock/UrlBlock";
import { dispatchLoadingEvent } from "@shared/events";

export interface ShorteningForm {
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

  const [setLink, { data, error, isLoading }] = useSetShortLinkMutation();

  // Преобразуем ошибку в строку
  const errorMessage = useMemoizedError(error);
  const onSubmit: SubmitHandler<ShorteningForm> = (data) => {
    // manual validate
    if (isValidData(data, setError)) {
      dispatchLoadingEvent(true);
      setLink(data.address).finally(() => {
        dispatchLoadingEvent(false);
      });
    }
  };

  return (
    <div className={data ? cls.wrapperWithUrl : cls.wrapper}>
      {data && <UrlBlock originalUrl={data.originalUrl} shortedUrl={data.shortedUrl} />}
      <form onSubmit={handleSubmit(onSubmit)} className={cls.container}>
        <InputWithError
          {...register("address")}
          onFocus={() => clearErrors("address")}
          error={errorMessage || errors.address?.message}
          className={cls.input}
          placeholder="Shorten a link here..."
        />
        <Button disabled={isLoading} className={cls.btn} theme={ButtonTheme.FULLCYAN}>
          Shorten It!
        </Button>
      </form>
    </div>
  );
};
