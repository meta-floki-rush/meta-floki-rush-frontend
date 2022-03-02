import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import loadingState from "../recoil/loadingState";

const useLoading = (_loading: boolean | undefined = undefined) => {
  const [loading, setLoading] = useRecoilState(loadingState);
  // const setLoading = useSetRecoilState(loadingState);

  React.useEffect(() => {
    loading !== !!_loading && setLoading(!!_loading);
  }, [_loading, setLoading]);

  const startLoading = () => {
    setLoading(true);
  };
  const stopLoading = () => {
    setLoading(false);
  };
  return { startLoading, stopLoading };
};
export default useLoading;
