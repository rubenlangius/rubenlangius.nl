(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+3Ox":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var o=n("FdF9"),r=n("izhR");var i=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children"]);return o.default.createElement(r.a,Object.assign({as:"header"},n),o.default.createElement(r.b,null,t))},a=function(e){return o.default.createElement(r.e,Object.assign({as:"h1",variant:"section-heading",mb:1},e))},s=function(e){return o.default.createElement(r.h,Object.assign({variant:"header-title","aria-hidden":!0},e))}},"0XYY":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var o=n("FdF9"),r=n("izhR");t.a=function(e){var t=e.gap,n=void 0===t?0:t,i=e.dividers,a=e.dividerColor,s=void 0===a?"border":a,l=e.children,u=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["gap","dividers","dividerColor","children"]),c=o.default.Children.toArray(l);return o.default.createElement(r.a,u,c.map((function(e,t){return o.default.createElement(r.a,{key:t,sx:{"& + &":{marginTop:n,borderTop:i?1:0,borderColor:s,paddingTop:i?n:0}}},e)})))}},"2isz":function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"frontmatter":{"title":"Customizing Tachyons","date":"November 27, 2017","datetime":"2017-11-27"},"fields":{"slug":"/blog/customizing-tachyons/"}}},{"node":{"frontmatter":{"title":"Request Timeouts With the Fetch API","date":"March 30, 2019","datetime":"2019-03-30"},"fields":{"slug":"/blog/fetch-with-timeout/"}}},{"node":{"frontmatter":{"title":"Functional-First Accordions","date":"December 30, 2018","datetime":"2018-12-30"},"fields":{"slug":"/blog/functional-first-accordions/"}}},{"node":{"frontmatter":{"title":"No Red Squigglies For Semicolons","date":"December 4, 2019","datetime":"2019-12-04"},"fields":{"slug":"/blog/no-red-squigglies-for-semicolons/"}}},{"node":{"frontmatter":{"title":"On Declarative Styling","date":"July 19, 2019","datetime":"2019-07-19"},"fields":{"slug":"/blog/on-declarative-styling/"}}},{"node":{"frontmatter":{"title":"A Form-Fitted Z Shell","date":"September 27, 2017","datetime":"2017-09-27"},"fields":{"slug":"/blog/a-form-fitted-z-shell/"}}},{"node":{"frontmatter":{"title":"Components are MDX\'s Secret Weapon","date":"May 14, 2020","datetime":"2020-05-14"},"fields":{"slug":"/blog/components-mdx-secret-weapon/"}}},{"node":{"frontmatter":{"title":"A Better Album Ranking Algorithm","date":"March 12, 2018","datetime":"2018-03-12"},"fields":{"slug":"/blog/a-better-album-ranking-algorithm/"}}}]}}}')},"2wiz":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Ruben Langius","description":"My name is Ruben Langius, and I make web applications.","siteUrl":"https://www.rubenlangius.nl"}}}}')},cgpd:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("FdF9");var o=n("7ljp"),r=n("wpQe");var i={},a={_frontmatter:i},s=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(s,Object.assign({},a,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Us developers are an opinionated bunch. We share our opinions wide and loud through blog posts, tweets, talks at meetups, in meetings. The tenacity with which we hold these opinions seems to have ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Law_of_triviality"}),"an inverse correlation with their impact"),", and nowhere is this strange dichotomy more present than in stylistic choices. Should we use tabs or spaces for whitespace? Should we use semicolons or not? Single quotes or double quotes?"),Object(o.b)("p",null,"Collectively, these stylistic choices are known as bikeshedding. Thousands of words have been written about how we should be painting our bikesheds. We have many tools to help us paint the bikeshed. But, truth be told, I don’t care much about what color the bikeshed is. What I do care about is my code editor’s linting extension putting a red squiggly line under a function declaration because there’s a space between the name of the function and its parameter list."),Object(o.b)("h2",null,"Linters Are For Code Quality, Formatters Are For Style"),Object(o.b)("p",null,"Linters are incredible code quality tools. They enforce best patterns and can help catch bugs well before our code makes it to a browser. But they are ill-equipped to handle issues of style. Attempting to use an undefined variable is a bug, and your linter should point this out to you. Using single quotes instead of double quotes, on the other hand, will not impact your code’s logic or ability to run. As such, your linter should not care about this issue. At the very least it should not interrupt your work to tell you about it."),Object(o.b)("p",null,"Formatters are a different kind of tool altogether. They care only about enforcing a consistent style and rarely (if ever) give real-time feedback. Instead, they wait until your work is at a safe stopping point to run: when you save a file, when you commit, or when you explicitly tell the formatter to run. Because of this, they are much less likely to introduce friction into your workflow."),Object(o.b)("p",null,"In the JavaScript world the most used linter is ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://eslint.org"}),"ESLint"),", and the most used formatter is ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://prettier.io"}),"Prettier"),". ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/rubenlangius.nl/colophon/"}),"They’re what I use")," across my projects. Unfortunately, many popular ESLint configs include strict enforcement of stylistic rules. Recognizing that conflicts between the two tools would arise, the Prettier team created ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/prettier/eslint-config-prettier"}),Object(o.b)("inlineCode",{parentName:"a"},"eslint-config-prettier")),". The aptly-named ESLint config turns off any rules that conflict with Prettier, giving it full dominion over all issues of style. Using it allows us to keep the code quality benefits of our linter, only without those pesky bikeshedding errors."),Object(o.b)("h2",null,"If You Have to Remember To Do It, You’ll Forget To Do It"),Object(o.b)("p",null,"The workflow friction does not stop with squiggly lines, of course. If your setup relies on you to remember to run a linter or formatter (or test suite) against your code, you will forget to do so. Probably not every time, maybe even not most of the time, but ",Object(o.b)("em",{parentName:"p"},"definitely")," some of the time. This is especially true when working in a shared codebase: we can’t be sure all members of our team have the same linting & formatting extensions installed, that those extenstions are configured the same way, or be sure our teammates will remember to run those tools manually. Instead, I find it better to set these tools up to run with Git hooks."),Object(o.b)("p",null,"Git hooks allow us to run arbitrary commands when performing a Git function; they allow us to run scripts before or after committing or pushing or pulling. While possible to ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks"}),"set these hooks up manually"),", tools like ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/typicode/husky"}),"husky")," make setting them up much easier. I also often use a tool called ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/okonet/lint-staged"}),"lint-staged")," to lint & format only those files staged for commit. This makes the process much faster, and ensures that no extraneous files are included in a commit."),Object(o.b)("p",null,"Combined with removing bikeshedding rules from your linter, introducing a formatter and setting up Git hooks will remove a fair amount of friction from your code writing process. Setting these tools up — ESLint, Prettier, husky, & lint-staged — are among the first things I do in any new JavaScript project. I highly recommend giving it a shot."))}l.isMDXComponent=!0},wpQe:function(e,t,n){"use strict";n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("dRSK");var o=n("2isz"),r=n("FdF9"),i=n("TJpk"),a=n.n(i),s=n("izhR"),l=n("2wiz"),u=n("0XYY"),c=n("Zttt"),d=n("+3Ox");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t=e.pageContext,n=e.children,i=l.data.site.siteMetadata,m=i.title,h=i.siteUrl,p=o.data.allMdx.edges.find((function(e){return e.node.frontmatter.title===t.frontmatter.title})).node,b={frontmatter:f({},t.frontmatter,{},p.frontmatter),fields:p.fields};return r.default.createElement(c.a,null,r.default.createElement(a.a,null,r.default.createElement("title",null,b.frontmatter.title),r.default.createElement("meta",{name:"description",content:b.frontmatter.description}),r.default.createElement("meta",{name:"twitter:site",content:"@lowmess"}),r.default.createElement("meta",{name:"twitter:card",content:"summary"}),r.default.createElement("meta",{property:"og:site_name",content:m}),r.default.createElement("meta",{property:"og:title",name:"twitter:title",content:b.frontmatter.title}),r.default.createElement("meta",{property:"og:url",content:""+h+b.fields.slug}),r.default.createElement("meta",{property:"og:description",name:"twitter:description",content:b.frontmatter.description})),r.default.createElement(s.a,{as:"header"},r.default.createElement(s.b,{sx:{maxWidth:"mdx-measure",fontSize:[null,null,3]}},r.default.createElement(d.b,{as:"time",dateTime:b.frontmatter.datetime},b.frontmatter.date),r.default.createElement(d.c,{"aria-hidden":"false"},b.frontmatter.title))),r.default.createElement(u.a,{gap:4,mt:[4,5]},n))}}}]);
//# sourceMappingURL=component---src-pages-blog-no-red-squigglies-for-semicolons-mdx-56cdf504a562917a164a.js.map