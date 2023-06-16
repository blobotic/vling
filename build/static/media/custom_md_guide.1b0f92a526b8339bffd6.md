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

\:::table{.border-hidden .width-800 .no1Count .no2Count}
<br>\:\:tr[\:td[row1] \:td[\:ans]]
<br>\:\:tr[\:td[row1] \:td[\:ans]]
<br>\:\:tr[\:td[row1] \:td[\:ans]]
<br>\:\:tr[\:td[row1] \:td[\:ans]]
<br>\:::
:::table{.border-hidden .width-800 .no1Count .no2Count}
::tr[:td[row1] :td[:ans]]
::tr[:td[row1] :td[:ans]]
::tr[:td[row1] :td[:ans]]
::tr[:td[row1] :td[:ans]]
:::


\:::table{.border-hidden}
<br>\:\:tr[\:td[row1] \:td[\:ans]]
<br>\:\:tr[\:td[row2] \:td[\:ans]]
<br>\:::
:::table{.border-hidden}
::tr[:td[row1] :td[:ans]]
::tr[:td[row2] :td[:ans]]
:::

Note: tables with 2 columns automatically number the first column (1-26) and the second column alphanumerically (A-Z). 

### Border/Bounding Box

<div>
:::div{.border}
<br>:::table{.no1Count .no2Count .border-hidden .padding-none .margin-bottom-none}
<br>::tr[:td[row1] :td[row1]]
<br>::tr[:td[row2] :td[row2]]
<br>::tr[:td[row3] :td[row3]]
<br>::tr[:td[row4] :td[row4]]
<br>:::
</div>

:::div{.border}
:::table{.no1Count .no2Count .border-hidden .padding-none .margin-bottom-none}
::tr[:td[row1] :td[row1]]
::tr[:td[row2] :td[row2]]
::tr[:td[row3] :td[row3]]
::tr[:td[row4] :td[row4]]
:::

## Answer boxes

\:expl
:expl

\:ans :ans

\:ans{.sm} :ans{.sm}

\:ans{.med} :ans{.med}

\:ans{.large} :ans{.large}


\:match{num=10}
:match{num=10}
