"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2892],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=l(a),c=i,u=h["".concat(d,".").concat(c)]||h[c]||p[c]||r;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8138:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),o=["components"],s={},d="How to Create a Payment Provider",l={unversionedId:"advanced/backend/payment/how-to-create-payment-provider",id:"advanced/backend/payment/how-to-create-payment-provider",title:"How to Create a Payment Provider",description:"In this document, you\u2019ll learn how to add a Payment Provider to your Adminfirstly server. If you\u2019re unfamiliar with the Payment architecture in Adminfirstly, make sure to check out the overview first.",source:"@site/../../docs/content/advanced/backend/payment/how-to-create-payment-provider.md",sourceDirName:"advanced/backend/payment",slug:"/advanced/backend/payment/how-to-create-payment-provider",permalink:"/advanced/backend/payment/how-to-create-payment-provider",editUrl:"https://github.com/medusajs/medusa/edit/master/www/../../docs/content/advanced/backend/payment/how-to-create-payment-provider.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture Overview",permalink:"/advanced/backend/payment/overview"},next:{title:"Frontend Payment Flow in Checkout",permalink:"/advanced/backend/payment/frontend-payment-flow-in-checkout"}},m={},p=[{value:"Overview",id:"overview",level:2},{value:"Create a Fulfillment Provider",id:"create-a-fulfillment-provider",level:2},{value:"Identifier",id:"identifier",level:3},{value:"constructor",id:"constructor",level:3},{value:"createPayment",id:"createpayment",level:3},{value:"retrievePayment",id:"retrievepayment",level:3},{value:"getStatus",id:"getstatus",level:3},{value:"updatePayment",id:"updatepayment",level:3},{value:"updatePaymentData",id:"updatepaymentdata",level:3},{value:"deletePayment",id:"deletepayment",level:3},{value:"authorizePayment",id:"authorizepayment",level:3},{value:"getPaymentData",id:"getpaymentdata",level:3},{value:"capturePayment",id:"capturepayment",level:3},{value:"refundPayment",id:"refundpayment",level:3},{value:"cancelPayment",id:"cancelpayment",level:3},{value:"Optional Methods",id:"optional-methods",level:2},{value:"retrieveSavedMethods",id:"retrievesavedmethods",level:3},{value:"What\u2019s Next \ud83d\ude80",id:"whats-next-",level:2}],h={toc:p};function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-create-a-payment-provider"},"How to Create a Payment Provider"),(0,r.kt)("p",null,"In this document, you\u2019ll learn how to add a Payment Provider to your Adminfirstly server. If you\u2019re unfamiliar with the Payment architecture in Adminfirstly, make sure to check out the ",(0,r.kt)("a",{parentName:"p",href:"/advanced/backend/payment/overview"},"overview")," first."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"A Payment Provider is the payment method used to authorize, capture, and refund payment, among other actions. An example of a Payment Provider is Stripe."),(0,r.kt)("p",null,"By default, Adminfirstly has a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/adminfirstly/adminfirstly/tree/2e6622ec5d0ae19d1782e583e099000f0a93b051/packages/adminfirstly-fulfillment-manual"},"manual payment provider")," that has minimal implementation. It can be synonymous with a Cash on Delivery payment method. It allows store operators to manage the payment themselves but still keep track of its different stages on Adminfirstly."),(0,r.kt)("p",null,"Adding a Payment Provider is as simple as creating a ",(0,r.kt)("a",{parentName:"p",href:"/advanced/backend/services/create-service"},"service")," file in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/services"),". A Payment Provider is essentially a service that extends ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentService")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"adminfirstly-interfaces"),"."),(0,r.kt)("p",null,"Payment Provider Services must have a static property ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),". It is the name that will be used to install and refer to the Payment Provider in the Adminfirstly server."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Payment Providers are loaded and installed at the server startup."))),(0,r.kt)("p",null,"The Payment Provider service is also required to implement the following methods:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createPayment"),": Called when a Payment Session for the Payment Provider is to be created."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"retrievePayment"),": Used to retrieve payment data from the third-party provider, if there\u2019s any."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"getStatus"),": Used to get the status of a Payment or Payment Session."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"updatePayment"),": Used to update the Payment Session whenever the cart and its related data are updated."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"updatePaymentData"),": Used to update the ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," field of Payment Sessions. Specifically called when a request is sent to the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.adminfirstly.com/api/store/cart/update-a-payment-session"},"Update Payment Session")," endpoint."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"deletePayment"),": Used to perform any action necessary before a Payment Session is deleted."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"authorizePayment"),": Used to authorize the payment amount of the cart before the order or swap is created."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"getPaymentData"),": Used to retrieve the data that should be stored in the ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," field of a new  Payment instance after the payment amount has been authorized."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"capturePayment"),": Used to capture the payment amount of an order or swap."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"refundPayment"),": Used to refund a payment amount of an order or swap."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cancelPayment"),": Used to perform any necessary action with the third-party payment provider when an order or swap is canceled.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All these methods must be declared async in the Payment Provider Service."))),(0,r.kt)("p",null,"These methods are used at different points in the Checkout flow as well as when processing the order after it\u2019s placed."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/WeDr0ph.jpg",alt:"Payment Flows.jpg"})),(0,r.kt)("h2",{id:"create-a-fulfillment-provider"},"Create a Fulfillment Provider"),(0,r.kt)("p",null,"The first step to create a fulfillment provider is to create a file in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/services")," with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { PaymentService } from "adminfirstly-interfaces"\n\nclass MyPaymentService extends PaymentService {\n\n}\n\nexport default MyPaymentService;\n')),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"MyPaymentService")," is the name of your Payment Provider service. For example, Stripe\u2019s Payment Provider Service is called ",(0,r.kt)("inlineCode",{parentName:"p"},"StripeProviderService"),"."),(0,r.kt)("p",null,"Payment Providers must extend ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentService")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"adminfirstly-interfaces"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Following the naming convention of Services, the name of the file should be the slug name of the Payment Provider, and the name of the class should be the camel case name of the Payment Provider suffixed with \u201cService\u201d. In the example above, the name of the file should be ",(0,r.kt)("inlineCode",{parentName:"p"},"my-payment.js"),". You can learn more in the\xa0",(0,r.kt)("a",{parentName:"p",href:"/advanced/backend/services/create-service"},"service documentation"),"."))),(0,r.kt)("h3",{id:"identifier"},"Identifier"),(0,r.kt)("p",null,"As mentioned in the overview, Payment Providers should have a static\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),"\xa0property."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentProvider"),"\xa0model has 2 properties:\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"is_installed"),". The\xa0value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),"\xa0property in the class will be used when the Payment Provider is created in the database."),(0,r.kt)("p",null,"The value of this property will also be used to reference the Payment Provider throughout the Adminfirstly server. For example, the identifier is used when a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/api/store/cart/select-a-payment-session"},"Payment Session in a cart is selected on checkout"),"."),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"You can use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"constructor"),"\xa0of your Payment Provider to have access to different services in Adminfirstly through dependency injection."),(0,r.kt)("p",null,"You can also use the constructor to initialize your integration with the third-party provider. For example, if you use a client to connect to the third-party provider\u2019s APIs, you can initialize it in the constructor and use it in other methods in the service."),(0,r.kt)("p",null,"Additionally, if you\u2019re creating your Payment Provider as an external plugin to be installed on any Adminfirstly server and you want to access the options added for the plugin, you can access it in the constructor. The options are passed as a second parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"constructor({}, options) {\n  //you can access options here\n}\n")),(0,r.kt)("h3",{id:"createpayment"},"createPayment"),(0,r.kt)("p",null,"This method is called during checkout when ",(0,r.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/api/store/cart/initialize-payment-sessions"},"Payment Sessions are initialized")," to present payment options to the customer. It is used to allow you to make any necessary calls to the third-party provider to initialize the payment. For example, in Stripe this method is used to initialize a Payment Intent for the customer."),(0,r.kt)("p",null,"The method receives the cart as an object for its first parameter. It holds all the necessary information you need to know about the cart and the customer that owns this cart."),(0,r.kt)("p",null,"This method must return an object that is going to be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment Session to be created. As mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"/advanced/backend/payment/overview"},"Architecture Overview"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field is useful to hold any data required by the third-party provider to process the payment or retrieve its details at a later point."),(0,r.kt)("p",null,"An example of a minimal implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"createPayment")," that does not interact with any third-party providers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"async createPayment(cart) {\n  return { \n    id: 'test-payment',\n    status: 'pending'\n   };\n}\n")),(0,r.kt)("h3",{id:"retrievepayment"},"retrievePayment"),(0,r.kt)("p",null,"This method is used to provide a uniform way of retrieving the payment information from the third-party provider. For example, in Stripe\u2019s Payment Provider Service this method is used to retrieve the payment intent details from Stripe."),(0,r.kt)("p",null,"This method accepts the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of a Payment Session or a Payment. So, you should make sure to store in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field any necessary data that would allow you to retrieve the payment data from the third-party provider."),(0,r.kt)("p",null,"This method must return an object containing the data from the third-party provider."),(0,r.kt)("p",null,"An example of a minimal implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"retrievePayment")," where you don\u2019t need to interact with the third-party provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"async retrievePayment(cart) {\n  return {};\n}\n")),(0,r.kt)("h3",{id:"getstatus"},"getStatus"),(0,r.kt)("p",null,"This method is used to get the status of a Payment or a Payment Session. "),(0,r.kt)("p",null,"Its main usage is in the place order workflow. If the status returned is not ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized"),", then the payment is considered failed, an error will be thrown, and the order will not be placed."),(0,r.kt)("p",null,"This method accepts the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment or Payment Session as a parameter. You can use this data to interact with the third-party provider to check the status of the payment if necessary."),(0,r.kt)("p",null,"This method returns a string that represents the status. The status must be one of the following values:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"authorized"),": The payment was successfully authorized."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pending"),": The payment is still pending. This is the default status of a Payment Session."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"requires_more"),": The payment requires more actions from the customer. For example, if the customer must complete a 3DS check before the payment is authorized."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"error"),": If an error occurred with the payment."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"canceled"),": If the payment was canceled.")),(0,r.kt)("p",null,"An example of a minimal implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"getStatus")," where you don\u2019t need to interact with the third-party provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"async getStatus (data) {\n    return data.status;\n}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This code block assumes the status is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field as demonstrated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"createPayment")," method."))),(0,r.kt)("h3",{id:"updatepayment"},"updatePayment"),(0,r.kt)("p",null,"This method is used to perform any necessary updates on the payment. This method is called whenever the cart or any of its related data is updated. For example, when a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/api/store/cart/add-a-line-item"},"line item is added to the cart")," or when a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/api/store/cart/add-a-shipping-method"},"shipping method is selected"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A line item refers to a product in the cart."))),(0,r.kt)("p",null,"It accepts the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment Session as the first parameter and the cart as an object for the second parameter."),(0,r.kt)("p",null,"You can utilize this method to interact with the third-party provider and update any details regarding the payment if necessary."),(0,r.kt)("p",null,"This method must return an object that will be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment Session."),(0,r.kt)("p",null,"An example of a minimal implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"updatePayment")," that does not need to make any updates on the third-party provider or the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment Session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"async updatePayment(sessionData, cart) {\n  return sessionData;\n}\n")),(0,r.kt)("h3",{id:"updatepaymentdata"},"updatePaymentData"),(0,r.kt)("p",null,"This method is used to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of a Payment Session. Particularly, it is called when a request is sent to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/api/store/cart/update-a-payment-session"},"Update Payment Session")," endpoint. This endpoint receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," object in the body of the request that should be used to update the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment Session."),(0,r.kt)("p",null,"This method accepts the current ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment Session as the first parameter, and the new ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field sent in the body request as the second parameter."),(0,r.kt)("p",null,"You can utilize this method to interact with the third-party provider and make any necessary updates based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field passed in the body of the request."),(0,r.kt)("p",null,"This method must return an object that will be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment Session."),(0,r.kt)("p",null,"An example of a minimal implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"updatePaymentData")," that returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"updatedData")," passed in the body of the request as-is to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment Session."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"async updatePaymentData(sessionData, updatedData) {\n  return updatedData;\n}\n")),(0,r.kt)("h3",{id:"deletepayment"},"deletePayment"),(0,r.kt)("p",null,"This method is used to perform any actions necessary before a Payment Session is deleted. The Payment Session is deleted in one of the following cases:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When a request is sent to ",(0,r.kt)("a",{parentName:"li",href:"https://docs.adminfirstly.com/api/store/cart/delete-a-payment-session"},"delete the Payment Session"),"."),(0,r.kt)("li",{parentName:"ol"},"When the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.adminfirstly.com/api/store/cart/refresh-a-payment-session"},"Payment Session is refreshed"),". The Payment Session is deleted so that a newer one is initialized instead."),(0,r.kt)("li",{parentName:"ol"},"When the Payment Provider is no longer available. This generally happens when the store operator removes it from the available Payment Provider in the admin."),(0,r.kt)("li",{parentName:"ol"},"When the region of the store is changed based on the cart information and the Payment Provider is not available in the new region.")),(0,r.kt)("p",null,"It accepts the Payment Session as an object for its first parameter."),(0,r.kt)("p",null,"You can use this method to interact with the third-party provider to delete data related to the Payment Session if necessary."),(0,r.kt)("p",null,"An example of a minimal implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"deletePayment")," where no interaction with a third-party provider is required:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"async deletePayment(paymentSession) {\n  return;\n}\n")),(0,r.kt)("h3",{id:"authorizepayment"},"authorizePayment"),(0,r.kt)("p",null,"This method is used to authorize payment using the Payment Session for an order. This is called when the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/api/store/cart/complete-a-cart"},"cart is completed")," and before the order is created."),(0,r.kt)("p",null,"This method is also used for authorizing payments of a swap of an order."),(0,r.kt)("p",null,"The payment authorization might require additional action from the customer before it is declared authorized. Once that additional action is performed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorizePayment")," method will be called again to validate that the payment is now fully authorized. So, you should make sure to implement it for this case as well, if necessary."),(0,r.kt)("p",null,"Once the payment is authorized successfully and the Payment Session status is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized"),", the order can then be placed."),(0,r.kt)("p",null,"If the payment authorization fails, then an error will be thrown and the order will not be created."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The payment authorization status is determined using the ",(0,r.kt)("inlineCode",{parentName:"p"},"getStatus")," method as mentioned earlier. If the status is ",(0,r.kt)("inlineCode",{parentName:"p"},"requires_more")," then it means additional actions are required from the customer. If the workflow process reaches the \u201cStart Create Order\u201d step and the status is not ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized"),", then the payment is considered failed."))),(0,r.kt)("p",null,"This method accepts the Payment Session as an object for its first parameter, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," object as a second parameter. The ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," object contains the following properties:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ip"),": The customer\u2019s IP."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"idempotency_key"),": The ",(0,r.kt)("a",{parentName:"li",href:"/advanced/backend/payment/overview#idempotency-key"},"Idempotency Key")," that is associated with the current cart. It is useful when retrying payments, retrying checkout at a failed point, or for payments that require additional actions from the customer.")),(0,r.kt)("p",null,"This method must return an object containing the property ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," which is a string that indicates the current status of the payment, and the property ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," which is an object containing any additional information required to perform additional payment processing such as capturing the payment. The values of both of these properties are stored in the Payment Session\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," fields respectively."),(0,r.kt)("p",null,"You can utilize this method to interact with the third-party provider and perform any actions necessary to authorize the payment."),(0,r.kt)("p",null,"An example of a minimal implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"authorizePayment")," that doesn\u2019t need to interact with any third-party provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"async authorizePayment(paymentSession, context) {\n    return {\n      status: 'authorized',\n      data: {\n        id: 'test'\n      }\n    };\n  }\n")),(0,r.kt)("h3",{id:"getpaymentdata"},"getPaymentData"),(0,r.kt)("p",null,"After the payment is authorized using ",(0,r.kt)("inlineCode",{parentName:"p"},"authorizePayment"),", a Payment instance will be created. The ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment instance will be set to the value returned from the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPaymentData")," method in the Payment Provider."),(0,r.kt)("p",null,"This method accepts the Payment Session as an object for its first parameter."),(0,r.kt)("p",null,"This method must return an object to be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment instance. You can either use it as-is or make any changes to it if necessary."),(0,r.kt)("p",null,"An example of a minimal implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"getPaymentData"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"async getPaymentData(paymentSession) {\n  return paymentSession.data;\n}\n")),(0,r.kt)("h3",{id:"capturepayment"},"capturePayment"),(0,r.kt)("p",null,"This method is used to capture the payment amount of an order. This is typically triggered manually by the store operator from the admin."),(0,r.kt)("p",null,"This method is also used for capturing payments of a swap of an order."),(0,r.kt)("p",null,"You can utilize this method to interact with the third-party provider and perform any actions necessary to capture the payment."),(0,r.kt)("p",null,"This method accepts the Payment as an object for its first parameter."),(0,r.kt)("p",null,"This method must return an object that will be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment."),(0,r.kt)("p",null,"An example of a minimal implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"capturePayment")," that doesn\u2019t need to interact with a third-party provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"async capturePayment(payment) {\n  return {\n    status: 'captured'\n  };\n}\n")),(0,r.kt)("h3",{id:"refundpayment"},"refundPayment"),(0,r.kt)("p",null,"This method is used to refund an order\u2019s payment. This is typically triggered manually by the store operator from the admin. The refund amount might be the total order amount or part of it."),(0,r.kt)("p",null,"This method is also used for refunding payments of a swap of an order."),(0,r.kt)("p",null,"You can utilize this method to interact with the third-party provider and perform any actions necessary to refund the payment."),(0,r.kt)("p",null,"This method accepts the Payment as an object for its first parameter, and the amount to refund as a second parameter."),(0,r.kt)("p",null,"This method must return an object that is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment."),(0,r.kt)("p",null,"An example of a minimal implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"refundPayment")," that doesn\u2019t need to interact with a third-party provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"async refundPayment(payment, amount) {\n  return {\n    id: 'test'\n  }\n}\n")),(0,r.kt)("h3",{id:"cancelpayment"},"cancelPayment"),(0,r.kt)("p",null,"This method is used to cancel an order\u2019s payment. This method is typically triggered by one of the following situations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Before an order is placed and after the payment is authorized, an inventory check is done on products to ensure that products are still available for purchase. If the inventory check fails for any of the products, the payment is canceled."),(0,r.kt)("li",{parentName:"ol"},"If the store operator cancels the order from the admin.")),(0,r.kt)("p",null,"This method is also used for canceling payments of a swap of an order."),(0,r.kt)("p",null,"You can utilize this method to interact with the third-party provider and perform any actions necessary to cancel the payment."),(0,r.kt)("p",null,"This method accepts the Payment as an object for its first parameter."),(0,r.kt)("p",null,"This method must return an object that is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the Payment."),(0,r.kt)("p",null,"An example of a minimal implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"cancelPayment")," that doesn\u2019t need to interact with a third-party provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"async cancelPayment(payment) {\n  return {\n    id: 'test'\n  }\n}\n")),(0,r.kt)("h2",{id:"optional-methods"},"Optional Methods"),(0,r.kt)("h3",{id:"retrievesavedmethods"},"retrieveSavedMethods"),(0,r.kt)("p",null,"This method can be added to your Payment Provider service if your third-party provider supports saving the customer\u2019s payment methods. Please note that in Adminfirstly there is no way to save payment methods."),(0,r.kt)("p",null,"This method is called when a request is sent to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.adminfirstly.com/api/store/customer/retrieve-saved-payment-methods"},"Retrieve Saved Payment Methods"),"."),(0,r.kt)("p",null,"This method accepts the customer as an object for its first parameter."),(0,r.kt)("p",null,"This method returns an array of saved payment methods retrieved from the third-party provider. You have the freedom to shape the items in the array as you see fit since they will be returned as-is for the response to the request."),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,"An example of the implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"retrieveSavedMethods")," taken from Stripe\u2019s Payment Provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'/**\n* Fetches a customers saved payment methods if registered in Stripe.\n* @param {object} customer - customer to fetch saved cards for\n* @returns {Promise<Array<object>>} saved payments methods\n*/\nasync retrieveSavedMethods(customer) {\n  if (customer.metadata && customer.metadata.stripe_id) {\n    const methods = await this.stripe_.paymentMethods.list({\n      customer: customer.metadata.stripe_id,\n      type: "card",\n    })\n\n    return methods.data\n  }\n\n  return Promise.resolve([])\n}\n')),(0,r.kt)("h2",{id:"whats-next-"},"What\u2019s Next \ud83d\ude80"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check out the Payment Providers for ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adminfirstly/adminfirstly/tree/2e6622ec5d0ae19d1782e583e099000f0a93b051/packages/adminfirstly-payment-stripe"},"Stripe")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adminfirstly/adminfirstly/tree/2e6622ec5d0ae19d1782e583e099000f0a93b051/packages/adminfirstly-payment-paypal"},"PayPal")," for implementation examples."),(0,r.kt)("li",{parentName:"ul"},"Learn more about the ",(0,r.kt)("a",{parentName:"li",href:"/advanced/backend/payment/frontend-payment-flow-in-checkout"},"frontend checkout flow"),".")))}c.isMDXComponent=!0}}]);