import axios from "axios";
import surahNames from "@/data/quran/names.json";
import ayatAudioList from "@/data/quran/ayat.json";
import { convertToThreeDigits } from "./utils";

const mushaf = require("@/data/quran/mushaf.json");
const APP_URL = `${process.env.NEXT_URL}/api/quran`;

export const getQuranRoutes = () => {
  const routes = {
    audio: `${APP_URL}/audio`,
    ayah: `${APP_URL}/ayah`,
    page: `${APP_URL}/page`,
    surah: `${APP_URL}/surah`,
  };

  return routes;
};

export const getSurah = async (suraId: number) => {
  const sura = mushaf.find((sura: any) => sura.id === suraId);

  return sura;
};

export const getMushafSurahsList = () => {
  const mushafSurahs = [
    { surah: "Al-Fatiha", url: `${APP_URL}/sura/1` },
    { surah: "Al-Baqarah", url: `${APP_URL}/sura/2` },
    { surah: "Al-Imran", url: `${APP_URL}/sura/3` },
    { surah: "An-Nisa", url: `${APP_URL}/sura/4` },
    { surah: "Al-Ma'idah", url: `${APP_URL}/sura/5` },
    { surah: "Al-An'am", url: `${APP_URL}/sura/6` },
    { surah: "Al-A'raf", url: `${APP_URL}/sura/7` },
    { surah: "Al-Anfal", url: `${APP_URL}/sura/8` },
    { surah: "At-Tawbah", url: `${APP_URL}/sura/9` },
    { surah: "Yunus", url: `${APP_URL}/sura/10` },
    { surah: "Hud", url: `${APP_URL}/sura/11` },
    { surah: "Yusuf", url: `${APP_URL}/sura/12` },
    { surah: "Ar-Ra'd", url: `${APP_URL}/sura/13` },
    { surah: "Ibrahim", url: `${APP_URL}/sura/14` },
    { surah: "Al-Hijr", url: `${APP_URL}/sura/15` },
    { surah: "An-Nahl", url: `${APP_URL}/sura/16` },
    { surah: "Al-Isra", url: `${APP_URL}/sura/17` },
    { surah: "Al-Kahf", url: `${APP_URL}/sura/18` },
    { surah: "Maryam", url: `${APP_URL}/sura/19` },
    { surah: "Ta-Ha", url: `${APP_URL}/sura/20` },
    { surah: "Al-Anbiya", url: `${APP_URL}/sura/21` },
    { surah: "Al-Hajj", url: `${APP_URL}/sura/22` },
    { surah: "Al-Mu'minun", url: `${APP_URL}/sura/23` },
    { surah: "An-Nur", url: `${APP_URL}/sura/24` },
    { surah: "Al-Furqan", url: `${APP_URL}/sura/25` },
    { surah: "Ash-Shu'ara", url: `${APP_URL}/sura/26` },
    { surah: "An-Naml", url: `${APP_URL}/sura/27` },
    { surah: "Al-Qasas", url: `${APP_URL}/sura/28` },
    { surah: "Al-Ankabut", url: `${APP_URL}/sura/29` },
    { surah: "Ar-Rum", url: `${APP_URL}/sura/30` },
    { surah: "Luqman", url: `${APP_URL}/sura/31` },
    { surah: "As-Sajda", url: `${APP_URL}/sura/32` },
    { surah: "Al-Ahzab", url: `${APP_URL}/sura/33` },
    { surah: "Saba", url: `${APP_URL}/sura/34` },
    { surah: "Fatir", url: `${APP_URL}/sura/35` },
    { surah: "Ya-Sin", url: `${APP_URL}/sura/36` },
    { surah: "As-Saffat", url: `${APP_URL}/sura/37` },
    { surah: "Sad", url: `${APP_URL}/sura/38` },
    { surah: "Az-Zumar", url: `${APP_URL}/sura/39` },
    { surah: "Ghafir", url: `${APP_URL}/sura/40` },
    { surah: "Fussilat", url: `${APP_URL}/sura/41` },
    { surah: "Ash-Shura", url: `${APP_URL}/sura/42` },
    { surah: "Az-Zukhruf", url: `${APP_URL}/sura/43` },
    { surah: "Ad-Dukhan", url: `${APP_URL}/sura/44` },
    { surah: "Al-Jathiyah", url: `${APP_URL}/sura/45` },
    { surah: "Al-Ahqaf", url: `${APP_URL}/sura/46` },
    { surah: "Muhammad", url: `${APP_URL}/sura/47` },
    { surah: "Al-Fath", url: `${APP_URL}/sura/48` },
    { surah: "Al-Hujurat", url: `${APP_URL}/sura/49` },
    { surah: "Qaf", url: `${APP_URL}/sura/50` },
    { surah: "Adh-Dhariyat", url: `${APP_URL}/sura/51` },
    { surah: "At-Tur", url: `${APP_URL}/sura/52` },
    { surah: "An-Najm", url: `${APP_URL}/sura/53` },
    { surah: "Al-Qamar", url: `${APP_URL}/sura/54` },
    { surah: "Ar-Rahman", url: `${APP_URL}/sura/55` },
    { surah: "Al-Waqi'a", url: `${APP_URL}/sura/56` },
    { surah: "Al-Hadid", url: `${APP_URL}/sura/57` },
    { surah: "Al-Mujadila", url: `${APP_URL}/sura/58` },
    { surah: "Al-Hashr", url: `${APP_URL}/sura/59` },
    { surah: "Al-Mumtahina", url: `${APP_URL}/sura/60` },
    { surah: "As-Saff", url: `${APP_URL}/sura/61` },
    { surah: "Al-Jumu'ah", url: `${APP_URL}/sura/62` },
    { surah: "Al-Munafiqun", url: `${APP_URL}/sura/63` },
    { surah: "At-Taghabun", url: `${APP_URL}/sura/64` },
    { surah: "At-Talaq", url: `${APP_URL}/sura/65` },
    { surah: "At-Tahrim", url: `${APP_URL}/sura/66` },
    { surah: "Al-Mulk", url: `${APP_URL}/sura/67` },
    { surah: "Al-Qalam", url: `${APP_URL}/sura/68` },
    { surah: "Al-Haqqah", url: `${APP_URL}/sura/69` },
    { surah: "Al-Ma'arij", url: `${APP_URL}/sura/70` },
    { surah: "Nuh", url: `${APP_URL}/sura/71` },
    { surah: "Al-Jinn", url: `${APP_URL}/sura/72` },
    { surah: "Al-Muzzammil", url: `${APP_URL}/sura/73` },
    { surah: "Al-Muddathir", url: `${APP_URL}/sura/74` },
    { surah: "Al-Qiyamah", url: `${APP_URL}/sura/75` },
    { surah: "Al-Insan", url: `${APP_URL}/sura/76` },
    { surah: "Al-Mursalat", url: `${APP_URL}/sura/77` },
    { surah: "An-Naba", url: `${APP_URL}/sura/78` },
    { surah: "An-Nazi'at", url: `${APP_URL}/sura/79` },
    { surah: "'Abasa", url: `${APP_URL}/sura/80` },
    { surah: "At-Takwir", url: `${APP_URL}/sura/81` },
    { surah: "Al-Infitar", url: `${APP_URL}/sura/82` },
    { surah: "Al-Mutaffifin", url: `${APP_URL}/sura/83` },
    { surah: "Al-Inshiqaq", url: `${APP_URL}/sura/84` },
    { surah: "Al-Buruj", url: `${APP_URL}/sura/85` },
    { surah: "At-Tariq", url: `${APP_URL}/sura/86` },
    { surah: "Al-A'la", url: `${APP_URL}/sura/87` },
    { surah: "Al-Ghashiyah", url: `${APP_URL}/sura/88` },
    { surah: "Al-Fajr", url: `${APP_URL}/sura/89` },
    { surah: "Al-Balad", url: `${APP_URL}/sura/90` },
    { surah: "Ash-Shams", url: `${APP_URL}/sura/91` },
    { surah: "Al-Lail", url: `${APP_URL}/sura/92` },
    { surah: "Ad-Duha", url: `${APP_URL}/sura/93` },
    { surah: "Ash-Sharh", url: `${APP_URL}/sura/94` },
    { surah: "At-Tin", url: `${APP_URL}/sura/95` },
    { surah: "Al-Alaq", url: `${APP_URL}/sura/96` },
    { surah: "Al-Qadr", url: `${APP_URL}/sura/97` },
    { surah: "Al-Bayyina", url: `${APP_URL}/sura/98` },
    { surah: "Az-Zalzalah", url: `${APP_URL}/sura/99` },
    { surah: "Al-'Adiyat", url: `${APP_URL}/sura/100` },
    { surah: "Al-Qari'ah", url: `${APP_URL}/sura/101` },
    { surah: "At-Takathur", url: `${APP_URL}/sura/102` },
    { surah: "Al-'Asr", url: `${APP_URL}/sura/103` },
    { surah: "Al-Humazah", url: `${APP_URL}/sura/104` },
    { surah: "Al-Fil", url: `${APP_URL}/sura/105` },
    { surah: "Quraish", url: `${APP_URL}/sura/106` },
    { surah: "Al-Ma'un", url: `${APP_URL}/sura/107` },
    { surah: "Al-Kawthar", url: `${APP_URL}/sura/108` },
    { surah: "Al-Kafirun", url: `${APP_URL}/sura/109` },
    { surah: "An-Nasr", url: `${APP_URL}/sura/110` },
    { surah: "Al-Masad", url: `${APP_URL}/sura/111` },
    { surah: "Al-Ikhlas", url: `${APP_URL}/sura/112` },
    { surah: "Al-Falaq", url: `${APP_URL}/sura/113` },
    { surah: "An-Nas", url: `${APP_URL}/sura/114` },
  ];

  return mushafSurahs;
};

