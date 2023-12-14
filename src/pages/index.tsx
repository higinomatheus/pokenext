import Image from "next/image";

import styles from "@/styles/Home.module.css";
import logo from "../../public/images/pokeball.png";

interface Pokemon {
  id: number;
  name: string;
  url: string;
}

export const getStaticProps = async () => {
  const maxPokemons = 251;
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  const response = await fetch(`${baseUrl}/?limit=${maxPokemons}`);
  const data = await response.json();

  let pokemons: Pokemon[] = data.results;

  // adiciona um id para cada pokemon
  pokemons.forEach((item, index) => {
    item.id = index + 1;
  });

  // Sem utilizar o Shorthand Property:
  // return {
  //   props: { pokemons: pokemons },
  // };

  // Utilizando o Shorthand Property:
  return {
    props: { pokemons },
  };
};

const Home = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <>
      <div className={styles.items_in_row} id={styles.home__title}>
        <h1>
          Poke<span>Next</span>
        </h1>
        <Image src={logo} width={50} height={50} alt="Ícone da pokeball" />
      </div>
      <div className={styles.items_in_row} id={styles.container__pesquisar}>
        <input
          id={styles.container__pesquisar__input}
          placeholder="Pesquise pelo pokémon desejado"
        />
        <button id={styles.container__pesquisar__btn}>Pesquisar</button>
      </div>
      <div id={styles.pokemon__container}>
        {pokemons.map((item: Pokemon) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </>
  );
};

export default Home;
