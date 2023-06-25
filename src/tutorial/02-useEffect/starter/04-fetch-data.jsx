import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="row">
        {data?.map((item) => {
          const { login, avatar_url, id, type, url } = item;
          return (
            <div key={id} className="col-4">
              <div className="card">
                <img src={avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{login}</h5>
                  <p className="card-text">{type}</p>
                  <a href={url} className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default FetchData;
