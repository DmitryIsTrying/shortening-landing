import { AppTheme, changeTheme, selectTheme } from "@shared/model";
import { useAppSelector } from "../accessStore/useAppSelector/useAppSelector";
import { useAppDispatch } from "../accessStore/useAppDispatch/useAppDispatch";

export const useTheme = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    //можно использовать экзостивЧек
    let nextTheme = null;
    switch (theme) {
      case AppTheme.LIGHT:
        nextTheme = AppTheme.DARK;
        break;
      case AppTheme.DARK:
        nextTheme = AppTheme.LIGHT;
        break;
    }
    dispatch(changeTheme({ theme: nextTheme }));
  };

  return { theme, toggleTheme };
};
