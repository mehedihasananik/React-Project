import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useFetchPerson = (url) => {
  const { isLoading, isError, data: user } = useFetch(url);
  return { isLoading, isError, user };
};

export default useFetchPerson;
