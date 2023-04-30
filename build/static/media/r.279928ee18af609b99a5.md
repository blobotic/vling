---
title: Text-o-matic
points: 10
tags: 
- french
- comp
---

One day, while looking through a storage closet in the linguistics building at her university, Ada discovers a
dusty machine labelled the Text-o-matic 1000. She switches it on, and sees the following on the screen:

<div style="border-style: solid; border-width: 2px; border-color: #747474; text-align: center; width: 50%; margin: auto; margin-bottom: 2.5rem;">&lt; → &lt;CAN</div>


Intrigued, she types in her name, and presses enter. The machine whirrs and prints a small slip of paper that
reads:

<div style="border-style: solid; border-width: 2px; border-color: #747474; text-align: center; width: 50%; margin: auto; margin-bottom: 2.5rem;">ADA // CANADA</div>

She fiddles with the machine and gets the screen to read:

<div style="border-style: solid; border-width: 2px; border-color: #747474; text-align: center; width: 50%; margin: auto; margin-bottom: 2.5rem;">D → LBERT</div>

Again, she types in her name and presses enter, and this time the machine prints:

<div style="border-style: solid; border-width: 2px; border-color: #747474; text-align: center; width: 50%; margin: auto; margin-bottom: 2.5rem;">ADA // ALBERTA</div>

Finally, she notices a note taped to the top of the machine, which reads:

<div style="border-style: solid; border-width: 2px; border-color: #747474;width: 80%; margin: auto; margin-bottom: 2.5rem;">
<div style="margin-left: 1rem; margin-top: 1rem;">Important!</div>

1. Text-o-matic 1000 applies rules in descending order.
2. If Text-o-matic 1000 cannot apply a rule, it skips to the next one.
3. Before applying the first rule, the Text-o-matic 1000 adds < at the beginning and > at the end of the input word, and it removes them right before
printing. If any rule deletes these symbols, the machine will crash!
</div>


Ada decides to use the Text-o-matic 1000 to convert the first twenty cardinal French numbers into their ordinal equivalents. In other words, she wants to find a set of rules so that when any of the first twenty numbers
is entered (in written form), the machine prints the corresponding output shown below.

<div style="border-style: solid; border-width: 2px; border-color: #747474;width: 80%; margin: auto; margin-bottom: 2.5rem; overflow: hidden; padding: 1rem;">
<div class="six columns">
UN // PREMIER
<br>DEUX // DEUXIÈME 
<br>TROIS // TROISIÈME 
<br>QUATRE // QUATRIÈME 
<br>CINQ // CINQUIÈME 
<br>SIX // SIXIÈME 
<br>SEPT // SEPTIÈME 
<br>HUIT // HUITIÈME 
<br>NEUF // NEUVIÈME 
<br>DIX // DIXIÈME 
</div> 

<div class="six columns">
ONZE // ONZIÈME
<br>DOUZE // DOUZIÈME
<br>TREIZE // TREIZIÈME
<br>QUATORZE // QUATORZIÈME
<br>QUINZE // QUINZIÈME
<br>SEIZE // SEIZIÈME
<br>DIX-SEPT // DIX-SEPTIÈME
<br>DIX-HUIT // DIX-HUITIÈME
<br>DIX-NEUF // DIX-NEUVIÈME
<br>VINGT // VINGTIÈME
</div>
</div>

Answer these questions in the Answer Sheets.

**R1.** Fill in the blanks (one character per blank) to create a set of rules that accomplish Ada’s task. Be sure to
also fill out the Answer Sheets.

a. __ __ → __ 
<br>b. __ __ → __ __ __
<br>c. __ → __
<br>d. __ → __ __ __ __ __
<br>e. __ __ __ __ __ __ → __ __ __ __ __ __ __

**R2.** Ada tries to use the new set of rules to do the same task for all cardinal numbers below 100, but finds
the following two errors:

<div style="border-style: solid; border-width: 2px; border-color: #747474; text-align: center; width: 50%; margin: auto; margin-bottom: 2.5rem;">VINGT-ET-UN // VINGT-ET-PREMIER<br>QUATRE-VINGTS // QUATRE-VINGTSIÈME</div>

Describe how you could modify the rules above so the outputs are:

<div style="border-style: solid; border-width: 2px; border-color: #747474; text-align: center; width: 50%; margin: auto; margin-bottom: 2.5rem;">VINGT-ET-UN // VINGT-ET-UN<br>QUATRE-VINGTS // QUATRE-VINGTIÈME</div>


Try to make as few and as minor modifications as you can to fix the problem, while still printing the correct
outputs for the first twenty cardinal numbers.

**R3.** You have been hired to program the Text-o-matic 2000, which will be able to work in both directions,
either producing ordinal numbers from cardinal numbers or cardinal numbers from ordinal numbers.

However, it still only contains one set of rules. It produces cardinal numbers from ordinal numbers by
“reversing” these rules, undoing each rule (that is, replacing the letters *after* the arrow with the letters *before*
the arrow) going from the bottom rule to the top rule.

The rules you found above, however, won’t work in the new Text-o-matic 2000. For example, instead of producing `SIX` from `SIXIÈME`, they produce `SIXE`!

Find a set of rules that works in both directions, producing the ordinal numbers from the cardinal numbers
when run in the normal direction, and producing the cardinal numbers from the ordinal numbers when
“undone” in the reverse direction. Remember to handle the special cases for `VINGT-ET-UN` and `QUATREVINGTS`!