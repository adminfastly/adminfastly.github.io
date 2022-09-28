"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9321],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},3736:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(3117),i=n(2389),o=n(3342),l=n(6010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=y[0])?void 0:i.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),k=b.tabGroupChoices,N=b.setTabGroupChoices,w=(0,a.useState)(g),O=w[0],T=w[1],x=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=k[m];null!=A&&A!==O&&h.some((function(e){return e.value===A}))&&T(A)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==O&&(E(t),T(a),null!=m&&N(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}function d(e){return(0,a.useEffect)((function(){window.localStorage.getItem("docusaurus.tab.npm2yarn")||window.localStorage.setItem("docusaurus.tab.npm2yarn","yarn")}),[]),a.createElement(a.Fragment,null,a.createElement(c,e))}},5279:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(3736),l=n(8215),u=["components"],s={title:"Deploying Admin on Netlify"},c="Deploying Admin on Netlify",d={unversionedId:"how-to/deploying-admin-on-netlify",id:"how-to/deploying-admin-on-netlify",title:"Deploying Admin on Netlify",description:"This is a guide for deploying Adminfirstly Admin on Netlify. Netlify is a platform that offers hosting and backend services for applications and static websites.",source:"@site/../../docs/content/how-to/deploying-admin-on-netlify.md",sourceDirName:"how-to",slug:"/how-to/deploying-admin-on-netlify",permalink:"/how-to/deploying-admin-on-netlify",editUrl:"https://github.com/medusajs/medusa/edit/master/www/../../docs/content/how-to/deploying-admin-on-netlify.md",tags:[],version:"current",frontMatter:{title:"Deploying Admin on Netlify"}},p={},m=[{value:"1. Install the Netlify CLI",id:"1-install-the-netlify-cli",level:3},{value:"2. Login to your Netlify account",id:"2-login-to-your-netlify-account",level:3},{value:"3. Netlify setup",id:"3-netlify-setup",level:3},{value:"Create a new site",id:"create-a-new-site",level:4},{value:"Add an environment variable",id:"add-an-environment-variable",level:4},{value:"4. Push and deploy",id:"4-push-and-deploy",level:3},{value:"What&#39;s next?",id:"whats-next",level:3}],f={toc:m};function y(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploying-admin-on-netlify"},"Deploying Admin on Netlify"),(0,i.kt)("p",null,"This is a guide for deploying Adminfirstly Admin on Netlify. Netlify is a platform that offers hosting and backend services for applications and static websites."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At this point, you should have a running instance of Adminfirstly Admin. If not, check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/adminfirstly/admin#-setting-up-admin"},"these steps")," or use ",(0,i.kt)("inlineCode",{parentName:"p"},"npx create-adminfirstly-app")," to set up your application in a matter of minutes. For the latter, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/how-to/create-adminfirstly-app"},"this guide")," for a small walkthrough."))),(0,i.kt)("h3",{id:"1-install-the-netlify-cli"},"1. Install the Netlify CLI"),(0,i.kt)("p",null,"Install Netlify CLI on your machine using npm:"),(0,i.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install netlify-cli -g\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add netlify-cli\n")))),(0,i.kt)("h3",{id:"2-login-to-your-netlify-account"},"2. Login to your Netlify account"),(0,i.kt)("p",null,"Connect to your Netlify account from your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"netlify login\n")),(0,i.kt)("p",null,"Follow the instructions in your terminal."),(0,i.kt)("h3",{id:"3-netlify-setup"},"3. Netlify setup"),(0,i.kt)("p",null,"In order to deploy on Netlify, you need to create a new site, link the admin repository to the site and configure environment variables."),(0,i.kt)("p",null,"The Netlify CLI is used to achieve this."),(0,i.kt)("h4",{id:"create-a-new-site"},"Create a new site"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"netlify init\n")),(0,i.kt)("p",null,"Follow the instructions in your terminal to authorize and connect your Git repository."),(0,i.kt)("p",null,"The default build and deploy settings fit the needs of a Gatsby application, so leave these as is."),(0,i.kt)("h4",{id:"add-an-environment-variable"},"Add an environment variable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'netlify env:set GATSBY_adminfirstly_BACKEND_URL "https://your-adminfirstly-server.com"\n')),(0,i.kt)("p",null,"The above environment variable should point to your Adminfirstly server."),(0,i.kt)("h3",{id:"4-push-and-deploy"},"4. Push and deploy"),(0,i.kt)("p",null,"Finally to deploy the admin, commit and push your changes to the repository connected in step 3."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "Deploy Adminfirstly Admin on Netlify"\ngit push origin main\n')),(0,i.kt)("p",null,"Within a couple of minutes, your Adminfirstly Admin is live and running on Netlify."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you experience CORS issues in your new setup, you might need to add your admin url as part of the ADMIN_CORS environment variable in your server setup."))),(0,i.kt)("h3",{id:"whats-next"},"What's next?"),(0,i.kt)("p",null,"If you haven't deployed your Adminfirstly server to use with your new admin, check out our guide ",(0,i.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/how-to/deploying-on-heroku"},"Deploying on Heroku"),"."))}y.isMDXComponent=!0}}]);