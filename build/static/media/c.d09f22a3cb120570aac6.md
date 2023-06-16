---
title: To Make a Long Story Short 
points: 15 
tags:
- automatic summarization
- comp
---

Every day, the Internet brings a flood of new information: scientific articles, blog posts, Tweets, news stories,
Wikipedia pages, and more. One way we can take advantage of this information without being overwhelmed
is through **automatic summarization**, where a computer condenses a long document into a summary that is
much shorter. With this summary, you can get the main points of the document without reading the whole
thing. You can also read the summaries of many documents to help decide which of the documents are
worth reading in their entirety.

Below is a news article that we wish to summarize (written out as a list of numbered sentences):

> | The Final Word on Language | The NACLO News |  Are Wickelphones making a comeback? Story on G2. |
> | - | - | - |
>
> :p[**A STICKY SITUATION**]{.center}
><br>
>
>**SS1:** On January 22, Ronald McBubble, president of the Bigger Bubble corporation, was found chewing a
stick of gum from rival company Made to Stick.
>
>**SS2:** The incident set off an uproar among Bigger Bubble faithfuls, with over 10,000 gum enthusiasts in
just one week signing a petition for McBubble to step down.
>
>**SS3:** According to *USA Today*, the nine-year-long "great gum war" may soon be over, as Bigger Bubble's stock price has fallen 50 percent since that fateful day.
>
> **SS4:** McBubble maintains that the gum was "planted" on him and that the whole incident was "100 percent a set-up."
> 
> **SS5:** Why did he continue chewing after reading the label?
> 
> **SS6:** "Because the gum was too sticky to remove."
> 
> **SS7:** One must hope that McBubble has since managed to render the gum less adhesive, although the
fiasco does make for some . . . *sticky* headlines.


How would a computer summarize this story? One approach is to have the computer select a few sentences
from the document to serve as the summary. In order to choose which sentences to use, the computer first
assigns values to **features** of every sentence. In this context, features are things that you can observe or
count that help determine whether the sentence will be useful in a summary.

**C1.** At the top of the next page, on the left, are definitions of the features that we will use. Further down is a
table showing the feature values that would be assigned to each sentence. Unfortunately, some words are
missing from the feature definitions! In addition, in the table, the sentences are in scrambled order, and
some of the sentence numbers are missing.

1. Fill in the blanks a. through g. by choosing words or numbers from the word bank at the top of the
next page, on the right. You will not use all of the entries in the word bank; you might use some entries
more than once.
2. Determine which sentences correspond to h. through k. You should answer using the sentence
numbers that start with SS.

> **F1:** Assign 1 point if the sentence contains at least
one **a.** :ans; otherwise, assign 0 points.
>
> **F2:** Assign 1 point for every proper noun in the
sentence.
>
> **F3:** Take the number of words in the sentence
minus **b.** :ans. If this value is negative, give the
sentence that many points. Otherwise, give the
sentence 0 points.
>
> **F4:** Assign 1 point for every **c.** :ans in the
sentence.
>
> **F5:** Assign 1 point for every **d.** :ans or **e.** :ans
that is repeated in at least one other sentence in
the story.
>
> **F6:** Assign 1 point if this sentence is the **f.** :ans
or **g.** :ans one in the story; otherwise, assign 0
points.

**Word bank:** `italicized word`, `capitalized word`, `underlined word`, `hyphenated word`, `common noun`, `past-tense verb`, `adjective`, `verb`, `number`, `plural noun`, `abbreviation`, `word that appears in the title`, `noun referring to candy or gum`, `colon`, `comma`, `period`, `first`, `second`, `third`, `last`, `second-to-last`, `third-to-last`, numbers between 1-20

**Notes:** A proper noun is a word or phrase, usually capitalized, that describes a specific entity such as a
person, place, or organization. Examples of proper nouns are Brazil and Alice. A common noun is a noun that
is not a proper noun. For some terms in the feature definitions, there might be multiple ways to count (e.g.,
multiple ways to count proper nouns for F2). It is up to you to figure out exactly how the computer is counting
each category.


| Sentence | F1 | F2 | F3 | F4 | F5 | F6 | Sum of Scores |
| - | - | - | - | - | - | - | - |
| h. | 0 | 1 | 0 | 1 | 2 | 0 | 4 |
| SS1 | 0 | 4 | 0 | 1 | 1 | 1 | 7 |
| i. | 0 | 0 | -1 | 0 | 0 | 0 | -1 |
| SS3 | 1 | 2 | 0 | 2 | 1 | 0 | 6 |
| j. | 1 | 1 | 0 | 0 | 2 | 1 | 5 |
| k. | 0 | 0 | -2 | 0 | 2 | 0 | 0 |
| SS2 | 0 | 2 | 0 | 2 | 2 | 0 | 6 |

The overall score for a sentence is determined by adding together all of its feature values. The sentences
with the highest scores are the ones chosen to serve as the summary (in this problem, we will be using the 3
highest-scoring sentences). For this particular article, since sentences SS1, SS2, and SS3 have the highest
summed scores (7, 6, and 6), they would comprise the summary. In the summary, the sentences are
presented in the same order as they appear in the original story - in this case, SS1 followed by SS2 followed
by SS3.

