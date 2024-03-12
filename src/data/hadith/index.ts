import { HadithBook } from "@/lib/hadith";
import abudawud from "./books/abudawud.json";
import bukhari from "./books/bukhari.json";
import darimi from "./books/darimi.json";
import hanbal from "./books/hanbal.json";
import ibnmajah from "./books/ibnmajah.json";
import malik from "./books/malik.json";
import muslim from "./books/muslim.json";
import nasai from "./books/nasai.json";
import tirmidhi from "./books/tirmidhi.json";

import nawawia from "./forties/nawawia.json";
import qudsi from "./forties/qudsi.json";
import shahwaliullah from "./forties/shahwaliullah.json";

import aladab_almufrad from "./others/aladab_almufrad.json";
import bulugh_almaram from "./others/bulugh_almaram.json";
import mishkat_almasabih from "./others/mishkat_almasabih.json";
import riyad_assalihin from "./others/riyad_assalihin.json";
import shamail_muhammadiyah from "./others/shamail_muhammadiyah.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  "1": bukhari as HadithBook,
  "2": muslim as HadithBook,
  "3": nasai as HadithBook,
  "4": abudawud as HadithBook,
  "5": tirmidhi as HadithBook,
  "6": ibnmajah as HadithBook,
  "7": malik as HadithBook,
  "8": hanbal as HadithBook,
  "9": darimi as HadithBook,
  "10": nawawia as HadithBook,
  "11": qudsi as HadithBook,
  "12": shahwaliullah as HadithBook,
  "13": riyad_assalihin as HadithBook,
  "14": mishkat_almasabih as HadithBook,
  "15": aladab_almufrad as HadithBook,
  "16": shamail_muhammadiyah as HadithBook,
  "17": bulugh_almaram as HadithBook,
};
