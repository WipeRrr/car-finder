"use strict";(self.webpackChunkcar_finder=self.webpackChunkcar_finder||[]).push([[666],{666:function(e,s,a){a.r(s),a.d(s,{default:function(){return se}});var r=a(433),i=a(439),n=a(791),t=a(861),l=a(757),c=a.n(l),d=a(243);d.Z.defaults.baseURL="https://650739353a38daf4803f45ac.mockapi.io/";var _=function(){var e=(0,t.Z)(c().mark((function e(s){var a,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="/adverts?completed=false&page=".concat(s,"&limit=8"),e.next=4,d.Z.get(a);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",console.log(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(s){return e.apply(this,arguments)}}(),o="CarsList_card__SkDTm",m="CarsList_car_item__wB0a1",h="CarsList_car_img__4KrZo",u="CarsList_info__HdgrA",x="CarsList_model__fb3cZ",p="CarsList_about__b3rSx";function j(e){var s=e.replace(/,/gi,"").split(" ");return s.length<2?"":s[s.length-2]}function v(e){var s=e.replace(/,/gi,"").split(" ");return s[s.length-1]}var f=a(164);var N=a.p+"static/media/sprite.0805810a6206a839c09d7b1ef75120f0.svg",g="Modal_modal__DJDMv",C="Modal_backdrop__xTnIT",b="Modal_btn_close__k9tdE",k="Modal_cross__5k9Me",F=a(184),w=document.querySelector("#modal-root");function M(e){var s=e.children,a=(e.isOpen,e.onClose);(0,n.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,f.createPortal)((0,F.jsx)("div",{className:C,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,F.jsxs)("div",{className:g,children:[(0,F.jsx)("button",{className:b,type:"button",onClick:a,children:(0,F.jsx)("svg",{className:k,width:"24",height:"24",children:(0,F.jsx)("use",{href:N+"#x"})})}),s]})}),w)}var L=a(87),y={container:"CarModal_container__VUjPC",info:"CarModal_info__YFhds",img:"CarModal_img__xYoK7",model:"CarModal_model__DRy5q",car_about:"CarModal_car_about__XeGcB",description:"CarModal_description__8zjGW",title_info:"CarModal_title_info__p2TQA",rental_list:"CarModal_rental_list__Cp2k7",rental_list_item:"CarModal_rental_list_item__h0n-O",item_value:"CarModal_item_value__ND2cu",phone:"CarModal_phone__4kexq"};function Z(e){var s=e.advert;if(s){var a=s.id,r=s.year,i=s.make,n=s.model,t=s.type,l=s.img,c=s.description,d=s.fuelConsumption,_=s.engineSize,o=s.rentalPrice,m=s.address,h=s.rentalConditions,u=s.mileage,x=j(m),p=v(m),f=h.split("\n"),N=f[0].split(": "),g=u.toString().replace(/(?=\B(?:\d{3})+(?!\d))/g,",");return(0,F.jsxs)("div",{className:y.container,children:[(0,F.jsx)("img",{className:y.img,src:l,alt:i}),(0,F.jsxs)("div",{className:y.info,children:[(0,F.jsxs)("div",{children:[(0,F.jsxs)("h1",{className:y.title,children:[i," ",(0,F.jsx)("span",{className:y.model,children:n}),", ",r]}),(0,F.jsxs)("div",{className:y.car_about,children:[(0,F.jsxs)("p",{children:[x," | ",p," | Id: ",a," | Year: ",r," | Type: ",t]}),(0,F.jsxs)("p",{children:["Fuel Consumption: ",d," | Engine Size: ",_]})]}),(0,F.jsx)("p",{className:y.description,children:c})]}),(0,F.jsx)("div",{children:(0,F.jsx)("h2",{className:y.title_info,children:"Accessories and functionalities:"})}),(0,F.jsxs)("div",{children:[(0,F.jsx)("h2",{className:y.title_info,children:"Rental Conditions:"}),(0,F.jsxs)("ul",{className:y.rental_list,children:[(0,F.jsxs)("li",{className:y.rental_list_item,children:[N[0],":"," ",(0,F.jsx)("span",{className:y.item_value,children:N[1]})]}),(0,F.jsxs)("li",{className:y.rental_list_item,children:[" ",f[1]]}),(0,F.jsx)("li",{className:y.rental_list_item,children:f[2]}),(0,F.jsxs)("li",{className:y.rental_list_item,children:["Mileage: ",(0,F.jsx)("span",{className:y.item_value,children:g})]}),(0,F.jsxs)("li",{className:y.rental_list_item,children:["Price: ",(0,F.jsx)("span",{className:y.item_value,children:o})]})]})]})]}),(0,F.jsx)(L.rU,{className:y.phone,to:"tel:+380730000000",children:"Rental car"})]})}}var S="Button_btn__RBtNK";function T(e){var s=e.text,a=e.onClick;return(0,F.jsx)("button",{className:S,type:"button",onClick:a,children:s})}function E(e){var s=e.car,a=(0,n.useState)(!1),r=(0,i.Z)(a,2),t=r[0],l=r[1],c=function(){return l(!t)},d=s.id,_=s.year,f=s.make,N=s.model,g=s.type,C=s.img,b=s.rentalPrice,k=s.rentalCompany,w=s.address,L=v(w),y=j(w);return(0,F.jsx)("li",{className:m,children:(0,F.jsxs)("div",{className:o,children:[(0,F.jsx)("div",{children:(0,F.jsx)("img",{className:h,src:C,alt:"car"})}),(0,F.jsxs)("div",{className:u,children:[(0,F.jsxs)("p",{children:[f,f.length<=5&&(0,F.jsxs)("span",{className:x,children:[" ",N]}),", ",_]}),(0,F.jsx)("p",{children:b})]}),(0,F.jsxs)("div",{className:p,children:[(0,F.jsxs)("p",{children:[(0,F.jsxs)("span",{children:[y," | "]}),(0,F.jsxs)("span",{children:[L," | "]}),(0,F.jsxs)("span",{children:[k," | "]})]}),(0,F.jsxs)("p",{children:[(0,F.jsxs)("span",{children:[g," | "]}),(0,F.jsxs)("span",{children:[N," | "]}),(0,F.jsxs)("span",{children:[d," | "]})]})]}),(0,F.jsx)(T,{text:"Learn more",onClick:c}),t&&(0,F.jsx)(M,{onClose:c,children:(0,F.jsx)(Z,{advert:s})})]})})}var R="Catalog_car_thumb__QLbkY",Q="Catalog_btn_load__Fnqkg",B="Filter_filter__vxThR",P="Filter_div__h0z7C",q="Filter_brand__j1eyh",z="Filter_text_wrapper__5OsRV",D="Filter_select__QmVYV",G="Filter_text_wrapper_2__lghms",V="Filter_chevron_down__F9ol2",Y="Filter_mileage__hagrL",H="Filter_select_2__NtCgJ",K="Filter_img__czLQS",O="Filter_text_wrapper_3__OcuTh",A="Filter_price__fZhnG",U="Filter_div_2__B-tHo",I="Filter_from__LXbxh",J="Filter_text_wrapper_4__-V-MS",X="Filter_to__E6RM4",W="Filter_main_button__KgbZZ",$="Filter_text__uqQRu",ee=function(){return(0,F.jsxs)("div",{className:B,children:[(0,F.jsxs)("div",{className:P,children:[(0,F.jsxs)("div",{className:q,children:[(0,F.jsx)("div",{className:z,children:"Car brand"}),(0,F.jsxs)("div",{className:D,children:[(0,F.jsx)("div",{className:G,children:"Enter the text"}),(0,F.jsx)("img",{className:V,alt:"Chevron down",src:"https://c.animaapp.com/cGLrQHkt/img/chevron-down-1.svg"})]})]}),(0,F.jsxs)("div",{className:Y,children:[(0,F.jsx)("div",{className:z,children:"Price/ 1 hour"}),(0,F.jsxs)("div",{className:H,children:[(0,F.jsx)("div",{className:G,children:"To"}),(0,F.jsx)("img",{className:K,alt:"Chevron down",src:"https://c.animaapp.com/cGLrQHkt/img/chevron-down-1.svg"}),(0,F.jsx)("div",{className:O,children:"$"})]})]}),(0,F.jsxs)("div",{className:A,children:[(0,F.jsx)("div",{className:z,children:"\u0421ar mileage / km"}),(0,F.jsxs)("div",{className:U,children:[(0,F.jsx)("div",{className:I,children:(0,F.jsx)("div",{className:J,children:"From"})}),(0,F.jsx)("div",{className:X,children:(0,F.jsx)("div",{className:J,children:"To"})})]})]})]}),(0,F.jsx)("button",{className:W,type:"button",children:(0,F.jsx)("div",{className:$,children:"Search"})})]})};function se(){var e=(0,n.useState)([]),s=(0,i.Z)(e,2),a=s[0],t=s[1],l=(0,n.useState)(1),c=(0,i.Z)(l,2),d=c[0],o=c[1];(0,n.useEffect)((function(){_(d).then((function(e){t((function(s){return[].concat((0,r.Z)(s),(0,r.Z)(e))}))}))}),[d]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ee,{}),(0,F.jsx)("ul",{className:R,children:a.map((function(e){return(0,F.jsx)(E,{car:e},e.id)}))}),(0,F.jsx)("button",{className:Q,type:"button",onClick:function(){o((function(e){return e+1}))},children:"Load more"})]})}}}]);
//# sourceMappingURL=666.1db3d656.chunk.js.map