---
title: Sequitur 
points: 5 
tags: 
- comp
---

Space is valuable, so it’s often desirable to compress data — that is, to use less space to convey the same
information. One common data compression strategy is to identify repeated patterns within the data and
somehow consolidate these repetitions.[^1]
First, let’s look at Sequitur, a fast compression algorithm that uses
the repeated pattern strategy. The table below shows Sequitur running on the input “abcdbcabcd”, with its
output at the very bottom:

[^1]: It just so happens that identifying repeated patterns in a human language can tell us a lot about how that language works. If you want to know more
about how linguists (and especially computational linguists) use compression in language technologies, try problem [(I), Non Sequitur](./i), also from NACLO
2021, Round 1. Be aware, however, that solving problem (I) will not give you any advantage in solving this problem.

| Step Number | Column 1 | Column 2|
|-|-|-|
| 1) | a | S = a |
| 2) | ab | S = ab |
| 3) | abc | S = abc |
| 4) | **(a)** :ans | S = abcd |
| 5) | abcdb | **(b)** :ans |
| 6) | abcdbc<br>aXdX | S = abcdbc<br>S = aXdX<br>X = bc |
| 7) | **(c)** :ans | **(d)** :ans<br>**(e)** :ans |
| 8) | aXdXab | **(f)** :ans<br>X = bc |
| 9) | aXdXabc<br>aXdXaX<br>**(h)** :ans | S = aXdXabc<br>X = bc<br>S = aXdXaX<br>**(g)** :ans<br>**(i)** :ans<br>X = bc<br>Y = aX |
| 10) | **(j)** :ans<br>ZXZ | **(k)** :ans<br>X = bc<br>Y = aX<br>S = ZXZ<br>X = bc<br>Y = aX<br>Z = Yd |
| S = ZXZ; X = bc; Y = aX; Z = Yd

**H1.** Fill in the blanks (marked with bolded letters) in the table on the previous page.

Next, take a look at Byte Pair Encoding (BPE), a widely used compression algorithm that also uses the repeated pattern strategy. Like in the previous example, BPE is running with an input of “abcdbcabcd”, and its output is shown at the bottom of the table:

|Step Number| Column 1| Column 2 |
|-|-|-|
| 1) | abcdbcabcd | S = abcdbcabcd |
| 2) | **(a)** :ans<br>**(b)** :ans<br>X = bc |
| 3) | YdXYd | S = YdXYd<br>X = bc<br>**(c)** :ans |
| 4) | ZXZ | S = ZXZ<br>X = bc<br>Y = aX<br>Z = Yd<br>S = ZXZ; X = bc; Y = aX; Z = Yd |

**H2.** Fill in the blanks (marked with bolded letters) in the table above.

As you can see, for the input “abcdbcabcd”, Sequitur and BPE produce the same output! But this isn’t always
the case.

**H3.** For each of the following inputs, say whether Sequitur and BPE give the same or different outputs. Circle
the correct response:

:::table{.border-hidden .width-800}
::tr[:td[a) abcabdbcbc] :td[Same] :td[Different] :td[:ans]]
::tr[:td[b) abbcaddca] :td[Same] :td[Different] :td[:ans]]
::tr[:td[c) bacbcbabacbcba] :td[Same] :td[Different] :td[:ans]]
::tr[:td[d) ccdbccdbccacc] :td[Same] :td[Different] :td[:ans]]
::tr[:td[e) ccdbccdbccaccacca] :td[Same] :td[Different] :td[:ans]]
:::
