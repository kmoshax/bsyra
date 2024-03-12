import dataForRandom from "@/data/hadith/SomeForRandom.json";
import ahadithx from "@/data/hadith/index";
const ahadith = ahadithx as any;

const APP_URL = `${process.env.NEXT_URL}/api/hadith`;

export const getRandomHadith = async () => {
  const data: Hadith[] = dataForRandom as any;
  const hadith = data[Math.floor(Math.random() * data.length)];

  return hadith;
};

export const getHadithList = () => {
  const list = {
    random: `${APP_URL}/random`,
    books: {
      bukhari: `${APP_URL}/1`,
      muslim: `${APP_URL}/2`,
      nasai: `${APP_URL}/3`,
      abudawud: `${APP_URL}/4`,
      tirmidhi: `${APP_URL}/5`,
      ibnmajah: `${APP_URL}/6`,
      malik: `${APP_URL}/7`,
      hanbal: `${APP_URL}/8`,
      darimi: `${APP_URL}/9`,
    },
    forties: {
      nawawia: `${APP_URL}/10`,
      qudsi: `${APP_URL}/11`,
      shahwaliullah: `${APP_URL}/12`,
    },
    others: {
      riyad_assalihin: `${APP_URL}/13`,
      mishkat_almasabih: `${APP_URL}/14`,
      aladab_almufrad: `${APP_URL}/15`,
      shamail_muhammadiyah: `${APP_URL}/16`,
      bulugh_almaram: `${APP_URL}/17`,
    },
  };

  return list;
};

export const getBookChaptersFromHadithList = async (BookId: string) => {
  const book: HadithBook = ahadith[BookId];

  const chapters = [];
  for (let index = 0; index < book.chapters.length; index++) {
    const { id, bookId, arabic, english } = book.chapters[index];

    chapters.push({
      id,
      bookId,
      arabic,
      english,
      url: `${APP_URL}/${BookId}/${id}`,
    });
  }

  return chapters;
};

export const getBookChapter = async (bookId: string, chapterId: number) => {
  const book: HadithBook =await ahadith[bookId];
  const hadiths = book.hadiths;

  const chapter =  hadiths.filter((hadith) => hadith.chapterId === chapterId);
  return chapter;
};

interface Hadith {
  title: string;
  hadith_text: string;
  explanation: string;
  word_meanings: string;
  benefits: string;
  grade: string;
  takhrij: string;
}

export type BookName =
  | "abudawud"
  | "bukhari"
  | "darimi"
  | "hanbal"
  | "ibnmajah"
  | "malik"
  | "muslim"
  | "nasai"
  | "tirmidhi"
  | "nawawia"
  | "qudsi"
  | "shahwaliullah"
  | "aladab_almufrad"
  | "bulugh_almaram"
  | "mishkat_almasabih"
  | "riyad_assalihin"
  | "shamail_muhammadiyah";

export interface HadithBook {
  id: number;
  metadata: {
    id: number;
    length: number;
    arabic: {
      title: string;
      author: string;
      introduction: string;
    };
    english: {
      title: string;
      author: string;
      introduction: string;
    };
  };
  chapters: {
    id: number;
    bookId: number;
    arabic: string;
    english: string;
  }[];
  hadiths: {
    id: number;
    arabic: string;
    english: {
      narrator: string;
      text: string;
    };
    chapterId: number;
    bookId: number;
    idInBook: number;
  }[];
}
