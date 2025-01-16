import { Button, ButtonTheme } from "@shared/ui";
import { useState } from "react";
import { ModalNavigation } from "../ModalNavigation/ModalNavigation";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <ModalNavigation handleCloseClick={() => setIsOpen(false)} />
  ) : (
    <Button className="slowMo" theme={ButtonTheme.MODAL} onClick={() => setIsOpen(true)}>
      <span />
      <span />
      <span />
    </Button>
  );
};
