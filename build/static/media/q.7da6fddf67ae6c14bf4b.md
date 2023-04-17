---
title: A Stress Test
points: 10
---

Although languages are different around the world, one feature that is found in many languages is stress. In
these languages, each word features one or more syllables with extra emphasis (which linguists call stress).

Let's consider English for a moment. The word *scofflaw* means "a person who openly disregards the law." Try
saying this word out loud. Even if you've never seen *scofflaw* before, you probably pronounced it *correctly,
with the emphasis on the first syllable (*SCOFF.law*), instead of on the second syllable (*scoff.LAW).

Now take a deep breath and try saying these next two words: *galligaskins* ("loose-fitting breeches") and *ultracrepidarian* ("a person who expresses opinions on matters outside their expertise"). Once again, even if
you've never seen these words before, you probably intuitively knew which syllables to stress. The correct
pronunciations of these words are *GALL.i.\*GAS.kins* and *UL.tra.CRE.pi.\*DA.ri.an*.

How should you read this notation? There are 3 things to remember:
- We use periods to mark approximate syllable boundaries.
- We capitalize every stressed syllable.
- We place an asterisk (*) at the start of the syllable with primary stress. (That is, in every English
word, there is usually one stressed syllable that receives more emphasis than the other stressed
syllables; this is the syllable with primary stress.[^1])

How is it that you intuitively know which syllables to stress, even for unfamiliar words? The answer is that
English speakers must have some systematic way of assigning stress to novel words. In task **Q1**, we present a
simplified version of one theory of how English stress assignment works.

**Q1.** Based on the data on the next page, fill in the blanks for the following stress assignment algorithm. Each
blank corresponds to exactly one word. After filling in the blanks, your algorithm should correctly predict the
stress for each of the 9 English words in the table on the next page. (Some blanks can be filled equally well
by multiple answers. You only need to provide one correct answer).

1. Assign stress to every **(a)** :ans -numbered syllable.[^2]
2. If step (1) made the **(b)** :ans syllable stressed, un-stress it UNLESS the word is
**(c)** :ans syllable**(s)** long.
3. Assign primary stress to the **(d)** :ans syllable farthest to the **(e)** :ans.

[^1]: In case you're wondering how to tell which syllable in a word has primary stress, one technique is called the "Lassie test." To use
this technique, pretend that the word is the name of a dog and that you want to call the dog inside. Whichever syllable you elongate when you call out the dog's name is the syllable with primary stress. For example, if your dog were named Ultracrepidarian,
you would call out something like "Ultracrepi-DAAAA-rian!"
[^2]: Note that we use the term odd-numbered syllables to refer to the first syllable, third syllable, fifth syllable, etc. We use the term
even-numbered syllables to refer to the second syllable, fourth syllable, sixth syllable, etc.

Here is the relevant data for **Q1.**

| Word | Stress |
|-|-|
| elephant | *E.le.phant |
| crush | *CRUSH |
| vitamin | *VI.ta.min |
| illustration | IL.lu.*STRA.tion |
| dime | *DIME |
| scofflaw | *SCOFF.law |
| galligaskins | GALL.i.*GAS.kins |
| ultracrepidarian | UL.tra.CRE.pi.*DA.ri.an |
| supercalafragilisticexpialidocious | SU.per.CA.li.FRA.gi.LI.stic.EX.pi.A.li.*DO.cious |

**Q2.** Stress assignment in English is a complex topic; the algorithm in **Q1** only covers some of the factors that
affect English stress. Based on the conversation below (which was annotated for stress by a human), what
are some further properties that might need to be added to make the algorithm properly handle English?

*Notes:* You should only mention factors that are illustrated in the conversation below. If a word
has no capital letters in it, that means it has no stress.

:expl

**Person A:** *i’m \*HOP.ing to ex.\*PORT my \*PAINT.ings. \*EACH \*ONE \*SHOWS a \*COM.mon \*OB.ject in a \*STRANGE \*SET.ting.*
<br>**Person B:** *i ob.\*JECT to \*THAT. we should \*IM.port \*ART, not \*EX.port it!*
<br>**Person A:** *well, i just \*GOT a \*PER.mit from the \*CUS.toms \*OFF.i.cer. she \*SAYS that \*ART can be an \*EX.cell.ent \*EX.port.*
<br>**Person B:** *if \*SHE per.\*MITS it, then i \*GUESS \*I must per.\*MIT it too.*

Not all languages stress their words in the same way that English does. However, it turns out that we can still
use the same basic algorithm for many other languages; we just need to introduce a few options in the statement of this algorithm. Here is the more general algorithm:

1. Start at the **[left / right]** edge of the word. **[Skip / don’t skip]** the syllable at that edge and
then assign stress to **[only the first / every alternating]** syllable that you encounter.
2. If the word is longer than one syllable and if step (1) made the word’s final syllable stressed,
**[leave it that way / un-stress it]**.
3. Assign primary stress to the **[leftmost / rightmost]** stressed syllable.

