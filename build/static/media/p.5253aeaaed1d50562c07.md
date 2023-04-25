---
title: Yumology
points: 15
---

*To understand a piece of text, it can be extremely helpful to have some background knowledge about the
items discussed in the text: What properties do the items have, and how are they related to each other? This
problem deals with the important question of how we can represent such information in a way that a
computer can use.*

As part of an initiative to increase their nation’s health, the Yaldish government has decided to list the
mineral potassium (which is abbreviated as K) on their nutrition labels. To ensure proper labeling, the Yaldish
Unified Ministry (YUM) maintains a Food Database of Compositions (FDC), but prior to the recent update in
requirements, they were not tracking potassium. Obtaining this information for each food listed in the
database through lab testing would be time-intensive and costly. The Yaldish have thus hired NacLabs to
develop a method to supplement the YUM FDC with the English-Language (EL) FDC, which has more
complete nutritional information.

The main challenge that NacLabs faces is that the food descriptions in the YUM FDC are written in Yaldish.
Even though they are also translated into English, the descriptions are not exactly the same as the
descriptions of similar foods in the EL FDC (which are described only in English). The following demonstrates
these kinds of differences:

**Closest matches in YUM FDC, English translations (left) and EL FDC (right):**

| English translations | EL FDC |
| - | - |
| Chuck roast, uncooked, minced | Beef, ground, 20% fat, raw |
| Puréed vine tomatoes, pasteurized and packaged | Tomato sauce, canned |

Furthermore, not all foods in the YUM FDC are listed in the EL FDC.

Taking these limitations into account, NacLabs has developed an algorithm that automatically fills in
potassium for YUM foods. On the next two pages are the YUM FDC (containing the automatically-estimated
K values), the EL FDC, and a set of food classification charts. Within each FDC, foods are classified based on
four facets plus a fifth “extra facet.” The food classification charts illustrate relationships between some of
the facets. If you are unfamiliar with any of the food terms in the EL FDC, see the glossary on Page 4 of this
problem.

**P1.** Two foods in the EL FDC are missing part of their description (**(a)** and **(b)**). On your Answer Sheet, fill in
the missing information. Word order does not matter as long as the desired meaning is clear.

**P2.** Three foods in the YUM FDC are missing their “Estimated K mg/100g” values (**(c)**, **(d)**, and **(e)**). On your
Answer Sheet, fill in the missing values. Note that the “extra facet” is not involved in determining these
values.

***EL FDC***

| EL ID | Description | K mg/100 grams | Facets | Extra facet |
| - | - | - | - | - |
| E01 | Apple, raw, with skin | 107 | B1245; C0121; E0151; F0003 | A2003 |
| E02 | Pineapple rings, homemade, oven-dried from fresh, unsweetened | 778 | B1484; C0126; E0133; F0013 | A2001 |
| E03 | Applesauce, canned baby food, unsweetened, no ascorbic acid | 74 | B1245; C0126; E0215; F0013 | A2003 |
| E04 | Beet greens, raw | 762 | B1423; C0240; E0151; F0003 | A2003 |
| E05 | Bacon | 565 | B1136; C4545; E0133; F0001 | A2003 |
| E06 | Bacon, raw | 201 | B1136; C4545; E0133; F0003 | A2003 |
| E07 | Bacon, meatless, pan-fried or broiled | 170 | B1452; C0120; E0133; F0013 | A2003 |
| E08 | Raisins, golden | 746 | B1275; C0121; E0151; F0001 | A2001 |
| E09 | Coconut water, from a coconut | 250 | B1530; C0339; E0114; F0003 | A2003 |
| E10 | Beetroot powder, red or golden | 2400 | B1423; C0140; E1152; F0001 | A2001 |
| E11 | Pumpkin, canned purée | 209 | B1534; C0126; E0215; F0013 | A2003 |
| E12 | Potato ___(a)___ :ans | 274 | B3544; C0140; E0310; F0013 | A2003 |
| E13 | Pumpkin ___(b)___ :ans | 919 | B1534; C0120; E0151; F0013 | A2002 | 

