// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [values, setValues] = useState(null);
//   const urlData = `https://pokeapi.co/api/v2/pokemon/${poke}`;

//   for (let i = 0; i <= 50; i++) {
//     let poke = i;
//     poke += i;
//   }

//   const FetchData = async () => {
//     try {
//       const response = await fetch(urlData);
//       const store = await response.json();
//       setValues(store);
//       console.log(store);
//     } catch (error) {
//       console.error("Error fetching pokemon  data:", error);
//     }
//   };

//   return (
//     <div>
//       <p>find pokemon list</p>
//       <button
//         className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition transform hover:bg-blue-700 hover:scale-105 hover:animate-wiggle"
//         onClick={FetchData}
//       >
//         POKEFINDER
//       </button>
//       <Component values={values} />
//     </div>
//   );
// }

// export default App;

// function Component({ values }) {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold text-center mb-4">
//         {values ? "Pokémon Details" : "Waiting for Pokémon..."}
//       </h2>
//       {values && (
//         <div className="w-full max-w-sm rounded-lg shadow-lg overflow-hidden">
//           <img
//             alt="Card Image"
//             className="w-full h-60 object-cover"
//             height="240"
//             src={values.sprites.front_default}
//             style={{
//               aspectRatio: "400/240",
//               objectFit: "cover",
//             }}
//             width="400"
//           />
//           <div className="p-6 space-y-4">
//             <h2 className="text-2xl font-bold">{values.name}</h2>
//             <p className="text-gray-500 dark:text-gray-400">
//               <span className="p-5">{values.types[0].type.name}</span>
//               <span>weight:- {values.weight}</span>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState } from "react";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  const FetchData = async () => {
    try {
      const promises = [];
      for (let i = 1; i <= 1000; i++) {
        const urlData = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(urlData).then((response) => response.json()));
      }
      const results = await Promise.all(promises);
      setPokemonData(results);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-4">
      <p className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Find Pokémon List
      </p>
      <button
        className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg transition transform hover:bg-indigo-800 hover:scale-105 hover:animate-wiggle"
        onClick={FetchData}
      >
        POKEFINDER
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {pokemonData.map((pokemon) => (
          <Component key={pokemon.id} values={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;

function Component({ values }) {
  return (
    <div className="w-full max-w-sm rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transform transition-all hover:scale-105">
      <img
        alt={values.name}
        className="w-full h-60 object-cover"
        height="240"
        src={values.sprites.front_default}
        style={{
          aspectRatio: "400/240",
          objectFit: "cover",
        }}
        width="400"
      />
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold capitalize text-gray-800 dark:text-gray-200">
          {values.name}
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          <span className="block">Type: {values.types[0].type.name}</span>
          <span className="block">Weight: {values.weight}</span>
        </p>
      </div>
    </div>
  );
}
