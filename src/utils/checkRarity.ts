import Common from "../assets/images/rarityIcon.png";
import Epic from "../assets/images/Epic.png";
import Rare from "../assets/images/Rare.png";
import SuperRare from "../assets/images/Super Rare.png";
import Legendary from "../assets/images/Legendary.png";

export const checkRarity = (num: number) => {
  switch (num) {
    case 1:
      return {
        image: Common,
        name: "Common",
      };
    case 2:
      return {
        image: Rare,
        name: "Rare",
      };
    case 3:
      return {
        image: SuperRare,
        name: "Super Rare",
      };
    case 4:
      return {
        image: Epic,
        name: "Epic",
      };
    case 5:
      return {
        image: Legendary,
        name: "Legendary",
      };
  }
};
