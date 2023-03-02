Before we begin, a few key notes that we should pay attention to (that I didn't when I was first solving, haha):
- we see the family trees of **two families**
- the siblings are arranged from **youngest to oldest**
- "relationship"/family tree nouns encode at least one of the following (and usually the first and zero or one of the latter two):
	- relative position (ex. direct & same generation [siblings], etc) (can be ordered, can be unordered, i.e. could grandchild and grandparent be the same?)
	- gender/relation of subject
	- gender/relation of object 

We proceed without further delay.

A quick scan shows that **N** and **Q** are the two people missing from our list.

Following a couple of links, we find that **(A-G)** are connected and **(H-X)** are connected; hence the former is the rightmost family and the latter is the leftmost family. For the sake of simplicity, we examine **(A-G)** first. 

Let us denote person **X** saying "**Y** anthunha **Z**" as `Z: X > Y`, or just `X > Y` for brevity.

We first examine **wardu** (because it is first in our list \:P). In **(A-G)**, we have `A > D`, `G > C`, and `G > E`. In other words, some relationship exists exactly thrice such that one person contains two of these relationships. We hence conclude:
- A must be either 18 or 19
- :sol[D = 20]{.st}
- :sol[G = 21]{.st} (hence whatever relationship exists for `D > G` and `G > D` must imply marriage and potentially gender)
- C and E are each one of 22 and 23

We examine `nhupa: D > G`. We can also find `nhupa: F > A`. It appears that **wardu** means the object is the `child` of the subject and *could* mean either that the object is a man or that the subject is a woman. **nhupa** means `marriage` and could mean that the object is a woman/the subject is a man *or* not indicate gender. Thus, F and A must each be one of 18 or 19, and :sol[B = 24]{.st}

We then go back to `A > D` and examine `lhuka: D > A`, `lhuka: C > G`, `lhuka: B > G`, `lhuka: E > G`. We guess that **lhuka** means that the object is the mother and that the subject is a child (gender does not matter). 

From **kupaka**, we get `C > B`, `C > E`, and `E > B`, and from **nhuthi**, we get `B > C`, `B > E`, `E > C`, so we guess that **kupaka** means that the object is an older sibling to the subject and that **nhuthi** means that the object is a younger sibling to the subject. Note that we immediately consider sibling relationshiops because these two words ONLY exist amongst the set {C, E, B}, and we can immediately rule out any gender-based rules. Recall that the family tree is ordered youngest to oldest; thus :sol[C = 22]{.st} and :sol[E = 23]{.st}. 

From **apityi**, we get `C > D` and `B > D`, so we guess that it means that the object is the father and that the subject is a child. From **piyaka**, we get `D > B`, hence it implies that **piyaka** means either that the object is a daughter *or* that the subject is a father. Note that it's tempting to assume that wardu/piyaka mean son/dauughter respectively, but until a relationship contradicts one of the rules, we cannot safelty assume so. We also rule out the option that gender does not matter because we see both nouns used in a parent/child relationship. If impatient, we *can* semi-reliably guess that they will indicate the gender of the parent based on apityi/lhuka. (Spoiler: this is true!)

We now examine **(H-X)** and begin with H. We have `piyaka: H > N`, `apityi: J > H`, `wardu: O > H`, `nhupa: P > H`, and `thanti: R > H`. Hence N is a child of H, H is J's father (hence J is a child of H and H is a man), O is a parent of H, and P is married to H (his wife, in fact, because we know that H is a man). The only line with multiple children is if we let :sol[H = 7]{.st}, :sol[P = 8]{.st}, N and J be amongst 9, 11, 12, 13, and 15, and O is either 3 or 4. 

We have `nhupa: O > W`, so {O, W} = {3, 4}. From `lhuka: P > V`, we get that :sol[V = 6]{.st}. From `wardu: V > P`, we get that **wardu** does NOT indicate the gender of the child (i.e. son/daughter), but it means mother, and hence ***piyaka** indicates that the subject is the father. 

Using these definitions, we can fill out most of the rest of the table, except for {R, Q} = {2, 16}. We have no relation involving Q and only one phrase involving R, i.e. `thanti: R > H`. Examinig the phrases with **amanyi** (`O > T`) and **thanti** (`S > J`, `S > L`, and `T > S`), we conclude that **amanyi** indicates that the subject and object are two generations apart and that one of them is the grandmother, while **thanti** indicates the same but that one of them is the grandfather. Hence, .sol[R = 16]{.st} and .sol[Q = 2]{.st}.

Note: a somewhat more interesting case to consider while filling out the table is how to place {U, J, L, T}, when we know that they are four of H and P's children (N is the last, of course) and X and U as well as L and M are married. We have `kupaka: U > J` and `nhuthi: T > L`, so we know that J is right of U and T is right of L; the only question remains, does the order go {N, U, J, L, T} or {N, L, T, U, J}? We get `piyaka: L > K`, so L is K's father, hence the order of H and P's children *must* be {N, U, J, L, T}. Note that we know that this relation is important because {11, 13} have different genders (and are used to differentiate our two possible solutions). 

We also note that **nhupa** was used in both `P > H` and `S > V`, where `P` is a woman and `S` is a man, so gender does not matter and it just means significant other. This should be sufficient to fill the blanks (i-ix). 

The complete answers are as follows:

![Answers](../../pimg/iol2022i4-2.png)