***YUM FDC***

| YUM ID | Estimated K mg/100g | Facets | Extra facet |
| - | - | - | - |
| Y1 | 201 | B1136; C4545; E0133; F0003  |A2003 |
| Y2 | 250 | B1530; C0339; E0115; F0003  |A2003 |
| Y3 | 250 | B1484; C0339; E0114; F0013  |A2003 |
| Y4 | 107 | B1245; C0126; E0133; F0003  |A2001 |
| Y5 | 189.5 | B1430; C0120; E0215; F0013  |A2002 |
| Y6 | 170 | B1430; C0120; E0310; F0013  |A2002 |
| Y7 | **(c)** :ans | B1423; C0140; E1152; F0001  |A2001 |
| Y8 | **(d)** :ans | B1245; C0121; E0151; F0013  |A2003 |
| Y9 | **(e)** :ans | B2530; C0126; E0215; F0013  |A2003 |

***Food Classification Charts***

![Food Classification Charts](../../pimg/naclo2022p-1.png)

**P3.** Briefly describe how the “Estimated K mg/100g” values are determined in the YUM FDC. For this
question, you do not need to describe what any specific facets mean. As noted above, your answer to this
question should not involve the “extra facets.”

> :expl

**P4.** Each facet starts with a letter (B, C, E, F, or A). The facets that start with F describe whether the food is
cooked. What type of information does each other letter correspond to?

> :expl

**P5.** For each of the following facets, briefly describe what that facet means:
> (a) B1245 :ans (b) B1530 :ans (c) C0240 :ans 
>
> (d) E0310 :ans (e) F0013 :ans (f) F0001 :ans

**P6.** Name a food ingredient that might have the facet B1438.
> :ans{.large}

**P7.** For each of the following YUM IDs from the YUM FDC, give a food description that could be associated
with that ID (in the style of the descriptions in the EL FDC). There are many possible answers. For full credit,
make sure that your answers cover all of the facets listed with each YUM ID:
> (a) Y4 :ans{.large} (b) Y5 :ans{.large} (c) Y6 :ans{.large} (d) Y9 :ans{.large}

**P8.** Even though they were not previously using it, NacLabs has decided to now include the “extra facet” in
determining the “Estimated K mg/100g” values in the YUM FDC. Will this decision make the estimated values
more accurate or less accurate? Explain your answer.

> :expl 

*Glossary of food terms:* 

**Apples** are a fruit grown on a tree, available in red, green, and yellow varieties.
<br>**Applesauce** is a dish made of apples (with their seeds and skin removed) blended until smooth.
<br>**Ascorbic acid** is a chemical used to help preserve foods. 
<br>**Bacon** is a sliced breakfast food, typically made of pork but also available in meatless varieties made out of
protein extracted from beans, nuts, grains, etc.
<br>**Beet greens** are the leaves of a beet plant.
<br>**Beetroot** is the root of a beet plant.
<br>**Broiling** is a method of cooking in which the heat source comes from above.
<br>**Canning** is a food preservation process that involves raising the food to a high temperature and then sealing
it in a metal can.
<br>**Chuck roast** is a type of beef.
<br>**Coconut** water is a clear liquid found inside coconuts.
<br>**Mincing** refers to chopping food into very small pieces.
<br>**Pasteurization** is a process of heating food before packaging it in order to increase its shelf life.
<br>**Pan-frying** is a method of cooking vegetables and other foods in a pan.
<br>**Pineapples** are a fruit grown in a shrub.
<br>**Potatoes** are a root vegetable. They are often served either baked (in which case the whole potato is baked
in an oven or microwave) or mashed (in which case the potato is cooked and then pounded with a utensil
until it is mostly smooth).
<br>**Pumpkins** are a type of large orange vegetable that grows on a vine.
<br>**Puréeing** is the process of blending a fruit or vegetable, often with its seeds and skin removed, into a smooth
liquid.
<br>**Raisins** are dried grapes. They can be dried via heating or by being left out in the air.