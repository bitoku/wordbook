import {DependencyList, EffectCallback, useEffect, useRef} from "react";

export const useUpdateEffect = (effect: EffectCallback, deps: DependencyList) => {
  const firstRender = useRef(true);

  useEffect(() => {
    if (!firstRender.current) {
      effect();
    } else {
      firstRender.current = false;
    }
  }, deps)
}