"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3208],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},3736:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(3117),o=n(2389),i=n(3342),l=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.UB)(),N=v.tabGroupChoices,b=v.setTabGroupChoices,w=(0,a.useState)(k),C=w[0],T=w[1],E=[],A=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=N[m];null!=I&&I!==C&&y.some((function(e){return e.value===I}))&&T(I)}var O=function(e){var t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==C&&(A(t),T(a),null!=m&&b(m,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}function c(e){return(0,a.useEffect)((function(){window.localStorage.getItem("docusaurus.tab.npm2yarn")||window.localStorage.setItem("docusaurus.tab.npm2yarn","yarn")}),[]),a.createElement(a.Fragment,null,a.createElement(p,e))}},2999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(3736),l=n(8215),s=["components"],u={title:"Create a headless ecommerce store with Gatsby, Contentful & Adminfirstly"},p="Creating a headless ecommerce store with Gatsby, Contentful and Adminfirstly",c={unversionedId:"how-to/headless-ecommerce-store-with-gatsby-contentful-medusa",id:"how-to/headless-ecommerce-store-with-gatsby-contentful-medusa",title:"Create a headless ecommerce store with Gatsby, Contentful & Adminfirstly",description:"Adminfirstly is an open source headless commerce engine that allow you to create amazing digital commerce experiences. Adminfirstly is highly customizable, allowing you to extend the core to fit your needs.",source:"@site/../../docs/content/how-to/headless-ecommerce-store-with-gatsby-contentful-medusa.md",sourceDirName:"how-to",slug:"/how-to/headless-ecommerce-store-with-gatsby-contentful-medusa",permalink:"/how-to/headless-ecommerce-store-with-gatsby-contentful-medusa",editUrl:"https://github.com/medusajs/medusa/edit/master/www/../../docs/content/how-to/headless-ecommerce-store-with-gatsby-contentful-medusa.md",tags:[],version:"current",frontMatter:{title:"Create a headless ecommerce store with Gatsby, Contentful & Adminfirstly"},sidebar:"tutorialSidebar",previous:{title:"Strapi",permalink:"/add-plugins/strapi"},next:{title:"Making your store more powerful with Contentful",permalink:"/how-to/making-your-store-more-powerful-with-contentful"}},d={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up your Adminfirstly server",id:"setting-up-your-adminfirstly-server",level:2},{value:"What&#39;s inside",id:"whats-inside",level:3},{value:"<code>package.json</code>",id:"packagejson",level:4},{value:"<code>adminfirstly-config.js</code>",id:"adminfirstly-configjs",level:4},{value:"<code>/src</code>",id:"src",level:4},{value:"<code>/data</code>",id:"data",level:4},{value:"<code>/contentful-migrations</code>",id:"contentful-migrations",level:4},{value:"Creating a Contentful space",id:"creating-a-contentful-space",level:2},{value:"Migrating and Seeding your Contentful space",id:"migrating-and-seeding-your-contentful-space",level:2},{value:"Setting Featured Products",id:"setting-featured-products",level:2},{value:"Setting up your Gatsby storefront",id:"setting-up-your-gatsby-storefront",level:2},{value:"Summary",id:"summary",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-headless-ecommerce-store-with-gatsby-contentful-and-adminfirstly"},"Creating a headless ecommerce store with Gatsby, Contentful and Adminfirstly"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About Adminfirstly")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Adminfirstly is an open source headless commerce engine that allow you to create amazing digital commerce experiences. Adminfirstly is highly customizable, allowing you to extend the core to fit your needs."))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this guide we will go over how to set up a modern e-commerce store using ",(0,o.kt)("a",{parentName:"p",href:"https://gatsby.com"},"Gatsby")," as a front end, ",(0,o.kt)("a",{parentName:"p",href:"https://contentful.com"},"Contentful")," as a CMS system and Adminfirstly as a store engine. The resulting e-commerce store will be blazingly fast, highly extendable and will provide the necessary foundation to grow and evolve your e-commerce stack as your business expands to new markets and develops new software requirements."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"After following the steps outlines in this series you will have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Adminfirstly store engine capable of managing products, processing orders, handling orders and integrating with all the tools in your e-commerce stack."),(0,o.kt)("li",{parentName:"ul"},"A statically generated Gatsby storefront that is on brand and customizable from homepage to checkout flow."),(0,o.kt)("li",{parentName:"ul"},"A headless CMS system that can be modified and extended to create the best customer experience.")),(0,o.kt)("p",null,"You will make use of ",(0,o.kt)("inlineCode",{parentName:"p"},"adminfirstly-plugin-contentful")," which is a plugin to your Adminfirstly store engine that syncronizes products and product variants between your Adminfirstly engine and your Contentful space. This allows you to perform content enrichment in Contentful while keeping your core master data in Adminfirstly, for a truly headless commerce setup."),(0,o.kt)("p",null,"Other concepts that will be covered in this series include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gatsby plugins and ",(0,o.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/"},"File System Route API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.contentful.com/developers/docs/tutorials/cli/scripting-migrations/"},"Contentful Migrations")),(0,o.kt)("li",{parentName:"ul"},"Adminfirstly payments, fulfillments and plugins")),(0,o.kt)("p",null,"If you want to jump straight to the code for this series you can checkout:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/adminfirstly/adminfirstly-starter-contentful"},(0,o.kt)("inlineCode",{parentName:"a"},"adminfirstly-starter-contentful"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/adminfirstly/adminfirstly-contentful-storefront"},(0,o.kt)("inlineCode",{parentName:"a"},"adminfirstly-contentful-storefront")))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For a full guide to how to set up your development environment for Adminfirstly please see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/tutorials/set-up-your-development-environment"},"the tutorial")))),(0,o.kt)("p",null,"In order to get you started with your Gatsby, Contentful, Adminfirstly store you must complete a couple of installations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install the Adminfirstly CLI"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @adminfirstly/adminfirstly-cli -g\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add @adminfirstly/adminfirstly-cli\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install the Gatsby CLI"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install gatsby-cli -g\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add gatsby-cli\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.contentful.com/sign-up/"},"Create a Contentful account"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://redis.io/topics/quickstart"},"Install Redis")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"brew install redis\nbrew services start redis\n")))),(0,o.kt)("p",null,"Adminfirstly has support for SQLite and PostgreSQL and uses Redis for caching and queueing of asynchronous tasks. Redis is required for ",(0,o.kt)("inlineCode",{parentName:"p"},"adminfirstly-plugin-contentful")," to work correctly."),(0,o.kt)("h2",{id:"setting-up-your-adminfirstly-server"},"Setting up your Adminfirstly server"),(0,o.kt)("p",null,"We will make use of ",(0,o.kt)("inlineCode",{parentName:"p"},"adminfirstly new")," to setup your local Adminfirstly server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"adminfirstly new adminfirstly-contentful-store https://github.com/adminfirstly/adminfirstly-starter-contentful\n")),(0,o.kt)("p",null,"This command will setup a new directory at ",(0,o.kt)("inlineCode",{parentName:"p"},"adminfirstly-contentful-store"),", clone the ",(0,o.kt)("inlineCode",{parentName:"p"},"adminfirstly-starter-contentful")," into that directory and install the dependencies for the project."),(0,o.kt)("h3",{id:"whats-inside"},"What's inside"),(0,o.kt)("p",null,"You can now do ",(0,o.kt)("inlineCode",{parentName:"p"},"cd adminfirstly-contentful-store")," and open up your project in your text editor. Below is an overview of the directory structure and a walkthrough of what the different files do."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"adminfirstly-contentful-store\n\u251c\u2500\u2500 contentful-migrations\n|  \u251c\u2500\u2500 hero.js\n|  \u251c\u2500\u2500 index.js\n|  \u251c\u2500\u2500 link.js\n|  \u251c\u2500\u2500 navigation-item.js\n|  \u251c\u2500\u2500 navigation-menu.js\n|  \u251c\u2500\u2500 page.js\n|  \u251c\u2500\u2500 product-variant.js\n|  \u251c\u2500\u2500 product.js\n|  \u251c\u2500\u2500 region.js\n|  \u251c\u2500\u2500 tile-section.js\n|  \u2514\u2500\u2500 tile.js\n\u251c\u2500\u2500 data\n|  \u251c\u2500\u2500 contentful-seed.json\n|  \u2514\u2500\u2500 seed.json\n\u251c\u2500\u2500 src\n|  \u251c\u2500\u2500 api\n|  \u251c\u2500\u2500 loaders\n|  \u251c\u2500\u2500 services\n|  \u2514\u2500\u2500 subscribers\n\u251c\u2500\u2500 .env\n\u251c\u2500\u2500 adminfirstly-config.js\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 README.md\n")),(0,o.kt)("h4",{id:"packagejson"},(0,o.kt)("inlineCode",{parentName:"h4"},"package.json")),(0,o.kt)("p",null,"If you are familiar with Node you will probably notice that your Adminfirstly store is simply a Node project. Looking inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file you will find that one of the packages that is installed in the project is the ",(0,o.kt)("inlineCode",{parentName:"p"},"@adminfirstly/adminfirstly")," package. This is the core Adminfirstly package that comes prepacked with all the functionality necessary to do digital commerce - it is also this package that makes sure to register and use the plugins and custom functionality that are configured for your store."),(0,o.kt)("h4",{id:"adminfirstly-configjs"},(0,o.kt)("inlineCode",{parentName:"h4"},"adminfirstly-config.js")),(0,o.kt)("p",null,"Your plugins and store configuration is managed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"adminfirstly-config.js"),", if you open up the file you will see that ",(0,o.kt)("inlineCode",{parentName:"p"},"adminfirstly-plugin-contentful")," is configured with options as shown below. Later we will be setting up your Contentful space so that we can add the necessary environment variables to your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// adminfirstly-config.js\n\n// Contentful Variables\nconst CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID || "";\nconst CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || "";\nconst CONTENTFUL_ENV = process.env.CONTENTFUL_ENV || "";\n\n\nconst plugins = [\n  ...,\n  {\n    resolve: `adminfirstly-plugin-contentful`,\n    options: {\n      space_id: CONTENTFUL_SPACE_ID,\n      access_token: CONTENTFUL_ACCESS_TOKEN,\n      environment: CONTENTFUL_ENV,\n    },\n  },\n  ...\n];\n\nmodule.exports = {\n  projectConfig: {\n    redis_url: REDIS_URL,\n    database_database: "./adminfirstly-db.sql",\n    database_type: "sqlite",\n    store_cors: STORE_CORS,\n    admin_cors: ADMIN_CORS,\n  },\n  plugins,\n};\n')),(0,o.kt)("h4",{id:"src"},(0,o.kt)("inlineCode",{parentName:"h4"},"/src")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"/src")," directory there are 4 special subdirectories that are added for you already. These special directories can be used to add custom functionality to your store. Custom functionality can include custom endpoints (configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"/api"),"), custom business logic (configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"/services"),"), pub/sub-like subscriptions for asyncrhonous integration tasks (configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"/subscribers"),") and finally loader functions to be called when your Adminfirstly server starts up (configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"/loaders"),"). If you want to learn more about how to add custom functionality you can checkout ",(0,o.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/tutorials/adding-custom-functionality"},"the tutorial"),"."),(0,o.kt)("h4",{id:"data"},(0,o.kt)("inlineCode",{parentName:"h4"},"/data")),(0,o.kt)("p",null,"We will be using two seed scripts to kickstart your development, namely:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run seed:contentful\nnpm run seed\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run seed:contentful\nyarn run seed\n")))),(0,o.kt)("p",null,"Data for these seed scripts are contained in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/data")," directory."),(0,o.kt)("p",null,"When the seed scripts have been executed you will have a Contentful space that holds all the data for your website; this includes content for Pages, Navigtion Menu, etc."),(0,o.kt)("h4",{id:"contentful-migrations"},(0,o.kt)("inlineCode",{parentName:"h4"},"/contentful-migrations")),(0,o.kt)("p",null,"This directory contains scripts that create content types in your Contentful space. Contentful allows you to customize your content types with fields that can be used to hold all sorts of data, this makes it possible to create advanced data structures that will later be used to lay out your website. Writing migration scripts to evolve your content types is a really powerful tool as you can use it in CI/CD pipelines and makes your projects much more portable."),(0,o.kt)("p",null,"The migrations included in this project will create the following content types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Page"),': Represents a page on your website. Each page has a title and can take any number of "Content Modules". Content Modules can be either of the type Hero or Tile Section.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hero"),": a component that can take a Title, CTA and a background image."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tile"),": a component that can be added to a Tile Section and renders a Title, CTA and an Image."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tile Section"),": a component that can hold a number of Tiles or Products. When used with a Product, the Tile Section will display the product thumbnail and it's title and will link to the product page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Link"),": a component that can link to an external or internal path; or, alternatively, hold a reference to a Page or Product entry. If used with Page or Product, the link path will be inferred from the referenced entry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Navigation Item"),": an item to include in a Navigation Menu. Each navigation item has a title that can be displayed in a menu and a link that defines where the user will be navigated to when the item is clicked."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Product"),": represents a product as syncronized from Adminfirstly. A product's variants will be copied over as well."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Product Variant"),": The variants of a product."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Region"),": Represents an available region in Adminfirstly.")),(0,o.kt)("h2",{id:"creating-a-contentful-space"},"Creating a Contentful space"),(0,o.kt)("p",null,'To create a new Contentful space log in to your Contentful account. If you already have a Contentful account with a Space configured you can click your organization name in the top left corner to reveal an overview of your organization\'s spaces. At the bottom of the spaces list you should click "Add space".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Select "Community space" and "Web app only"'),"\nIn this guide we will be using a free space which gives you an incredibly strong foundation for creating on-brand customer experiences and advances shopping flows."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/JOAG8uk.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Add a name and select "Empty space"')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Yt8xxoX.png",alt:null})),(0,o.kt)("p",null,"Once your space is set up you can go to your space home. We will now get the credentials needed for ",(0,o.kt)("inlineCode",{parentName:"p"},"adminfirstly-plugin-contentful")," to work."),(0,o.kt)("p",null,"Open your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in your text editor you should see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# .env\nJWT_SECRET=something\nCOOKIE_SECRET=something\n\nSTRIPE_API_KEY=\nSTRIPE_WEBHOOK_SECRET=\n\nCONTENTFUL_SPACE_ID=\nCONTENTFUL_ACCESS_TOKEN=\nCONTENTFUL_ENV=\n")),(0,o.kt)("p",null,"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTENTFUL_SPACE_ID")," can be found by going to your space home and checking your browser's URL bar. The space id is the alphanumeric string following ",(0,o.kt)("inlineCode",{parentName:"p"},"https://app.contentful.com/spaces/"),". Copy this string and paste it into your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("p",null,"To get your ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTENFUL_ACCESS_TOKEN")," go to your space home and click ",(0,o.kt)("strong",{parentName:"p"},"Settings")," > ",(0,o.kt)("strong",{parentName:"p"},"API keys")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZF2VQSo.png",alt:null})),(0,o.kt)("p",null,"Then click ",(0,o.kt)("strong",{parentName:"p"},"Content management tokens")," and click ",(0,o.kt)("strong",{parentName:"p"},"Generate personal token"),". After giving your token a name you can copy it to your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/hcuAeKd.png",alt:null})),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTENTFUL_ENVIRONMENT")," add ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),"."),(0,o.kt)("p",null,"You should now have a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# .env\nJWT_SECRET=something\nCOOKIE_SECRET=something\n\nSTRIPE_API_KEY=\nSTRIPE_WEBHOOK_SECRET=\n\nCONTENTFUL_SPACE_ID=****\nCONTENTFUL_ACCESS_TOKEN=CFPAT-*******\nCONTENTFUL_ENV=master\n")),(0,o.kt)("h2",{id:"migrating-and-seeding-your-contentful-space"},"Migrating and Seeding your Contentful space"),(0,o.kt)("p",null,"Now that we have collected your credentials we are ready to migrate the Contentful space to add the content types we talked about earlier. To migrate the Contentful space open up your command line and ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"adminfirstly-contentful-store"),"."),(0,o.kt)("p",null,"You can now run:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migrate:contentful\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run migrate:contentful\n")))),(0,o.kt)("p",null,"This script will run each of the migrations in the ",(0,o.kt)("inlineCode",{parentName:"p"},"contentful-migrations"),' directory. After it has completed navigate to your Contentful space and click "Content model" in the top navigation bar. You will see that the content types will be imported into your space. Feel free to familiarize yourself with the different types by clicking them and inspecting the different fields that they hold.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/E4x43vX.png",alt:null})),(0,o.kt)("p",null,"The next step is to seed the Contentful space with some data that can be used to display your ecommerce store's pages and navigation. To seed the database open up your command line and run:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run seed:contentful\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run seed:contentful\n")))),(0,o.kt)("p",null,'In your Contentful space navigate to "Content" and you will be able to see the different entries in your space. You can filter the entries by type to, for example, only view Pages:'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/5s8NNLT.png",alt:null})),(0,o.kt)("p",null,"You will notice that there are not any Products in your store yet and this is because we haven't created any products in your Adminfirstly store."),(0,o.kt)("p",null,"To do this open your command line and run:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run seed\nnpm run start\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run seed\nyarn run start\n")))),(0,o.kt)("p",null,"This will seed your Adminfirstly database, which will result in ",(0,o.kt)("inlineCode",{parentName:"p"},"adminfirstly-plugin-contentful")," synchronizing data to your Contentful space. Everytime you add or update a product the data will be copied into your Contentful space for further enrichment."),(0,o.kt)("h2",{id:"setting-featured-products"},"Setting Featured Products"),(0,o.kt)("p",null,'In Contentful navigate to "Content" and find the Page called "Home". We will now add some featured products to the home page.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Click the "Home" entry and scroll down to the field called "Content modules"\n',(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ab50vOa.png",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Click the Content module named "Featured Products" and click "Add content" in the "Tiles" field\n',(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/5GACc0e.png",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Click "Add existing content" as e will be adding the products that were copied over by Adminfirstly\n',(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/igFPzdr.png",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Select Adminfirstly Waterbottle and Adminfirstly Shirt and click "Insert 2 entries"'))),(0,o.kt)("p",null,"Make sure that everything is published by hitting publish in the sidebar on the right-hand side."),(0,o.kt)("h2",{id:"setting-up-your-gatsby-storefront"},"Setting up your Gatsby storefront"),(0,o.kt)("p",null,"Now that we have your Adminfirstly server running and your Contentful space seeded with some starter data it is time to add a presentational layer that can be used by customers to browse and purchase the items in your store."),(0,o.kt)("p",null,"We have already created the storefront and you can install and use it by simply running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gatsby new adminfirstly-contentful-storefront https://github.com/adminfirstly/adminfirstly-contentful-storefront\n")),(0,o.kt)("p",null,"Once ",(0,o.kt)("inlineCode",{parentName:"p"},"gatsby new")," is complete you should rename the ",(0,o.kt)("inlineCode",{parentName:"p"},".env.template")," file to ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," and add a Content Delivery token. Your content delivery token is different from the personal access token you generated earlier, so make sure that you are using the correct token when you paste it into your ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,o.kt)("p",null,"To get your token go to ",(0,o.kt)("strong",{parentName:"p"},"Settings")," > ",(0,o.kt)("strong",{parentName:"p"},"API Keys")," > ",(0,o.kt)("strong",{parentName:"p"},"Add API key"),'. Now click save and copy the token specified in the field "Content Delivery API - access token".'),(0,o.kt)("p",null,"After you have copied the token and your space ID to your ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),", you can start your Gatsby development server on port 8000 by running:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run start\n")))),(0,o.kt)("p",null,"You can now go to https://localhost:8000 to check out your new Adminfirstly store."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/8MHrA73.png",alt:null})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Using three powerful tools we have now set up a modern headless ecommerce store on our local development machine. This setup can scale with your business's needs and evolve to fit create amazing commerce expereiences that are unique and on brand. The steps we took in this guide were really simple and fast: first we created a Adminfirstly server using the Adminfirstly CLI, we then configured a Contentful space by running migrations and seed scripts. We also installed a Gatsby front end for our Adminfirstly store using the Gatsby CLI."),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("p",null,"In the next part we will dig deeper into how Contentful can be used to create pages, enrich your products and structure your content. We will also take a look at the files in your Gatsby storefront."),(0,o.kt)("p",null,"Stay tuned!"))}f.isMDXComponent=!0}}]);