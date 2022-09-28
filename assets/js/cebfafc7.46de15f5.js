"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7137],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},3736:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(3117),i=n(2389),o=n(3342),l=n(6010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.UB)(),y=w.tabGroupChoices,N=w.setTabGroupChoices,b=(0,a.useState)(k),S=b[0],T=b[1],O=[],I=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var M=y[m];null!=M&&M!==S&&f.some((function(e){return e.value===M}))&&T(M)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==S&&(I(t),T(a),null!=m&&N(m,a))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return O.push(e)},onKeyDown:_,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function d(e){var t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}function c(e){return(0,a.useEffect)((function(){window.localStorage.getItem("docusaurus.tab.npm2yarn")||window.localStorage.setItem("docusaurus.tab.npm2yarn","yarn")}),[]),a.createElement(a.Fragment,null,a.createElement(d,e))}},6808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(3736),l=n(8215),s=["components"],u={},d="Twilio SMS",c={unversionedId:"add-plugins/twilio-sms",id:"add-plugins/twilio-sms",title:"Twilio SMS",description:"In this document, you\u2019ll learn about the Twilio SMS Plugin, what it does, and how to use it in Adminfirstly.",source:"@site/../../docs/content/add-plugins/twilio-sms.md",sourceDirName:"add-plugins",slug:"/add-plugins/twilio-sms",permalink:"/add-plugins/twilio-sms",editUrl:"https://github.com/medusajs/medusa/edit/master/www/../../docs/content/add-plugins/twilio-sms.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mailchimp",permalink:"/add-plugins/mailchimp"},next:{title:"Klarna (Documentation coming soon)",permalink:"/add-plugins/klarna"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Retrieve Credentials",id:"retrieve-credentials",level:2},{value:"Install Plugin",id:"install-plugin",level:2},{value:"Example Usage of the Plugin",id:"example-usage-of-the-plugin",level:2},{value:"What\u2019s Next \ud83d\ude80",id:"whats-next-",level:2}],h={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"twilio-sms"},"Twilio SMS"),(0,i.kt)("p",null,"In this document, you\u2019ll learn about the Twilio SMS Plugin, what it does, and how to use it in Adminfirstly."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.twilio.com/sms"},"Twilio\u2019s SMS API")," can be used to send users SMS messages instantly. It has a lot of additional features such as Whatsapp messaging and conversations."),(0,i.kt)("p",null,"By integrating Twilio SMS into Adminfirstly, you\u2019ll have easy access to Twilio\u2019s SMS API to send SMS messages to your users and customers. You can use it to send Order confirmations, verification codes, reset password messages, and more."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This plugin only gives you access to the Twilio SMS API but does not implement sending messages at any given point. You\u2019ll have to add this yourself where you need it. You can look at the ",(0,i.kt)("a",{parentName:"p",href:"#example-usage-of-the-plugin"},"example later in this tutorial")," to check how you can send an SMS for a new order."))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before going further with this guide make sure you have a Adminfirstly server set up. You can follow our\xa0",(0,i.kt)("a",{parentName:"p",href:"/quickstart/quick-start"},"Quickstart guide")," if you don\u2019t."),(0,i.kt)("p",null,"You also must have a ",(0,i.kt)("a",{parentName:"p",href:"https://www.twilio.com/sms"},"Twilio account created")," so if you don\u2019t already please go ahead and create one."),(0,i.kt)("h2",{id:"retrieve-credentials"},"Retrieve Credentials"),(0,i.kt)("p",null,"For the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/adminfirstly/adminfirstly/tree/master/packages/adminfirstly-plugin-twilio-sms"},"Twilio SMS plugin"),", you need three credentials from your Twilio account: Account SID, Auth Token, and a Twilio phone number to send from. You can find these 3 from your ",(0,i.kt)("a",{parentName:"p",href:"https://console.twilio.com"},"Twilio Console\u2019s homepage"),"."),(0,i.kt)("h2",{id:"install-plugin"},"Install Plugin"),(0,i.kt)("p",null,"In the directory of your Adminfirstly server, run the following command to install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/adminfirstly/adminfirstly/tree/master/packages/adminfirstly-plugin-twilio-sms"},"Twilio SMS plugin"),":"),(0,i.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install adminfirstly-plugin-twilio-sms\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add adminfirstly-plugin-twilio-sms\n")))),(0,i.kt)("p",null,"Then, you\u2019ll need to add your credentials in ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"TWILIO_SMS_ACCOUNT_SID=<YOUR_ACCOUNT_SID>\nTWILIO_SMS_AUTH_TOKEN=<YOUR_AUTH_TOKEN>\nTWILIO_SMS_FROM_NUMBER=<YOUR_TWILIO_NUMBER>\n")),(0,i.kt)("p",null,"Make sure to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<YOUR_ACCOUNT_SID>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<YOUR_AUTH_TOKEN>"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"<YOUR_TWILIO_NUMBER>")," with the credentials you obtained from your Twilio Console."),(0,i.kt)("p",null,"Finally, add the plugin and its options in the ",(0,i.kt)("inlineCode",{parentName:"p"},"adminfirstly-config.js")," file to the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," array:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const plugins = [\n  ...,\n  {\n    resolve: `adminfirstly-plugin-twilio-sms`,\n    options: {\n      account_sid: process.env.TWILIO_SMS_ACCOUNT_SID,\n      auth_token: process.env.TWILIO_SMS_AUTH_TOKEN,\n      from_number: process.env.TWILIO_SMS_FROM_NUMBER\n    }\n  }\n];\n")),(0,i.kt)("h2",{id:"example-usage-of-the-plugin"},"Example Usage of the Plugin"),(0,i.kt)("p",null,"This plugin adds the service ",(0,i.kt)("inlineCode",{parentName:"p"},"twilioSmsService")," to your Adminfirstly server. To send SMS using it, all you have to do is resolve it in your file as explained in the ",(0,i.kt)("a",{parentName:"p",href:"/advanced/backend/services/create-service#using-your-custom-service"},"Services")," documentation."),(0,i.kt)("p",null,"In this example, you\u2019ll create a subscriber that listens to the ",(0,i.kt)("inlineCode",{parentName:"p"},"order.placed")," event and sends an SMS to the customer to confirm their order."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For this example to work, you\u2019ll need to install and configure Redis on your server. You can refer to the ",(0,i.kt)("a",{parentName:"p",href:"/tutorial/set-up-your-development-environment#redis"},"development guide")," to learn how to do that."))),(0,i.kt)("p",null,"Create the file ",(0,i.kt)("inlineCode",{parentName:"p"},"src/services/sms.js")," in your Adminfirstly server with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"class SmsSubscriber {\n  constructor({ twilioSmsService, orderService, eventBusService }) {\n    this.twilioSmsService_ = twilioSmsService;\n    this.orderService = orderService;\n\n    eventBusService.subscribe(\"order.placed\", this.sendSMS);\n  }\n\n  sendSMS = async (data) => {\n    const order = await this.orderService.retrieve(data.id, {\n      relations: ['shipping_address']\n    });\n\n    if (order.shipping_address.phone) {\n      this.twilioSmsService_.sendSms({\n        to: order.shipping_address.phone,\n        body: 'We have received your order #' + data.id,\n      })\n    }\n  };\n}\n\nexport default SmsSubscriber;\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor"),", you resolve the ",(0,i.kt)("inlineCode",{parentName:"p"},"twilioSmsService")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"orderService")," using dependency injection to use it later in the ",(0,i.kt)("inlineCode",{parentName:"p"},"sendSMS")," method."),(0,i.kt)("p",null,"You also subscribe to the event ",(0,i.kt)("inlineCode",{parentName:"p"},"order.placed")," and sets the event handler to be ",(0,i.kt)("inlineCode",{parentName:"p"},"sendSMS"),"."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"sendSMS"),", you first retrieve the order with its relation to ",(0,i.kt)("inlineCode",{parentName:"p"},"shipping_address")," which contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"phone")," field. If the phone is set, you send an SMS to the customer using the method ",(0,i.kt)("inlineCode",{parentName:"p"},"sendSms")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"twilioSmsService"),"."),(0,i.kt)("p",null,"This method accepts an object of parameters. These parameters are based on Twilio\u2019s SMS APIs. You can check their ",(0,i.kt)("a",{parentName:"p",href:"https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource"},"API documentation")," for more fields that you can add."),(0,i.kt)("p",null,"If you create an order now on your storefront, you should receive a message from Twilio on the phone number you entered in the shipping address."),(0,i.kt)("p",null,":::"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you\u2019re on a Twilio trial make sure that the phone number you entered on checkout is a ",(0,i.kt)("a",{parentName:"p",href:"https://console.twilio.com/us1/develop/phone-numbers/manage/verified"},"verified Twilio number on your console"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/MXtQMiL.png",alt:"Twilio Dashboard"})),(0,i.kt)("h2",{id:"whats-next-"},"What\u2019s Next \ud83d\ude80"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn more about how\xa0",(0,i.kt)("a",{parentName:"li",href:"../how-to/notification-api"},"Notifications work in Adminfirstly"),"."),(0,i.kt)("li",{parentName:"ul"},"Install the\xa0",(0,i.kt)("a",{parentName:"li",href:"/admin/quickstart"},"Adminfirstly admin"),"\xa0for functionalities like Gift Cards creation, swaps, claims, order return requests, and more.")))}v.isMDXComponent=!0}}]);