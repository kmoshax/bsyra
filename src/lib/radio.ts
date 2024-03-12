import radios from "@/data/radio/radio.json";

export const getRadioList = () => {
  const newRadioList = [];

  for (let index = 0; index < radios.length; index++) {
    const radio = radios[index];
    newRadioList.push({
      ...radio,
      url: `${process.env.NEXT_URL}/api/radio/${radio.id}`,
    });
  }

  return newRadioList;
};

export const getRadioById = (id: number) => {
  const radio = radios.find((radio) => radio.id === id);

  return radio;
};
