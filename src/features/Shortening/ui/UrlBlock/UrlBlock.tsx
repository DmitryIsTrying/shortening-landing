import { Button, ButtonTheme } from "@shared/ui";
import cls from "./UrlBlock.module.scss";
import { shortString } from "@shared/lib";
import { useEffect, useState } from "react";

interface UrlBlockProps {
  originalUrl: string;
  shortedUrl: string;
}

export const UrlBlock = ({ originalUrl, shortedUrl }: UrlBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const originalUrlSliced = shortString(originalUrl, 25);
  const shortedUrlSliced = shortString(shortedUrl, 25);

  useEffect(() => {
    if (!isCopied) return;

    let timeoutId = setTimeout(() => {
      setIsCopied(false);
    }, 3000);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isCopied]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shortedUrl);
    setIsCopied(true);
  };

  return (
    <div className={cls.container}>
      <a className={cls.link} href={originalUrl}>
        {originalUrlSliced}
      </a>
      <div className={cls.wrapper}>
        <a className={`${cls.link} ${cls.shorted}`} href={shortedUrl}>
          {shortedUrlSliced}
        </a>
        <Button
          className={isCopied ? cls.ifCopied : undefined}
          onClick={handleCopyLink}
          theme={ButtonTheme.FULLCYAN}
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
};
