import { BigHead } from '@bigheads/core';

const hats = ['none', 'beanie', 'turban'];
const accessories = ['roundGlasses', 'tinyGlasses', 'none'];
const clothing = ['shirt', 'dressShirt', 'tankTop'];
const clothingColor = ['blue', 'red', 'green'];
const graphics = ['react', 'vue', 'graphQL'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function RandomAvatar({ baseProps }) {
  const randomizedProps = {
    hat: getRandomItem(hats),
    hatColor: getRandomItem(clothingColor),
    accessory: getRandomItem(accessories),
    clothing: getRandomItem(clothing),
    clothingColor: getRandomItem(clothingColor),
    graphic: getRandomItem(graphics),
  };

  return <BigHead {...baseProps} {...randomizedProps} />;
}
