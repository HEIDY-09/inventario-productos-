import { useEffect, useState } from "react";

export const ClaseUseEffect = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setListData(data.results);
      });
  }, []);
  return (
    <div>
      <ul>
        {listData.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
