import Image from "next/image";
import Link from "next/link";

import { Pokemon } from "@/lib/definitions";

import styles from "../../styles/Card.module.css";

const Card = ({ pokemon }: { pokemon: Pokemon }) => {
  const numberFormatter = (num: number): string => {
    if (num < 100) {
      return num.toString().padStart(3, "0");
    } else {
      return num.toString();
    }
  };

  const id = numberFormatter(pokemon.id);
  const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;

  return (
    <div className={styles.card__container}>
      <Image
        src={url}
        width={120}
        height={120}
        alt={`Imagem do ${pokemon.name}`}
      />
      <p>#{pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <Link href={`#`}>Detalhes</Link>
    </div>
  );
};

export default Card;
