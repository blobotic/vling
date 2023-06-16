**O1.**

Matching is fairly simple: we notice that `child` is the only word that appears three times on the RHS, and similarly, `dɛ̀βì` is the only word that appears thrice on the LHS. 

There exists two instances where `child` is the possessor and one instance where `child` is the possessed, and there are two instances where `dɛ̀βì` is the first word and one where it's the second, so we conclude that word order is `[possessor possessed]`. 

Then, through word chasing, we get the following table,

:::table{.border-hidden .width-600 .center .padding-none}
::tr[:td[bɔ́ɾú] :td[fish]]
::tr[:td[g:sup[w]ákù] :td[ear]]
::tr[:td[sɔ̀kɾɛ̄] :td[rat]]
::tr[:td[dúkɛ̀] :td[bird]]
::tr[:td[dɛ̀βì] :td[child]]
::tr[:td[àitɛ̀] :td[father]]
::tr[:td[àjà] :td[chicken]]
::tr[:td[sɔ̀ɾì] :td[earth]]
::tr[:td[wùtù] :td[car]]
:::

hence we get that 

:::div{.center}
:sol[1. [bɔ́ɾú gwákù] = G. fish's ear]
<br>:sol[2. [sɔ̀kɾɛ̄ dúkɛ̀] = H. rat's bird]
<br>:sol[3. [dɛ̀βì àitɛ̀] = D. child's father]
<br>:sol[4. [àitɛ́ dɛ̀βì] = F. father's child]
<br>:sol[5. [àjà sɔ̀kɾɛ̀] = B. chicken's rat]
<br>:sol[6. [dúkɛ́ sɔ̀ɾì] = A. bird's earth]
<br>:sol[7. [dɛ̀βí wùtù] = C. child's car]
<br>:sol[8. [sɔ̀ɾì βɔ́ɾù] = E. earth's fish]
:::

**O2.** 

Similarly, we get that 

:::div{.center}
:sol[a. [àjā βɔ́ɾù] = chicken's fish] 
<br>:sol[b. [dúkɛ́ àitɛ̀] = bird's father]
<br>:sol[c. [wùtù dúkɛ̀] = car's bird]
:::

**O3.**

The last part is trickier; we notice that the same word can take on different tones (i.e. àitɛ́ and àitɛ̀ both exist). Specifically, the second tone in each word is the only one that is variable, and the second tone is *always* the low tone in the second word of a phrase. Thus, the only tone we need to determine is the second tone of the first word. 

In languages, tones generally modify either the meaning of a word (i.e. in Mandarin) or its grammatical form (or both); in Abawiri, tones clearly don't modify the meaning of words.  

We examine `child's car`, `child's father`, and `father's child`. The fact that `child's father` and `father's child` leads us to intuit that the tone at the end is likely independent of any wor'ds meaning, and the fact that `dɛ̀βì` in the former two phrases has different tones reveals that the tone change depends on *both* words (also because of child and bird having different tones in child's father and bird's father, from **O2**). 

The count or existence of certain tones on the first or second word don't appear to determine anything (i.e. high-low in the second word can yield a low, middle, or high tone for the second tone of the first word). 

We *do* notice `dúkɛ́` is a high tone both times it appears as the first word, while `àitɛ̀` as the second word can yield both high and low tones. We thus label `dúkɛ́` as "A", where all phrases in the form `[A ?]` take on the high tone. We can then label another category of words "B", where this does not hold; for example, `dɛ̀βì`. We notice that from **O2** part (c), `wùtù` can also likely be labeled "B" (for now, we try to minimize the number of labels; we can form sublabels if needed). Then 7. is of the form `[B B]`, which yields a high tone. 

We now examine `àitɛ́`; we want to determine if it's A or B. Because of `3. [dɛ̀βì àitɛ̀] = [B ?]`, we label `àitɛ́` as A. Hence, `[B A]` yields a low tone. 

Summing the above rules, we get the following patterns:
- `[A A]` -> high tone
- `[A B]` -> high tone
- `[B A]` -> low tone
- `[B B]` -> high tone

We now check which phrases break this to determine the necessity of sublabels/subcases, building the following table:

:::table{.border-hidden .width-400 .center .padding-none .no2Count .no1Count .mb2}
::tr[:td[bɔ́ɾú] :td[fish] :td[A]]
::tr[:td[g:sup[w]ákù] :td[ear] :td[]]
::tr[:td[sɔ̀kɾɛ̄] :td[rat] :td[]]
::tr[:td[dúkɛ̀] :td[bird] :td[A]]
::tr[:td[dɛ̀βì] :td[child] :td[B]]
::tr[:td[àitɛ̀] :td[father] :td[A]]
::tr[:td[àjà] :td[chicken] :td[]]
::tr[:td[sɔ̀ɾì] :td[earth] :td[B]]
::tr[:td[wùtù] :td[car] :td[B]]
:::

g:sup[w]ákù and the mdidle tone words confuse us; it makes little sense to add a new category ("C") for these select words because that leads us to a contraidction elsewhere, so we just write a rule:
- If the vowel that the second tone of the first word is over exists elsewhere in the phrase with the same tone (ignoring that the second tone of the second word always transforms into the low tone), then the tone over this vowel transforms into the middle tone. 

Hence, 

:::table{.border-hidden .width-400 .center .padding-none .no2Count .no1Count .mb2}
::tr[:td[g:sup[w]ákù] :td[ear] :td[B]]
::tr[:td[sɔ̀kɾɛ̄] :td[rat] :td[A]]
::tr[:td[àjà] :td[chicken] :td[]]
:::