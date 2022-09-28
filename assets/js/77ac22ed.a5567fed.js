"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2995],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},3736:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(3117),l=n(2389),u=n(3342),o=n(6010),s="tabItem_LplD";function i(e){var t,n,l,i=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,u.UB)(),k=h.tabGroupChoices,N=h.setTabGroupChoices,w=(0,r.useState)(g),x=w[0],j=w[1],T=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=k[d];null!=E&&E!==x&&b.some((function(e){return e.value===E}))&&j(E)}var I=function(e){var t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==x&&(O(t),j(r),null!=d&&N(d,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,l.Z)();return r.createElement(i,(0,a.Z)({key:String(t)},e))}function p(e){return(0,r.useEffect)((function(){window.localStorage.getItem("docusaurus.tab.npm2yarn")||window.localStorage.setItem("docusaurus.tab.npm2yarn","yarn")}),[]),r.createElement(r.Fragment,null,r.createElement(c,e))}},4407:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),u=n(3736),o=n(8215),s=["components"],i={},c="Quickstart: Next.js",p={unversionedId:"starters/nextjs-medusa-starter",id:"starters/nextjs-medusa-starter",title:"Quickstart: Next.js",description:"Create a new Next.js project using the Adminfirstly starter template",source:"@site/../../docs/content/starters/nextjs-medusa-starter.md",sourceDirName:"starters",slug:"/starters/nextjs-medusa-starter",permalink:"/starters/nextjs-medusa-starter",editUrl:"https://github.com/medusajs/medusa/edit/master/www/../../docs/content/starters/nextjs-medusa-starter.md",tags:[],version:"current",frontMatter:{}},m={},d=[],f={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quickstart-nextjs"},"Quickstart: Next.js"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Create a new Next.js project using the Adminfirstly starter template")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app -e https://github.com/adminfirstly/nextjs-starter-adminfirstly my-adminfirstly-storefront\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Set up environment variables"),"\nNavigate into your projects directory and get your environment variables ready:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mv .env.template .env.local\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Install dependencies"),"\nUse your favourite package manager to install dependencies:"),(0,l.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start developing."),"\nStart up the local server:"),(0,l.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run dev\n")))),(0,l.kt)("p",null,"Your site is now running at http://localhost:8000!"),(0,l.kt)("p",null,"Edit ",(0,l.kt)("inlineCode",{parentName:"p"},"src/pages/index.js")," to see your site update in real-time!"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Learn more about Adminfirstly")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.adminfirstly.com/"},"Website")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/adminfirstly"},"GitHub")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.adminfirstly.com/"},"Documentation"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Learn more about Next.js")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nextjs.org/docs"},"Documentation"))))}v.isMDXComponent=!0}}]);