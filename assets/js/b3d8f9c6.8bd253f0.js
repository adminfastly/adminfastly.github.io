"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4902],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=o.createContext({}),c=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=c(t.components);return o.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=c(n),m=i,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(y,r(r({ref:e},s),{},{components:n})):o.createElement(y,r({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1895:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(3117),i=n(102),a=(n(7294),n(3905)),r=["components"],l={title:"Linking your local project with Adminfirstly Cloud"},u="Linking your local project with Adminfirstly Cloud",c={unversionedId:"tutorial/linking-your-local-project-with-medusa-cloud",id:"tutorial/linking-your-local-project-with-medusa-cloud",title:"Linking your local project with Adminfirstly Cloud",description:"Introduction",source:"@site/../../docs/content/tutorial/3-linking-your-local-project-with-medusa-cloud.md",sourceDirName:"tutorial",slug:"/tutorial/linking-your-local-project-with-medusa-cloud",permalink:"/tutorial/linking-your-local-project-with-medusa-cloud",editUrl:"https://github.com/medusajs/medusa/edit/master/www/../../docs/content/tutorial/3-linking-your-local-project-with-medusa-cloud.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Linking your local project with Adminfirstly Cloud"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Creating a Adminfirstly Cloud account and CLI authentication",id:"creating-a-adminfirstly-cloud-account-and-cli-authentication",level:2},{value:"Linking your local project",id:"linking-your-local-project",level:2},{value:"Summary",id:"summary",level:2},{value:"What&#39;s next?",id:"whats-next",level:3}],p={toc:d};function m(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linking-your-local-project-with-adminfirstly-cloud"},"Linking your local project with Adminfirstly Cloud"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this part of the tutorial you will learn how to link your local Adminfirstly project to Adminfirstly Cloud. Doing this will enhance you development experience as you will closely mimic how Adminfirstly would work in a production environment. Furthermore, you will be able to easily manage orders and products in your local project directly from Adminfirstly Cloud. Linking Adminfirstly is easily done with the Adminfirstly CLI which you should already be installed when you set up your development environment."),(0,a.kt)("h2",{id:"creating-a-adminfirstly-cloud-account-and-cli-authentication"},"Creating a Adminfirstly Cloud account and CLI authentication"),(0,a.kt)("p",null,"To link your local project you must first authenticate to Adminfirstly using your CLI. Authenticating with the CLI is done by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"adminfirstly login\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," command will open your browser where you will be presented with the authentication options available. If you already have an account you can simply authenticate and you CLI will automatically be authenticated."),(0,a.kt)("p",null,'If you don\'t have an account yet you can easily create one as part of the CLI authentication. First, choose the method that you want to login with we support logging in with GitHub, Google or simple email/password authentication. If choosing GitHub or Google without an existing account you will be taken straight to the sign up form where you can fill in your details and create an account. If you wish to sign up with an email/password combination simply click "Log in with email" and at the bottom of the form click "Sign up". Once you have filled out the sign up form your CLI will be authenticated.'),(0,a.kt)("p",null,"To test that you have successfully authenticated you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"adminfirstly whoami\n")),(0,a.kt)("p",null,"This will print out your account details."),(0,a.kt)("h2",{id:"linking-your-local-project"},"Linking your local project"),(0,a.kt)("p",null,"Once you have authenticated your CLI for your Adminfirstly Cloud account you are ready to perform local linking. To link your project first naviagate to your project root - where your ",(0,a.kt)("inlineCode",{parentName:"p"},"adminfirstly-config.js")," file is. You can now run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"adminfirstly link --develop\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," command will first check that you have authenticated your CLI which we did in the previous step. Then it will perform the local linking, which essentially adds an admin user in the local database specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"adminfirstly-config.js"),'. Finally, your browser will open Adminfirstly Cloud to perform the linking there, which tells Adminfirstly Cloud where your local server is running. On successful linking in the browser you will see a confirmation page with a "Go to orders" button. If you click this button you will be taken to an overview of the orders made in your local project.'),(0,a.kt)("p",null,"You should note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"--develop")," flag is optional for the ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," command. If provided it tells the CLI to start up your server after linking is completed; you may leave it out if you'd rather start your server separately."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For local linking to work you must make sure to have your CORS settings configured correctly. This is done by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"https://app.adminfirstly.com")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"cors_admin")," config in ",(0,a.kt)("inlineCode",{parentName:"p"},"adminfirstly-config.js"),"."))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you change the port that your local server is running on you will have to run ",(0,a.kt)("inlineCode",{parentName:"p"},"adminfirstly link")," again. ",(0,a.kt)("inlineCode",{parentName:"p"},"adminfirstly link")," uses your ",(0,a.kt)("inlineCode",{parentName:"p"},"PORT")," environment variable to specify where Adminfirstly Cloud should look for your local server."))),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"You are now able to run a local development environment that is nearly identical to a production environment. This is made possible by linking your local project using the ",(0,a.kt)("inlineCode",{parentName:"p"},"adminfirstly link")," command. In Adminfirstly Cloud you will be able to manage your store and test the features you are developing."),(0,a.kt)("h3",{id:"whats-next"},"What's next?"),(0,a.kt)("p",null,"You are all set to start developing on your Adminfirstly project. If you haven't already now would be a good time to add a front-end to your Adminfirstly server. We have two starters that you can use to get going:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/adminfirstly/nextjs-starter-adminfirstly"},"Nextjs Starter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/adminfirstly/gatsby-starter-adminfirstly"},"Gatsby Starter"))),(0,a.kt)("p",null,"The final step to take from here is to deploy your Adminfirstly project. We will cover how this is done in the next part of the tutorial (Coming soon!)."))}m.isMDXComponent=!0}}]);