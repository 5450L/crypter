(function(){"use strict";var e={2827:function(e,t,n){n.d(t,{f:function(){return o}});var r=n(1310);const o=(e=[])=>{let t;t=e.length>0?e:r.Z.getters.getProducts;const n=r.Z.getters.getChosenCategories,o=r.Z.getters.getAttachedFilters;switch(n.includes("all")||(t=t.filter((e=>n.includes(e.category)))),o.brand&&"All"!==o.brand&&(t=t.filter((e=>e.brand===o.brand))),o.price){case"Highest price":t.sort(((e,t)=>e.price>t.price?-1:1));break;case"Lowest price":t.sort(((e,t)=>e.price>t.price?1:-1));break;default:break}switch(o.priceRange&&(t=t.filter((e=>+e.price<=+o.priceRange))),o.rating){case"Top rating":t.sort(((e,t)=>e.rating>t.rating?-1:1));break;case"Low rating":t.sort(((e,t)=>e.rating>t.rating?1:-1));break;default:break}return r.Z.dispatch("fetchFilteredProducts",t),t}},3738:function(e,t,n){var r=n(9963),o=n(6252);const i={id:"app"};function a(e,t,n,r,a,s){const c=(0,o.up)("TheHeader"),d=(0,o.up)("router-view"),u=(0,o.up)("TheFooter");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(c),(0,o.Wm)(d),(0,o.Wm)(u)])}var s=n(1310),c={components:{TheHeader:(0,o.RC)((()=>Promise.all([n.e(950),n.e(682)]).then(n.bind(n,8682)))),TheFooter:(0,o.RC)((()=>Promise.all([n.e(950),n.e(817)]).then(n.bind(n,2817))))},created(){s.Z.dispatch("fetchProductsInfo")}},d=n(3744);const u=(0,d.Z)(c,[["render",a]]);var l=u,f=n(2201);const g=e=>((0,o.dD)("data-v-0b3b5f4d"),e=e(),(0,o.Cn)(),e),p={class:"main"},h=g((()=>(0,o._)("section",{class:"slogan"},[(0,o._)("p",null,"CREATE, EXPLORE & COLLECT DIGITAL ART NFTS."),(0,o._)("h1",null,"The new creative economy")],-1))),m={class:"container"},b={class:"cards"};function v(e,t,n,r,i,a){const s=(0,o.up)("FiltersComponent"),c=(0,o.up)("ItemCard"),d=(0,o.up)("CommonButton"),u=(0,o.up)("Loader");return(0,o.wg)(),(0,o.iD)("div",p,[h,(0,o._)("section",m,[e.isLoading?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Wm)(s),(0,o._)("div",b,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.filteredProducts.slice(0,i.pageLimit),(e=>((0,o.wg)(),(0,o.iD)("div",{class:"card",key:e.title},[(0,o.Wm)(c,{item:e},null,8,["item"])])))),128))]),a.showLoadMore?((0,o.wg)(),(0,o.j4)(d,{key:0,title:"Load more",type:"secondary",onClick:a.loadMore},null,8,["onClick"])):(0,o.kq)("",!0)],64)),e.isLoading?((0,o.wg)(),(0,o.j4)(u,{key:1})):(0,o.kq)("",!0)])])}var C=n(3907),y={name:"MainView",data(){return{pageLimit:8}},computed:{...(0,C.Se)({products:"getProducts",filteredProducts:"getFilteredProducts",isLoading:"getIsLoading"}),showLoadMore(){return this.pageLimit<this.filteredProducts.length}},components:{FiltersComponent:(0,o.RC)((()=>n.e(965).then(n.bind(n,5965)))),CommonButton:(0,o.RC)((()=>n.e(759).then(n.bind(n,2178)))),ItemCard:(0,o.RC)((()=>n.e(231).then(n.bind(n,5505)))),Loader:(0,o.RC)((()=>n.e(889).then(n.bind(n,5889))))},methods:{loadMore(){this.pageLimit+=8}},watch:{filteredProducts(){this.pageLimit=8}}};const k=(0,d.Z)(y,[["render",v],["__scopeId","data-v-0b3b5f4d"]]);var w=k;const P=[{path:"/",name:"main",component:w},{path:"/product/:id",name:"product",component:()=>n.e(477).then(n.bind(n,1104))},{path:"/dashboard",name:"dashboard",component:()=>n.e(412).then(n.bind(n,9624))}],L=(0,f.p7)({history:(0,f.PO)("crypter_task/"),routes:P});var F=L;const A={mounted:function(e,t){e.clickOutsideEvent=function(n){e==n.target||e.contains(n.target)||t.value(n,e)},document.addEventListener("click",e.clickOutsideEvent)},unmounted:function(e){document.removeEventListener("click",e.clickOutsideEvent)}};var E=A;const T=(0,r.ri)(l);T.use(s.Z),T.use(F),T.directive("click-outside",E),T.mount("#app")},1310:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(3907),o=(n(7658),n(2827));const i={async downloadAllProducts(){return await fetch("https://dummyjson.com/products?limit=0").then((e=>e.json())).then((e=>{let t=[];return e.products.map((e=>{t.push({...e,bids:[],wish:!1})})),(0,o.f)(t)}))},async downloadCategoriesList(){return await fetch("https://dummyjson.com/products/categories").then((e=>e.json()))}},a=()=>{const e=["All"],t=f.getters.getChosenCategories,n=f.getters.getProducts;t.includes("all")?n.map((t=>{e.includes(t.brand)||e.push(t.brand)})):n.map((n=>{t.includes(n.category)&&!e.includes(n.brand)&&e.push(n.brand)})),f.dispatch("fetchSortedBrands",e)};var s={state:{products:[],allCategories:["all"],isLoading:!0},getters:{getProducts:e=>e.products,getAllCategories:e=>e.allCategories,getIsLoading:e=>e.isLoading,getProductById:e=>t=>e.products.find((e=>e.id==t))},mutations:{setProducts(e,t){e.products=t},setCategories(e,t){e.allCategories=["all",...t]},setIsLoading(e,t){e.isLoading=t}},actions:{async fetchProductsInfo(e){e.commit("setIsLoading",!0);const t=await i.downloadAllProducts(),n=await i.downloadCategoriesList();e.state.products.length<=0&&(e.commit("setProducts",t),e.commit("setCategories",n)),a(),e.commit("setIsLoading",!1)}}},c={state:{chosenCategories:["all"]},getters:{getChosenCategories:e=>e.chosenCategories},mutations:{setChosenCategory(e,t){"all"===t||e.chosenCategories.includes("all")?e.chosenCategories=[t]:e.chosenCategories.includes(t)?(e.chosenCategories=e.chosenCategories.filter((e=>e!==t)),e.chosenCategories.length||(e.chosenCategories=["all"])):e.chosenCategories.push(t)}},actions:{addChosenCategory(e,t){e.commit("setChosenCategory",t),a(),(0,o.f)()}}},d={state:{sortedBrands:["All"]},getters:{getSortedBrands:e=>e.sortedBrands},mutations:{setSortedBrands(e,t){e.sortedBrands=t}},actions:{fetchSortedBrands(e,t){e.commit("setSortedBrands",t)}}},u={state:{filteredProducts:[],attachedFilters:{price:"None",priceRange:null,rating:"None",brand:"All"}},getters:{getAttachedFilters:e=>e.attachedFilters,getFilteredProducts:e=>e.filteredProducts},mutations:{setFilteredProducts(e,t){e.filteredProducts=t},setPrice(e,t){e.attachedFilters.price=t},setPriceRange(e,t){e.attachedFilters.priceRange=t},setRating(e,t){e.attachedFilters.rating=t},setBrand(e,t){e.attachedFilters.brand=t}},actions:{fetchFilteredProducts(e,t){e.commit("setFilteredProducts",t)},changeFilter(e,{title:t,option:n}){switch(t){case"price":e.commit("setPrice",n);break;case"rating":e.commit("setRating",n);break;case"brand":e.commit("setBrand",n);break;default:break}}}},l={state:{provider:null,signer:null,account:null},mutations:{SET_WALLET(e,{provider:t,signer:n,account:r}){e.provider=t,e.signer=n,e.account=r}},getters:{getProvider:e=>e.provider,getSigner:e=>e.signer||e.provider,getAccount:e=>e.account}},f=(0,r.MT)({state:{},getters:{},mutations:{},actions:{},modules:{fetching:s,categories:c,brands:d,filters:u,wallet:l}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{81:"9e0fc1f0",231:"2a1867fc",412:"8fd1ece8",474:"bb1c42e3",477:"c80168af",504:"7eebf688",585:"59fc4494",682:"f0e2fb50",728:"886233d0",759:"bcd4f169",817:"7ea0e958",889:"9286b94c",923:"2895845b",950:"d77a307c",965:"a2410792"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{81:"ed958d94",231:"1252bbd3",412:"fcfe5a8d",474:"aefdbf03",477:"0c913e86",504:"2f782b0f",585:"d36e3876",682:"b00b2c35",728:"41fb94fe",759:"ed958d94",817:"a2989bf5",889:"d4afbea4",923:"9c185b7b",965:"bf4d7bd6"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="crypter_task:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,c;if(void 0!==i)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(g);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="crypter_task/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return o();e(r,s,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={81:1,231:1,412:1,474:1,477:1,504:1,585:1,682:1,728:1,759:1,817:1,889:1,923:1,965:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],c=r[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(t&&t(r);d<a.length;d++)i=a[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self["webpackChunkcrypter_task"]=self["webpackChunkcrypter_task"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3738)}));r=n.O(r)})();
//# sourceMappingURL=app.05b417e9.js.map