import { createContext } from "react";


interface CounterContextType {
  count:number;
  setCount:React.Dispatch<React.SetStateAction<number>>;
}

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined,
);

// 1 создать контекст = createContext
// 2 сделать обертку - Provider - и обернули приложение
// 3 доставать или класть в контекст информацию - useContext