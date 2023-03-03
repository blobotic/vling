A few concepts before we start:
- number systems generally place emphasis on base 10 (i.e. tens)
- larger groupings are often either further powers of 10 *or* multiples of 10 (ex. in French, 80 is *quatre-vingt*, aka 4 20s)
- the $10n$'s for $1\leq n\leq 9$ are often odd

From (1), we have that `wija = 2`, and we also see it appear in (8) and (9). 

The first thing we notice is the suffixes/prefixes we should consider are `-ma`. 

The three numbers—39, 129, and 149—ending with 9 catch our eye first; we notice that the only "repeated" word is `ije`, so we surmise that it means something along the lines of `9` or `-1`. Additionally, the only difference between (8) and (9) is an additional `joka rati` in (9), creating a difference of 20. In any case, the final word never determines the units digit. 

We guess that in `benomima rati = 16`, we have either `6 + 10` or `-4 + 20`. Examining (3), we note that both `benomima` and `waroewoma` possess the suffix `ma` (as a matter of fact, (5), (7), and (10) each follow this pattern, i.e. every number that does not end in 9 or 0). We conclude that `-ma` thus specifies the units digit and that `ije` indicates something along the lines of `-1`. 

Hence, we guess that `benomi = 6`, `waroewo = 8`, and `rati = 10`; thus `joka = 3` so that `joka rati = 30`. 

Examining (4), we wonder what `mepija` means; we can also find it in (10), so it seems apparent that `mepija = 40` and `ije = -1`. 

Examining (5), `idibi = 5` and `rati beo = 50`; we also note that `joka` does *not* mean three (or rather, it does when paired exclusivley with `rati`), and instead from (10), `wido = 3`.

Examining (6), we're not too sure about `mepina`, `daemita`, or `moeto`. From (7), we have that `ena = 1`, so `1 + 50 daemita moeto = 111`. We suspect that `daemito moeto = 60`, so `mepina = 20`. 

Examining (8) and (9), we're a bit confused because `joka rati` means 30—but the difference $149-129=20$. Additionally, in (8), (9), and (10), we see `moeto` alone—without `daemito`. We can fairly safely conclude that `moeto = 60`, then, and `daemito` indicates a single one of these, whereas `moeto [#]` means [#] 60's (i.e. `moeto wija = 60 * 2 = 120`), where `ma` is an arbitrary particle. 

We now arrive at two mysteries:
- what is the `ka [#]` at the end of (8), (9), (10)?
- why does `ije` act differently in (8) versus (4) and (9)?

For great clarity, we can write out what the Ekari phrases mean in terms of numbers:
- 4: `ije 40`
- 8: `60 2 ma ije ka 3`
- 9: `60 2 ma 30 ka`
- 10: `60 5 ma 3(unit) 40 ka 6`

(Note that for us to arrive here requires reasonable belief that what we have derived so far holds true, which might possibly only be obtained after a period of exploring wrong solutions.)

Aha! We construct an exception for `ije`: `ije = -1` when followed by some multiple of 10, and `ije = 9` otherwise. Additionally, the second [#] in this construction appears to be the first [#] incremented by one. 

(Note that this step is rather annoying to arrive at without insight into this problem/similar problems, and it necessitates the knowledge that (1) IOL problems likely all contain a rule with some exception and (2) many languages, in creating rules, apparently create some constructions with succeeding words or suffixes for... no apparent reason? We see the latter point in 2021 I5, also. As a disclaimer, I am no linguist nor do I claim to be one. These are just my observations after solving a number of NACLO/IOL questions to date.)

In conclusion:
| Ekari | Number |
| - | - |
| ije | -1 if succeeded by a multiple of 10<br>9 otherwise |
| ena | 1 |
| wija | 2 |
| wido | 3 |
| wi (from part **(a)**) | 4 |
| idibi | 5 |
| benomi | 6 |
| waroewwo | 8 |
| rati | 10 |
| mepina | 20 |
| joka rati | 30 |
| mepija | 40 |
| rati beo | 50 |
| daemita moeto | 60 |
| moeto [#] ma [phrase] ka [#+1] | 60*[#] + [phrase] |

It's thus simple to answer **(a)**:

> moeto waroewo = 60*8 = :sol[480]{.st} (this is fun because it proves that we don't need the latter half of our construction!)
>
> ijema joka rati = 9+30 = :sol[39]{.st} (note that that `ijema = 9`, showing that `ije` means `9` normally!) 
>
> moeto wido ma benomi ka wi = 60*3 + 6 = :sol[186]{.st} (note that we don't need the suffix `-ma` if it is not succeeded by a multiple of 10, also `wi = 4`)

and **(b)**:
> 1 = :sol[ena]{.st}
>
> 19 = :sol[ije mepina]{.st}
>
> 26 = :sol[benomima mepina]{.st} 
> 
> 104 = :sol[wima mepija daemita moeto]{.st}
>
> 292 = :sol[moeto wi ma wijama rati beo ka idibi]{.st}