import { useEffect, useRef, useState } from "react";
import cls from "./BurgerMenu.module.scss";
import { Button, ButtonTheme } from "@shared/ui";
import { Navigation } from "../navigation/Navigation";
import { AuthMoved } from "../auth/AuthMoved";
import { createPortal } from "react-dom";
import { classNames } from "@shared/lib";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    modalContainerRef.current = document.getElementById("app") as HTMLDivElement;
  }, []);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    createPortal(
      <div onClick={handleCloseModal} className={classNames(cls.bgBlur, {}, ["slowMo"])}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={cls.menu}
        >
          <Navigation className={cls.navigationWrapper} />
          <AuthMoved className={cls.authWrapper} />
          <Button
            className={cls.closeBurgerBtn}
            theme={ButtonTheme.CLOSE}
            onClick={() => setIsOpen(false)}
          >
            <span />
            <span />
            <span />
          </Button>
        </div>
      </div>,
      modalContainerRef.current!
    )
  ) : (
    <Button className="slowMo" theme={ButtonTheme.MODAL} onClick={() => setIsOpen(true)}>
      <span />
      <span />
      <span />
    </Button>
  );
};
