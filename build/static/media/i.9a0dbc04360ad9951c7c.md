---
title: Non Sequitur
points: 10
tags:
- def21 compression compressor machine
- comp
---

At this very moment, scientists at NACLO Labs are hard at work on *Def21*, a definition-generating machine for
English words. If they can just fix a few small problems, *Def21* is sure to be a huge popular success.

*Def21* has access to a word list, L1, that includes some common English words and abbreviations, along with
their definitions:

:::div{.lmargin2}
:u[L1]
:::table{.border-hidden .width-800 .no1Count .no2Count .padding-none}
::tr[:td[al:] :td[American League] :td[rest:] :td[stay still]]
::tr[:td[cent:] :td[a penny] :td[st:] :td[a street]]
::tr[:td[grate:] :td[a grid of metal bars] :td[stat:] :td[a quantitative fact]]
::tr[:td[in:] :td[contained by] :td[sting:] :td[sharply injure]]
::tr[:td[ion:] :td[a charged particle] :td[sure:] :td[certain]]
::tr[:td[rate:] :td[give a score] :td[union:] :td[a worker’s organization]]
::tr[:td[real:] :td[truly existing]]
:::

The NACLO Labs team also compiled a second list, L2, for *Def21* to use, by scanning many English words with
their compressor machine.[^1] The compressor identified patterns of letters that showed up frequently in the
words it scanned, and it turned out that many of these word pieces had meanings of their own! For instance,
when the compressor scanned the words “redo” (meaning “do again”), “regrow” (meaning “grow again”),
and “replay” (meaning “play again”), it picked out “re” as a frequent repetition. Even better, with a little
clever programming, the scientists were able to find out the meaning of “re” automatically (that is, based
only on the meanings of the scanned words).

Here are the items in L2, and for each one, a sample of three words that it was found in:

:::div{.lmargin2} 
:u[L2:]
:::table{.border-hidden .width-800 .padding-none}
::tr[:td[ation *(adaptation, consideration, installation)*]]
::tr[:td[ing *(jumping, knowing, wandering)*]]
::tr[:td[ize *(equalize, publicize, randomize)*]]
::tr[:td[pre *(predawn, prehistoric, premodern)*]]
::tr[:td[re *(redo, regrow, replay)*]]
::tr[:td[un *(uncertainty, uncommon, untie)*]]
:::

Finally, *Def21* has a sophisticated way of combining definitions from L1 with the meanings of its L2 items to
guess the definition of a word it does not recognize. So, when *Def21* is given the word “unsure”, which it
does not recognize, *Def21* should recognize the pieces “un” from L2 and “sure” from L1 and produce the
definition “the opposite of certain”. In this case, *Def21* is confident about its result; when *Def21* is unsure
about its guess, it will flag the result with one or more question marks.

[^1]: If you want to know more about how NACLO Labs’ compressor machine works, try problem [**(H)**, Sequitur,](./h) also from NACLO 2021, Round 1. The NACLO
Labs machine operates on the same basic principles as the algorithms shown there. Be aware, however, that solving problem **(H)** will not give you any
advantage in solving this problem.

What *Def21* still struggles with is dividing unrecognized words into pieces. The great minds at NACLO Labs
are trying out four different strategies — 1, 2, 3, and 4 — for this task. Here are some words that *Def21* did
not recognize, and the results of each strategy:

<div class="lmargin2">
ingrate
<div class="lmargin2">
1: contained by give a score (?)<br>
2: contained by a grid of metal bars<br>
3: continually give a score<br>
4: contained by a grid of metal bars<br>
</div>
resting
<div class="lmargin2">
1: contained by a street again (?)<br>
2: sharply injure again<br>
3: continually stay still<br>
4: sharply injure again
</div>
unionize
<div class="lmargin2">
1: make into the opposite of a charged particle<br>
2: make into a workers’ organization<br>
3: make into a workers’ organization<br>
4: make into a workers’ organization
</div>
predation
<div class="lmargin2">
1: a charged particle again (????)<br>
2: not yet a charged particle (???)<br>
3: not yet the result of (?)<br>
4: not yet the result of (?)
</div>
realize
<div class="lmargin2">
1: make into American League again<br>
2: make into truly existing<br>
3: make into truly existing<br>
4: make into truly existing
</div>
station
<div class="lmargin2">
1: a street a charged particle (??)<br>
2: a quantitative fact a charged particle<br>
3: the result of a street<br>
4: the result of a street
</div>
</div>

Here are brief descriptions the designers wrote up of the four strategies, with a few key words removed:

1: Choose the **(a)** :ans{.sm} piece from **(b)** :ans{.sm} at each step.<br>
2: At the first step, choose the **(c)** :ans{.sm} piece from **(d)** :ans{.sm}. At each step after this, choose the
**(e)** :ans{.sm} piece from **(f)** :ans{.sm}.<br>
3: At the first step, choose the **(g)** :ans{.sm} piece from **(h)** :ans{.sm}. At each step after this, choose the
**(i)** :ans{.sm} piece from **(j)** :ans{.sm}.<br>
4: Choose the **(k)** :ans{.sm} piece from **(l)** :ans{.sm} each step.<br>

**I1.** From the options *longest*, *shortest*, *L1*, *L2*, and *L1* or *L2*, fill in the blanks **(a)** to **(l)**.

**I2.** Give the results of each strategy 1-4 on each of the inputs below. In a case where there is not enough
information to choose between multiple possible results, you may enter any result that is consistent with the
examples given:

:::div{.lmargin2}
<b>(a)</b> reunion<br>1: :ans{.med}<br>2: :ans{.med}<br>3: :ans{.med}<br>4: :ans{.med}

<b>(b)</b> unrest <br>1: :ans{.med}<br>2: :ans{.med}<br>3: :ans{.med}<br>4: :ans{.med}

<b>(c)</b> presto <br>1: :ans{.med}<br>2: :ans{.med}<br>3: :ans{.med}<br>4: :ans{.med}  
:::

**I3.** In a recent test, a Canadian scientist asked *Def21* for the definition of “centre” (which Americans typically
spell “center”). This time, all four strategies 1-4 agreed on a result. What’s more, *Def21* noticed that this
result was the same as that given by all four strategies for a *different* unrecognized English word. What is the
other word, and what definition was given to both words by all strategies?

:::table{.border-hidden .width-800 .no1Count .no2Count}
::tr[:td[Other word:] :td[ :ans{.med}]]
::tr[:td[Definition:] :td[:ans{.med}]]
:::
