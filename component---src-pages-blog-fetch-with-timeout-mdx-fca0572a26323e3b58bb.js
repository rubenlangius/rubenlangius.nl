(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+3Ox":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var r=n("FdF9"),a=n("izhR");var o=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children"]);return r.default.createElement(a.a,Object.assign({as:"header"},n),r.default.createElement(a.b,null,t))},i=function(e){return r.default.createElement(a.e,Object.assign({as:"h1",variant:"section-heading",mb:1},e))},s=function(e){return r.default.createElement(a.h,Object.assign({variant:"header-title","aria-hidden":!0},e))}},"0XYY":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("FdF9"),a=n("izhR");t.a=function(e){var t=e.gap,n=void 0===t?0:t,o=e.dividers,i=e.dividerColor,s=void 0===i?"border":i,l=e.children,c=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["gap","dividers","dividerColor","children"]),d=r.default.Children.toArray(l);return r.default.createElement(a.a,c,d.map((function(e,t){return r.default.createElement(a.a,{key:t,sx:{"& + &":{marginTop:n,borderTop:o?1:0,borderColor:s,paddingTop:o?n:0}}},e)})))}},"2isz":function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"frontmatter":{"title":"A Better Album Ranking Algorithm","date":"March 12, 2018","datetime":"2018-03-12"},"fields":{"slug":"/blog/a-better-album-ranking-algorithm/"}}},{"node":{"frontmatter":{"title":"Request Timeouts With the Fetch API","date":"March 30, 2019","datetime":"2019-03-30"},"fields":{"slug":"/blog/fetch-with-timeout/"}}},{"node":{"frontmatter":{"title":"Functional-First Accordions","date":"December 30, 2018","datetime":"2018-12-30"},"fields":{"slug":"/blog/functional-first-accordions/"}}},{"node":{"frontmatter":{"title":"No Red Squigglies For Semicolons","date":"December 4, 2019","datetime":"2019-12-04"},"fields":{"slug":"/blog/no-red-squigglies-for-semicolons/"}}},{"node":{"frontmatter":{"title":"Customizing Tachyons","date":"November 27, 2017","datetime":"2017-11-27"},"fields":{"slug":"/blog/customizing-tachyons/"}}},{"node":{"frontmatter":{"title":"On Declarative Styling","date":"July 19, 2019","datetime":"2019-07-19"},"fields":{"slug":"/blog/on-declarative-styling/"}}},{"node":{"frontmatter":{"title":"Components are MDX\'s Secret Weapon","date":"May 14, 2020","datetime":"2020-05-14"},"fields":{"slug":"/blog/components-mdx-secret-weapon/"}}},{"node":{"frontmatter":{"title":"A Form-Fitted Z Shell","date":"September 27, 2017","datetime":"2017-09-27"},"fields":{"slug":"/blog/a-form-fitted-z-shell/"}}}]}}}')},"2wiz":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Ruben Langius","description":"My name is Ruben Langius, and I make web applications.","siteUrl":"https://www.rubenlangius.nl"}}}}')},wpQe:function(e,t,n){"use strict";n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("dRSK");var r=n("2isz"),a=n("FdF9"),o=n("TJpk"),i=n.n(o),s=n("izhR"),l=n("2wiz"),c=n("0XYY"),d=n("Zttt"),u=n("+3Ox");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t=e.pageContext,n=e.children,o=l.data.site.siteMetadata,b=o.title,p=o.siteUrl,h=r.data.allMdx.edges.find((function(e){return e.node.frontmatter.title===t.frontmatter.title})).node,f={frontmatter:m({},t.frontmatter,{},h.frontmatter),fields:h.fields};return a.default.createElement(d.a,null,a.default.createElement(i.a,null,a.default.createElement("title",null,f.frontmatter.title),a.default.createElement("meta",{name:"description",content:f.frontmatter.description}),a.default.createElement("meta",{name:"twitter:site",content:"@lowmess"}),a.default.createElement("meta",{name:"twitter:card",content:"summary"}),a.default.createElement("meta",{property:"og:site_name",content:b}),a.default.createElement("meta",{property:"og:title",name:"twitter:title",content:f.frontmatter.title}),a.default.createElement("meta",{property:"og:url",content:""+p+f.fields.slug}),a.default.createElement("meta",{property:"og:description",name:"twitter:description",content:f.frontmatter.description})),a.default.createElement(s.a,{as:"header"},a.default.createElement(s.b,{sx:{maxWidth:"mdx-measure",fontSize:[null,null,3]}},a.default.createElement(u.b,{as:"time",dateTime:f.frontmatter.datetime},f.frontmatter.date),a.default.createElement(u.c,{"aria-hidden":"false"},f.frontmatter.title))),a.default.createElement(c.a,{gap:4,mt:[4,5]},n))}},y1ur:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("FdF9");var r=n("7ljp"),a=n("wpQe");var o={},i={_frontmatter:o},s=a.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(s,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I’m a big fan of the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"Fetch API"),". I use it regularly in all sorts of projects, including this site and the API that powers the stats on the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"/about/"}),"about page"),". However it isn’t always as clear how to do things like error handling and request timeouts as it is in libraries like ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/axios/axios"}),"Axios"),"."),Object(r.b)("p",null,"If you’re not familiar with ",Object(r.b)("inlineCode",{parentName:"p"},"fetch"),", it’s a native API that massively simplifies making AJAX requests compared to the older ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHTTPRequest"}),"XHR")," method, and ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://caniuse.com/#feat=fetch"}),"it’s supported in all modern browsers"),". When it initially landed, however, there was no easy way to handle request timeouts. You could fake it with ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race"}),Object(r.b)("inlineCode",{parentName:"a"},"Promise.race"))," or by ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/github/fetch/issues/175#issuecomment-216791333"}),"wrapping your ",Object(r.b)("inlineCode",{parentName:"a"},"fetch")," in another Promise"),", but these solutions don’t actually cancel the request. This is where ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"}),Object(r.b)("inlineCode",{parentName:"a"},"AbortController"))," comes in."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"AbortController")," is an API that, much like its name and my previous sentence suggests, allows us to abort (cancel) requests. Though ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://caniuse.com/#feat=abortcontroller"}),"browser support isn’t ",Object(r.b)("em",{parentName:"a"},"wonderful")," at time of writing"),", it can be used in most modern browsers and ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/mo/abortcontroller-polyfill"}),"polyfills are available"),". The API itself has a very small surface area: a ",Object(r.b)("inlineCode",{parentName:"p"},"signal")," property to attach to request objects, and an ",Object(r.b)("inlineCode",{parentName:"p"},"abort")," method to actually cancel the request. Because the API is so simple, it’s very flexible — Jake Archibald has ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://developers.google.com/web/updates/2017/09/abortable-fetch"}),"a fairly in-depth article on the Google Developers blog")," going over various cancellation scenarios, as well as the history behind the API, and I highly recommend giving it a read."),Object(r.b)("p",null,"With ",Object(r.b)("inlineCode",{parentName:"p"},"AbortController"),", it becomes trivial to cancel a request if it doesn’t resolve before a given period of time: if the ",Object(r.b)("inlineCode",{parentName:"p"},"abort")," method is called before the request resolves (or before the response ",Object(r.b)("inlineCode",{parentName:"p"},"Body")," is consumed), the request is cancelled; if it’s called after, the browser just ignores the call. To put it all together, we need to:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create an instance of ",Object(r.b)("inlineCode",{parentName:"li"},"AbortController")),Object(r.b)("li",{parentName:"ol"},"Create a ",Object(r.b)("inlineCode",{parentName:"li"},"setTimeout")," function that calls the controller’s ",Object(r.b)("inlineCode",{parentName:"li"},"abort")," method"),Object(r.b)("li",{parentName:"ol"},"Pass the controller’s ",Object(r.b)("inlineCode",{parentName:"li"},"signal")," to ",Object(r.b)("inlineCode",{parentName:"li"},"fetch"),"’s options object")),Object(r.b)("h2",null,"Putting It All Together"),Object(r.b)("p",null,"First, because we’re basically writing a shim around ",Object(r.b)("inlineCode",{parentName:"p"},"fetch"),", I’m going to add an extra little perk. If the response doesn’t return in the ",Object(r.b)("inlineCode",{parentName:"p"},"200")," range (that is, if ",Object(r.b)("inlineCode",{parentName:"p"},"response.ok")," evaluates to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"), we’re going to throw an error. We absolutely do not need to do this — we could just catch our timeout and the function would work the same (we actually don’t even ",Object(r.b)("em",{parentName:"p"},"need")," to do that). However, I always perform this check anyways, so this removes a lot of boilerplate code for me."),Object(r.b)("p",null,"Anyways, here is my generic ",Object(r.b)("inlineCode",{parentName:"p"},"fetchWithTimeout")," function. It should work in any environment that supports ",Object(r.b)("inlineCode",{parentName:"p"},"fetch")," and ",Object(r.b)("inlineCode",{parentName:"p"},"AbortController"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const fetchWithTimeout = (uri, options = {}, time = 5000) => {\n  // Lets set up our `AbortController`, and create a request options object\n  // that includes the controller's `signal` to pass to `fetch`.\n  const controller = new AbortController()\n  const config = { ...options, signal: controller.signal }\n\n  // Set a timeout limit for the request using `setTimeout`. If the body\n  // of this timeout is reached before the request is completed, it will\n  // be cancelled.\n  const timeout = setTimeout(() => {\n    controller.abort()\n  }, time)\n\n  return fetch(uri, config)\n    .then((response) => {\n      // Because _any_ response is considered a success to `fetch`, we\n      // need to manually check that the response is in the 200 range.\n      // This is typically how I handle that.\n      if (!response.ok) {\n        throw new Error(`${response.status}: ${response.statusText}`)\n      }\n\n      return response\n    })\n    .catch((error) => {\n      // When we abort our `fetch`, the controller conveniently throws\n      // a named error, allowing us to handle them separately from\n      // other errors.\n      if (error.name === 'AbortError') {\n        throw new Error('Response timed out')\n      }\n\n      throw new Error(error.message)\n    })\n}\n")),Object(r.b)("p",null,"Using the function is fairly straightforward. Because we return ",Object(r.b)("inlineCode",{parentName:"p"},"fetch")," directly, we can use it in much the same way; the only change should be the addition of a third parameter (our ",Object(r.b)("inlineCode",{parentName:"p"},"time")," argument) and the extra error handling we discussed above."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"// This example _always_ logs the error, because I'm telling httpstat.us\n// to wait at least 1s before responding, but setting the timeout\n// threshold to 500ms.\n// Also, this could definitely be written in async/await if you preferred.\nfetchWithTimeout(\n  'https://httpstat.us/200?sleep=1000',\n  { headers: { Accept: 'application/json' } },\n  500\n)\n  .then((response) => response.json())\n  .then((json) => {\n    console.log(`This will never log out: ${json}`)\n  })\n  .catch((error) => {\n    console.error(error.message)\n  })\n")),Object(r.b)("p",null,"That’s it. That’s the whole post. Though the snippet is ultimately pretty simple (it’s 20 lines without whitespace and comments) writing this provided me with three major benefits: it forced me to abstract the function to the most reusable version I could, it gave me an opportunity to research ",Object(r.b)("inlineCode",{parentName:"p"},"AbortController")," to make sure I knew exactly how it behaved, and it provided a place where I can come find this snippet in the future instead of rooting through old projects."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-fetch-with-timeout-mdx-fca0572a26323e3b58bb.js.map