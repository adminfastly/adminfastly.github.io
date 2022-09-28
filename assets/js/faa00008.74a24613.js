"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4449],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},3736:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7294),i=t(3117),r=t(2389),o=t(3342),l=t(6010),s="tabItem_LplD";function u(e){var n,t,r,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,o.lx)(g,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),k=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,a.useState)(v),T=N[0],j=N[1],x=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=k[m];null!=I&&I!==T&&g.some((function(e){return e.value===I}))&&j(I)}var E=function(e){var n=e.currentTarget,t=x.indexOf(n),a=g[t].value;a!==T&&(C(n),j(a),null!=m&&w(m,a))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;t=x[i]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:E,onClick:E},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,r.Z)();return a.createElement(u,(0,i.Z)({key:String(n)},e))}function c(e){return(0,a.useEffect)((function(){window.localStorage.getItem("docusaurus.tab.npm2yarn")||window.localStorage.setItem("docusaurus.tab.npm2yarn","yarn")}),[]),a.createElement(a.Fragment,null,a.createElement(p,e))}},9566:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=t(3117),i=t(102),r=(t(7294),t(3905)),o=t(3736),l=t(8215),s=["components"],u={title:"Plugins"},p="Plugins",c={unversionedId:"guides/plugins",id:"guides/plugins",title:"Plugins",description:"The purpose of this guide is to give an introduction to the structure of a plugin and the steps required to create one. It builds upon our article describing the process of adding custom functionality. It can be seen as the proceeding steps for extracting your custom functionality to a reusable package for other developers to use.",source:"@site/../../docs/content/guides/plugins.md",sourceDirName:"guides",slug:"/guides/plugins",permalink:"/guides/plugins",editUrl:"https://github.com/medusajs/medusa/edit/master/www/../../docs/content/guides/plugins.md",tags:[],version:"current",frontMatter:{title:"Plugins"},sidebar:"tutorialSidebar",previous:{title:"Notifications and automated flows",permalink:"/how-to/notification-api"},next:{title:"Carts",permalink:"/guides/carts-in-medusa"}},d={},m=[{value:"What is a plugin?",id:"what-is-a-plugin",level:2},{value:"Building a plugin",id:"building-a-plugin",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Publishing",id:"publishing",level:3},{value:"Installation and configuration",id:"installation-and-configuration",level:2},{value:"Step 1: Installation",id:"step-1-installation",level:3},{value:"Step 2: Configuration",id:"step-2-configuration",level:3},{value:"Step 3: Usage",id:"step-3-usage",level:3},{value:"Summary",id:"summary",level:2}],h={toc:m};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,"The purpose of this guide is to give an introduction to the structure of a plugin and the steps required to create one. It builds upon our article describing the process of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/tutorial/adding-custom-functionality"},"adding custom functionality"),". It can be seen as the proceeding steps for extracting your custom functionality to a reusable package for other developers to use."),(0,r.kt)("h2",{id:"what-is-a-plugin"},"What is a plugin?"),(0,r.kt)("p",null,"Plugins offer a way to extend and integrate the core functionality of Adminfirstly."),(0,r.kt)("p",null,"In most commerce solutions, you can extend the basic features but it often comes with the expense of having to build standalone web applications. Our architecture is built such that plugins run within the same process as the core eliminating the need for extra server capacity, infrastructure and maintenance. As a result, the plugins can use all other services as dependencies and access the database."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will notice that plugins vary in naming. The name should signal what functionality they provide."))),(0,r.kt)("p",null,"In the following sections, we will go through the basics of implementing a generic plugin. And finally, how to use it as part of your commerce setup."),(0,r.kt)("h2",{id:"building-a-plugin"},"Building a plugin"),(0,r.kt)("p",null,"A plugin is essentially a Node.js project of their own. They contain a file in root, ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", that holds all metadata and dependencies of the project."),(0,r.kt)("p",null,"The first step in creating a plugin is to initialize the Node.js project:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init\n")))),(0,r.kt)("p",null,"This command will ask you to fill out your project's metadata, which will eventually be used when publishing the package to NPM. After this command completes, you are ready to start implementing the functionality."),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"We've already gone through the process of building custom services, endpoints, and subscribers in another tutorial, so this will not be repeated. The process is the same for the logic within a plugin, meaning that the functionality is loaded as part of the core if the correct naming convention is followed."),(0,r.kt)("p",null,"To quickly get started with the implementation, we advise you to copy ",(0,r.kt)("inlineCode",{parentName:"p"},"/services/welcome.js"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/index.js"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/subscribers/welcome.js")," and the config files from the tutorial and add them in ",(0,r.kt)("inlineCode",{parentName:"p"},"/src"),". As a result, you should have the following folder structure:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since the container resolution paths are automatically generated from the used directories and filenames you should avoid pre- or suffixing your file (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"services/welcomeService.js")," would result in the service being registered as ",(0,r.kt)("inlineCode",{parentName:"p"},"WelcomeServiceService"),")."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},".\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 api\n\u2502       \u2514\u2500\u2500 index.js\n\u2502   \u2514\u2500\u2500 services\n\u2502       \u2514\u2500\u2500 welcome.js\n\u2502   \u2514\u2500\u2500 subscribers\n\u2502       \u2514\u2500\u2500 welcome.js\n\u251c\u2500\u2500 .babelrc\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 adminfirstly-config.js\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 package.json\n")),(0,r.kt)("p",null,"Please note that you will need some build step before being able to properly load your plugin, since Adminfirstly expects to find the directories (",(0,r.kt)("inlineCode",{parentName:"p"},"api"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"services"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"loaders"),"\u2026) within the npm package root. In the simplest case, this could be you manually copying the folders from ",(0,r.kt)("inlineCode",{parentName:"p"},"src"),"."),(0,r.kt)("p",null,"It is worth mentioning the difference between building a generic and a non-generic plugin. A non-generic plugin has a specific purpose such as processing payments or creating fulfillments. Adminfirstly core depends on a specific implementation from such plugins, which is why we've created interfaces that enforce this. These can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"adminfirstly-interfaces"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Non-generic plugins are required to extend the correct interface, otherwise they will not be loaded correctly as part of your Adminfirstly setup."))),(0,r.kt)("p",null,"For a more comprehensive walkthrough of the implementation of such plugins, see our guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to build a fulfillment provider (Coming soon!)"),(0,r.kt)("li",{parentName:"ul"},"How to build a payment provider (Coming soon!)")),(0,r.kt)("h3",{id:"publishing"},"Publishing"),(0,r.kt)("p",null,"In order for your plugin to become a part of the Adminfirstly plugin ecosystem, you need to publish it to NPM. Make sure that you've included the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file. NPM uses the details of this file to configure the publishing. Please include ",(0,r.kt)("inlineCode",{parentName:"p"},"adminfirstly")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"adminfirstly-plugin")," and possibly more in the ",(0,r.kt)("inlineCode",{parentName:"p"},"keywords")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "name": "adminfirstly-payment-stripe",\n    ...\n  "keywords": [\n    "adminfirstly",\n    "adminfirstly-payment",\n    "adminfirstly-plugin"\n  ],\n  "description": "Stripe Payment provider for Adminfirstly Commerce",\n    ...\n}\n')),(0,r.kt)("p",null,"Finally, you should add a README for the plugin, such that the community understands the purpose of the plugin and how to install it."),(0,r.kt)("h2",{id:"installation-and-configuration"},"Installation and configuration"),(0,r.kt)("p",null,"Official Adminfirstly plugins can be found within the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/adminfirstly/adminfirstly/tree/master/packages"},"mono repo")," and community plugins can be found by searching NPM for keywords such as ",(0,r.kt)("inlineCode",{parentName:"p"},"adminfirstly")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"adminfirstly-plugin"),"."),(0,r.kt)("p",null,"Note: For plugins to become a part of the mono repo, we require you to submit a PR request. If approved, we will publish it under the Adminfirstly organisation on Github."),(0,r.kt)("p",null,"Plugins are distributed as NPM packages making it possible for developers to simply install and use a plugin via:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")))),(0,r.kt)("p",null,"After installing a plugin using your preferred package manager, it should be added to ",(0,r.kt)("inlineCode",{parentName:"p"},"adminfirstly-config.js"),". We allow you to provide options for plugins. These options can be used for anything ranging from provider requirements such as API keys or custom configuration used in the plugin's logic. These options are injected into the services, subscribers, and APIs of the plugin."),(0,r.kt)("p",null,"The following steps will install the official Contentful plugin for your Adminfirstly engine:"),(0,r.kt)("h3",{id:"step-1-installation"},"Step 1: Installation"),(0,r.kt)("p",null,"First, we add the plugin as a dependency to your project:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install adminfirstly-plugin-contentful\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add adminfirstly-plugin-contentful\n")))),(0,r.kt)("h3",{id:"step-2-configuration"},"Step 2: Configuration"),(0,r.kt)("p",null,"In the README of the plugin, you will see the options for the plugin. Some are required and some are optional."),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"adminfirstly-config.js"),", add the plugin and the required options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const plugins = [\n    ...\n    {\n    resolve: `adminfirstly-plugin-contentful`,\n    options: {\n      space_id: "some_space_id",\n      access_token: "some_access_token",\n      environment: "some_environment",\n    },\n  },\n    ...\n]\n')),(0,r.kt)("h3",{id:"step-3-usage"},"Step 3: Usage"),(0,r.kt)("p",null,"Depending on the purpose of the plugin, you will now be able to use the extended functionality as part of your commerce setup."),(0,r.kt)("p",null,"In this case, you will need to add a content type in Contentful with the fields described in the README. Products created in Adminfirstly Admin will now be synced to Contentful, such that you can enrich them with more details enabling you to enhance the customer experience of your webshop."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"As a result of following this guide, you should now be able to both implement and install plugins for you Adminfirstly project."))}f.isMDXComponent=!0}}]);