# DuoTraining

This is a simple React app (bootstrapped with Vite) that helps me review the words I learn on the Duolingo app.

## Overview

* The **top right numeric input field** sets the number of cards displayed simultaneously.
* The **From Italian/From German** button flips all the cards to display their respective Italian or German side.
* The **New** button generates the number of cards specified in the input above. **Note**: once N cards are dealt, they will not appear in subsequent deals.
* The **Restart** button allows all the cards to be reshuffled and dealt again.
* The **bottom right panel** allows you to select a specific set of words from the full list. In particular:
  * "#Sets" lets you choose how many different sets to create.
  * "Chosen" allows you to select a particular set.

For example, if #Sets = 10 and Chosen = 2, the app will divide the entire word list into 10 equally populated sets and only consider the 2nd set.

If invalid values are entered, the New button automatically adjusts them to valid values, but does not immediately apply the changes.

Deployed on Netlify :)

## Usage

* Configure the top right numeric input field to the desired number of cards.
* Configure in the bottom right panel the desired number of sets and chosen set, in order to draw from a specific subset of words.
* Press **Select**.
* Press **New** to draw new cards from the pool of possible cards.

When the chosen set of cards was completely drawn, no more cards can be dealt. **Restart** or **Select** must be pressed.


