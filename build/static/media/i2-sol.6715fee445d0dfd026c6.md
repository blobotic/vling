We notice that the first half-ish of words in Alabama look similar, and they end in either `-ka` or `-i`, which, combined with a skim over the unsorted English translations, suggests that each word has a "root" and that the suffixes imply singular/plural **OR** active/passive voice. 

Counting, we get the following groups:

| Alabama word #s | Words | Root | Count |
| - | - |  - | - |
| {1,2} | achánnàaka, achanni | achan- | 2 | 
| {3,4} | ahamatli, ahámmatka | aham- | 2 |
| {5,6,7} | apòotka, apotòoli, apóttòoka | apot- | 3 |
| {8,9,10} | atanayli, atánnayka, atanni | atan- | 3 |
| {11,12,13} | bàalka, balàali, balli | bal- | 3 |
| {14} |incháffàaka|inchaf- | 1 |
| {15} |kawaɬɬi | kawaɬ- | 1 |
| {16,18}|ɬìilka, ɬilaffi |ɬil- | 2 |
| {17,19,20} | ɬìipka, ɬipli, ɬíppìika | ɬip- | 3 |
| {21,22,23,24} | ɬobaffi, ɬómbafka, ɬombi, ɬòomka | ɬob- | 4 |
| {25,26} | sibapli, simbi | sib- | 2 |

| English #s | Sentence | Verb | Count |
| - | - | - | - |
| A | he breaks it in two | break | 1 |
| B, L, V | he lays them down<br>they lie, are lying down<br>he lays it down | lie | 3 |
| C, K, Z | he wraps them<br>it is wrapped<br>he wraps it | wrap | 3 |
| D, I, S | he puts it next to something<br>it is next to something<br>they are next to something | is next to something | 3 | 
| E, H, Q | he turns them upside down<br>they are turned upside down<br>it is turned upside down | turn upside down | 3 |
| F, T | it is torn in several places, they are torn<br>he tears it in two | tear | 2 |
| G, N | it leans against something<br>he leans them against something | lean against | 2 |
| J, O, P, W | it has holes, they have holes<br>he makes holes<br>he makes a hole<br>it has a hole | hole | 4 |
| M, R | it is scattered, they are scattered<br>he scatters it, he scatters them | scatter | 2 |
| U | he has one | has | 1 |
| X, Y | he peels the bark off<br>he peels a strip off | peel | 2 |

Clearly, {14, 15} = {A, U}  and {21, 22, 23, 24} = {J, O, P, W}. 

What catches our eye first is the two endings, `-ka` and `-i`; we guess that they might determine either active/passive voice or plurality. (active/passive seems the most obvious, but we suspect plurality when we see that `it is torn in several places = they are torn` and `he scatters it = he scatters them`; *something* (binary) likely indicates that in a sentence, either both the subject and object are singular **OR ELSE** at least one is plural). Our two main "differentiators" in Alabama are the odd complexity/conjugations in the middle of words (ex. double letters) and `-ka` vs `-i`. We want to determine what the latter indicates. 

The groups with count 1, 3, or 4 offer us no insight in differentiating them (because even), so we examine the groups with count 2, specifically {25, 26} (both end with `-i`) and {X, Y} (active voice). Since none of the English 2-groups have singular-only phrases, we hence conclude that `-i = active voice` and `-ka = passive voice`. 

Hence, :sol[14 = U]{.st} and :sol[15 = A]{.st} immediately. Similarly, 
- {X, Y} = {25, 26}
- {O, P} = {21, 23}
- {J, W} = {22, 24}

To pair the rest of the groups (and subsequently each term), it suffices to determine what indicates plural vs singular. Examining Alabama phrases in 2-groups ending with `-ka`, we notice that the main difference is an accent grave vs. an acute accent; specifically, {1,2} and {3,4} both have acute accents while {16,18} has a grave accent. From the English 2-groups, {G, N} and {M, R} are singular (note that for some arbitrary reason, M is... singular? I find this quite odd personally but okay), hence an acute accent indicates singular while a grave accent indicates plural. We thus have :sol[16 = F]{.st} and :sol[18 = T]{.st}. 

We then examine Alabama phrases ending in `-i`. There seems to be a "shorter" and "longer" form (sibapli vs. simbi), as well as a grave-accented double vowel form. Since {5, 6, 7} and {17, 19, 20} pair with {D, I, S} and {E, H, Q}, one of {apotòoli, ɬipli} is plural. Similarly, one of {balàali, balli} and one of {atanayli, atanni} are plural. Presumably, {apotòoli, balàali, atanayli} are all of the same tense; that is, the elongated grave accent and the "longer" (3-syllable) form are the same tense. Since T is singular, we conclude that 3-syllable words are singular and 2-syllable words are plural (note that we do not count `a-` as a syllable). The table is then easy to fill out:
- :sol[{1, 2} = {G, N}]{.st} = passive singular, active plural
- :sol[{3, 4} = {R, M}]{.st} = active singular, passive singular
- :sol[{5, 6, 7} = {S, D, I}]{.st} = passive plural, active singular, passive singular
- :sol[{8, 9, 10} = {Z, K, C}]{.st} = active singular, passive singular, active plural
- :sol[{11, 12, 13} = {L, V, B}]{.st} = passive plural, active singular, active plural
- :sol[{14, 15} = {U, A}]{.st}
- :sol[{16, 18} = {F, T}]{.st}
- :sol[{17, 19, 20} = {H, E, Q}]{.st} = passive plural, active plural, passive singular
- :sol[{21, 22, 23, 24} = {P, W, O, J}]{.st} = active singular, passive singular, active plural, passive plural
- :sol[{25, 26} = {Y, X}]{.st} = active singular, active plural

For part **(b)**, we get:
- bállàaka = :sol[it/he lies, is lying down]{.st}
- inchafàali = :sol[he gets one]{.st} (note that get is the active form of has)
- kawwi = :sol[he breaks them, he breaks it in several places]{.st} (two translations because if he we have he [verb] [plural], then [plural] can be [them] or [it in several places] from F)

For **(c)**, we need to examine the construction more closely:

WLOG, let the root be in the form PRE-V-C with a fixed V:sub[2] and C:sub[2].

| | Passive | Active |
| - | - | - |
| Singular | PRE-V́-C-C-V:sub[2]-[C:sub[2]]-ka | PRE-V-C-V:sub[2]-C:sub[2]-li<br>PRE-V-C-V̀:sub[2]-V:sub[2]-li |
| Plural | PRE-V̀-V-C-ka| PRE-V-C-li | 

Note that C-L becomes C-C if C is in {n, ɬ, f, b}. Additionally, B-C becomes M-B for any consonant C. 

Hence,
- he tears it in several places = :sol[ɬilli]{.st} = **(d)** he tears them = active plural
- it is torn in two = :sol[ɬíllafka]{.st} = passive singular
- he turns it upside down = :sol[ɬipìili]{.st} = active single
- he leans it against something = :sol[achanàali]{.st} = active single

