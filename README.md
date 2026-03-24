# 🎮 Pokémon Anniversary Tribute

A fun, retro Game Boy-styled web page that displays random Pokémon from the first generation using the [PokéAPI](https://pokeapi.co/). Press any button on the virtual Game Boy to discover a new creature.

![Game Boy Tribute](https://img.shields.io/badge/style-Game%20Boy-9bbc0f?style=flat-square&labelColor=0f380f)

## What is this?

A single-page tribute to the Pokémon franchise built using:
- 99.99% **vibecoding** — just a few prompts and the magic of [Kiro IDE](https://kiro.dev).
- 0.01% **manual edits in the HTML/css code** - old school style!
No frameworks, no build tools, no overthinking. Pure HTML, CSS, and vanilla JavaScript.

Each random Pokémon shows:
- Sprite, name, and Pokédex number
- Type badges
- Base stats (HP, ATK, DEF, SPD)
- Four random moves from its learnset

## Run it

```bash
# Option A: Node server (zero dependencies)
node server.js
# → http://localhost:3000

# Option B: Just open the file
open index.html
```

## Tech

- Vanilla HTML/CSS/JS — one file does it all
- [PokéAPI](https://pokeapi.co/) for Pokémon data
- Retro Game Boy UI with that classic green LCD feel

## Contributing

This is a tiny fun project, but contributions are welcome! If you want to add something cool:

1. Fork the repo
2. Create a branch (`git checkout -b feature/cool-thing`)
3. Commit your changes
4. Push and open a Pull Request

Ideas: sound effects, shiny sprites toggle, Pokédex entry text, animation on button press — go wild.

## Credits

- Pokémon data provided by [PokéAPI](https://pokeapi.co/)
- Pokémon is © Nintendo/Game Freak/Creatures Inc. This is a fan tribute, not affiliated with or endorsed by them.
- Built with vibes, prompts, and [Kiro IDE](https://kiro.dev) ✨

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).
