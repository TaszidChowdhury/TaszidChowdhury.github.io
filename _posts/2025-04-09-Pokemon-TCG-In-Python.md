---
layout: article
title: I Built Pokemon The Card Game In Python!
aside:
  toc: true
---

# I Built the Pokémon Trading Card Game in Python!

This is probably one of the most exciting projects I've ever coded. I recreated a playable version of the **Pokémon Trading Card Game (TCG)** using just Python! Yep, it's a terminal-based card battle experience where Charmander, Squirtle, Bulbasaur, and friends go head-to-head in classic turn-based fashion. If you're a Pokémon fan and a coding enthusiast, buckle up—this post is for you.

---

## 🎮 What’s the Pokémon TCG Again?

If you’ve ever flipped through a binder full of holographic cards or shouted “I choose you!” at your Game Boy, you already get the vibe. The Pokémon TCG is a strategic card battle game where players build a 60-card deck using Pokémon, Energy, and Trainer cards. The goal? Knock out your opponent’s Pokémon and grab all six **Prize Cards** before they do.

There’s a surprising amount of strategy behind the adorable critters. You need to evolve your Pokémon, manage energy resources, and play Trainer cards wisely to outsmart your opponent. I thought, why not recreate that experience using Python?

---

## 👨‍💻 Let’s Talk Features

The game kicks off by giving each player a **randomized 60-card deck**. They draw a 5-card hand, pick one Basic Pokémon to go Active, and place up to three others on their Bench. Just like in the real game!

Each turn, you draw a card and get options: evolve, attach energy, retreat your Pokémon, play a Trainer card, or attack! Each Pokémon has its own HP, energy costs, and attacks. You have to think ahead. Have enough energy? Time to attack. Not ready? Maybe draw more cards or heal instead.

And when a Pokémon gets knocked out? Boom—you get a Prize Card. First to take 6 wins.

---

## ✨ Trainer Cards Add Some Chaos

One of my favorite parts of the project was adding Trainer cards. They come with **randomized powers** like:
- Drawing two cards out of nowhere (hello, comeback!)
- Healing 20 HP from your Pokémon
- Wiping your hand and drawing five new cards!

They can’t be played like Pokémon—no Trainer-on-Trainer action here—but they can totally shift the momentum when played right.

---

## 🧬 Evolution, Energy & Epic Moves

Evolutions follow real rules—no skipping from Charmander to Charizard unless Charmeleon is already in play. And when you evolve, your energy and damage stay intact.

Energy matters too. Each attack costs a certain number of Fire, Water, or Grass energy cards. You can only attach one per turn, so timing is key.

Want to switch Pokémon? You can retreat, swapping out your Active for one on the Bench. (Energy-based retreat costs are coming soon!)

---

## 🧱 Under the Hood: Code Breakdown

The project is built entirely in Python and is fully object-oriented. I’ve got base classes for cards, subclasses for Energy, Trainer, and Pokémon, and methods for everything from using attacks to evolving and drawing cards.

Each player’s state (hand, deck, bench, etc.) is handled through the `Player` class. The `Game` class runs the show—managing setup, turn order, and win conditions.

It's clean, expandable, and surprisingly fun to play even in a terminal.

---

## 🚀 Wanna Play It?

You can grab the code, run it on your machine, and challenge a friend right now. All you need is Python 3:

```bash
git clone https://github.com/yourusername/pokemon-tcg-python.git
cd pokemon-tcg-python
python3 main.py
```

Follow the prompts, make your moves, and enjoy the strategy!

---

## 🛠 What’s Coming Next?

I’m planning on adding:
- Energy costs for retreating
- An actual discard pile for Trainer cards
- Battle summaries (like a game log!)
- A basic AI for single-player mode
- Maybe even a full GUI with animations (stay tuned 👀)

---

## 🎉 Final Thoughts

Rebuilding the Pokémon TCG in Python was both nostalgic and technically satisfying. It forced me to think about system design, data management, user input, and scalability—all while having fun.

If you’ve got a soft spot for turn-based games and a love for code, I highly recommend trying a project like this. You’ll learn a ton, and who knows? You might just find yourself shouting “Charizard, use Flamethrower!” into your terminal.

Wanna talk Pokémon, code, or collab on something cool? Find me at [Github](https://github.com/TaszidChowdhury). Let’s build something legendary 🔥💧🌿

Gotta code 'em all!
