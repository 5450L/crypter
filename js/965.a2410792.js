"use strict";(self["webpackChunkcrypter_task"]=self["webpackChunkcrypter_task"]||[]).push([[965],{5965:function(e,t,l){l.r(t),l.d(t,{default:function(){return F}});var n=l(6252),o=l(3577),s=l(9963);const i=e=>((0,n.dD)("data-v-0aed8626"),e=e(),(0,n.Cn)(),e),r={class:"filters-container"},a={class:"upper"},c={class:"categories"},d=["onClick"],u={class:"lower"},C={class:"lower-filters"},p=i((()=>(0,n._)("label",null,"Price",-1))),g=i((()=>(0,n._)("label",null,"Rating",-1))),h=i((()=>(0,n._)("label",null,"Brand",-1))),m=i((()=>(0,n._)("label",null,"Price range",-1)));function _(e,t,l,i,_,w){const k=(0,n.up)("CommonButton"),y=(0,n.up)("CommonDropdown"),b=(0,n.up)("FiltersSlider");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("section",a,[(0,n._)("ul",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.allCategories,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t,class:(0,o.C_)({"chosen-category":w.isChosen(e)}),onClick:()=>w.chooseCategory(e)},(0,o.zw)(e.toUpperCase()),11,d)))),128))]),(0,n.wy)((0,n.Wm)(k,{type:"primary",title:"Filter",onClick:w.resetFilters},null,8,["onClick"]),[[s.F8,!e.chosenCategories.includes("all")]])]),(0,n._)("section",u,[(0,n._)("ul",C,[(0,n._)("li",null,[p,(0,n.Wm)(y,{optionsList:["None","Highest price","Lowest price"],filterTitle:"price"})]),(0,n._)("li",null,[g,(0,n.Wm)(y,{optionsList:["None","Top rating","Low rating"],filterTitle:"rating"})]),(0,n._)("li",null,[h,((0,n.wg)(),(0,n.j4)(y,{optionsList:e.sortedBrands,key:e.sortedBrands,filterTitle:"brand"},null,8,["optionsList"]))]),(0,n._)("li",null,[m,(0,n.Wm)(b)])])])])}var w=l(1310),k=l(3907),y={name:"FiltersComponent",computed:{...(0,k.Se)({allCategories:"getAllCategories",chosenCategories:"getChosenCategories",sortedBrands:"getSortedBrands"})},methods:{isChosen(e){return this.chosenCategories.includes(e)},chooseCategory(e){w.Z.dispatch("changeFilter",{title:"brand",option:"All"}),w.Z.dispatch("addChosenCategory",e)},resetFilters(){this.chooseCategory("all")}},components:{CommonDropdown:(0,n.RC)((()=>l.e(504).then(l.bind(l,6185)))),CommonButton:(0,n.RC)((()=>l.e(759).then(l.bind(l,2178)))),FiltersSlider:(0,n.RC)((()=>l.e(923).then(l.bind(l,4923))))}},b=l(3744);const f=(0,b.Z)(y,[["render",_],["__scopeId","data-v-0aed8626"]]);var F=f}}]);
//# sourceMappingURL=965.a2410792.js.map