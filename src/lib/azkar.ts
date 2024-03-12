import Fuse from "fuse.js";
import azkars from "@/data/azkar/azkar.json";
import azkarsCategories from "@/data/azkar/azkar-categories.json";

export const getRandomAzkar = () => {
  const zekr = azkars[Math.floor(Math.random() * azkars.length)];
  return zekr;
};

export const getRandomAzkarBySearch = (searchText: string) => {
  const azkarsSearch = new Fuse(azkars, {
    keys: ["search"],
  }).search(searchText);

  const zekr = azkarsSearch[Math.floor(Math.random() * azkarsSearch.length)];

  return zekr.item;
};

export const getRandomAzkaerByCategory = (category: number) => {
  const azkarsInCategory = azkars.filter(
    (zekr) => zekr.categoryId === category
  );

  const zekr =
    azkarsInCategory[Math.floor(Math.random() * azkarsInCategory.length)];
  return zekr;
};

export const getRandomAzkarBySearchInCategory = (
  category: number,
  searchText: string
) => {
  const azkarsInCategory = azkars.filter(
    (zekr) => zekr.categoryId === category
  );

  const azkarsSearch = new Fuse(azkarsInCategory, {
    keys: ["search"],
  }).search(searchText);

  const zekr = azkarsSearch[Math.floor(Math.random() * azkarsSearch.length)];

  return zekr.item;
};

export const getAzkarCategories = () => {
  return azkarsCategories;
};

export const getAzkarCategory = (id: number) => {
  return azkarsCategories.find((cat) => cat.id === id);
};
