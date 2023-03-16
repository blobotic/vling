For part **A**, we have:
- cdnrgt -> (gt -> ar) cdnrar -> (dnr -> ed) :sol[cedar]
- cdnsks -> (nsk -> jeej) cdjeejs -> (cdj -> b) beejs -> (js -> ch) :sol[beech]
- cavrgt -> (gt -> e || avr *) cavre -> (c -> m || * av) mavre -> (vr -> pl) :sol[maple]
- cavsks -> (vsk -> ko) cakos -> (os -> o || ak *) cako -> (ak -> jinkcj || c *) cjinkcjo -> (cj -> g) :sol[ginkgo]

For part **B**, note the hint that every rule is used at least once. Then, crossing out the rules that were used in part **(A)**, our unused rules are:
- nbj -> jirj
- j -> res || avb *
- j -> tu || b *
- vb -> yp
- c -> cal || q * y
- s -> ry || o *
- q -> hi || * ck
- q -> eu || * ca
- ay -> y || * p
- qc -> po

It's fairly obvious that the first two letters of the word added two PARTTWO should be `bj`, so that 
- cdnbj? -> (nbj -> jirj) cdjirj? 
- cavbj? -> (j -> res || avb *) cavbres?

Then, we also have
- ???bj? -> (j -> tu || b *) ???btu?

We use the following rule in
- cavbj? -> (j -> res || avb *) cavbres? -> (vb -> yp) caypres?

For the next rule, `c -> cal || q * y`, we're looking for `qcy` somewhere: none of the previous rules insert `q` and `q` doesn't exist in any of the words, so `q` must exist somewhere in PARTONE. Additionally, no prior rule inserts `c`, so `qc` exists in the word added to PARTONE. `y` is potentially added through `vb -> yp`, so the word added to PARTONE is either `qcy` or `qcv`. In any case, we get
- qc[v|y]bj? -> (j -> tu || b *) qc[v|y]btu? -> (vb -> yp, c -> cal || q * y) qcaly[p|b]tu?

To quickly summarize our five added words before entering `s -> ry || o *`:
- cdnbj? -> (nbj -> jirj) cdjirj? -> (cdj -> b) birj?
- cavbj? -> (j -> res || avb *) cavbres? -> (vb -> yp) caypres?
- qc[v|y]bj? -> (j -> tu || b *) qc[v|y]btu? -> (vb -> yp, c -> cal || q * y) qcaly[p|b]tu?
- qc[v|y]rgt -> (gt -> ar) qc[v|y]rar -> (c -> cal || q * y) qc[v|aly]rar 
- qc[v|y]sks -> (vsk -> ko) qc[ko|ysk]s -> (c -> cal || q * y) qc[ko|alysk]s

Now, we need to find `os` in one of these five words: only qc[ko|alysk]s is possible, with `qckos`; hence the word added to PARTONE is `qcv`. Hence, our five words are now:
- cdnbj? -> (nbj -> jirj) cdjirj? -> (cdj -> b) birj?
- cavbj? -> (j -> res || avb *) cavbres? -> (vb -> yp) caypres?
- qcvbj? -> (j -> tu || b *) qcvbtu? -> (vb -> yp) qcyptu? -> (c -> cal || q * y) qcalyptu?
- qcvrgt -> (gt -> ar) qcvrar 
- qcvsks -> (vsk -> ko) qckos -> (s -> ry || o *) qckory

For the next rule, `q -> hi || * ck`, we have
- qcvsks -> (vsk -> ko) qckos -> (s -> ry || o *) qckory -> (q -> hi || * ck) hickory,

and for the next, we have
- qcvbj? -> (j -> tu || b *) qcvbtu? -> (vb -> yp) qcyptu? -> (c -> cal || q * y) qcalyptu? -> (q -> eu || * ca) eucalyptu?

For `ay -> y || * p`, we have
- cavbj? -> (j -> res || avb *) cavbres? -> (vb -> yp) caypres? -> cypres?

And finally, for `qc -> po`, we have
- qcvrgt -> (gt -> ar) qcvrar -> (qc -> po) povrar

