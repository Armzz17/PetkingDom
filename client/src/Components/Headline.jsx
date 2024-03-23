import DogLogo from "../assets/AnimalLogo/DogLogo.png";
import CatLogo from "../assets/AnimalLogo/CatLogo.png";
import BirdLogo from "../assets/AnimalLogo/BirdLogo.png";
import HamsterLogo from "../assets/AnimalLogo/HamsterLogo.png";
import TurtleLogo from "../assets/AnimalLogo/TurtleLogo.png";
import SpiderLogo from "../assets/AnimalLogo/SpiderLogo.png";
import SnakeLogo from "../assets/AnimalLogo/SnakeLogo.png";
import FishLogo from "../assets/AnimalLogo/FishLogo.png";
import RabbitLogo from "../assets/AnimalLogo/RabbitLogo.png";
import AntLogo from "../assets/AnimalLogo/AntLogo.png"
// import animalData from "../assets/animal.json";
import Searchbar from "./Searchbar.jsx";
import { Link } from "react-router-dom";

const Headline = () => {
  const animalData = [
    {
      name: "Dog",
      link: "/dog",
      namepath: DogLogo,
    },
    {
      name: "Cat",
      link: "/cat",
      namepath: CatLogo,
    },
    {
      name: "Bird",
      link: "/bird",
      namepath: BirdLogo,
    },
    {
      name: "Hamster",
      link: "/hamster",
      namepath: HamsterLogo,
    },
    {
      name: "Turtle",
      link: "/turtle",
      namepath: TurtleLogo,
    },
    {
      name: "Spider",
      link: "/spider",
      namepath: SpiderLogo,
    },
    {
      name: "Snake",
      link: "/snake",
      namepath: SnakeLogo,
    },
    {
      name: "Fish",
      link: "/fish",
      namepath: FishLogo,
    },
    {
      name: "Rabbit",
      link: "/rabbit",
      namepath: RabbitLogo,
    },
    {
      name: "Ant",
      link: "/ant",
      namepath: AntLogo,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-28 mt-3 mb-6">
      <div className="flex flex-wrap justify-center  sm:space-x-9">
        {animalData.map((animal, index) => (
          <Link
            to={animal.link}
            key={index}
            className="hover:scale-105 text-[#4F200D]"
          >
            <img className="w-20 h-20" src={animal.namepath} />
            <h1 className="text-center">{animal.name}</h1>
          </Link>
        ))}

        {/* {animalData.map((animal, index) => (
            <a href={animal.link}>
              <img
                className="w-16"
                key={index}
                src={animal.name}
                alt={animal.link}
              />
            </a>
          ))} */}
      </div>
      <Searchbar />
    </div>
  );
};

export default Headline;
