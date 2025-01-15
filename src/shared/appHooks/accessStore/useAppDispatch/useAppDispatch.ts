import { AppDispatch } from "@shared/model";
import { useDispatch } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
