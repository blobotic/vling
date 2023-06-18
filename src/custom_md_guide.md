# Custom markdown reference

For directive reference, check [remark-directive](https://github.com/remarkjs/remark-directive) or the [generic directives proposal](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444); note that they DO NOT work in html blocks, I believe.

Note that LaTeX uses [KaTeX](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444). 

## Colors

:color[\:color[text]{.red}]{.red} 
:color[\:color[text]{.orange}]{.orange}
:color[\:color[text]{.yellow}]{.yellow} 
:color[\:color[text]{.green}]{.green} 
:color[\:color[text]{.blue}]{.blue} 
:color[\:color[text]{.purple}]{.purple}

:sol[\:sol[text]] also defaults to red

## Custom Classes

### Center

:div[\:div[this is centered]{.center}]{.center}

### Indent

:div[\:div[this is indented a little]{.lmargin2}]{.lmargin2}

### Table

#### New table component

```
:::ntable{fmt=1}
r1c1 & r1c2 & r1c3
r2c1 & r2c2 & r2c3
r3c1 & r3c2 & r3c3
:::
```

:::ntable{fmt=1}
r1c1 & r1c2 & r1c3
r2c1 & r2c2 & r2c3
r3c1 & r3c2 & r3c3
:::

#### HTML table

```
:::table{.border-hidden .width-400 .no1Count .no2Count}
::tr[:td[row1] :td[:ans]]
::tr[:td[row1] :td[:ans]]
::tr[:td[row1] :td[:ans]]
::tr[:td[row1] :td[:ans]]
:::
```


:::table{.border-hidden .width-400 .no1Count .no2Count}
::tr[:td[row1] :td[:ans]]
::tr[:td[row1] :td[:ans]]
::tr[:td[row1] :td[:ans]]
::tr[:td[row1] :td[:ans]]
:::


```
:::table{.border-hidden}
::tr[:td[row1] :td[:ans]]
::tr[:td[row2] :td[:ans]]
:::
```

:::table{.border-hidden}
::tr[:td[row1] :td[:ans]]
::tr[:td[row2] :td[:ans]]
:::

Note: tables with 2 columns automatically number the first column (1-26) and the second column alphanumerically (A-Z). To disable this, use the classes `.no1Count` and `.no2Count`.

### Border/Bounding box

:div[\:div[this has a border]{.border}]{.border}

## Answer boxes

\:expl
:expl

\:ans :ans

\:ans{.sm} :ans{.sm}

\:ans{.med} :ans{.med}

\:ans{.large} :ans{.large}


\:match{num=10}
:match{num=10}

\:match{num=10, start=5}
:match{num=10, start=5}

\:match{num=10, alpha=true, start=2}
:match{num=10, alpha=true, start=2}