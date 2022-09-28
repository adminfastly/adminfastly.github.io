"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2511],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},3736:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(3117),o=n(2389),i=n(3342),l=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),k=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,a.useState)(y),O=N[0],T=N[1],E=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=k[m];null!=C&&C!==O&&g.some((function(e){return e.value===C}))&&T(C)}var j=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==O&&(S(t),T(a),null!=m&&w(m,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:x,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}function p(e){return(0,a.useEffect)((function(){window.localStorage.getItem("docusaurus.tab.npm2yarn")||window.localStorage.setItem("docusaurus.tab.npm2yarn","yarn")}),[]),a.createElement(a.Fragment,null,a.createElement(c,e))}},6530:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(3736),l=n(8215),s=["components"],u={},c="Uploading images to Spaces",p={unversionedId:"how-to/uploading-images-to-spaces",id:"how-to/uploading-images-to-spaces",title:"Uploading images to Spaces",description:"In order to work with images in Adminfirstly, you need a file service plugin responsible for hosting. Following this guide will allow you to upload images to DigitalOcean Spaces.",source:"@site/../../docs/content/how-to/uploading-images-to-spaces.md",sourceDirName:"how-to",slug:"/how-to/uploading-images-to-spaces",permalink:"/how-to/uploading-images-to-spaces",editUrl:"https://github.com/medusajs/medusa/edit/master/www/../../docs/content/how-to/uploading-images-to-spaces.md",tags:[],version:"current",frontMatter:{}},d={},m=[{value:"Before you start",id:"before-you-start",level:3},{value:"Set up DigitalOcean",id:"set-up-digitalocean",level:3},{value:"Create a Space",id:"create-a-space",level:4},{value:"Generate access keys",id:"generate-access-keys",level:4},{value:"Installation",id:"installation",level:3},{value:"Try it out!",id:"try-it-out",level:3}],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uploading-images-to-spaces"},"Uploading images to Spaces"),(0,o.kt)("p",null,"In order to work with images in Adminfirstly, you need a file service plugin responsible for hosting. Following this guide will allow you to upload images to DigitalOcean Spaces."),(0,o.kt)("h3",{id:"before-you-start"},"Before you start"),(0,o.kt)("p",null,"At this point, you should have an instance of our store engine running. If not, we have a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/tutorial/set-up-your-development-environment"},"full guide")," for setting up your local environment."),(0,o.kt)("h3",{id:"set-up-digitalocean"},"Set up DigitalOcean"),(0,o.kt)("h4",{id:"create-a-space"},"Create a Space"),(0,o.kt)("p",null,"Create an account on DigitalOcean and navigate to Spaces. Create a new Space with the default settings."),(0,o.kt)("h4",{id:"generate-access-keys"},"Generate access keys"),(0,o.kt)("p",null,"Navigate to API in the left sidebar. Generate a new Spaces access key. This should provide you with an access key id and a secret key. Note them both down."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"First, install the plugin using your preferred package manager:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install adminfirstly-file-spaces\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add adminfirstly-file-spaces\n")))),(0,o.kt)("p",null,"Then configure your ",(0,o.kt)("inlineCode",{parentName:"p"},"adminfirstly-config.js")," to include the plugin alongside the required options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-=javascript"},'{\n    resolve: `adminfirstly-file-spaces`,\n    options: {\n        spaces_url: "https://test.fra1.digitaloceanspaces.com",\n        bucket: "test",\n        endpoint: "fra1.digitaloceanspaces.com",\n        access_key_id: "YOUR-ACCESS-KEY",\n        secret_access_key: "YOUR-SECRET-KEY",\n    },\n},\n')),(0,o.kt)("p",null,"In the above options, a ",(0,o.kt)("inlineCode",{parentName:"p"},"spaces_url")," is included. This can be found in your Space overview. The ",(0,o.kt)("inlineCode",{parentName:"p"},"bucket")," should point to the name you gave your Space. The ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint")," identifies the region in which you created the Space. And finally the two keys are the ones created in the previous section."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure to use an environment variable for the secret key in a live environment."))),(0,o.kt)("h3",{id:"try-it-out"},"Try it out!"),(0,o.kt)("p",null,"Finally, run your Adminfirstly server alongside our admin system to try out your new file service. Upon editing or creating products, you can now upload thumbnails and images, that are stored in DigitalOcean Spaces."))}v.isMDXComponent=!0}}]);