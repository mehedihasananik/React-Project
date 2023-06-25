import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const jsondata = await response.json();
        setData(jsondata);

        console.log(jsondata);
      } catch (error) {
        setIsError(true);
        console.log(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h3>loading...</h3>;
  }
  if (isError) {
    return <h3>something is wrong</h3>;
  }
  const { name, company, bio, avatar_url } = data;
  return (
    <>
      <img src={avatar_url} alt="" />
      <h2>{name}</h2>
      <h3>Works at {company}</h3>
      <h3> {bio}</h3>
    </>
  );
};

export default MultipleReturnsFetchData;
