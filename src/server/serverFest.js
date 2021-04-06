import axios from "axios";

export const getAxiosFilm = async (fest, year) => {
  const array = {
    Cannes2010s: [1043758, 1169370],
  };

  const listLink = `${fest + year}`;

  const res1 = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/${array[listLink][0]}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
      },
    }
  );
  const res2 = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/${array[listLink][1]}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
      },
    }
  );

  return Promise.all([res1, res2])
    .then(function (values) {
      return values;
    })
    .catch(function (err) {
      console.log(err);
    });
};