C2. Below are two more news articles and their accompanying feature scores. (The features, F1 through F6,
are the same as those used for the previous story.) Unfortunately, due to some serious data corruption, the
rows in the tables have been scrambled, and various feature scores have been erased! Your job is to fill in all
the blanks

> | The Final Word on Language | The NACLO News | REPORT: The elephant is sleeping. More on E1 |
> | - | - | - |
>
> :p[**IN HOT WATER**]{.center}
> <br>
>
> **HW1:** Specialty soup restaurant Hot Water Village came under scrutiny last week, after an exposé was
published in *The Wall Street Journal*.
>
> **HW2:** No fewer than three sources (including *WikiLeaks*) accused the restaurant of re-serving
unfinished soup, salvaged from the bowls of previous customers.
>
> **HW3:** One witness further claimed, "the bowls are never washed."
>
> **HW4:** "They're just refilled where the last customers left off, one bowl after another."
>
> **HW5:** Hot Water Village firmly denies any such wrongdoing, with one spokesperson noting that
"these blatantly false accusations degrade our bowls, restaurant, and very soup" and "cause the
hot water to flow from my eyes."
>
> **HW6:** If the accusations are to be believed, Hot Water Village, it seems, has succeeded in
implementing not only a farm-to-table but also a *table-to-kitchen* approach.

| Sentence | F1 | F2 | F3 | F4 | F5 | F6 | Sum of Scores |
| - | - | - | - | - | - | - | - |
| **a.** :ans | 0 | 1 | **b.** :ans | 1 | 4 |0 |6|
| HW4 | **c.** :ans|  0 | 0  |1 | 2 |**d.** :ans| **e.** :ans|
| **f.** :ans | 0 | 0 | **g.** :ans | **h.** :ans|  1 |0 |1|
| HW6 | 1 | **i.** :ans|  0  |0 | 1| 1 |**j.** :ans|
| **k.** :ans | 1 | 2 | 0  |0 | 3 |**l.** :ans| **m.** :ans|
| **n.** :ans | 1 | 1 | 0  |**o.** :ans|  4 |0| **p.** :ans|

> | The Final Word on Language | The NACLO News | Feature: The latest in self reference. Turn to C4. |
> | - | - | - |
> 
> :p[THE STICKY SAGA CONTINUES]{.center}
> <br>
>
> **SSC1:** After suffering a PR disaster and a sorbitol shortage, Ronald McBubble faces tough times ahead.
>
> **SSC2:** "We really gummed up the works," he notes miserably.
>
> **SSC3:** Meanwhile, his rival, Chicle "Colonel" Sanders, is experiencing problems of his own, including a
disappointing quarterly report.
>
> **SSC4:** Perhaps most seriously, he is being investigated by the government’s Bubble Safety Bureau on two
counts of alleged wrapper forgery.
>
> **SSC5:** One thing is for certain: it’s a difficult time to be in the bubblegum business.

| Sentence | F1 | F2 | F3 | F4 | F5 | F6 | Sum of Scores |
| - | - | - | - | - | - | - | - |
| q. | 0 | 0 | 0 | 1 | 0 | 1 | 2 |
| r. | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| s. | 0 | 0 | -1 | 0 | 0 | 0 | -1 |
| t. | 0 | 1 | 0 | 0 | 0 | 1 | 2 |
| u. | 0 | 1 | 0 | 1 | 0 | 0 | 2 |

**C3.** Which three sentences make up the summary for “In Hot Water”? You should answer using the sentence
numbers that start with HW.

**C4.** Which three sentences make up the summary for “The Sticky Saga Continues”? You should answer using
the sentence numbers that start with SSC.

The approach illustrated above (selecting a few sentences from the document to serve as the summary) is
called **extractive summarization**. An alternative approach is called **abstractive summarization**. Instead of
selecting sentences from the story, an abstractive summarization system generates its own summary,
without being restricted to the sentences in the original story. This approach is closer to how humans
summarize, but it is also more challenging because abstractive summarization systems can often introduce
factual errors. Below is a one-sentence abstractive summary for the story “A Sticky Situation.”

**Abstractive summary:** Made to Stick corporation is facing serious problems after its vice president was found
chewing a stick of gum from rival company Bigger Bubble on February 22.

**C5.** This summary contains several types of errors that are common in standard abstractive summary
systems. Specifically:

1. The abstractive summary includes one word that should be deleted. Which word?
2. In the abstractive summary, there are two phrases that should be swapped (each of these phrases is
two or three words long). What are these phrases?
3. In the abstractive summary, there is a single word that should be replaced with a different word. What
word should be replaced, and what word should be its replacement?

**C6.** As it turns out, even extractive summary systems can sometimes create factual errors! Consider the
extractive summaries that were generated for “A Sticky Situation,” “In Hot Water” and “The Sticky Saga
Continues.” (For “A Sticky Situation,” we told you what the summary was: SS1, SS2, and SS3. For the other
stories, the summaries are the ones that you specified in your answers to C3 and C4.) In one of those three
summaries, there is a single word that has an incorrect meaning in the summary.

1. Which sentence does this word appear in (you should answer using the sentence numbers that start
with SS, HW or SSC)?
2. Which word is it?
