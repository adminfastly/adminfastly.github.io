"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3062],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},3736:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(7294),a=t(3117),o=t(2389),i=t(3342),u=t(6010),l="tabItem_LplD";function s(e){var n,t,o,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.lx)(y,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),k=h.tabGroupChoices,w=h.setTabGroupChoices,E=(0,r.useState)(g),O=E[0],T=E[1],j=[],N=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=k[d];null!=x&&x!==O&&y.some((function(e){return e.value===x}))&&T(x)}var S=function(e){var n=e.currentTarget,t=j.indexOf(n),r=y[t].value;r!==O&&(N(n),T(r),null!=d&&w(d,r))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;t=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},y.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:S,onClick:S},o,{className:(0,u.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function c(e){var n=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}function p(e){return(0,r.useEffect)((function(){window.localStorage.getItem("docusaurus.tab.npm2yarn")||window.localStorage.setItem("docusaurus.tab.npm2yarn","yarn")}),[]),r.createElement(r.Fragment,null,r.createElement(c,e))}},8208:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=t(3736),u=t(8215),l=["components"],s={},c="Stripe not showing in checkout",p={unversionedId:"troubleshooting/missing-payment-providers",id:"troubleshooting/missing-payment-providers",title:"Stripe not showing in checkout",description:"You add payment providers to your Adminfirstly instance by adding them as plugins in adminfirstly-config.js:",source:"@site/../../docs/content/troubleshooting/missing-payment-providers.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/missing-payment-providers",permalink:"/troubleshooting/missing-payment-providers",editUrl:"https://github.com/medusajs/medusa/edit/master/www/../../docs/content/troubleshooting/missing-payment-providers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error 409 in checkout",permalink:"/troubleshooting/transaction-error-in-checkout"},next:{title:"Redis not emitting events",permalink:"/troubleshooting/redis-events"}},m={},d=[],f={toc:d};function v(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stripe-not-showing-in-checkout"},"Stripe not showing in checkout"),(0,o.kt)("p",null,"You add payment providers to your Adminfirstly instance by adding them as plugins in ",(0,o.kt)("inlineCode",{parentName:"p"},"adminfirstly-config.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const plugins = [\n  ...\n  // You can create a Stripe account via: https://stripe.com\n  {\n    resolve: `adminfirstly-payment-stripe`,\n    options: {\n      api_key: STRIPE_API_KEY,\n      webhook_secret: STRIPE_WEBHOOK_SECRET,\n    },\n  },\n  ...\n];\n")),(0,o.kt)("p",null,"And installing them through your favourite package manager:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install adminfirstly-payment-stripe\n"))),(0,o.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add adminfirstly-payment-stripe\n")))),(0,o.kt)("p",null,"Though, to be able to also show them as part of your checkout flow, you need to add them to your regions."),(0,o.kt)("p",null,"In Adminfirstly Admin go to Settings -> Regions and select your newly added payment provider:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/CfR9BCV.png",alt:null})))}v.isMDXComponent=!0}}]);