import Image from "next/image";

import { Pokemon, Type, idPokemonFormatter } from "@/lib/definitions";

import styles from "../../styles/Pokemon.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  const response = await fetch(`${baseUrl}/?limit=${maxPokemons}`);

  const data = await response.json();

  let pokemons: Pokemon[] = data.results;

  const paths = pokemons.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  console.log(context);
  const id = context.params.pokemonId;
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  const response = await fetch(`${baseUrl}/${id}`);

  const data = await response.json();

  return {
    props: { pokemon: data },
  };
};

const Pokemon = ({ pokemon }: { pokemon: Pokemon }) => {
  const id = idPokemonFormatter(pokemon.id);
  const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;

  return (
    <div className={styles.pokemon__container}>
      <h1 className={styles.pokemon__container__title}>{pokemon.name}</h1>
      <Image
        src={url}
        width={200}
        height={200}
        alt={`Imagem do ${pokemon.name}`}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo</h3>
        <div className={styles.pokemon__container__types}>
          {pokemon.types.map((item: Type, index) => (
            <span key={index} className={`${styles.pokemon__container__types__type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
          ))}
        </div>
      </div>
      <div className={styles.pokemon__container__data}>
        <div className={styles.pokemon__container__data__height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.pokemon__container__data__weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
