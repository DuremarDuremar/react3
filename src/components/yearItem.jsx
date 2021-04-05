import React from "react";
import styled from "styled-components";

const array = {
  CannesPosterImages: [
    null,
    "assets/logoPoster/Cannes_2010s_Квадрат.jpg",
    null,
    "assets/logoPoster/Cannes_2000s_Белая_лента.jpg",
    "assets/logoPoster/Cannes_1990s_Бартон_Финк.jpg",
    "assets/logoPoster/Cannes_1980s_Секс,_ложь_и_видео.jpg",
    "assets/logoPoster/Cannes_1970s_Таксист.jpg",
    "assets/logoPoster/Cannes_1960s_Фотоувеличение.jpg",
    "assets/logoPoster/Cannes_1950s_Плата_за_страх.jpg",
    "assets/logoPoster/Cannes_1940s_Третий_человек.jpg",
  ],
  VenicePosterImages: [
    null,
    "assets/logoPoster/Venice_2010s_Рома.jpg",
    null,
    "assets/logoPoster/Venice_2000s_Рестлер.jpg",
    "assets/logoPoster/Venice_1990s_Короткий_монтаж.jpg",
    "assets/logoPoster/Venice_1980s_Легенда_о_святом_пропойце.jpg",
    "assets/logoPoster/Venice_1970s_Атлантик-Сити.jpg",
    "assets/logoPoster/Venice_1960s_Иваново_детство.jpg",
    "assets/logoPoster/Venice_1950s_Слово.jpg",
    "assets/logoPoster/Venice_1940s_Гамлет.jpg",
  ],
  BerlinPosterImages: [
    null,
    "https://s688sas.storage.yandex.net/rdisk/f4506539a8b163bbabd409ca9cb94352ae87920fd9d4a185714eb829f92f463a/606a5bc8/hr6EOoOySaVlKHulgMjFSOB3raX7Bel_XJ2dHjsblZgpSofVqfllZyY1aF51ON3_ulLRnHO6fRudiY8YHh7d8w==?uid=27160728&filename=Venice_2010s_%D0%A0%D0%BE%D0%BC%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=28522&hid=be244c7df6555589ab2a51f9f48fc6c1&media_type=image&tknv=v2&etag=f87fc6c8e756505dbe182d591a26ca91&rtoken=oC8QgWOfABe4&force_default=yes&ycrid=na-da2eacb5ae9b5e5b87d6c07019a41c5c-downloader18e&ts=5bf2ee6f88200&s=9e1d83845819b0de81fe9d00fa517cc8e262897a1de38afd77c404c2bf9fe130&pb=U2FsdGVkX18C-RMIqy6btYZ3BdTJ1R1uOmDbw2LWefe3Q43NCOVP7brrmosnugDF0h5VpfEvmc3vLh85HVsxM5EWI2SfiwXSIx84otUVgxk",
    null,
    "https://s698sas.storage.yandex.net/rdisk/1c76e06b0ae1f71414bafb09b43b8764568933ea46b406a5d35353bfea7cd16e/606a5bfe/hr6EOoOySaVlKHulgMjFSKC7KP-qUPfubccMZFCJoEC7E5KN-HemXIfoV9qEgexe9iuCW6c3Sj5crCHicfkLgw==?uid=27160728&filename=Venice_2000s_%D0%A0%D0%B5%D1%81%D1%82%D0%BB%D0%B5%D1%80.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=130778&hid=ae1ca2c55204d09ad4c79965314d1838&media_type=image&tknv=v2&etag=0a656d45d56e732414ff6d7eefa55e32&rtoken=ioSrlUfbnFxd&force_default=yes&ycrid=na-a622b7294a47cd58f7e751e70469306a-downloader18e&ts=5bf2eea307b80&s=613bbaa810308c189b870a1c3a6061df336eb52adccc4397df829031147c6211&pb=U2FsdGVkX18Xc4RNO45iLofrVnPJvRii1eevRGSbS-JUriDtUVfa_P-M6_lhzeQ2vIU0cu3beLfisOPNeWVA2jFvWqA8PDEkpom1YFiNh8s",
    "https://s681sas.storage.yandex.net/rdisk/1539f8bf567b19717c4a321d069b8e6973aab4ecb03e4b147bc13d4dc0453f03/606a5c14/hr6EOoOySaVlKHulgMjFSAZtUrVPEcnwv5XhAkaBmJpYj9oFRn7An95QyWyj6wTl9NDxSvnV5hsuJIR_cDmdiQ==?uid=27160728&filename=Venice_1990s_%D0%9A%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%B8%D0%B9%20%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=61309&hid=5c83f3114fdb8fde70e8076b0db0990a&media_type=image&tknv=v2&etag=3427949bbd748b04defff11332573e83&rtoken=4uMXhwNyc89W&force_default=yes&ycrid=na-2fe0d4016650e6004767e5d4b60ddef5-downloader18e&ts=5bf2eeb802d00&s=a3518a158df7015f1d900c9a979c76c739d53ee68e610249f153e5e4f660c900&pb=U2FsdGVkX1_nTtcdgWTBXKwriXEM199pcq1zQIB5Hq3KxaS-rsK12E7Jir1Zgfty-sroiyY_yRB7NE6Yj4Oe-LVD1g_hGbWj2Acbwiyfu6U",
    "https://s261vla.storage.yandex.net/rdisk/0ce7d22da6f94e202f88bfd0533d2c073d6c42a4eec8c243da50e1fae6d6b51a/606a5c26/hr6EOoOySaVlKHulgMjFSN2qfBDajNn6rutRU7t5LK0Z_soHAxe4kFOq4wukXxJPNGeeGXvcT65_6PIqjEulcQ==?uid=27160728&filename=Venice_1980s_%D0%9B%D0%B5%D0%B3%D0%B5%D0%BD%D0%B4%D0%B0%20%D0%BE%20%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D0%BC%20%D0%BF%D1%80%D0%BE%D0%BF%D0%BE%D0%B9%D1%86%D0%B5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=89880&hid=8497e64ffa049990e950c174a28ca708&media_type=image&tknv=v2&etag=2106eb153ca5f45337a10b88780a01a9&rtoken=ExqnRGx2b6J4&force_default=yes&ycrid=na-816cf8f3ba6e5cffa40f969fa660a989-downloader18e&ts=5bf2eec92d580&s=7dbcff82a0d0a14931512df79935444ac43725b8fe9eb9a9df649c314dff3ca7&pb=U2FsdGVkX1-X4GbRu7oxceEBLfehH_KLrygiQ2VzEzYpAs6Mmw6mbhosF6ULDHH1v8ArNZzGG0JAQHR_VJC-N_a4HGjkLqbih4lds29dLM0",
    "https://s76vla.storage.yandex.net/rdisk/990dd81f626be2c3bf6514db035d842c8fcf0c2c2cc3328e21eaea02b313e56a/606a5c3a/hr6EOoOySaVlKHulgMjFSHww5g6xF3hELb39oN-oZvQsTYpHIFMSC0qOzegBZo6-qrXdJmAzGrV2fpU0710-nA==?uid=27160728&filename=Venice_1970s_%D0%90%D1%82%D0%BB%D0%B0%D0%BD%D1%82%D0%B8%D0%BA-%D0%A1%D0%B8%D1%82%D0%B8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=56006&hid=7fbb6895524be66eb9cbba934456aebd&media_type=image&tknv=v2&etag=f82d5358da99845f097f751c39785311&rtoken=SyPHICNl23Qj&force_default=yes&ycrid=na-8ee22b311ec62d40a5615126657eb08c-downloader18e&ts=5bf2eedc40280&s=e1fffdd8e4b439cf2022e16cc9cfaada7106f5b10e0144870a47a0f4c5713366&pb=U2FsdGVkX1_buUnrdW9Sj2wiieRgKeF-dJLhsYExXDb1navUhmTfP399Zp-wkXKpIY8y1kEKwl76BRi5e-66gIiJBsNXM5ZEbcAB_qU4eqM",
    "https://s306vla.storage.yandex.net/rdisk/d1374c7d5f329753ed24452a810bcdabb8f529853f256f9ee861b33812d92300/606a5c4d/hr6EOoOySaVlKHulgMjFSEEHcmWgLDDSVXVgD2nfs4uDuB0q5sXsdXp94LflXpb_kGwecCG8MglcQOp_kbXIuA==?uid=27160728&filename=Venice_1960s_%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE%20%D0%B4%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%BE.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=23099&hid=14aff7641604b8f3a985d21b369332f0&media_type=image&tknv=v2&etag=9ba7edf3d2fffcbeb33973c514c6cf92&rtoken=UYvun7nS4zsQ&force_default=yes&ycrid=na-ede3d5cf2a8d9027fbc8c697853f14ba-downloader18e&ts=5bf2eeee5ed40&s=4981fceba4c4cd1e9edb22a02a566780d0efa3cb3061cb6602412b1ba5576fb6&pb=U2FsdGVkX19fXNQvpST-UE_wz2_BsFh_Xvel-F6IKsKwgvtFyUMoVrOVHuROwJDALwJSwKctxWu0wWLcjZkBtti1ctbwahoqhoKSa_zaYD8",
    "https://s303vla.storage.yandex.net/rdisk/99d3fd3e8ed7e9779fa43409c33502d05d70e6b2d6d84850c35aa91e6f1bd5a1/606a5c5c/hr6EOoOySaVlKHulgMjFSNAGAC3NkZ_8t4DzhmFlpgU_u4uH6w-JdKyOYeNsE-2uKlWs5W-xs-zxV-Fsc1E2MQ==?uid=27160728&filename=Venice_1950s_%D0%A1%D0%BB%D0%BE%D0%B2%D0%BE.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=118940&hid=70cd5b23255870c4d18e046213c099b3&media_type=image&tknv=v2&etag=821c801151a710993988fbc51b12f1a3&rtoken=yFEfJ4Mlx69F&force_default=yes&ycrid=na-99af51f778cb85945837a44bc839061a-downloader18e&ts=5bf2eefcacf00&s=45b22d23346cd922d8f1bb2336295bcbdc4d62008ed3fd54d84a0eb94fee8769&pb=U2FsdGVkX1_4InpTdSpBx7GORgFPi4OFpQJEWg_G98Sb4qXP7uoY3V7EndTFNDHOlpA-L8bHjZWHOSXhlsh_UTUHhH5L0wM9kpXjzEK_d-4",
    "https://s100vla.storage.yandex.net/rdisk/20d88493a874d1f81196a20189210ce7dbe2b57e4f65abac926652d822aa9842/606a5c7c/hr6EOoOySaVlKHulgMjFSAATjtFmu1eRMPZu4xuLwiS1HcBWSkfx5IJOwEqYkEkbWva-4h8U1niMPUdSPh7P-Q==?uid=27160728&filename=Venice_1940s_%D0%93%D0%B0%D0%BC%D0%BB%D0%B5%D1%82.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=19936&hid=361684a2646eb8a573886f212ae504b7&media_type=image&tknv=v2&etag=809b7205916dfd1d176f347345ff7e88&rtoken=fRIiLrYIsKcS&force_default=yes&ycrid=na-a8a1b5eeff0eee67c9282dca3a6d9e9f-downloader18e&ts=5bf2ef1b31700&s=9a3735223252817c8dd8291a97ac220bb50d6754e0439f629a702c3f242dd721&pb=U2FsdGVkX1_gAHINAniVIwt-PV6tRaQEC3bkaaZqVze9GDDLohNjF8g4EhpbM29SjSod-EVg58bMB569GKNxBh0p7KoqPLeqPAXUzjtLcnc",
  ],
  SundancePosterImages: [
    null,
    "https://s688sas.storage.yandex.net/rdisk/f4506539a8b163bbabd409ca9cb94352ae87920fd9d4a185714eb829f92f463a/606a5bc8/hr6EOoOySaVlKHulgMjFSOB3raX7Bel_XJ2dHjsblZgpSofVqfllZyY1aF51ON3_ulLRnHO6fRudiY8YHh7d8w==?uid=27160728&filename=Venice_2010s_%D0%A0%D0%BE%D0%BC%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=28522&hid=be244c7df6555589ab2a51f9f48fc6c1&media_type=image&tknv=v2&etag=f87fc6c8e756505dbe182d591a26ca91&rtoken=oC8QgWOfABe4&force_default=yes&ycrid=na-da2eacb5ae9b5e5b87d6c07019a41c5c-downloader18e&ts=5bf2ee6f88200&s=9e1d83845819b0de81fe9d00fa517cc8e262897a1de38afd77c404c2bf9fe130&pb=U2FsdGVkX18C-RMIqy6btYZ3BdTJ1R1uOmDbw2LWefe3Q43NCOVP7brrmosnugDF0h5VpfEvmc3vLh85HVsxM5EWI2SfiwXSIx84otUVgxk",
    null,
    "https://s698sas.storage.yandex.net/rdisk/1c76e06b0ae1f71414bafb09b43b8764568933ea46b406a5d35353bfea7cd16e/606a5bfe/hr6EOoOySaVlKHulgMjFSKC7KP-qUPfubccMZFCJoEC7E5KN-HemXIfoV9qEgexe9iuCW6c3Sj5crCHicfkLgw==?uid=27160728&filename=Venice_2000s_%D0%A0%D0%B5%D1%81%D1%82%D0%BB%D0%B5%D1%80.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=130778&hid=ae1ca2c55204d09ad4c79965314d1838&media_type=image&tknv=v2&etag=0a656d45d56e732414ff6d7eefa55e32&rtoken=ioSrlUfbnFxd&force_default=yes&ycrid=na-a622b7294a47cd58f7e751e70469306a-downloader18e&ts=5bf2eea307b80&s=613bbaa810308c189b870a1c3a6061df336eb52adccc4397df829031147c6211&pb=U2FsdGVkX18Xc4RNO45iLofrVnPJvRii1eevRGSbS-JUriDtUVfa_P-M6_lhzeQ2vIU0cu3beLfisOPNeWVA2jFvWqA8PDEkpom1YFiNh8s",
    "https://s681sas.storage.yandex.net/rdisk/1539f8bf567b19717c4a321d069b8e6973aab4ecb03e4b147bc13d4dc0453f03/606a5c14/hr6EOoOySaVlKHulgMjFSAZtUrVPEcnwv5XhAkaBmJpYj9oFRn7An95QyWyj6wTl9NDxSvnV5hsuJIR_cDmdiQ==?uid=27160728&filename=Venice_1990s_%D0%9A%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%B8%D0%B9%20%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=61309&hid=5c83f3114fdb8fde70e8076b0db0990a&media_type=image&tknv=v2&etag=3427949bbd748b04defff11332573e83&rtoken=4uMXhwNyc89W&force_default=yes&ycrid=na-2fe0d4016650e6004767e5d4b60ddef5-downloader18e&ts=5bf2eeb802d00&s=a3518a158df7015f1d900c9a979c76c739d53ee68e610249f153e5e4f660c900&pb=U2FsdGVkX1_nTtcdgWTBXKwriXEM199pcq1zQIB5Hq3KxaS-rsK12E7Jir1Zgfty-sroiyY_yRB7NE6Yj4Oe-LVD1g_hGbWj2Acbwiyfu6U",
    "https://s261vla.storage.yandex.net/rdisk/0ce7d22da6f94e202f88bfd0533d2c073d6c42a4eec8c243da50e1fae6d6b51a/606a5c26/hr6EOoOySaVlKHulgMjFSN2qfBDajNn6rutRU7t5LK0Z_soHAxe4kFOq4wukXxJPNGeeGXvcT65_6PIqjEulcQ==?uid=27160728&filename=Venice_1980s_%D0%9B%D0%B5%D0%B3%D0%B5%D0%BD%D0%B4%D0%B0%20%D0%BE%20%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D0%BC%20%D0%BF%D1%80%D0%BE%D0%BF%D0%BE%D0%B9%D1%86%D0%B5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=89880&hid=8497e64ffa049990e950c174a28ca708&media_type=image&tknv=v2&etag=2106eb153ca5f45337a10b88780a01a9&rtoken=ExqnRGx2b6J4&force_default=yes&ycrid=na-816cf8f3ba6e5cffa40f969fa660a989-downloader18e&ts=5bf2eec92d580&s=7dbcff82a0d0a14931512df79935444ac43725b8fe9eb9a9df649c314dff3ca7&pb=U2FsdGVkX1-X4GbRu7oxceEBLfehH_KLrygiQ2VzEzYpAs6Mmw6mbhosF6ULDHH1v8ArNZzGG0JAQHR_VJC-N_a4HGjkLqbih4lds29dLM0",
    "https://s76vla.storage.yandex.net/rdisk/990dd81f626be2c3bf6514db035d842c8fcf0c2c2cc3328e21eaea02b313e56a/606a5c3a/hr6EOoOySaVlKHulgMjFSHww5g6xF3hELb39oN-oZvQsTYpHIFMSC0qOzegBZo6-qrXdJmAzGrV2fpU0710-nA==?uid=27160728&filename=Venice_1970s_%D0%90%D1%82%D0%BB%D0%B0%D0%BD%D1%82%D0%B8%D0%BA-%D0%A1%D0%B8%D1%82%D0%B8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=56006&hid=7fbb6895524be66eb9cbba934456aebd&media_type=image&tknv=v2&etag=f82d5358da99845f097f751c39785311&rtoken=SyPHICNl23Qj&force_default=yes&ycrid=na-8ee22b311ec62d40a5615126657eb08c-downloader18e&ts=5bf2eedc40280&s=e1fffdd8e4b439cf2022e16cc9cfaada7106f5b10e0144870a47a0f4c5713366&pb=U2FsdGVkX1_buUnrdW9Sj2wiieRgKeF-dJLhsYExXDb1navUhmTfP399Zp-wkXKpIY8y1kEKwl76BRi5e-66gIiJBsNXM5ZEbcAB_qU4eqM",
    "https://s306vla.storage.yandex.net/rdisk/d1374c7d5f329753ed24452a810bcdabb8f529853f256f9ee861b33812d92300/606a5c4d/hr6EOoOySaVlKHulgMjFSEEHcmWgLDDSVXVgD2nfs4uDuB0q5sXsdXp94LflXpb_kGwecCG8MglcQOp_kbXIuA==?uid=27160728&filename=Venice_1960s_%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE%20%D0%B4%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%BE.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=23099&hid=14aff7641604b8f3a985d21b369332f0&media_type=image&tknv=v2&etag=9ba7edf3d2fffcbeb33973c514c6cf92&rtoken=UYvun7nS4zsQ&force_default=yes&ycrid=na-ede3d5cf2a8d9027fbc8c697853f14ba-downloader18e&ts=5bf2eeee5ed40&s=4981fceba4c4cd1e9edb22a02a566780d0efa3cb3061cb6602412b1ba5576fb6&pb=U2FsdGVkX19fXNQvpST-UE_wz2_BsFh_Xvel-F6IKsKwgvtFyUMoVrOVHuROwJDALwJSwKctxWu0wWLcjZkBtti1ctbwahoqhoKSa_zaYD8",
    "https://s303vla.storage.yandex.net/rdisk/99d3fd3e8ed7e9779fa43409c33502d05d70e6b2d6d84850c35aa91e6f1bd5a1/606a5c5c/hr6EOoOySaVlKHulgMjFSNAGAC3NkZ_8t4DzhmFlpgU_u4uH6w-JdKyOYeNsE-2uKlWs5W-xs-zxV-Fsc1E2MQ==?uid=27160728&filename=Venice_1950s_%D0%A1%D0%BB%D0%BE%D0%B2%D0%BE.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=118940&hid=70cd5b23255870c4d18e046213c099b3&media_type=image&tknv=v2&etag=821c801151a710993988fbc51b12f1a3&rtoken=yFEfJ4Mlx69F&force_default=yes&ycrid=na-99af51f778cb85945837a44bc839061a-downloader18e&ts=5bf2eefcacf00&s=45b22d23346cd922d8f1bb2336295bcbdc4d62008ed3fd54d84a0eb94fee8769&pb=U2FsdGVkX1_4InpTdSpBx7GORgFPi4OFpQJEWg_G98Sb4qXP7uoY3V7EndTFNDHOlpA-L8bHjZWHOSXhlsh_UTUHhH5L0wM9kpXjzEK_d-4",
    "https://s100vla.storage.yandex.net/rdisk/20d88493a874d1f81196a20189210ce7dbe2b57e4f65abac926652d822aa9842/606a5c7c/hr6EOoOySaVlKHulgMjFSAATjtFmu1eRMPZu4xuLwiS1HcBWSkfx5IJOwEqYkEkbWva-4h8U1niMPUdSPh7P-Q==?uid=27160728&filename=Venice_1940s_%D0%93%D0%B0%D0%BC%D0%BB%D0%B5%D1%82.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=27160728&fsize=19936&hid=361684a2646eb8a573886f212ae504b7&media_type=image&tknv=v2&etag=809b7205916dfd1d176f347345ff7e88&rtoken=fRIiLrYIsKcS&force_default=yes&ycrid=na-a8a1b5eeff0eee67c9282dca3a6d9e9f-downloader18e&ts=5bf2ef1b31700&s=9a3735223252817c8dd8291a97ac220bb50d6754e0439f629a702c3f242dd721&pb=U2FsdGVkX1_gAHINAniVIwt-PV6tRaQEC3bkaaZqVze9GDDLohNjF8g4EhpbM29SjSod-EVg58bMB569GKNxBh0p7KoqPLeqPAXUzjtLcnc",
  ],
};

const YearStyle = styled.div`
  text-align: center;
  font-size: calc(14px + 1vw);
  height: 130px;
  background-image: url(${(props) => array[props.fest][props.index]});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 35%;
  border-radius: 25px;
  cursor: pointer;
  :nth-child(3) {
    grid-row: span 3 / auto;
  }

  p {
    transform: skew(-30deg);
    border-radius: 50% 0 50% 0;
    box-shadow: 0px 0px 0px 1px #353b48;
    transition: box-shadow 0.6s linear;
    box-shadow: ${(props) => props.act && "0px 0px 0px 1px black"};

    width: 80px;

    :hover {
      transition: all ease-out 0.55s;
      color: #b8860b;
    }
    ${(props) =>
      props.act &&
      `
    background-color: black;
    opacity: 0.7;
    transition: all ease-out 0.95s;
    transform: skew(0deg);
    min-width: 50px;
    color: #b8860b;
    padding: 5px;
      
  `}
  }
`;

const Year = (props) => {
  console.log(array.CannesPosterImages[1]);

  return <YearStyle {...props} />;
};

export default Year;
