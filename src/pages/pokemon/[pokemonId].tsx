import { Pokemon } from "@/lib/definitions";

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
  return <p>{pokemon.name}</p>;
};

export default Pokemon;
