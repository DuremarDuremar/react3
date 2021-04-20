import axios from "axios";

export const array = {
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
    [438268, 563585],
    [462848, 9844],
    [400873, 15359],
    [408909, 31951],
    [436502, 29476],
    [460526, 1170457],
    [77177, 25535],
    [398405, 43937],
    [397580, 57375],
    [412474, 521278],
    [412473, 21951],
    [412477, 464692],
    [318550, 235846],
    [195434, 12019, 12020],
    [268507, 700333],
    [103733, 946],
    [81581, 22412],
    [81753, 57199],
    [75871, 465133],
    [90849, 388929],
    [7226, 31951],
    [583, 38566],
    [784, 15359],
    [646, 31951],
    [656, 16935],
    [850, 245844],
    [888, 11710],
  ],
  Cannes1990s: [
    [7695, 21951, 21952],
    [4766, 22412],
    [112586, 230166],
    [4385, 42918],
    [10976, 49596],
    [465, 66464],
    [22599, 31951],
    [104432, 231070],
    [7649, 84303],
    [79544, 15359],
    [3937, 2931],
    [363, 10091],
    [6775, 9844],
    [5264, 31951],
    [511, 21459],
    [2272, 22412],
    [342, 7640],
    [20965, 42068],
    [18808, 9844],
    [570, 23799],
    [2890, 12020, 12019],
    [15151, 31951],
    [3005, 8365],
  ],
  Cannes1980s: [
    [4393, 22174],
    [7701, 27407],
    [83295, 11668],
    [9630, 22412],
    [141615, 21707],
    [5824, 29515],
    [7739, 37570],
    [12827, 17648],
    [7472, 22087],
    [9580, 10988],
    [6596, 15016],
    [4401, 55823],
    [46464, 162633],
    [7329, 55823],
    [22697, 138676],
  ],
  Cannes1970s: [
    [7708, 36062],
    [354, 12665],
    [28521, 2900],
    [7687, 28208],
    [14401, 23799],
    [2618, 10015],
    [11619, 16563],
    [59011, 60317],
    [358, 10988],
    [461, 12665],
    [13973, 11862],
    [4881, 96476],
    [43911, 162633],
    [6638, 183967],
    [32970, 58803],
  ],
  Cannes1960s: [
    [182754, 189868],
    [39329, 168298],
    [4220, 4220],
    [23889, 5552],
    [7715, 98092],
    [153829, 270587],
    [64988, 192768],
    [7716, 331729],
    [31808, 151340],
    [54637, 331729],
    [81421, 425889],
    [8432, 171679],
    [16461, 121456],
    [38309, 93247],
    [57000, 331729],
    [59123, 98092],
    [49941, 185595],
  ],
  Cannes1950s: [
    [7722, 148228],
    [63930, 98092],
    [146600, 217807],
    [59136, 185595],
    [80754, 82794],
    [510, 137173],
    [7724, 185684],
    [143103, 270587],
    [63929, 148228],
    [425, 16550],
    [7669, 186624],
    [7692, 178158],
    [7727, 86846],
    [79502, 181844],
    [120916, 185595],
  ],
  Cannes1940s: [
    [7674, 93354],
    [7730, 157785],
    [7731, 172831],
  ],
  Venice2010s: [
    [1238506, 1734706],
    [1048334, 9693],
    [1086241, 245844],
    [768561, 57375],
    [1008486, 50975],
    [1009357, 700333],
    [1115492, 2536110],
    [991817, 1210273],
    [423063, 229257],
    [1008879, 12019, 12020],
    [938644, 757762],
    [938643, 6963],
    [262051, 21037],
    [944098, 671251],
    [909898, 49394],
    [707956, 25535],
    [623717, 229257],
    [634473, 245844],
    [722827, 563585],
  ],
  Venice2000s: [
    [278273, 6963],
    [462186, 24301],
    [493427, 81322],
    [544770, 127662],
    [397565, 48287],
    [430593, 49394],
    [474252, 1170457],
    [402514, 6963],
    [409453, 56697],
    [422777, 703272],
    [102127, 11213],
    [104945, 12758],
    [277413, 420284],
    [6803, 50975],
  ],
  Venice1990s: [
    [55249, 420284],
    [1657, 64459],
    [413, 26439],
    [7651, 75784],
    [53940, 252516],
    [1065, 23573],
    [5912, 32383],
    [2966, 23799],
    [18348, 37570],
    [21371, 99022],
    [4872, 23549],
    [8483, 58856],
    [3805, 7778],
  ],
  Venice1980s: [
    [350, 10988],
    [6728, 47199],
    [77728, 282549],
    [3007, 8365],
    [8400, 16550],
    [2300, 25080],
  ],
  Venice1970s: [[2390, 103104]],
  Venice1960s: [
    [21334, 185595],
    [14972, 20418],
    [16460, 98092],
    [33807, 103104],
    [36330, 183967],
    [8412, 85365],
    [42667, 162633],
    [11643, 16563],
    [38298, 5683],
    [57986, 82794],
    [63870, 282549],
  ],
  Venice1950s: [
    [404, 93354],
    [13540, 58803],
    [74507, 221426],
    [398, 178158],
    [332, 85365],
    [388, 85365],
    [94546, 270587],
    [8287, 93354],
    [486, 178158],
  ],
  Venice1940s: [
    [8290, 145623],
    [393, 145623],
    [47076, 86846],
  ],
  Berlin2010s: [
    [973455, 107522],
    [855905, 771071],
    [683999, 48415],
    [606690, 230166],
    [707093, 245445],
    [667252, 4733, 114805],
    [579739, 490414],
    [434189, 394242],
  ],
  Berlin2000s: [
    [431294, 41937],
    [418790, 16563],
    [419453, 224611],
    [447349, 1426779],
    [196604, 23362],
    [271849, 73409],
    [325549, 9844],
    [264351, 465133],
    [48422, 382009],
    [265447, 374132],
    [88696, 29476],
    [52453, 52245],
    [71120, 377865],
    [641, 21037],
    [46972, 91779],
    [63624, 474723],
    [787, 1293],
  ],
  Berlin1990s: [
    [5558, 9845],
    [3983, 20079],
    [7569, 20146],
    [555, 12020, 12019],
    [4342, 20418],
    [7636, 9845],
    [502, 42918],
    [18368, 33008],
    [6904, 43429],
    [32679, 24506],
    [11905, 22995],
    [43626, 273506],
  ],
  Berlin1980s: [
    [7658, 231109],
    [7685, 23573],
    [519, 108],
    [7758, 25081],
    [45798, 307291],
  ],
  Berlin1970s: [
    [1630, 25081],
    [7765, 313428],
    [75458, 508964],
    [147198, 270587],
  ],
  Berlin1960s: [
    [58763, 47804],
    [104215, 245844],
    [57946, 163778],
    [506, 56129],
    [51347, 115640],
    [7775, 16563],
    [26501, 5683],
    [10120, 25080],
    [15186, 16550],
    [7780, 98092],
  ],
  Berlin1950s: [
    [18511, 5683],
    [54520, 270587],
    [508, 16550],
    [346, 25080],
  ],
  Sundance2010s: [
    [1091698, 1266832],
    [1005852, 43219],
    [930966, 671557],
    [978956, 969004],
    [918087, 2256858, 1694188],
    [910812, 45460],
    [746001, 6523],
    [818983, 1553177],
    [725190, 2074963],
    [576083, 45460],
    [581219, 4070],
    [535406, 1199782],
  ],
  Sundance2000s: [
    [455627, 466745],
    [455190, 1270340],
    [413665, 1595613],
    [397952, 1210],
    [261470, 394931],
    [430635, 548373],
    [287872, 1251059],
    [375440, 223420],
    [264499, 242662],
    [259160, 1132734],
    [171850, 501573],
    [61264, 79840],
    [86718, 50120],
    [4533, 14777, 14778],
    [820, 42406],
    [607, 47732],
    [335, 41477],
    [410, 51121],
    [711, 3497],
  ],
  Sundance1990s: [
    [638, 11254],
    [5089, 2837],
    [2988, 6654],
    [4995, 795],
    [4487, 7240],
    [22972, 48287],
    [6166, 38566],
    [10995, 56930],
    [10981, 52353],
    [9621, 76961],
    [84209, 12648],
    [78376, 65004],
    [543, 8469],
    [22107, 79938],
    [9626, 42626],
    [9536, 76961],
    [54102, 121673],
    [39980, 33008],
  ],
  Sundance1980s: [
    [4610, 71473],
    [17450, 115827],
    [9241, 129818],
    [2803, 12020],
    [17705, 22412],
  ],
};

export const arrayDirect = {
  "Ингмар Бергман / Ingmar Bergman": [
    "Седьмая печать",
    "Каннский кинофестиваль, 1957 год,	Победитель: Особый приз жюри, Номинации: Золотая пальмовая ветвь",
  ],
};

export const getAxiosFilms = async (fest, year, itemsView) => {
  const listLink = `${fest + year}`;

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

export const getAxiosFilm = async (id) => {
  const res = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
      },
    }
  );
  return res.data.data;
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

export const getAxiosDirect = async (id) => {
  const res = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v1/staff/${id}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
      },
    }
  );
  return res.data;
};
