import {
  Dispatch,
  ReactEventHandler,
  SetStateAction,
  useCallback,
} from 'react';

type TChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

type useFieldChangeProps<T> = {
  state: T;
  setState: Dispatch<SetStateAction<T>>;
};

function useFieldChange<T>({ state, setState }: useFieldChangeProps<T>) {
  const handleFieldChange: TChangeHandler = useCallback(
    (event) => {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement;
      const { name, value } = target;
      setState({
        ...state,
        [name]: name === 'rating' ? Number(value) : value,
      });
    },
    [state, setState],
  );

  return handleFieldChange;
}

export default useFieldChange;
