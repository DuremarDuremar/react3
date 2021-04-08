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
      980327, //8
      1070264,
      1094629,
      980367,
      959484,
      984309,
      981957,
      963346,
      928796, // 16
      945037,
      623721,
      842857,
      893916,
      868556,
      894095,
      958494,
      954059, // 24
      819846,
      869452,
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

  const listLink = `${fest + year}`;

  const listRes = await array[listLink]
    .slice(itemsView[0], itemsView[1])
    .map((item) => {
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
