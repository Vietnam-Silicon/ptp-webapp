import { useState } from 'react';
import { Filter } from './index.d';

const initFilter: Filter = {
  type: '',
  search: '',
  startDate: null,
  endDate: null
}

const useFilter = () => {
  const [filter, setFilter] = useState<Filter>(initFilter);
  const handleChange = <K extends keyof Filter>(key: K, value: Filter[K]) => {
    setFilter((prevState) => ({ ...prevState, [key]: value }));
  };

  return { filter, handleChange }
}

export default useFilter