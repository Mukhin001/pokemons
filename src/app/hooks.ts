import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootState } from "./store";

export const useAppSelector = useSelector.withTypes<AppRootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
