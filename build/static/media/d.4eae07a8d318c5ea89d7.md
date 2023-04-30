---
title: Pay Attention
points: 10
tags:
- attention heads
- comp 
---

The meaning of a word depends on its context. For example, in the sentence “The farmer *seeded* the field
with corn,” the word *seeded* means “added seeds to.” However, in the sentence “The chef *seeded* the
tomato,” the word *seeded* means “took seeds away from.”

If you were building a model of language, how would you get it to to recognize the way that a word’s
meaning depends on context? One popular technique for achieving this goal is a mechanism called **attention**.
In the way that attention is implemented in current state-of-the-art models of language, the model has a
large number of **attention heads**, each of which is denoted by a pair of numbers (for examples, 8-10). When
the model processes a sentence, for every pair of words in the sentence, each head calculates the
“relatedness” of the two words.

The one wrinkle is that we do not know what exactly “relatedness” should mean, so instead of telling the
model how to define “relatedness,” we let the model learn its own definition of relatedness. Recently,
computer scientists have started to analyze what these attention heads have learned, and this analysis shows
that they often reflect linguistic information! For example, here’s the output of one attention head
(head 8-10) when we feed the following sentence into BERT, which is one of the most popular models that
uses attention heads:

:::div{.lmargin2}
**Example:** I:sub[1] see:sub[2] my:sub[3] sister:sub[4], but:sub[5] she:sub[6] can't:sub[7] see:sub[8] me:sub[9] because:sub[10] she:sub[11] is:sub[12] reading:sub[13] a:sub[14] linguistics:sub[15] book:sub[16].
<br>**Output:** 4 → 2, 9 → 8, 16 → 13
:::

This output signifies that head 8-10 connects word #4 (*sister*) to word #2 (*see*), as well as word #9 (*me*) to
word #8 (*see*) and word #16 (*book*) to word #13 (*reading*). If you consider what all of those pairs of words
have in common, you’ll see that each one is a verb and its direct object: sister is the direct object of the first
instance of see, me is the direct object of the second instance of see, and book is the direct object of reading.
It appears that head 8-10 has learn to connect verbs to their objects! (Note that these activations are
directional; for example, word #2 is not connected to word #4.)

Why is this information useful? If we go back to the example with the verb seed, this sort of information can
help the model figure out which version of seed is being used: If its direct object is something like field or
lawn, then it probably means “to add seeds to;” if its direct object is something like tomato or watermelon,
then it probably means “to take seeds away from.” Of course, one sentence isn’t enough to draw strong conclusions. Instead, computer scientists tend to use a corpus, or a database, of example sentences to find
patterns in the data. On the next page is a small corpus, the NacloWeb Corpus[^1], which has 7 sentences.
[^1]: Some sentences derived from data in the English Web Treebank.

:u[**NacloWeb Corpus**]
1. My:sub[1] experience:sub[2] with:sub[3] Gelda:sub[4] 's:sub[5] House:sub[6] of:sub[7] Gelbelgarg:sub[8] has:sub[9] been:sub[10] extremely:sub[11] wonderful:sub[12]
2. We:sub[1] use:sub[2] Google:sub[3] ‘s:sub[4] models:sub[5] to:sub[6] delve:sub[7] into:sub[8] the:sub[9] inner:sub[10] workings:sub[11] of:sub[12] language:sub[13]
3. At:sub[1] this:sub[2] corporation:sub[3] 's:sub[4] meeting:sub[5] people:sub[6] are:sub[7] concerned:sub[8] about:sub[9] the:sub[10] company:sub[11] 's:sub[12] plans:sub[13]
4. In:sub[1] July:sub[2] we:sub[3] will:sub[4] interview:sub[5] the:sub[6] candidate:sub[7] and:sub[8] review:sub[9] her:sub[10] resumé11 again:sub[12]
5. The:sub[1] platypus:sub[2] is:sub[3] a:sub[4] strange:sub[5] animal,6 with:sub[7] its:sub[8] eggs:sub[9] and:sub[10] its:sub[11] webbed:sub[12] feet:sub[13]
6. I:sub[1] think:sub[2] that:sub[3] although:sub[4] my:sub[5] NACLO:sub[6] exam:sub[7] was:sub[8] difficult,9 it:sub[10] was:sub[11] a:sub[12] lot:sub[13] of:sub[14] fun:sub[15]
7. Linguistics:sub[1] is:sub[2] a:sub[3] beautiful:sub[4] science:sub[5] that:sub[6] provides:sub[7] interdisciplinary:sub[8] insight:sub[9] into:sub[10] the:sub[11] human:sub[12]
experience:sub[13]

Note that the NacloWeb corpus treats the possessive clitic ’s as a separate word. (So in Sentence #1, word #5
is ’s and word #6 is House.)

In our experiment on the NacloWeb Corpus, we ran each of the corpus’ sentences through BERT and
recorded the outputs of four attention heads (8-11, 7-6, 9-6, and 5-4). Unfortunately, due to some extremely
sloppy experimental procedure, we don’t remember which order we ran them through the model; in
addition, we forgot to record some data. Your job is to fill in the blanks! Note that some blanks may have
more than one connection, and some may have none at all.

| Sentence | 8-11 | 7-6 | 9-6 | 5-4 |
|-|-|-|-|-|
| Sentence A|  12 → 13 | 5 → 6 | 14 → 13 | 10 → 6
| Sentence B|  **(a)** :ans| 8 → 9, |11 → 12| None |8 → 2, 11 → 2
| Sentence C|  2 → 3, 10 → 11 |4 → 5, 12 → 13| **(b)** :ans| 11 → 3
| Sentence D|  **(c)** :ans| 4 → 5| 12 → 13| None
| Sentence E|  3 → 4, 11 → 12  |**(d)** :ans | 10 → 12 | 5 → 1
| Sentence F|  **(e)** :ans | 1 → 2, 5 → 6 |7 → 8 |None
| Sentence G|  **(f)** :ans | **(g)** :ans |**(h)** :ans| **(i)** :ans


**D1.** Identify sentences A-G. Write one number from 1 to 7 per box.

:match{num=7, alpha=true}

**D2.** Fill in the missing data, labelled **(a)** to **(i)**, in the table above.


