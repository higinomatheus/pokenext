// functions.tsx

export const idPokemonFormatter = (num: number): string => {
  if (num < 100) {
    return num.toString().padStart(3, "0");
  } else {
    return num.toString();
  }
};
