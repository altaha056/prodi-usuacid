(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2018],{4757:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[language]/fokus-utama",function(){return t(7361)}])},668:function(e,n,t){"use strict";var a=t(7294);n.Z=function(e,n){var t=(0,a.useState)(!1),i=t[0],s=t[1],r=function(){var e=document.getElementById(n);if(e){if(window.innerHeight+document.documentElement.scrollTop<e.offsetHeight+100||i)return;s(!0)}};return(0,a.useEffect)((function(){return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}}),[]),(0,a.useEffect)((function(){i&&e()}),[i]),[i,s]}},8577:function(e,n,t){"use strict";var a=t(5893),i=t(9008),s=t.n(i);t(7294);n.Z=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"Universitas Sumatera Utara"}),(0,a.jsx)("link",{rel:"icon",href:"/usu_icon.png"})]}),(0,a.jsx)("div",{style:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},children:(0,a.jsxs)("div",{className:"loading-container",children:[(0,a.jsx)("img",{className:"loading-image",src:"/usu.png",alt:"logo",style:{width:70}}),(0,a.jsx)("div",{children:"Please wait..."})]})})]})}},7361:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return b},default:function(){return E}});var a=t(6042),i=t(9396),s=t(828),r=t(9815),c=t(2222),o=t(5893),u=t(3271),l=t(6378),d=t(9008),f=t.n(d),m=t(1163),h=t(7294),v=t(2690),j=t(3614),x=t(1664),g=t.n(x),p=t(6221),N=function(e){var n=e.title,t=e.image,a=e.date,i=e.slug,s=e.language,r=e.shortDescription;return(0,o.jsx)("section",{className:"ftc-no-pb",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"article-item row",children:[(0,o.jsx)("div",{className:"pl-md-0 ml-md-0 col-md-3",children:(0,o.jsx)("img",{src:t,alt:n,className:"article-thum"})}),(0,o.jsxs)("div",{className:" col-md-9",children:[(0,o.jsx)(g(),{href:"/[language]/fokus-utama/[slug]",as:"/".concat(s,"/fokus-utama/").concat(i),children:(0,o.jsx)("a",{children:(0,o.jsx)("h1",{style:{color:"black",fontSize:"20px",fontWeight:"bold"},children:n})})}),(0,o.jsx)("p",{className:"post-date-author",children:(0,p.Z)(a,"mmmm. dd, yyyy")}),(0,o.jsx)("p",{className:"article-description",children:r})]})]})})})},w=t(668),y=t(8577),Z=t(542),_=t(5522),b=!0,E=function(e){var n=e.photos,t=void 0===n?[]:n;Z.ZP.initialize("UA-152557781-1"),Z.ZP.pageview(window.location.pathname+window.location.search);var d=(0,m.useRouter)(),x=d.query.language,g="/main-focus?lang=".concat(x,"&selected=true&limit=50&"),p=(0,h.useState)(1),b=p[0],E=p[1],S=(0,h.useState)("".concat(g,"page=").concat(b)),k=S[0],F=S[1],P=(0,_.ZP)(k),I=P.data,T=P.error,U=(0,h.useState)(void 0),A=U[0],V=U[1],C=(0,h.useState)(0),z=(C[0],C[1]);if(["undefined"===typeof t?"undefined":(0,c.Z)(t)].includes("undefined")||d.isFallback)return(0,o.jsx)(y.Z,{});var H=(0,s.Z)((0,w.Z)((function(){var e=b+1;E(e),F("".concat(g,"page=").concat(e))}),"article-item"),2),L=(H[0],H[1]);(0,h.useEffect)((function(){L(!1)}),[A]);var O=function(){var e,n=null===(e=I.data.data)||void 0===e?void 0:e.map((function(e){return v.M.create(e)}));V("undefined"===typeof A?n:(0,r.Z)(A).concat((0,r.Z)(n)))};return(0,h.useEffect)((function(){I&&(setTimeout(O,1e3),z(I.data.totalItems))}),[I]),(0,h.useEffect)((function(){T&&V([])}),[T]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f(),{children:(0,o.jsxs)("title",{children:[(0,l.s)(l.Z.mainFocus)((0,u.V)(x))," | Universitas Sumatera Utara"]})}),(0,o.jsx)("section",{className:"ftco-section ftc-no-pb ftco-section--top",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("div",{className:"row no-gutters",children:(0,o.jsxs)("div",{className:"col-md-0",children:[(0,o.jsxs)("a",{className:"subheading",style:{color:"#000000"},href:"/",children:[(0,l.s)(l.Z.beranda_content)((0,u.V)(x))," ","/ ",""]}),(0,o.jsx)("a",{className:"hijau",href:"",children:(0,l.s)(l.Z.mainFocus_content)((0,u.V)(x))}),(0,o.jsx)("h2",{className:"mb-4 judul-laman",children:(0,l.s)(l.Z.mainFocus_content)((0,u.V)(x))})]})}),(0,o.jsx)("div",{className:"row another-articles",children:(0,o.jsx)("div",{className:"container",children:"undefined"===typeof A?(0,r.Z)(Array(4)).map((function(e,n){return(0,o.jsx)(j.W,{},n)})):A.map((function(e){return(0,o.jsx)(N,(0,i.Z)((0,a.Z)({},e),{language:x}),e.id)}))})})]})})]})}},828:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(3375);var i=t(1566);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||(0,a.Z)(e,n)||(0,i.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2222:function(e,n,t){"use strict";function a(e){return e&&e.constructor===Symbol?"symbol":typeof e}t.d(n,{Z:function(){return a}})}},function(e){e.O(0,[5634,9774,2888,179],(function(){return n=4757,e(e.s=n);var n}));var n=e.O();_N_E=n}]);