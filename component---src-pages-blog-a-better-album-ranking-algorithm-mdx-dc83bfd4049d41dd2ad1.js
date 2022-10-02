(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+3Ox":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return l}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var n=a("FdF9"),r=a("izhR");var o=function(e){var t=e.children,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children"]);return n.default.createElement(r.a,Object.assign({as:"header"},a),n.default.createElement(r.c,null,t))},i=function(e){return n.default.createElement(r.f,Object.assign({as:"h1",variant:"section-heading",mb:1},e))},l=function(e){return n.default.createElement(r.i,Object.assign({variant:"header-title","aria-hidden":!0},e))}},"0XYY":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var n=a("FdF9"),r=a("izhR");t.a=function(e){var t=e.gap,a=void 0===t?0:t,o=e.dividers,i=e.dividerColor,l=void 0===i?"border":i,s=e.children,u=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["gap","dividers","dividerColor","children"]),m=n.default.Children.toArray(s);return n.default.createElement(r.a,u,m.map((function(e,t){return n.default.createElement(r.a,{key:t,sx:{"& + &":{marginTop:a,borderTop:o?1:0,borderColor:l,paddingTop:o?a:0}}},e)})))}},"2isz":function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"frontmatter":{"title":"Customizing Tachyons","date":"November 27, 2017","datetime":"2017-11-27"},"fields":{"slug":"/blog/customizing-tachyons/"}}},{"node":{"frontmatter":{"title":"Functional-First Accordions","date":"December 30, 2018","datetime":"2018-12-30"},"fields":{"slug":"/blog/functional-first-accordions/"}}},{"node":{"frontmatter":{"title":"A Better Album Ranking Algorithm","date":"March 12, 2018","datetime":"2018-03-12"},"fields":{"slug":"/blog/a-better-album-ranking-algorithm/"}}},{"node":{"frontmatter":{"title":"No Red Squigglies For Semicolons","date":"December 4, 2019","datetime":"2019-12-04"},"fields":{"slug":"/blog/no-red-squigglies-for-semicolons/"}}},{"node":{"frontmatter":{"title":"Request Timeouts With the Fetch API","date":"March 30, 2019","datetime":"2019-03-30"},"fields":{"slug":"/blog/fetch-with-timeout/"}}},{"node":{"frontmatter":{"title":"On Declarative Styling","date":"July 19, 2019","datetime":"2019-07-19"},"fields":{"slug":"/blog/on-declarative-styling/"}}},{"node":{"frontmatter":{"title":"A Form-Fitted Z Shell","date":"September 27, 2017","datetime":"2017-09-27"},"fields":{"slug":"/blog/a-form-fitted-z-shell/"}}}]}}}')},hBm0:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("FdF9");var n=a("7ljp"),r=a("wpQe");var o={},i={_frontmatter:o},l=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Years ago, I deleted my ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://last.fm"}),"Last.fm")," account, because it felt like a dying social media network. Months ago, I created ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.last.fm/user/lowmess"}),"a new one"),", because Last.fm is a treasure trove of behaviorally generated personal data. It’s a lovely service for a developer to have around for side projects, as it provides instant and easy access to a large dataset with a particularly personal connection if you’re a music lover. In the process of using it for ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/about/"}),"one of those side projects"),", I found a dark & disturbing secret: Last.fm actually kind of sucks for tracking album plays."),Object(n.b)("p",null,"Fair warning: things are about to take a turn for the opinionated, pedantic, and downright trivial."),Object(n.b)("h2",null,"The Scrobble Killed the Record Star"),Object(n.b)("p",null,"Last.fm is built upon an atomic unit: the scrobble. From it, all other units are derived. A scrobble represents one play of one song, and Last.fm sets your top album by how many scrobbles it has. The problem with this is that it’s the complete wrong way to count album plays."),Object(n.b)("p",null,"Album play counts are slightly different than song play counts. They should start from basically the same place — one playthrough is one playthrough — but from there they branch in subtle but important ways. For example, it is much more common to only partially listen to an album than it is to partially listen to a song. Albums are also, generally, between 10 and 12 times longer than songs, and broken into as many parts."),Object(n.b)("p",null,"If the length of an album is what makes a complete playthrough of an album rarer than a playthrough of a song, a playthrough of a longer album should count for more than that of a shorter album. (There’s an argument to be made that the same is true of songs, but we’ll leave that for another day.) Thus, the ideal album ranking algorithm would account for total playthroughs, with a weight given to longer albums. Maybe even something as simple as this:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"albumPlaythroughs * (1 + albumDuration / 2700)\n")),Object(n.b)("p",null,"Here, we weight the duration in 45 minute increments, the length of a single LP (",Object(n.b)("inlineCode",{parentName:"p"},"albumDuration")," being in seconds). Adding 1 to the duration calculation helps to ensure we’re not simply normalizing for record length — while that is also a valid way to rank album plays, it is not the one I prefer."),Object(n.b)("h2",null,"Ok, You Got Me. Something Exactly As Simple As That"),Object(n.b)("p",null,"Let’s take three albums of varying lengths and see how they handle this algorithm. Our albums:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "name": "Cardinal",\n    "artist": "Pinegrove",\n    "duration": 1845\n  },\n  {\n    "name": "Marquee Moon",\n    "artist": "Television",\n    "duration": 2754\n  },\n  {\n    "name": "Summertime \'06",\n    "artist": "Vince Staples",\n    "duration": 3545\n  }\n]\n')),Object(n.b)("p",null,"Given one playthrough each, the three records will be ranked in exactly the same order they are now. Let’s listen to a few more tracks."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const cardinalRank = 3.5 * (1 + 1845 / 2700) // 5.89\nconst marqueeRank = 3 * (1 + 2745 / 2700) // 6.05\nconst summertimeRank = 2.5 * (1 + 3545 / 2700) // 5.78\n")),Object(n.b)("p",null,"Now we’re getting somewhere. Even though ",Object(n.b)("em",{parentName:"p"},"Cardinal")," has the most playthroughs, ",Object(n.b)("em",{parentName:"p"},"Marquee Moon")," has the highest rank thanks to its lengthier runtime. ",Object(n.b)("em",{parentName:"p"},"Summertime ‘06")," is just barely in third place despite having a full playthrough less than ",Object(n.b)("em",{parentName:"p"},"Cardinal"),". The system works, folks."),Object(n.b)("h2",null,"This Is the Part With the “But”"),Object(n.b)("p",null,"Given all the information we need, the algorithm works. But we still have to get the information, and unfortunately, Last.fm doesn’t make it too easy on us:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"We can easily get a user’s top albums, but the response doesn’t include information on the amount of tracks on, or duration of, each album."),Object(n.b)("li",{parentName:"ul"},"Last.fm doesn’t use unique IDs to track albums, so we have to use an endpoint that searches by album name and artist to get detailed album information. This often fails or retrieves the wrong album, even when the album name and artist are provided by Last.fm (like from the previously discussed endpoint)."),Object(n.b)("li",{parentName:"ul"},"Once we find an album, track listings are missing or incomplete about 20% of the time. This happens more often with newer albums."),Object(n.b)("li",{parentName:"ul"},"Neither the top albums nor album info endpoints give us the album’s release year. This doesn’t impact the algorithm, I just thought it was odd.")),Object(n.b)("p",null,"All told, to implement this algorithm on our own means we would have to make an insane amount of requests just to get incomplete or missing data. If you think that doesn’t sound like it’s worth it, you’re right. And while I didn’t use it, ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://gist.github.com/lowmess/f3c03b1a6fe50ee04622706047f8a654"}),"you can see an implementation here"),"."),Object(n.b)("p",null,"Last.fm still ranks albums wrong, though."))}s.isMDXComponent=!0},wpQe:function(e,t,a){"use strict";a("jm62"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("dRSK");var n=a("2isz"),r=a("FdF9"),o=a("TJpk"),i=a.n(o),l=a("izhR"),s=a("lwPf"),u=a("0XYY"),m=a("Zttt"),c=a("+3Ox");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.a=function(e){var t=e.pageContext,a=e.children,o=Object(s.a)(),d=o.title,b=o.siteUrl,f=n.data.allMdx.edges.find((function(e){return e.node.frontmatter.title===t.frontmatter.title})).node,p={frontmatter:h({},t.frontmatter,{},f.frontmatter),fields:f.fields};return r.default.createElement(m.a,null,r.default.createElement(i.a,null,r.default.createElement("title",null,p.frontmatter.title),r.default.createElement("meta",{name:"description",content:p.frontmatter.description}),r.default.createElement("meta",{name:"twitter:site",content:"@lowmess"}),r.default.createElement("meta",{name:"twitter:card",content:"summary"}),r.default.createElement("meta",{property:"og:site_name",content:d}),r.default.createElement("meta",{property:"og:title",name:"twitter:title",content:p.frontmatter.title}),r.default.createElement("meta",{property:"og:url",content:""+b+p.fields.slug}),r.default.createElement("meta",{property:"og:description",name:"twitter:description",content:p.frontmatter.description})),r.default.createElement(l.a,{as:"header"},r.default.createElement(l.c,{sx:{maxWidth:"mdx-measure",fontSize:[null,null,3]}},r.default.createElement(c.b,{as:"time",dateTime:p.frontmatter.datetime},p.frontmatter.date),r.default.createElement(c.c,{"aria-hidden":"false"},p.frontmatter.title))),r.default.createElement(u.a,{gap:4,mt:[4,5]},a))}}}]);
//# sourceMappingURL=component---src-pages-blog-a-better-album-ranking-algorithm-mdx-dc83bfd4049d41dd2ad1.js.map