import axios from "axios";

const cinemaUrl =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=%D0%9A%D0%B0%D0%BD%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D0%B8%D0%BD%D0%BE%D1%84%D0%B5%D1%81%D1%82%D0%B8%D0%B2%D0%B0%D0%BB%D1%8C&page=1";

// export const getAxiosPosterLogo = async (url) => {
//   const res = await axios(
//     `https://kinopoiskapiunofficial.tech/api/v2.1/films/${url}?append_to_response=`,
//     {
//       method: "GET",
//       headers: {
//         "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
//       },
//     }
//   );
//   return res.data.data.posterUrlPreview;
// };

export const getAxiosPosterLogo = async (url) => {
  const res = await axios(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/${url}?append_to_response=`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
      },
    }
  );
  return res;
};

console.log(getAxiosPosterLogo(400873));
