(this["webpackJsonpmegaten-fusion-calculator"]=this["webpackJsonpmegaten-fusion-calculator"]||[]).push([[0],{132:function(e,n,t){},133:function(e,n,t){"use strict";t.r(n);var i=t(4),a=t(0),r=t.n(a),s=t(13),o=t.n(s),l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,186)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),i(e),a(e),r(e),s(e)}))},c=t(8),u=t(101),d=t(182),h=t(183),m=t(17),f=t(25),v=t(39),b=t(26),g=function e(n,t,i,a,r){Object(f.a)(this,e),this.id=0,this.name=void 0,this.lvl=void 0,this.race=void 0,this.rank=0,this.specialRecipe=!1,this.stats=[],this.id=n,this.name=t,this.lvl=i,this.race=a,this.stats=r};g.statsName=[];var j=function(){function e(n,t){Object(f.a)(this,e),this.demon=void 0,this.ingredients=void 0,this.demon=n,this.ingredients=t}return Object(v.a)(e,[{key:"isFused",value:function(){return!!this.ingredients&&this.ingredients.length>0}},{key:"getBaseIngredients",value:function(){if(this.ingredients){var e,n={},t=Object(m.a)(this.ingredients);try{for(t.s();!(e=t.n()).done;){var i=e.value;n=Object(b.a)(Object(b.a)({},n),i.getBaseIngredients())}}catch(r){t.e(r)}finally{t.f()}return n}var a={};return a[this.demon.id]=this.demon,a}},{key:"toBaseIngredientsIdCode",value:function(){return Object.keys(this.getBaseIngredients()).join("-")}},{key:"toBaseIngredientSearchString",value:function(){return Object.values(this.getBaseIngredients()).map((function(e){return e.name})).join(" ")}},{key:"isWeakerThanIngredients",value:function(){return this.demon.lvl<this.getHighestIngredientLvl()}},{key:"getHighestIngredientLvl",value:function(){var e=0;if(this.ingredients){var n,t=Object(m.a)(this.ingredients);try{for(t.s();!(n=t.n()).done;){var i=n.value.getHighestIngredientLvl();i>e&&(e=i)}}catch(a){t.e(a)}finally{t.f()}return e}return this.demon.lvl}}]),e}(),p=function e(n,t){Object(f.a)(this,e),this.caption="",this.demons=[],this.caption=n,this.demons=t},O="Element",y=function(){function e(n,t,i){Object(f.a)(this,e),this.demonJson=void 0,this.fusionChartJson=void 0,this.presetJson=void 0,this.demonAry=[],this.normalFusionChart={},this.tripleFusionChart={},this.demonsPresets=[],this.gameHasElements=!1,this._usePersonaSameRaceFusionMechanic=!1,this._usePersonaTripleFusionMechanic=!1,this.disableSameDemonFusion=!1,this.idMap={},this.nameMap={},this.raceOrderMap={},this.raceLvlDemonMap={},this.demonJson=n,this.fusionChartJson=t,this.presetJson=i,this.parseDemons(),this.prepDemonIds(),this.parseFusionChart(),this.prepRaceLvlInfo(),this.parsePresets()}return Object(v.a)(e,[{key:"getDemonById",value:function(e){return this.idMap[e]}},{key:"getDemonByName",value:function(e){return this.nameMap[e]}},{key:"getDemonArray",value:function(){return this.demonAry}},{key:"getDemonPresets",value:function(){return this.demonsPresets}},{key:"fuseDemons",value:function(e,n){if(e.id!==n.id||!this.disableSameDemonFusion)return e.race===O&&n.race===O?void 0:e.race===O||n.race===O?this.fuseDemonWithElement(e,n):e.race===n.race?this.fuseDemonSameRaceNoElement(e,n):this.fuseDemonDiffRaceNoElement(e,n)}},{key:"tripleFuseDemons",value:function(e,n,t){var i=this;if(!this.disableSameDemonFusion||e.id!==n.id&&e.id!==t.id&&n.id!==t.id){var a=[e,n,t].sort((function(e,n){return e.lvl!==n.lvl?e.lvl-n.lvl:i.getRaceOrder(n.race)-i.getRaceOrder(e.race)})),r=Object(c.a)(a,3),s=r[0],o=r[1],l=r[2],u=this.getFusionRace(s.race,o.race);if(u){var d=this.getTripleFusionRace(u,l.race);if(d){var h=this.getLvlTableForRace(d,!0),m=(s.lvl+o.lvl+l.lvl+12.75)/3,f=this.findResultLvlFromLvlTable(h,m,!0),v=this.getDemonFromRaceLvl(d,f);if(v){if(v.id!==s.id&&v.id!==o.id&&v.id!==l.id)return v;var b=h.indexOf(f);if(!(b<0))return b+1<h.length?(f=h[b+1],this.getDemonFromRaceLvl(d,f)):void 0}}}}}},{key:"testGetDemon",value:function(e){if(e)return this.getDemonByName(e);if(0!==this.demonAry.length){var n=Math.floor(Math.random()*this.demonAry.length);return this.demonAry[n]}}},{key:"testGetRandomElement",value:function(){if(this.fusionChartJson.elements&&0!==this.fusionChartJson.elements.length){var e=Math.floor(Math.random()*this.fusionChartJson.elements.length);return this.getDemonByName(this.fusionChartJson.elements[e])}}},{key:"testFuseDemonWithAll",value:function(e){var n=this.testGetDemon(e);if(n){for(var t={},i=0;i<this.demonAry.length;i++){var a=this.demonAry[i],r=this.fuseDemons(n,a);r&&(t[a.name]=r)}console.log(n),console.log(t)}}},{key:"testTripleFuseDemonWithAll",value:function(e){var n=this.testGetDemon(e);if(n){for(var t={},i={},a=0;a<this.demonAry.length;a++)for(var r=this.demonAry[a],s=a;s<this.demonAry.length;s++){var o=this.demonAry[s],l=this.tripleFuseDemons(n,r,o);l&&(t[l.name]||(t[l.name]=[]),i[l.name]||(i[l.name]={}),i[l.name][r.name]||(i[l.name][r.name]=[]),i[l.name][o.name]||(i[l.name][o.name]=[]),t[l.name].push([r,o]),i[l.name][r.name].push(o.name),i[l.name][o.name].push(r.name))}console.log(n),console.log(t),console.log(i)}}},{key:"parseDemons",value:function(){g.statsName=this.demonJson.statsName;var e=this.demonJson.demons;for(var n in e){var t=e[n];this.demonAry.push(new g(0,n,t.lvl,t.race,t.stats))}}},{key:"parseFusionChart",value:function(){this.fusionChartJson.elements&&this.fusionChartJson.elements.length>0&&(this.gameHasElements=!0),this.fusionChartJson.usePersonaSameRaceFusionMechanic&&(this._usePersonaSameRaceFusionMechanic=!0),this.fusionChartJson.usePersonaTripleFusionMechanic&&(this._usePersonaTripleFusionMechanic=!0),this.fusionChartJson.disableSameDemonFusion&&(this.disableSameDemonFusion=!0);for(var e=0;e<this.fusionChartJson.raceFusionTable.length;e++)for(var n=0;n<this.fusionChartJson.raceFusionTable[e].length;n++){var t=[];if(this._usePersonaTripleFusionMechanic)n<e?t.push(this.tripleFusionChart):n===e?(t.push(this.tripleFusionChart),t.push(this.normalFusionChart)):t.push(this.normalFusionChart);else{if(n>e)continue;t.push(this.normalFusionChart)}for(var i=this.fusionChartJson.races[e],a=this.fusionChartJson.races[n],r=this.fusionChartJson.raceFusionTable[e][n],s=0,o=t;s<o.length;s++){var l=o[s];l[i]||(l[i]={}),l[i][a]=r,l[a]||(l[a]={}),l[a][i]=r}}if(this.fusionChartJson.specialRecipes)for(var c in this.fusionChartJson.specialRecipes){var u=this.getDemonByName(c);u&&(u.specialRecipe=!0,u.rank=1e3)}for(var d=0;d<this.fusionChartJson.races.length;d++)this.raceOrderMap[this.fusionChartJson.races[d]]=d}},{key:"parsePresets",value:function(){if(this.presetJson){var e,n=Object(m.a)(this.presetJson.presets);try{for(n.s();!(e=n.n()).done;){var t,i=e.value,a=[],r=Object(m.a)(i.demons);try{for(r.s();!(t=r.n()).done;){var s=t.value,o=this.getDemonByName(s);o&&a.push(o)}}catch(c){r.e(c)}finally{r.f()}var l=new p(i.caption,a);this.demonsPresets.push(l)}}catch(c){n.e(c)}finally{n.f()}}}},{key:"prepDemonIds",value:function(){this.demonAry=this.demonAry.sort((function(e,n){return e.lvl>n.lvl?1:-1}));var e,n=1,t=Object(m.a)(this.demonAry);try{for(t.s();!(e=t.n()).done;){var i=e.value;i.id=n,this.idMap[i.id]=i,this.nameMap[i.name]=i,n++}}catch(a){t.e(a)}finally{t.f()}}},{key:"prepRaceLvlInfo",value:function(){var e,n=Object(m.a)(this.demonAry);try{for(n.s();!(e=n.n()).done;){var t=e.value;this.raceLvlDemonMap[t.race]||(this.raceLvlDemonMap[t.race]={}),this.raceLvlDemonMap[t.race][t.lvl]=t}}catch(s){n.e(s)}finally{n.f()}var i,a=Object(m.a)(this.demonAry);try{for(a.s();!(i=a.n()).done;){var r=i.value;r.specialRecipe||(r.rank=this.getLvlTableForRace(r.race,!0).indexOf(r.lvl))}}catch(s){a.e(s)}finally{a.f()}}},{key:"getLvlTableForRace",value:function(e,n){if(!this.raceLvlDemonMap[e])return[];var t=[];for(var i in this.raceLvlDemonMap[e])n&&this.raceLvlDemonMap[e][i].specialRecipe||t.push(Number(i));return t}},{key:"getDemonFromRaceLvl",value:function(e,n){if(this.raceLvlDemonMap[e]&&this.raceLvlDemonMap[e][n])return this.raceLvlDemonMap[e][n]}},{key:"getFusionRace",value:function(e,n){if(this.normalFusionChart[e]&&this.normalFusionChart[e][n])return this.normalFusionChart[e][n]}},{key:"getTripleFusionRace",value:function(e,n){if(this.tripleFusionChart[e]&&this.tripleFusionChart[e][n])return this.tripleFusionChart[e][n]}},{key:"getRaceOrder",value:function(e){return this.raceOrderMap[e]}},{key:"findResultLvlFromLvlTable",value:function(e,n,t){for(var i=0,a=0;a<e.length;a++)n>e[a]&&i++;if(i>=e.length){if(t)return-1;i=e.length-1}return e[i]}},{key:"fuseDemonDiffRaceNoElement",value:function(e,n){var t=this.getFusionRace(e.race,n.race);if(t){var i=this.getLvlTableForRace(t,!0);if(0!==i.length){var a=(n.lvl+e.lvl+1)/2,r=this.findResultLvlFromLvlTable(i,a);return this.getDemonFromRaceLvl(t,r)}}}},{key:"fuseDemonSameRaceNoElement",value:function(e,n){if(this.gameHasElements){var t=this.getFusionRace(e.race,n.race);if(!t)return;return this.getDemonByName(t)}if(this._usePersonaSameRaceFusionMechanic){var i,a=this.getLvlTableForRace(n.race,!0).filter((function(n){return n!==e.lvl})),r=-1,s=Object(m.a)(a);try{for(s.s();!(i=s.n()).done;){var o=i.value;e.lvl+n.lvl>=2*o&&(r+=1)}}catch(c){s.e(c)}finally{s.f()}if(a[r]===n.lvl&&(r-=1),r<0)return;var l=a[r];return this.getDemonFromRaceLvl(e.race,l)}}},{key:"fuseDemonWithElement",value:function(e,n){var t,i;if(e.race===O)t=e,i=n;else{if(n.race!==O)return this.fuseDemonSameRaceNoElement(e,n);t=n,i=e}var a=this.fusionChartJson.races.indexOf(i.race);if(!(a<0||a>=this.fusionChartJson.elementFusionTable.length)){var r=this.fusionChartJson.elementFusionTable[a][t.rank],s=this.getLvlTableForRace(i.race),o=i.rank+r;if(!(o<0||o>=s.length))return this.getDemonFromRaceLvl(i.race,s[o])}}},{key:"usePersonaTripleFusionMechanic",get:function(){return this._usePersonaTripleFusionMechanic}},{key:"usePersonaSameRaceFusionMechanic",get:function(){return this._usePersonaSameRaceFusionMechanic}}]),e}(),F=t(53),x=t(66),C=t(45),D=t(96),k=t.n(D),R=t(23),_=t.n(R),S=function(e){var n=e.demonCompendium,t=e.ingredients,r=e.onRemoveIngredient,s=[{field:"name",headerName:"Demon",flex:1,resizable:!1},{field:"lvl",headerName:"Level",width:70,headerAlign:"center",resizable:!1,disableColumnMenu:!0},{field:"race",headerName:"Race",width:100,headerAlign:"center",resizable:!1,disableColumnMenu:!0},{field:"remove",headerName:" ",width:50,sortable:!1,disableColumnMenu:!0,renderCell:function(e){var n=e.value;return Object(i.jsx)(C.a,{"aria-label":"delete",onClick:o.bind(void 0,n),children:Object(i.jsx)(k.a,{className:_.a.removeDemonButtonIcon})})}}];function o(e){r&&r(e)}var l=Object.keys(t).map((function(e,t){var i=e,a=n.getDemonById(i);return{id:t,name:a.name,lvl:a.lvl,race:a.race,remove:a.id}})),c=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=c.current;e&&(e.firstElementChild.style.height="")}),[]),Object(i.jsx)("div",{style:{maxWidth:"600px"},ref:c,children:Object(i.jsx)(x.a,{rows:l,columns:s,disableSelectionOnClick:!0,autoHeight:!0,density:"compact",pageSize:25,rowsPerPageOptions:[25]})})},N=r.a.memo(S);function A(e){return e.isFused()?Object(i.jsx)(r.a.Fragment,{children:e.demon.name}):Object(i.jsx)("span",{className:_.a.baseIngredientName,children:e.demon.name})}function L(e){var n=Object(i.jsx)(r.a.Fragment,{});if(e.ingredients){var t,a=Object(i.jsx)(r.a.Fragment,{}),s=!0,o=Object(m.a)(e.ingredients);try{for(o.s();!(t=o.n()).done;){var l=t.value;n=Object(i.jsxs)(r.a.Fragment,{children:[n,L(l)]});var c=s?void 0:Object(i.jsx)(r.a.Fragment,{children:" + "});a=Object(i.jsxs)(r.a.Fragment,{children:[a,c,A(l)]}),s=!1}}catch(d){o.e(d)}finally{o.f()}var u=A(e);return Object(i.jsxs)(r.a.Fragment,{children:[n,Object(i.jsxs)("div",{className:_.a.recipeLine,children:[a," = ",u]})]})}return n}function M(e){return Object(i.jsx)("div",{children:L(e.value)})}function I(e){return e.value.toBaseIngredientSearchString()}var P=function(e){for(var n=e.fusionResults,t=[{field:"name",headerName:"Demon",width:120},{field:"lvl",headerName:"Level",width:70,headerAlign:"center",resizable:!1,disableColumnMenu:!0},{field:"race",headerName:"Race",width:100,headerAlign:"center",resizable:!1}],r=g.statsName,s=0;s<r.length;s++)t.push({field:"stat"+s,headerName:r[s],width:60,headerAlign:"center",resizable:!1,disableColumnMenu:!0});t.push({field:"recipe",headerName:"Recipe",flex:1,renderCell:M,valueGetter:I});var o=[];for(var l in n)if(1!==Number(l))for(var c in n[l]){var u,d=Object(m.a)(n[l][c]);try{for(d.s();!(u=d.n()).done;){for(var h=u.value,f=h.demon,v={id:0,name:f.name,lvl:f.lvl,race:f.race,recipe:h},b=0;b<r.length;b++)v["stat"+b]=f.stats[b];o.push(v)}}catch(F){d.e(F)}finally{d.f()}}o.sort((function(e,n){return n.lvl-e.lvl}));for(var j=1,p=0,O=o;p<O.length;p++){O[p].id=j,j++}var y=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=y.current;if(e){var n=e.querySelector("div");n.style.height="",n.style.width=""}}),[]),Object(i.jsx)(x.a,{rows:o,rowHeight:75,className:_.a.fusionResultsTable,columns:t,disableSelectionOnClick:!0,autoHeight:!0,rowsPerPageOptions:[10],density:"compact"})},T=r.a.memo(P),B=t(110),w=t(108),J=t(136),E=t(52),H=t.n(E),z=function e(){Object(f.a)(this,e),this.charLvl=99,this.maxIngredient=3,this.useTripleFusion=!1,this.useTripleFusionSettingIsVisible=!1};function V(e){var n=e.visible,t=e.settings,r=Object(a.useState)(t.charLvl),s=Object(c.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(t.maxIngredient),d=Object(c.a)(u,2),h=d[0],m=d[1];var f={};return n||(f.display="none"),Object(i.jsxs)("div",{style:f,className:H.a.settingsPanel,children:[Object(i.jsx)("h2",{children:"Settings"}),Object(i.jsx)(W,{label:"Character level",min:1,max:99,emptyFieldValue:99,fieldStateValueAndSetter:[o,l],onSetSettings:function(e){t.charLvl=e}}),Object(i.jsx)(W,{label:"Max ingredients per recipe",min:2,max:5,emptyFieldValue:3,fieldStateValueAndSetter:[h,m],onSetSettings:function(e){t.maxIngredient=e}}),t.useTripleFusionSettingIsVisible?Object(i.jsx)(G,{label:"Allow triple fusion",checked:t.useTripleFusion,onSetSettings:function(e){t.useTripleFusion=e}}):void 0]})}function W(e){var n=e.label,t=e.fieldStateValueAndSetter,a=e.onSetSettings,r=e.min,s=e.max,o=e.emptyFieldValue,l=Object(c.a)(t,2),u=l[0],d=l[1];return Object(i.jsxs)("div",{className:"".concat(H.a.settingsLine," ").concat(H.a.numberSettings),children:[Object(i.jsx)("span",{className:H.a.numberFieldLabel,children:n}),Object(i.jsx)(B.a,{style:{width:"50px"},type:"number",InputLabelProps:{shrink:!0},inputProps:{min:r,max:s,step:1},variant:"outlined",value:u,onChange:function(e){var n=e.target.value;if(""===n)return d(""),void a(o);var t=Number(n);t>=r&&t<=s&&(d(t),a(t))}})]})}function G(e){var n=e.label,t=e.checked,a=e.onSetSettings;return Object(i.jsx)("div",{className:"".concat(H.a.settingsLine),children:Object(i.jsx)(J.a,{control:Object(i.jsx)(w.a,{defaultChecked:t,onChange:function(e){a(e.target.checked)},color:"default"}),label:n})})}var K=t(184),Q=t(97),X=t.n(Q);function q(e){var n=e.demonCompendium,t=e.onAddDemon,a=Object(i.jsx)(r.a.Fragment,{});return n.getDemonPresets().length>0&&(a=Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)("p",{children:"Add from presets"}),Object(i.jsx)(Z,{demonCompendium:n,onAddDemon:t})]})),Object(i.jsxs)("div",{className:_.a.demonAdderContainer,children:[Object(i.jsx)("p",{children:"Add by searching"}),Object(i.jsx)(U,{demonCompendium:n,onAddDemon:t}),Object(i.jsx)("p",{children:"Add by entering level range"}),Object(i.jsx)(Y,{demonCompendium:n,onAddDemon:t}),a]})}function U(e){var n=e.demonCompendium,t=e.onAddDemon,r=Object(a.useState)(null),s=Object(c.a)(r,2),o=s[0],l=s[1],u=n.getDemonArray();function d(){o&&(t([o]),l(null))}return Object(i.jsxs)("div",{className:_.a.subAdderContainer,children:[Object(i.jsx)(K.a,{value:o,options:u,onChange:function(e,n){l(n)},onKeyPress:function(e){"Enter"===e.key&&d()},getOptionLabel:function(e){return e.name},getOptionSelected:function(e,n){return e.id===n.id},style:{width:300},autoHighlight:!0,autoSelect:!0,renderInput:function(e){return Object(i.jsx)(B.a,Object(b.a)(Object(b.a)({},e),{},{label:"Enter demon name",variant:"outlined"}))}}),Object(i.jsx)($,{onClick:function(){d()}})]})}function Y(e){var n=e.demonCompendium,t=e.onAddDemon,r=Object(a.useState)(1),s=Object(c.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(99),d=Object(c.a)(u,2),h=d[0],f=d[1];function v(e){for(var n=e.key,t=!1,i=0,a=["0","1","2","3","4","5","6","7","8","9"];i<a.length;i++){if(n===a[i]){t=!0;break}}t||(e.preventDefault(),e.stopPropagation())}function b(e,n){var t=n.target.value,i=Number(t);(""===t||i>=1&&i<=99)&&e(n.target.value)}return Object(i.jsxs)("div",{className:_.a.subAdderContainer,children:[Object(i.jsxs)("div",{className:_.a.lvlFieldsContainer,children:[Object(i.jsx)(B.a,{label:"Min Lv",style:{width:"147px"},type:"number",InputLabelProps:{shrink:!0},variant:"outlined",value:o,onChange:b.bind(void 0,l),onKeyPress:v}),Object(i.jsx)(B.a,{label:"Max Lv",style:{width:"147px"},type:"number",InputLabelProps:{shrink:!0},variant:"outlined",value:h,onKeyPress:v,onChange:b.bind(void 0,f)})]}),Object(i.jsx)($,{onClick:function(){var e,i=[],a=Object(m.a)(n.getDemonArray());try{for(a.s();!(e=a.n()).done;){var r=e.value;r.lvl>=o&&r.lvl<=h&&i.push(r)}}catch(s){a.e(s)}finally{a.f()}t(i)}})]})}function Z(e){var n,t=e.demonCompendium,r=e.onAddDemon,s=Object(a.useState)(null),o=Object(c.a)(s,2),l=o[0],u=o[1],d=[],h=1,f=Object(m.a)(t.getDemonPresets());try{for(f.s();!(n=f.n()).done;){var v=n.value;d.push({id:h,preset:v}),h++}}catch(j){f.e(j)}finally{f.f()}function g(){l&&(r(l.preset.demons),u(null))}return Object(i.jsxs)("div",{className:_.a.subAdderContainer,children:[Object(i.jsx)(K.a,{value:l,options:d,onChange:function(e,n){u(n)},onKeyPress:function(e){"Enter"===e.key&&g()},getOptionLabel:function(e){return e.preset.caption},getOptionSelected:function(e,n){return e.id===n.id},style:{width:300},autoHighlight:!0,autoSelect:!0,renderInput:function(e){return Object(i.jsx)(B.a,Object(b.a)(Object(b.a)({},e),{},{label:"Select a preset",variant:"outlined"}))}}),Object(i.jsx)($,{onClick:function(){g()}})]})}function $(e){var n=e.onClick;return Object(i.jsxs)(F.a,{variant:"outlined",onClick:n,className:_.a.addDemonButton,children:[Object(i.jsx)(X.a,{}),"Add"]})}var ee,ne,te,ie=t(100),ae=t.n(ie),re=t(98),se=t.n(re),oe=t(99),le=t.n(oe),ce=t(44),ue=t.n(ce);function de(e,n,t,i,a){for(var r=[];he(r,a);){var s=r[0],o=r[1],l=r[2],c={};for(var u in i[s])if(0!==i[s][u].length){var d=i[s][u][0].demon,h={};for(var f in i[o])if(!c[Number(f)]&&0!==i[o][f].length){var v=i[o][f][0].demon;for(var b in i[l])if(!c[Number(b)]&&!h[Number(b)]&&0!==i[l][b].length){var g=i[l][b][0].demon,j=n.tripleFuseDemons(d,v,g);if(j&&me(i,t,j,a,[d,v,g])){var p=fe(j,i[s][u],i[o][f],i[l][b]);i[a][j.id]||(i[a][j.id]=[]);var O,y=Object(m.a)(p);try{for(y.s();!(O=y.n()).done;){var F=O.value;i[a][j.id].push(F)}}catch(x){y.e(x)}finally{y.f()}}}h[v.id]=!0}c[d.id]=!0}}}function he(e,n){if(n<3)return!1;if(e.length<3)return e[0]=n-2,e[1]=1,e[2]=1,!0;for(var t=e.length-2;t>=0;t--){var i=t+1;if(e[t]-e[i]>=2)return e[t]=e[t]-1,e[i]=e[i]+1,!0}return!1}function me(e,n,t,i,a){for(var r=!1,s=i-1;s>=1;s--)if(e[s][t.id]){r=!0;break}if(r)return!1;if(t.lvl>n.charLvl)return!1;if(i===n.maxIngredient){var o,l=Object(m.a)(a);try{for(l.s();!(o=l.n()).done;){var c=o.value;if(t.lvl<c.lvl)return!1}}catch(u){l.e(u)}finally{l.f()}}return!0}function fe(e){for(var n=[],t=[],i=arguments.length,a=new Array(i>1?i-1:0),r=1;r<i;r++)a[r-1]=arguments[r];for(var s=0;s<a.length;s++)n.push(0);for(;;){for(var o=[],l=0;l<a.length;l++)o.push(a[l][n[l]]);t.push(new j(e,o));for(var c=!0,u=n.length-1;u>=0;u--){var d=n[u];if(c&&(d+=1,c=!1),d>=a[u].length&&(d=0,c=!0),n[u]=d,!c)break}if(c)break}return t}function ve(e){var n=Object(b.a)({},ee);delete n[e],ne(n)}function be(e){var n=e.demonCompendium,t=Object(a.useState)({}),r=Object(c.a)(t,2);ee=r[0],ne=r[1];var s=Object(a.useState)({}),o=Object(c.a)(s,2),l=o[0],u=o[1],d=Object(a.useState)(!1),h=Object(c.a)(d,2),f=h[0],v=h[1],g=Object(a.useState)(1),p=Object(c.a)(g,2),O=p[0],y=p[1];te||((te=new z).useTripleFusion=n.usePersonaTripleFusionMechanic,te.useTripleFusionSettingIsVisible=n.usePersonaTripleFusionMechanic);var x=Object(a.useRef)(null);return Object(i.jsxs)("div",{className:ue.a.fusionRecommender,children:[Object(i.jsx)("h2",{children:"Add demons to use as fusion ingredients"}),Object(i.jsxs)("div",{className:ue.a.addDemonsAndButtonsRowContainer,children:[Object(i.jsx)(q,{demonCompendium:n,onAddDemon:function(e){var n,t=Object(b.a)({},ee),i=Object(m.a)(e);try{for(i.s();!(n=i.n()).done;){t[n.value.id]=!0}}catch(a){i.e(a)}finally{i.f()}ne(t)}},O),Object(i.jsxs)("div",{className:ue.a.buttonsRow,children:[Object(i.jsxs)(F.a,{className:ue.a.calculateButton,variant:"outlined",onClick:function(){u(function(e,n,t){for(var i={},a=1;a<=t.maxIngredient&&a<=7;a++)i[a]={};for(var r in e){var s=n.getDemonById(Number(r));if(s){var o=new j(s);i[1][s.id]||(i[1][s.id]=[]),i[1][s.id].push(o)}}for(var l=2;l<=t.maxIngredient&&l<=7;l++){for(var c=l-1;c>=l/2;c--){var u=l-c,d={};for(var h in i[c])if(0!==i[c][h].length){var f=i[c][h][0].demon;for(var v in i[u])if(0!==i[u][v].length){var b=i[u][v][0].demon;if(!d[b.id]){var g=n.fuseDemons(f,b);if(g&&me(i,t,g,l,[f,b])){var p=fe(g,i[c][h],i[u][v]);i[l][g.id]||(i[l][g.id]=[]);var O,y=Object(m.a)(p);try{for(y.s();!(O=y.n()).done;){var F=O.value;i[l][g.id].push(F)}}catch(k){y.e(k)}finally{y.f()}}}}d[f.id]=!0}}t.useTripleFusion&&de(0,n,t,i,l)}for(var x in i)if(1!==Number(x))for(var C in i[x]){var D=i[x][C].filter((function(e){return!e.isWeakerThanIngredients()}));i[x][C]=D}return i}(ee,n,te))},disabled:0===Object.keys(ee).length,children:[Object(i.jsx)(se.a,{}),"Calculate"]}),Object(i.jsx)(F.a,{className:ue.a.settingsButton,variant:"outlined",onClick:function(){v(!f)},children:Object(i.jsx)(le.a,{})}),Object(i.jsxs)(F.a,{className:ue.a.resetButton,variant:"outlined",onClick:function(){ne({}),u({}),y((O+1)%2)},children:[Object(i.jsx)(ae.a,{}),"Reset"]})]})]}),Object(i.jsx)(V,{visible:f,settings:te},O),Object(i.jsx)("h2",{children:"Fusion Ingredients"}),Object(i.jsx)(N,{demonCompendium:n,ingredients:ee,onRemoveIngredient:ve}),Object(i.jsx)("h2",{ref:x,children:"Results"}),Object(i.jsx)(T,{fusionResults:l})]})}t(132);var ge=Object(u.a)({palette:{type:"dark"},typography:{fontFamily:"sans-serif",fontSize:14}});function je(){var e=Object(a.useState)(void 0),n=Object(c.a)(e,2),s=n[0],o=n[1];Object(a.useEffect)((function(){s||function(e){var n=t.e(4).then(t.t.bind(null,187,3)).then((function(e){return e.default})),i=t.e(5).then(t.t.bind(null,188,3)).then((function(e){return e.default}));Promise.all([n,i]).then((function(n){var t=new y(n[0],n[1]);e(t)}))}(o)}),[s]);var l=s?Object(i.jsx)(be,{demonCompendium:s}):Object(i.jsx)(r.a.Fragment,{});return Object(i.jsxs)(d.a,{theme:ge,children:[Object(i.jsx)(h.a,{}),Object(i.jsxs)("div",{className:"myApp",children:[Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)("h1",{children:"Megami Tensei Fusion Recommender"})}),l]})]})}o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(je,{})}),document.getElementById("root")),l()},23:function(e,n,t){e.exports={demonAdderContainer:"ui-components_demonAdderContainer__2j3Dm",subAdderContainer:"ui-components_subAdderContainer__wG2As",lvlFieldsContainer:"ui-components_lvlFieldsContainer__1OXHc",addDemonButton:"ui-components_addDemonButton__1BBcP",removeDemonButtonIcon:"ui-components_removeDemonButtonIcon__2ga3t",fusionResultsTable:"ui-components_fusionResultsTable__2Hl-s",baseIngredientName:"ui-components_baseIngredientName__18Eu_",recipeLine:"ui-components_recipeLine__12QIM"}},44:function(e,n,t){e.exports={fusionRecommender:"fusion-recommender_fusionRecommender__zW_X6",addDemonsAndButtonsRowContainer:"fusion-recommender_addDemonsAndButtonsRowContainer__3PpcL",buttonsRow:"fusion-recommender_buttonsRow__2bfHg",calculateButton:"fusion-recommender_calculateButton__31QNj",shining:"fusion-recommender_shining__1og21",settingsButton:"fusion-recommender_settingsButton__2v9Cz",resetButton:"fusion-recommender_resetButton__3V_j0"}},52:function(e,n,t){e.exports={settingsPanel:"settings-panel_settingsPanel__1T-fU",settingsLine:"settings-panel_settingsLine__nhSDF",numberSettings:"settings-panel_numberSettings__29pFN",numberFieldLabel:"settings-panel_numberFieldLabel__1csHC"}}},[[133,1,2]]]);
//# sourceMappingURL=main.5c738abf.chunk.js.map