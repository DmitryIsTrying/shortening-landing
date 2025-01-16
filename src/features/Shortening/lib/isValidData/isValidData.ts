import { ShorteningForm } from "@features/Shortening/ui/Shortening";
import { UseFormSetError } from "react-hook-form";

export const isValidData = (data: ShorteningForm, setError: UseFormSetError<ShorteningForm>) => {
  if (!data.address) {
    setError("address", {
      type: "required",
      message: "Please provide a link",
    });
    return false;
  } else if (!/^(https?:\/\/)?([^\s]+\.[^\s]+)$/.test(data.address)) {
    setError("address", {
      type: "pattern",
      message: "Please enter a valid URL (e.g., https://example.com)",
    });
    return false;
  }
  return true;
};