export const getQuranPageImageTypes = () => {
  const list = {
    normal: `${APP_URL}/page/main`,
    tajwid: `${APP_URL}/page/tajwid`,
    warsh: `${APP_URL}/page/warsh`,
  };

  return list;
};

export const getQuranPageImage = async (type: string, page: number) => {
  const baseURL = `https://raw.githubusercontent.com/bsyra/quran-pages/main/${type}/${page}.png`;

  const response = await axios.get(baseURL, {
    responseType: "arraybuffer",
  });

  const image = Buffer.from(response.data);
  return image;
};

export const getQuranPagesForType = async (type: string) => {
  const mushafPages = [
    `${APP_URL}/page/${type}/1`,
    `${APP_URL}/page/${type}/2`,
    `${APP_URL}/page/${type}/3`,
    `${APP_URL}/page/${type}/4`,
    `${APP_URL}/page/${type}/5`,
    `${APP_URL}/page/${type}/6`,
    `${APP_URL}/page/${type}/7`,
    `${APP_URL}/page/${type}/8`,
    `${APP_URL}/page/${type}/9`,
    `${APP_URL}/page/${type}/10`,
    `${APP_URL}/page/${type}/11`,
    `${APP_URL}/page/${type}/12`,
    `${APP_URL}/page/${type}/13`,
    `${APP_URL}/page/${type}/14`,
    `${APP_URL}/page/${type}/15`,
    `${APP_URL}/page/${type}/16`,
    `${APP_URL}/page/${type}/17`,
    `${APP_URL}/page/${type}/18`,
    `${APP_URL}/page/${type}/19`,
    `${APP_URL}/page/${type}/20`,
    `${APP_URL}/page/${type}/21`,
    `${APP_URL}/page/${type}/22`,
    `${APP_URL}/page/${type}/23`,
    `${APP_URL}/page/${type}/24`,
    `${APP_URL}/page/${type}/25`,
    `${APP_URL}/page/${type}/26`,
    `${APP_URL}/page/${type}/27`,
    `${APP_URL}/page/${type}/28`,
    `${APP_URL}/page/${type}/29`,
    `${APP_URL}/page/${type}/30`,
    `${APP_URL}/page/${type}/31`,
    `${APP_URL}/page/${type}/32`,
    `${APP_URL}/page/${type}/33`,
    `${APP_URL}/page/${type}/34`,
    `${APP_URL}/page/${type}/35`,
    `${APP_URL}/page/${type}/36`,
    `${APP_URL}/page/${type}/37`,
    `${APP_URL}/page/${type}/38`,
    `${APP_URL}/page/${type}/39`,
    `${APP_URL}/page/${type}/40`,
    `${APP_URL}/page/${type}/41`,
    `${APP_URL}/page/${type}/42`,
    `${APP_URL}/page/${type}/43`,
    `${APP_URL}/page/${type}/44`,
    `${APP_URL}/page/${type}/45`,
    `${APP_URL}/page/${type}/46`,
    `${APP_URL}/page/${type}/47`,
    `${APP_URL}/page/${type}/48`,
    `${APP_URL}/page/${type}/49`,
    `${APP_URL}/page/${type}/50`,
    `${APP_URL}/page/${type}/51`,
    `${APP_URL}/page/${type}/52`,
    `${APP_URL}/page/${type}/53`,
    `${APP_URL}/page/${type}/54`,
    `${APP_URL}/page/${type}/55`,
    `${APP_URL}/page/${type}/56`,
    `${APP_URL}/page/${type}/57`,
    `${APP_URL}/page/${type}/58`,
    `${APP_URL}/page/${type}/59`,
    `${APP_URL}/page/${type}/60`,
    `${APP_URL}/page/${type}/61`,
    `${APP_URL}/page/${type}/62`,
    `${APP_URL}/page/${type}/63`,
    `${APP_URL}/page/${type}/64`,
    `${APP_URL}/page/${type}/65`,
    `${APP_URL}/page/${type}/66`,
    `${APP_URL}/page/${type}/67`,
    `${APP_URL}/page/${type}/68`,
    `${APP_URL}/page/${type}/69`,
    `${APP_URL}/page/${type}/70`,
    `${APP_URL}/page/${type}/71`,
    `${APP_URL}/page/${type}/72`,
    `${APP_URL}/page/${type}/73`,
    `${APP_URL}/page/${type}/74`,
    `${APP_URL}/page/${type}/75`,
    `${APP_URL}/page/${type}/76`,
    `${APP_URL}/page/${type}/77`,
    `${APP_URL}/page/${type}/78`,
    `${APP_URL}/page/${type}/79`,
    `${APP_URL}/page/${type}/80`,
    `${APP_URL}/page/${type}/81`,
    `${APP_URL}/page/${type}/82`,
    `${APP_URL}/page/${type}/83`,
    `${APP_URL}/page/${type}/84`,
    `${APP_URL}/page/${type}/85`,
    `${APP_URL}/page/${type}/86`,
    `${APP_URL}/page/${type}/87`,
    `${APP_URL}/page/${type}/88`,
    `${APP_URL}/page/${type}/89`,
    `${APP_URL}/page/${type}/90`,
    `${APP_URL}/page/${type}/91`,
    `${APP_URL}/page/${type}/92`,
    `${APP_URL}/page/${type}/93`,
    `${APP_URL}/page/${type}/94`,
    `${APP_URL}/page/${type}/95`,
    `${APP_URL}/page/${type}/96`,
    `${APP_URL}/page/${type}/97`,
    `${APP_URL}/page/${type}/98`,
    `${APP_URL}/page/${type}/99`,
    `${APP_URL}/page/${type}/100`,
    `${APP_URL}/page/${type}/101`,
    `${APP_URL}/page/${type}/102`,
    `${APP_URL}/page/${type}/103`,
    `${APP_URL}/page/${type}/104`,
    `${APP_URL}/page/${type}/105`,
    `${APP_URL}/page/${type}/106`,
    `${APP_URL}/page/${type}/107`,
    `${APP_URL}/page/${type}/108`,
    `${APP_URL}/page/${type}/109`,
    `${APP_URL}/page/${type}/110`,
    `${APP_URL}/page/${type}/111`,
    `${APP_URL}/page/${type}/112`,
    `${APP_URL}/page/${type}/113`,
    `${APP_URL}/page/${type}/114`,
  ];

  return mushafPages;
};

