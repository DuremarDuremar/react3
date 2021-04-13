import axios from "axios";
import { uniq } from "lodash";

const array = {
  Cannes2010s: [
    [1043758, 493688],
    [1169370, 817639],
    [1047883, 7640],
    [1114967, 419684],
    [1040841, 464692],
    [1048563, 266056],
    [1048532, 420284],
    [980327, 399225], //8
    [1070264, 43937],
    [1094629, 2456319],
    [980367, 757158],
    [959484, 15359],
    [984309, 757762],
    [981957, 45038],
    [963346, 455876],
    [928796, 702326, 460412], // 16
    [945037, 38774],
    [623721, 90200],
    [842857, 55971],
    [893916, 597341],
    [868556, 771094],
    [894095, 399831],
    [958494, 490414],
    [954059, 22412], // 24
    [819846, 757762],
    [869452, 1210273],
  ],
  Cannes2000s: [
    438268,
    462848,
    400873,
    408909,
    436502,
    460526,
    77177,
    398405,
    397580,
    412474,
    412473,
    412477,
    318550,
    195434,
    268507,
    103733,
    81581,
    81753,
    75871,
    90849,
    7226,
    583,
    784,
    646,
    656,
    850,
    888,
  ],
  Cannes1990s: [
    7695,
    4766,
    112586,
    4385,
    10976,
    465,
    22599,
    104432,
    7649,
    79544,
    3937,
    363,
    6775,
    5264,
    511,
    2272,
    342,
    20965,
    18808,
    570,
    2890,
    15151,
    3005,
  ],
  Cannes1980s: [
    4393,
    7701,
    83295,
    9630,
    141615,
    5824,
    7739,
    12827,
    7472,
    9580,
    6596,
    4401,
    46464,
    7329,
    22697,
  ],
  Cannes1970s: [
    7708,
    354,
    28521,
    7687,
    14401,
    2618,
    11619,
    59011,
    358,
    461,
    13973,
    4881,
    43911,
    6638,
    32970,
  ],
  Cannes1960s: [
    182754,
    39329,
    4220,
    23889,
    7715,
    153829,
    64988,
    7716,
    31808,
    54637,
    81421,
    8432,
    16461,
    38309,
    57000,
    59123,
    49941,
  ],
};

export const getAxiosFilm = async (fest, year, itemsView, newId) => {
  const listLink = `${fest + year}`;

  newId(array[listLink]);

  const listRes = await array[listLink]
    .slice(itemsView[0], itemsView[1])
    .map((item) => {
      const res = axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/${item[0]}`,
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

export const getAxiosFrame = async (id) => {
  const res = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/frames`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
      },
    }
  );

  // const randomNumber = function (min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };

  // console.log(randomNumber(0, res.data.frames.length));
  // console.log(randomNumber(0, res.data.frames.length));

  // const randomRepeat = (min, max, size) => {
  //   let values = [];

  //   while (values.length < size) {
  //     values.push(Math.floor(Math.random() * (max - min + 1) + min));

  //     values = uniq(values);
  //   }

  //   return values;
  // };

  // const array = randomRepeat(0, res.data.frames.length, 11);

  return res.data.frames;
};
