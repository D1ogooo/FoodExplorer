import { useEffect, useState } from "react";

export function useDebounceClick(click, delay = 500) {
	const [debounceClick, setDebounceClick] = useState(click);

	useEffect(() => {
		const timeoutFunction = setTimeout(() => {
			setDebounceClick(click);
		}, delay);

    return () => {
      clearTimeout(timeoutFunction)
    };
	}, [click, delay]);

  return debounceClick;
}
