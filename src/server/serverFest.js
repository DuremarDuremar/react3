import axios from "axios";

export const getAxiosFilm = async (fest, year, itemsView) => {
  const array = {
    Cannes2010s: [
      1043758,
      1169370,
      1047883,
      1114967,
      1040841,
      1048563,
      1048532,
      980327,
    ],
  };

  const listLink = `${fest + year}`;

  // const res1 = await axios.get(
  //   `https://kinopoiskapiunofficial.tech/api/v2.1/films/${array[listLink][0]}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
  //     },
  //   }
  // );
  // const res2 = await axios.get(
  //   `https://kinopoiskapiunofficial.tech/api/v2.1/films/${array[listLink][1]}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
  //     },
  //   }
  // );

  const listRes = await array[listLink].slice(itemsView).map((item) => {
    const res = axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/${item}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
        },
      }
    );
    return res;
  });

  return Promise.all(listRes)
    .then(function (values) {
      return values.map((item) => item.data.data);
    })
    .catch(function (err) {
      console.log(err);
    });
};
