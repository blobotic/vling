We begin with **R1**.

It's fairly obvious that we need to add `ième` to the end of almost all of our words (all except un // premier), so we let (d) be
- :sol[d. > → ième], since it's the only rule with four/five spaces

We also need to write an exception for premier; only rule (e) has enough letters, and note that we need ième because (e) is after (d):
- :sol[e. unième → premier]

Then, a couple of special cases (which rule they go with is fairly evident from the number of letters):
- :sol[a. E> → >], for quatre, onze, douze, treize, quatorze, quinze, and seize
- :sol[b. Q> → QU>], for cinq (note that we need the > because of quatorze and quinze)
- :sol[c. F → V], for neuf // neuve

In summary:

:::sol
a. E> → >
<br>b. Q> → QU>
<br>c. F → V
<br>d. > → ième
<br>e. unième → premier
:::

**R2** is also relatively simple. To fix vingt-et-un, we simply fix (e) to be
- :sol[e. <unième → <premier],

and we add to the end,
- :sol[f. ts → t]

For **R3**, we note that our main "problems" are stray letters floating around when we reverse the direction (e.g. wrongly "undoing" the v in vingt and t in vingt), as well as reversing rule (a). 

Hence, we fix (a) by writing two new rules, RE> → R> as well as ZE> → Z> (our only two cases). We fix (c) by adding >, so that we have F> → V> (since we only care about this rule for neuf // neuvième and dix-neuf // dix-neuvième and don't want it valid anywhere else). We fix (f) by making our special case more specific, i.e. -vingts → -vingt. Our solution is then:

:::sol{.center .st}
RE> → R>
<br>ZE> → Z>
<br>Q> → QU>
<br>F> → V>
<br>-VINGTS → VINGT
<br>&gt; → IÈME
<br>&lt;UNIÈME → &lt;PREMIER
:::

**Note.** Check [NACLO 2014 problem J](../2014/j) for a similar, harder problem.