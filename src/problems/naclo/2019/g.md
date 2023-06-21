---
title: Break it Down!
points: 5
tags: comp
---

Computers, like humans, often encounter words they have never seen before among the stream of language
constantly inundating them, which can pose a challenge for the computer's understanding of language. One
approach for handling novel words is to use a character-level model of language: Whereas word-level models
treat words as non-decomposable units, character-level models can learn how individual letters (or chunks of
letters) work together to create word meaning. For example, if a character-level model encounters the novel
word non-walruslike, it could figure out its meaning based on the meanings of smaller chunks (non-, walrus,
and like).

However, such a model might make mistakes if it breaks the word down incorrectly. The table on the left
shows a list of words that a hypothetical character- level model might interpret incorrectly, while the table on
the right shows (in random order) the definitions it might generate.

:::ntable{fmt=1 .width-800}
battery & ordered group of notions
biking & small arrow-shooting device
bowling & having two male monarchs
conundrum & item sharing the role of being a beaten instrument used by female religious figures
decent & did hurt beforehand
divergent & in favor of a large farm vehicle
extent & not attending
idealist & sharply wound once more
incoming & era of disorder
message & like pancake-making material
missing & remove pennies from
mistrust & courteous man who descends below water
preached & having three small glass containers
pronouncement & flaky reddish material created by water droplets
properties & small horseman
protractor & material binding together I, you, she, he, etc.
puffiness & improperly produce a tune
resting & former cloth dwelling
trivial & appropriate pieces of neckwear
unison & female northern bird
weeknight & having one male child
:::

**G1.** On your answer sheet, match the words with the definitions they would be given.

**G2.** What English words would the model give the following definitions? Hint: One of these three words appears on the previous page. Write your answers on the answer sheets.

:::ntable{fmt=2 .no1Count .no2Count}
A. having two male children & :ans{.ti}
B. did hurt once more & :ans{.ti}
C. not not going out with & :ans{.ti}
:::