We refer to these five bolded options as *parameters*. By choosing the right set of parameters each time, we
can determine how to stress words in a wide variety of languages!

For the six languages presented below, examine the examples given to determine which stress assignment
parameters the language obeys.[^3] On the next page, you will be asked to select the correct values for each of
the parameters mentioned above. (For some languages, there may be multiple correct answers. You only
need to provide one correct answer. For simplicity, we have simplified the spellings of some of the example
words.)

[^3]: In practice, it is possible to do this automatically. In fact, one of the desirable properties of parameter-based linguistic theories is
that they allow a learner (such as a baby acquiring the language, or a computer model being trained on sentences) to learn properties of the language based on just a few examples. This is because the set of parameters greatly constrains the set of possible systems that the learner has to distinguish between.

:::div{.width-800}
| Mapudungun Word | Stress |
|-|-|
| wule | wu.*LE |
| tsipanto | tsi.*PAN.to |
| elumuyu | e.*LU.mu.YU |
| eluaenew | e.*LU.a.E.new |
| kimufaluwulay | ki.*MU.fa.LU.wu.LAY |

| Maranungku Word | Stress |
|-|-|
| tiralk | *TI.ralk |
| merepet | *ME.re.PET |
| yangarmata | *YANG.ar.MA.ta |
| langkarateti | *LANG.ka.RA.te.TI |
| welepenemanta | *WE.le.PE.ne.MAN.ta |

| Weri Word | Stress |
|-|-|
| ngintip | ngin.*TIP |
| kulipu | KU.li.*PU |
| uluamit | u.LU.a.*MIT |
| akunetepal | A.ku.NE.te.*PAL |

| Mansi Word | Stress |
|-|-|
| same | *SA.me |
| atenel | *A.te.nel |
| omatenel | *O.ma.TE.nel |
| pocaganelnel | *PO.ca.GA.nel.nel |

| Warao Word | Stress |
|-|-|
| yapurukitanehase | YA.pu.RU.ki.TA.ne.*HA.se |
| nahoroahakutai | NA.ho.RO.a.HA.ku.*TA.i |
| yiwaranae | yi.WA.ra.*NA.e |
| enahoroahakutai | e.NA.ho.RO.a.HA.ku.*TA.i |

| Comalapa Kaqchikel Word | Stress |
|-|-|
| abex | a.*BEX |
| tinamith | ti.na.*MITH |
| nubanobel | nu.ba.no.*BEL |
| shintshuxirisax | shin.tshu.xi.ri.*SAX |
:::

**Q3.** For each of the six languages shown above, specify the value of the parameter in the correct cell of the
table:

:::table{}
::tr[:td[] :td[left/right] :td[skip/don't skip] :td[only the first/every alternating] :td[leave it that way/un-stress it] :td[leftmost/rightmost]]
::tr[:td[Mapudungun] :td[:ans] :td[:ans] :td[:ans] :td[:ans] :td[:ans]]
::tr[:td[Maranungku] :td[:ans] :td[:ans] :td[:ans] :td[:ans] :td[:ans]]
::tr[:td[Weri] :td[:ans] :td[:ans] :td[:ans] :td[:ans] :td[:ans]]
::tr[:td[Mansi] :td[:ans] :td[:ans] :td[:ans] :td[:ans] :td[:ans]]
::tr[:td[Warao] :td[:ans] :td[:ans] :td[:ans] :td[:ans] :td[:ans]]
::tr[:td[Comalapa Kaqchikel] :td[:ans] :td[:ans] :td[:ans] :td[:ans] :td[:ans]]
:::

:u[Notes on Featured Languages:]

1. Mapudungun, also known as Mapuche, is an Araucanian language spoken by approximately 250,000 native speakers in Chile and Argentina.
2. Maranungku is a dialect of Marranj, an Australian Aboriginal language spoken in Northern Australia.
3. Weri is a Kunimaipa language spoken by approximately 14,000 native speakers in Papua New Guinea.
4. Mansi is a Uralic language spoken by about 1000 speakers, most of whom are situated around Russia’s
Ob River and its tributaries.
5. Warao is spoken by approximately 33,000 native speakers in Venezuela, Suriname, and Guyana. It is a
language isolate, meaning that it is not known to be related to any other language.
6. Comalapa Kaqchikel is a variety of Kaqchikel, a Quichean language of the Mayan family spoken by about
450,000 people in Guatemala.

Unfortunately, the type of algorithm seen in **Q3** does not work for all languages. In **Q2**, we already saw some
examples of how it fails to capture certain nuances of English. Below is another language (Selkup) where the
algorithm fails.

| Selkup Word | Stress |
|-|-|
| qumooqi | qu.*MOO.qi |
| qumooqlilii | qu.mooq.li.*LII |
| quminik | *QU.mi.nik |
| amirna | *A.mir.na |
| uucikkak | *UU.cik.kak |
| qolcimpati | *QOL.cim.pa.ti |
| uucoomit | uu.*COO.mit |

**Q4.** Describe how stress is assigned in Selkup:

:expl