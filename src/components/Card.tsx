import Image from "next/image";
import Link from "next/link";

import { Pokemon, idPokemonFormatter } from "@/lib/definitions";

import styles from "../styles/Card.module.css";

const Card = ({ pokemon }: { pokemon: Pokemon }) => {

  const id = idPokemonFormatter(pokemon.id);
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
      <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
    </div>
  );
};

export default Card;
