(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+3Ox":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var a=n("FdF9"),o=n("izhR");var i=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children"]);return a.default.createElement(o.a,Object.assign({as:"header"},n),a.default.createElement(o.b,null,t))},r=function(e){return a.default.createElement(o.e,Object.assign({as:"h1",variant:"section-heading",mb:1},e))},s=function(e){return a.default.createElement(o.h,Object.assign({variant:"header-title","aria-hidden":!0},e))}},"0XYY":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var a=n("FdF9"),o=n("izhR");t.a=function(e){var t=e.gap,n=void 0===t?0:t,i=e.dividers,r=e.dividerColor,s=void 0===r?"border":r,l=e.children,c=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["gap","dividers","dividerColor","children"]),d=a.default.Children.toArray(l);return a.default.createElement(o.a,c,d.map((function(e,t){return a.default.createElement(o.a,{key:t,sx:{"& + &":{marginTop:n,borderTop:i?1:0,borderColor:s,paddingTop:i?n:0}}},e)})))}},"2isz":function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"frontmatter":{"title":"No Red Squigglies For Semicolons","date":"December 4, 2019","datetime":"2019-12-04"},"fields":{"slug":"/blog/no-red-squigglies-for-semicolons/"}}},{"node":{"frontmatter":{"title":"Customizing Tachyons","date":"November 27, 2017","datetime":"2017-11-27"},"fields":{"slug":"/blog/customizing-tachyons/"}}},{"node":{"frontmatter":{"title":"A Better Album Ranking Algorithm","date":"March 12, 2018","datetime":"2018-03-12"},"fields":{"slug":"/blog/a-better-album-ranking-algorithm/"}}},{"node":{"frontmatter":{"title":"Functional-First Accordions","date":"December 30, 2018","datetime":"2018-12-30"},"fields":{"slug":"/blog/functional-first-accordions/"}}},{"node":{"frontmatter":{"title":"Request Timeouts With the Fetch API","date":"March 30, 2019","datetime":"2019-03-30"},"fields":{"slug":"/blog/fetch-with-timeout/"}}},{"node":{"frontmatter":{"title":"On Declarative Styling","date":"July 19, 2019","datetime":"2019-07-19"},"fields":{"slug":"/blog/on-declarative-styling/"}}},{"node":{"frontmatter":{"title":"A Form-Fitted Z Shell","date":"September 27, 2017","datetime":"2017-09-27"},"fields":{"slug":"/blog/a-form-fitted-z-shell/"}}},{"node":{"frontmatter":{"title":"Components are MDX\'s Secret Weapon","date":"May 14, 2020","datetime":"2020-05-14"},"fields":{"slug":"/blog/components-mdx-secret-weapon/"}}}]}}}')},"2wiz":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Ruben Langius","description":"My name is Ruben Langius, and I make web applications.","siteUrl":"https://www.rubenlangius.nl"}}}}')},vwi5:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("FdF9");var a=n("7ljp"),o=n("wpQe"),i=n("izhR"),r=n("Pvz+");var s={},l={_frontmatter:s},c=o.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(r.a,{date:"December 2019",mdxType:"Update"},"In the year since I've wrote this, it's become increasingly clear that this is not a good method for building accordions. Beyond all the work it takes to make the thing functional (you know, the point of this post),"," ",Object(a.b)(i.f,{href:"https://daverupert.com/2019/12/why-details-is-not-an-accordion/",mdxType:"Link"},"Dave Rupert recently wrote a short post detailing the accessibility shortcomings of this approach"),". I share Dave's opinion that the web, as a platform, needs to bring some of these common controls to the table to ensure a consistent, accessible experience for all of its users."),Object(a.b)("p",null,"There are few UI components encountered as frequently as the accordion. Even if you’re unfamiliar with the term, you’re familiar with the pattern: a string of text, sometimes accompanied by a button or icon, that reveals more content underneath when clicked. Thousands of developers and hundreds of UI frameworks have created accordions, often with their own rigid markup structures and (potentially bloated) JavaScript. But did you know that a perfectly functional accordion component ships with ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://caniuse.com/#feat=details"}),"most modern browsers"),"? Check this out:"),Object(a.b)(i.b,{sx:{maxWidth:"mdx-measure"},mdxType:"Container"},Object(a.b)("details",null,Object(a.b)("summary",null,"This is my cool accordion"),Object(a.b)(i.h,{as:"p",my:3,mdxType:"Text"},"100% HTML, baby. #usetheplatform"))),Object(a.b)("p",null,"That’s all HTML! The code looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),"<details>\n  <summary>This is my cool accordion</summary>\n\n  <p>100% HTML, baby. #usetheplatform</p>\n</details>\n")),Object(a.b)("p",null,"The element that helps us achieve this marvel of modern engineering is called ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"}),Object(a.b)("inlineCode",{parentName:"a"},"details"))," (along with ",Object(a.b)("inlineCode",{parentName:"p"},"summary")," to set custom titles). It allows us to create content that is not visible until the element is clicked on. Sounds like an accordion to me!"),Object(a.b)("p",null,"Of course, there are some downsides to the ",Object(a.b)("inlineCode",{parentName:"p"},"details")," element. For starters, it isn’t exactly what I’d call attractive. There’s no way to animate content in and out, and no way to adjust the “twistie” (the triangle icon that indicates the component state). In addition, working in ",Object(a.b)("em",{parentName:"p"},"most")," modern browsers means that it doesn’t work in ",Object(a.b)("em",{parentName:"p"},"all")," modern browsers, not to mention legacy browsers. But, much like our UI framework-developing forebears, we can use some CSS & JavaScript to solve those issues, with the added benefit of an accordion that works when JavaScript (and even CSS!) is disabled."),Object(a.b)("h2",null,"The Beauty Is in the Details"),Object(a.b)("p",null,"The first and easiest changes we should make just involve making the element display consistently in all browsers."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"details {\n  display: block;\n}\nsummary {\n  display: list-item;\n}\n")),Object(a.b)("p",null,"Similarly easy, though a little more opinionated, is changing the cursor to highlight that the element is interactive."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"summary {\n  cursor: pointer;\n}\n")),Object(a.b)("p",null,"Now let’s get into the fun stuff. First up is changing the default twistie to be something closer to convention."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"/* Hide the default twistie */\n/* Spec-compliant: */\nsummary {\n  list-style-type: none;\n}\n/* Non-standard: */\nsummary::-webkit-details-marker {\n  display: none;\n}\n\n/* Display a more common one */\nsummary {\n  position: relative;\n  padding-right: 1.5rem;\n}\nsummary::after {\n  content: '+';\n  position: absolute;\n  top: calc(50% - 0.5em);\n  right: 0;\n}\ndetails[open] summary::after {\n  content: '-';\n}\n")),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://codepen.io/lowmess/pen/zMjagE"}),"Here’s the accordion")," as it looks at this point:"),Object(a.b)(i.b,{sx:{iframe:{border:1,borderColor:"muted"}},mdxType:"Container"},Object(a.b)("iframe",{height:"300",scrolling:"no",title:"Details Accordion (CSS Resets Only)",src:"//codepen.io/lowmess/embed/zMjagE/?height=300&theme-id=22727&default-tab=result",frameBorder:"no",allowtransparency:"true",allowFullScreen:"true",style:{width:"100%"}},"See the Pen"," ",Object(a.b)("a",{href:"https://codepen.io/lowmess/pen/zMjagE/"},"Details Accordion (CSS Resets Only)")," ","by Alec Lomas (",Object(a.b)("a",{href:"https://codepen.io/lowmess"},"@lowmess"),") on"," ",Object(a.b)("a",{href:"https://codepen.io"},"CodePen"),".")),Object(a.b)("p",null,"Not bad for a few lines of CSS! There’s a few more changes I would make before calling this anything approaching good-looking, though."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"details {\n  border-bottom: 1px solid #eee;\n  padding: 1rem;\n}\n:not(details) + details,\ndetails:first-of-type {\n  border-top: 1px solid #eee;\n}\n\nsummary {\n  margin-bottom: 0;\n  font-weight: 700;\n}\nsummary + * {\n  margin-top: 1rem;\n}\n")),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://codepen.io/lowmess/pen/eQrjBG"}),"Now we’ve got a relatively attractive accordion component"),". We could stop now, and we would have a working component that, with a few tweaks, could be dropped onto almost any site and Just Work™️."),Object(a.b)(i.b,{sx:{iframe:{border:1,borderColor:"muted"}},mdxType:"Container"},Object(a.b)("iframe",{height:"300",scrolling:"no",title:"Details Accordion (Base Styles)",src:"//codepen.io/lowmess/embed/eQrjBG/?height=300&theme-id=22727&default-tab=result",frameBorder:"no",allowtransparency:"true",allowFullScreen:"true",style:{width:"100%"}},"See the Pen"," ",Object(a.b)("a",{href:"https://codepen.io/lowmess/pen/eQrjBG/"},"Details Accordion (Base Styles)")," ","by Alec Lomas (",Object(a.b)("a",{href:"https://codepen.io/lowmess"},"@lowmess"),") on"," ",Object(a.b)("a",{href:"https://codepen.io"},"CodePen"),".")),Object(a.b)("h2",null,"Enchanting Progressive Enhancement"),Object(a.b)("p",null,"We don’t want to be outdone by those UI frameworks of yore, though. So we’ll need to do a little more work to animate the content in and out. The base markup does have to be changed to be a little less clean, and we’ll need some new CSS."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<details>\n  <summary>An updated details accordion</summary>\n\n  <div class="content">\n    <p>I\'m some content!</p>\n  </div>\n</details>\n')),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".content {\n  overflow-y: hidden;\n  transition: all 0.4s ease;\n}\n\n.content.is-closed {\n  max-height: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  opacity: 0;\n}\n")),Object(a.b)("p",null,"You may have noticed that we didn’t apply the ",Object(a.b)("inlineCode",{parentName:"p"},"is-closed")," class to the content in the markup. Since we’re using JS to trigger that class, and it hides the content, we only want to apply the class if JS is allowed to run on the page."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"for (const content of document.querySelectorAll('details .content')) {\n  content.classList.add('is-closed')\n}\n")),Object(a.b)("p",null,"There’s one last piece we need to set into place before we can trigger the animation. When the element is closed, it has an applied ",Object(a.b)("inlineCode",{parentName:"p"},"max-height")," of ",Object(a.b)("inlineCode",{parentName:"p"},"0"),". Since the ",Object(a.b)("inlineCode",{parentName:"p"},"auto")," declaration is not animatable, we’ll need to apply a defined ",Object(a.b)("inlineCode",{parentName:"p"},"max-height")," to the content when it’s open. For the smoothest possible animation, that ",Object(a.b)("inlineCode",{parentName:"p"},"max-height")," should be the same size as the content height. We can write a simple function to calculate this height and store it as an attribute on the content element."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const getContentHeight = (node) => {\n  // Force node to display properly\n  node.classList.remove('is-closed')\n  // Calculate height and store it\n  node.setAttribute(\n    'data-height',\n    `${node.getBoundingClientRect().height}px`\n  )\n  // Reset node to initial state\n  node.classList.add('is-closed')\n}\n")),Object(a.b)("p",null,"Now that we’ve accounted for that wrinkle, we can handle interaction on the element. In a bit of premature optimization, we’ll ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://javascript.info/event-delegation"}),"delegate the event")," to the document."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"document.addEventListener('click', (event) => {\n  if (!event.target.closest('summary')) {\n    return\n  }\n\n  event.preventDefault()\n})\n")),Object(a.b)("p",null,"All we’ve told the browser at this point is “if the user has clicked a ",Object(a.b)("inlineCode",{parentName:"p"},"<summary>")," element, don’t do anything”. The default behavior associated with clicking a ",Object(a.b)("inlineCode",{parentName:"p"},"<summary>")," element is to set/remove the ",Object(a.b)("inlineCode",{parentName:"p"},"open")," attribute on its parent ",Object(a.b)("inlineCode",{parentName:"p"},"<details>")," element (the browser then knows to hide/show the content inside of ",Object(a.b)("inlineCode",{parentName:"p"},"<details>")," based on this attribute). The browser won’t wait for the content to animate out before hiding it, so we need to do that manually inside our handler. The code to do this is fairly straightforward, and boils down to toggling attributes and classes in a specific order at a specified time."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"// Inside of our event handler\nconst accordion = event.target.closest('details')\nconst content = accordion.querySelector('.content')\n\n// Handle closing\nif (accordion.hasAttribute('open')) {\n  // Animate content out\n  content.style.removeProperty('max-height')\n  content.classList.add('is-closed')\n  // Wait for animation to finish, then remove the `open` attribute\n  window.setTimeout(() => {\n    accordion.removeAttribute('open')\n  }, 400)\n  // Exit handler\n  return\n}\n\n// Handle opening\n// Set the `open` attribute so the content will display\naccordion.setAttribute('open', '')\n// If our content does not have a calculated height, calculate it\nif (!content.hasAttribute('data-height')) {\n  getContentHeight(content)\n}\n// Wait a beat for the height to calculate, then animate content in\nwindow.setTimeout(() => {\n  content.style.maxHeight = content.getAttribute('data-height')\n  content.classList.remove('is-closed')\n}, 0)\n")),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://codepen.io/lowmess/pen/yQjRXy"}),"Putting it all together")," gives us a fully functional, animated accordion component. And because we started with an HTML element that gives us our core functionality by default, a user doesn’t need to have JavaScript running to access the hidden content."),Object(a.b)(i.b,{sx:{iframe:{border:1,borderColor:"muted"}},mdxType:"Container"},Object(a.b)("iframe",{height:"300",scrolling:"no",title:"<details> Accordion (Final Form)",src:"//codepen.io/lowmess/embed/yQjRXy/?height=300&theme-id=22727&default-tab=result",frameBorder:"no",allowtransparency:"true",allowFullScreen:"true",style:{width:"100%"}},"See the Pen"," ",Object(a.b)("a",{href:"https://codepen.io/lowmess/pen/yQjRXy/"},"<details&rt; Accordion (Final Form)")," ","by Alec Lomas (",Object(a.b)("a",{href:"https://codepen.io/lowmess"},"@lowmess"),") on"," ",Object(a.b)("a",{href:"https://codepen.io"},"CodePen"),".")),Object(a.b)("h2",null,"Extra Credit"),Object(a.b)("p",null,"Although the accordion we’ve created is great, we’ve only covered the baseline functionality. There are a few ways we can change or improve the functionality further, including but not limited to:"),Object(a.b)("h3",null,"Improve Accessibility"),Object(a.b)("p",null,"Because the ",Object(a.b)("inlineCode",{parentName:"p"},"<details>")," element is baked-in to the platform, it should be accessible by default. However, this only applies to browsers that actually support the element. If you have users from browsers that don’t support the element, considerations for accessibility should be taken (adding ",Object(a.b)("inlineCode",{parentName:"p"},"tabindex")," and ",Object(a.b)("inlineCode",{parentName:"p"},"aria-")," attributes, for example)."),Object(a.b)("h3",null,"Handle Window Resizing"),Object(a.b)("p",null,"The vertical expansion animation we’re using to transition accordion content in and out of view is smooth and natural, but there is one issue: it isn’t responsive. Because we only calculate the height of the element once, if the element width changes to the degree that the content flows to a new line, the animation will break. An ideal solution would account for this, and there are a variety of ways we could do so."),Object(a.b)("h3",null,"Increase Interaction Target Size"),Object(a.b)("p",null,"We set container padding on the ",Object(a.b)("inlineCode",{parentName:"p"},"<details>")," element to give the contents of the accordion room to breath. However, this means to open the accordion you have to click or tap on the ",Object(a.b)("inlineCode",{parentName:"p"},"<summary>")," content. Setting the padding on the ",Object(a.b)("inlineCode",{parentName:"p"},"<summary>")," and content container independently should make the accordion a little easier to use."),Object(a.b)("h3",null,"Animate the Twistie"),Object(a.b)("p",null,"Animating the twistie to compliment the content animation would bring another level of polish to our accordion. Extra extra credit: make the animation happen on interaction (instead of relying on the ",Object(a.b)("inlineCode",{parentName:"p"},"[open]")," attribute)."),Object(a.b)("h3",null,"Force Content to Show In Non-Screen Environments"),Object(a.b)("p",null,"Accordions can bring a lot to the table in screen-based environments, however they can also make content inaccessible in non-screen environments (such as when printing or using a screenreader). The content should be accessible in all environments."),Object(a.b)("h3",null,"Only Open One Item At a Time"),Object(a.b)("p",null,"Just kidding. If ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.nngroup.com/articles/accordions-complex-content/"}),"you need an accordion at all"),", you probably ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.smashingmagazine.com/2017/06/designing-perfect-accordion-checklist/#designing-interaction-for-the-accordion"}),"should not do this"),". As it is an action not directly requested by the user, it can cause frustration."),Object(a.b)("h3",null,"Package the Accordion Into a Reusable Component"),Object(a.b)("p",null,"We should probably abstract away all of this markup to ensure consistency and improve DX. Frameworks like React and Vue provide a simple way to do this, but it should also be possible in most templating languages."))}d.isMDXComponent=!0},wpQe:function(e,t,n){"use strict";n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("dRSK");var a=n("2isz"),o=n("FdF9"),i=n("TJpk"),r=n.n(i),s=n("izhR"),l=n("2wiz"),c=n("0XYY"),d=n("Zttt"),m=n("+3Ox");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t=e.pageContext,n=e.children,i=l.data.site.siteMetadata,b=i.title,u=i.siteUrl,p=a.data.allMdx.edges.find((function(e){return e.node.frontmatter.title===t.frontmatter.title})).node,f={frontmatter:h({},t.frontmatter,{},p.frontmatter),fields:p.fields};return o.default.createElement(d.a,null,o.default.createElement(r.a,null,o.default.createElement("title",null,f.frontmatter.title),o.default.createElement("meta",{name:"description",content:f.frontmatter.description}),o.default.createElement("meta",{name:"twitter:site",content:"@lowmess"}),o.default.createElement("meta",{name:"twitter:card",content:"summary"}),o.default.createElement("meta",{property:"og:site_name",content:b}),o.default.createElement("meta",{property:"og:title",name:"twitter:title",content:f.frontmatter.title}),o.default.createElement("meta",{property:"og:url",content:""+u+f.fields.slug}),o.default.createElement("meta",{property:"og:description",name:"twitter:description",content:f.frontmatter.description})),o.default.createElement(s.a,{as:"header"},o.default.createElement(s.b,{sx:{maxWidth:"mdx-measure",fontSize:[null,null,3]}},o.default.createElement(m.b,{as:"time",dateTime:f.frontmatter.datetime},f.frontmatter.date),o.default.createElement(m.c,{"aria-hidden":"false"},f.frontmatter.title))),o.default.createElement(c.a,{gap:4,mt:[4,5]},n))}}}]);
//# sourceMappingURL=component---src-pages-blog-functional-first-accordions-mdx-5bbc56ca134d169f4a94.js.map