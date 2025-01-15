import { Button, ButtonTheme } from "@shared/ui";
import { ModalNavigation } from "@widgets/ModalNavigation";
import { useState } from "react";

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