export const getAyahImage = async (ayahId: string) => {
  const baseURL = `https://raw.githubusercontent.com/bsyra/quran-ayat/main/ayat/${ayahId}.png`;

  const response = await axios.get(baseURL, {
    responseType: "arraybuffer",
  });

  const image = Buffer.from(response.data);
  return image;
};

export const getSurahAudioList = async () => {
  const response = await axios.get("https://www.mp3quran.net/api/v3/reciters", {
    headers: { "Content-Type": "application/json" },
  });

  const data = response.data.reciters;

  const surahList: Array<any> = data.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      url: `${APP_URL}/audio/surah/${item.id}`,
      server: item.moshaf[0].server,
      moshaf_type: item.moshaf[0].name,
      surah_list: item.moshaf[0].surah_list,
    };
  });

  return surahList;
};

export const getSurahAudioShikh = async (shikhId: string) => {
  const allShikhs = await getSurahAudioList();
  const shikh = allShikhs.find((item) => item.id === Number(shikhId));

  const surahs: { id: any; name: string | undefined; url: string }[] = [];

  shikh.surah_list.split(",").map((item: any) => {
    const name = getSurahNameByNumber(Number(item));
    const url = `${shikh.url}/${item}`;

    return surahs.push({ id: Number(item), name, url });
  });

  delete shikh.server;
  delete shikh.surah_list;
  shikh.list = surahs;

  return shikh;
};

export const getSurahAudio = async (shikhId: string, surahId: string) => {
  const allShikhs = await getSurahAudioList();
  const shikh = allShikhs.find((item) => item.id === Number(shikhId));

  const fileId = convertToThreeDigits(Number(surahId));

  const surahURL = `${shikh.server}/${fileId}.mp3`;
  const data = await axios.get(surahURL, { responseType: "stream" });

  return data;
};

export const getSurahNameByNumber = (number: number) => {
  return surahNames.find((surah) => surah.id === number)?.name;
};

export const getAyahAudioList = () => {
  const dataArray = Object.entries(ayatAudioList);

  dataArray.sort((a, b) => a[0].localeCompare(b[0]));

  const result = dataArray.map(([key, value], index) => ({
    id: index + 1,
    name: key,
    url: `${APP_URL}/audio/ayah/${index + 1}`,
    repo: value,
  }));

  return result;
};

export const getAyahAudio = async (shikhId: string, ayahId: string) => {
  const shikh = getAyahAudioList().find((item)=> item.id === Number(shikhId));
  const ayahURL = `${shikh?.repo}/audio/${ayahId}.mp3`;

  const data = await axios.get(ayahURL, { responseType: "stream" });

  return data;
}