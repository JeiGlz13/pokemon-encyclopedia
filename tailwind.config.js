module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
			xs: "440px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
    extend: {
      fontFamily: {
				Poppins: ["Poppins"],
				Montserrat: ["Montserrat"],
				Newake: ["Newake"],
				'montserrat': ['Montserrat'],
			},
		colors: {
			'rojoPokemon': '#CE2211',
			'grisOscuro': '#212121',
			'steelBlue': '#3c5aa6',
			'azulPokemon': '#1C4CBD',
		}
    },
  },
  plugins: [],
}