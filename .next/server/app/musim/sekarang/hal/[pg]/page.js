"use strict";(()=>{var e={};e.id=471,e.ids=[471],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{e.exports=require("path")},7310:e=>{e.exports=require("url")},2667:(e,a,t)=>{t.r(a),t.d(a,{GlobalError:()=>i.a,__next_app__:()=>c,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>l});var s=t(7096),n=t(6132),r=t(7284),i=t.n(r),o=t(2564),p={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(p[e]=()=>o[e]);t.d(a,p);let l=["",{children:["musim",{children:["sekarang",{children:["hal",{children:["[pg]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,7389)),"/home/ian/Projects/NextJs/situskartunjepang/src/app/musim/sekarang/hal/[pg]/page.js"]}]},{}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,5699)),"/home/ian/Projects/NextJs/situskartunjepang/src/app/layout.js"],loading:[()=>Promise.resolve().then(t.bind(t,2610)),"/home/ian/Projects/NextJs/situskartunjepang/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,220)),"/home/ian/Projects/NextJs/situskartunjepang/src/app/not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/ian/Projects/NextJs/situskartunjepang/src/app/musim/sekarang/hal/[pg]/page.js"],d="/musim/sekarang/hal/[pg]/page",c={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/musim/sekarang/hal/[pg]/page",pathname:"/musim/sekarang/hal/[pg]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},7389:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});var s=t(4656),n=t(4613);t(7154);var r=t(2293),i=t(5640);let Page=async({params:e})=>{let{pg:a}=e,t=`https://api.jikan.moe/v4/seasons/now?page=${a}`,o=await fetch(t),p=await o.json(),l=p.pagination.last_visible_page;return(0,s.jsxs)("div",{className:"p-1 flex flex-col items-center",children:[s.jsx(r.Z,{title:`Kartun-Kartun Jepang Musim Ini | Halaman #${a}`}),s.jsx(n.Z,{data:p.data}),s.jsx(i.Z,{pg:a,mxpg:l,pglink:"/musim/sekarang/hal"})]})},o=Page}};var a=require("../../../../../webpack-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[579,665,21,290,384],()=>__webpack_exec__(2667));module.exports=t})();