It's obvious that the last letter for the word added in PARTTWO is `s`, so we end up with:
- cdnbjs -> (nbj -> jirj) cdjirjs -> (cdj -> b) birjs -> (js -> ch) :sol[birch]
- cavbjs -> (j -> res || avb *) cavbress -> (vb -> yp) caypress -> :sol[cypress]
- qcvbjs -> (j -> tu || b *) qcvbtus -> (vb -> yp) qcyptus -> (c -> cal || q * y) qcalyptus -> (q -> eu || * ca) :sol[eucalyptus]
- qcvrgt -> (gt -> ar) qcvrar -> (qc -> po) povrar -> (vr -> pl) :sol[poplar]
- qcvsks -> (vsk -> ko) qckos -> (s -> ry || o *) qckory -> (q -> hi || * ck) :sol[hickory],

and we added :sol[qcv] to PARTONE and :sol[bjs] to PARTTWO.

We proceed to **J2**.

Numbering the spelling change rules 1-11 as in the table above, it's obvious that (11) is 
- :sol[11. netherlandsian -> dutch]

Additionally, the letters that have to disappear are:
- chin:s[a]ese
- cypr:s[us]iot
- engl:s[and]ish
- guyan:s[a]ese
- mexic:s[o]an
- morocc:s[o]an

Examining mexico and morocco, we note that these are the only two countries with a `c` near the end, hence rule (7) likely applies only to mexico and morocco. Because two letters have to disappear after c, with `ian` being the only ending, we guess `oi` (from mexic:s[oi]an or morocc:s[oi]an) to let (7) be
- :sol[7. oi -> Ø || c *]

Because no country name ends with `t`, yet we have rule (2), `ian -> Ø || t *`, we suspect that rule (1) adds `t`. The only case in which `t` is added to an ending of a country name to form the language is `cypriot`, so we let rule (1) be
- :sol[1. us -> iot]

Examine the following table:

| Ending - | Ending + | Countries |
| - | - | - |
| ia | | andorra, australia, bolivia, cambodia, cuba, indonesia, kenya, rwanda, uganda |
| i | | chile, fiji, nauru, singapore
| an | | israel, yemen
| ian | ese | bhutan, japan, sudan, vietnam
| aian | ese | china, guyana
| ian | lese | congo, togo
| oi | | mexico, morocco
| usian | iot | cyprus
| andian | ish | england, poland
| netherlandsian | dutch | netherlands
| | | chad |

It appears then that because there is no other space for `ian` to completely disappear for `england` and `poland`, rule (9) must be
- :sol[9. andian -> ish]

For `congo` and `tongo`, we need `ian` to disappear and to add `lese` (note that there's no rule that only adds one letter, so we axe the possibility of one rule adding `ese` and another adding `l`). We need to put a condition on it, and since morocco/mexico (the only other countries ending in `-o`) lose their `o` in (7), we let rule (8) be
- :sol[8. ian -> lese || o *]

For china and guyana, the [n|m] * in rule (10) catches our eye (in combination with it being the only remaining rule that adds three letters), so we let it be
- :sol[10. an -> ese || [n | m] *], (note that this also fixed bhutan, japan, sudan, and vietnam), coupled with rule (3)
- :sol[3. ai -> Ø], because `ai` appears in no other word.

Considering rule (4), we guess that `an` disappears (because we have the condition e_i, which only makes sense in countries where the second to last letter is `e`, i.e. `israel` and `yemen`), so we get
- :sol[4. an -> Ø || [ li | eni ]], which covers both cases (we take `eni` and `li` instead of `eli` and `ni` because there are other countries that end in `n`, while there are no other countries that end in `l`)

Considering rule (6), where `i` disappears, we let `i` disappear if the country ends in `-e`, `-i`, or `-u`. Additionally, we take `an` and `m` to fix bhutan, japan, sudan, and vietnam, so we get
- :sol[6. i -> Ø || [ e | i | u | an | m ] *]

Examining and going down the rules, we have:
- australiaian -> (rule 1) aiottraliaian -> (rule 3) ottralian -> (rule 4) ottrali

It is then fairly evident that rule (5) must be
- :sol[5. ali -> uese] such that ottrali -> (rule 5) ottruese,

and we are done, so our rules in order are now:

:::sol
1. us -> iot
2. ian -> Ø || t *
3. ai -> Ø
4. an -> Ø || [ li | eni ]
5. ali -> uese
6. i -> Ø || [ e | i | u | an | m ] *
7. oi -> Ø || c *
8. ian -> lese || o *
9. andian -> ish
10. an -> ese || [n | m] *
11. netherlandsian -> dutch
:::

**Note.** For a similar (easier!) problem, check [NACLO 2017 problem R](../2017/r).