// Hooks
import { useEffect, useState } from "react";

const useMediaQuery = <T>(queries: string[], values: T[], defaultValue: T) => {
  // Array contendo a lista de mediaqueries
  const mediaQuerieList = queries.map((query) => window.matchMedia(query));

  // função que vai retornar o valor baseado na media query
  const getValue = () => {
    const index = mediaQuerieList.findIndex((mql) => mql.matches);
    return values?.[index] || defaultValue;
  };

  const [value, setValue] = useState<T>(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);

    mediaQuerieList.forEach((mql) => mql.addListener(handler));
    return () => mediaQuerieList.forEach((mql) => mql.removeListener(handler));
  });

  return value;
};

export default useMediaQuery;
