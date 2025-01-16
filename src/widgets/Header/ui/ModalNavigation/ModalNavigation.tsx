import { classNames } from "@shared/lib";
import { Button, ButtonTheme } from "@shared/ui";
import { useRef } from "react";
import { createPortal } from "react-dom";
import cls from "./ModalNavigation.module.scss";
import { AuthMoved } from "../auth/AuthMoved";
import { Navigation } from "../navigation/Navigation";

interface ModalNavigation {
  handleCloseClick: () => void;
}

export const ModalNavigation = ({ handleCloseClick }: ModalNavigation) => {
  const { current: modalRef } = useRef(document.getElementById("app"));

  return createPortal(
    <div onClick={handleCloseClick} className={classNames(cls.bgBlur, {}, ["slowMo"])}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cls.menu}
      >
        <Navigation className={cls.navigationWrapper} />
        <AuthMoved className={cls.authWrapper} />
        <Button className={cls.closeBurgerBtn} theme={ButtonTheme.CLOSE} onClick={handleCloseClick}>
          <span />
          <span />
          <span />
        </Button>
      </div>
    </div>,
    modalRef!
  );
};
