const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey",
];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(pokemons.length);
};

countThem();

const orderThem = () => {
  // order the pokemons alphabetically
  let sortedPokemons = pokemons.sort();
  console.log(sortedPokemons);
};

orderThem();

const flipThem = () => {
  // reverse the order of the pokemons
  let reversedPokemons = pokemons.reverse();
  console.log(reversedPokemons);
};

flipThem();

const makeThemBig = (item) => {
  // print the pokemons in UPPERCASE letters
  console.log(item.toUpperCase());
};

pokemons.forEach(makeThemBig);

const onlyTheBs = (item) => {
  // only print the pokemons that starts with B
  if (item.charAt(0) == "B") {
    console.log(item);
  }
};

pokemons.forEach(onlyTheBs);

// Filter out any pokemon starting with the letter C
const notTheCs = pokemons.filter((item) => item.charAt(0) !== "C");
console.log(notTheCs);

const nameAndIdThanks = (item) => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  console.log(`number ${pokemons.indexOf(item)} - ${item}`);
};

pokemons.forEach(nameAndIdThanks);

const catchPokemon = () => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  console.log(pokemons.push("Eevee"));
  console.log(pokemons);
};

catchPokemon();

const didICatchIt = (name) => {
  // check the pokemons to see if a specific pokemon is in the array
  console.log(pokemons.includes("Eevee"));
};

didICatchIt();

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  pokemons.splice(2, 0, "Clefairy");
  console.log(pokemons);
};

addInThirdPlace();

// ***BONUS***
const theLongestName = (item) => {
  // find the pokemon with the longest name
  let mostCharacters = Math.max(...item.map((el) => el.length));
  return item.filter((el) => el.length === mostCharacters);
};

const longestStrings = theLongestName(pokemons);

console.log(longestStrings);
