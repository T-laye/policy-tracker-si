"use strict";(()=>{var e={};e.id=599,e.ids=[599],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9648:e=>{e.exports=import("axios")},6249:(e,a)=>{Object.defineProperty(a,"l",{enumerable:!0,get:function(){return function e(a,t){return t in a?a[t]:"then"in a&&"function"==typeof a.then?a.then(a=>e(a,t)):"function"==typeof a&&"default"===t?a:void 0}}})},1881:(e,a,t)=>{t.a(e,async(e,n)=>{try{t.r(a),t.d(a,{config:()=>u,default:()=>c,routeModule:()=>d});var r=t(1802),s=t(7153),o=t(6249),i=t(4484),l=e([i]);i=(l.then?(await l)():l)[0];let c=(0,o.l)(i,"default"),u=(0,o.l)(i,"config"),d=new r.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/bill/bills",pathname:"/api/bill/bills",bundlePath:"",filename:""},userland:i});n()}catch(e){n(e)}})},2961:(e,a,t)=>{t.a(e,async(e,n)=>{try{t.d(a,{a:()=>o});var r=t(9648),s=e([r]);async function o(e){let a=process.env.HUGGING_FACE_API_KEY;console.log(`Detecting bias for: "${e}"`);try{let t=await r.default.post("https://api-inference.huggingface.co/models/facebook/bart-large-mnli",{inputs:e,parameters:{candidate_labels:["neutral","biased left","biased right"]}},{headers:{Authorization:`Bearer ${a}`}});if(console.log("Raw bias detection response:",t.data),t.data&&t.data.labels)return t.data.labels[0];return"No bias detected"}catch(e){return console.error("Error in bias detection:",e.response?.data||e.message),"No bias detected"}}r=(s.then?(await s)():s)[0],n()}catch(e){n(e)}})},3909:(e,a,t)=>{t.a(e,async(e,n)=>{try{t.d(a,{k:()=>o});var r=t(9648),s=e([r]);async function o(e){let a=process.env.HUGGING_FACE_API_KEY;console.log(`Predicting passage likelihood for: "${e}"`);try{let t=await r.default.post("https://api-inference.huggingface.co/models/facebook/bart-large-mnli",{inputs:e,parameters:{candidate_labels:["likely to pass","unlikely to pass"]}},{headers:{Authorization:`Bearer ${a}`}});if(console.log("Raw prediction response:",t.data),t.data&&t.data.labels)return t.data.labels[0];return"No prediction available"}catch(e){return console.error("Error in prediction:",e.response?.data||e.message),"No prediction available"}}r=(s.then?(await s)():s)[0],n()}catch(e){n(e)}})},5499:(e,a,t)=>{t.a(e,async(e,n)=>{try{t.d(a,{i:()=>o});var r=t(9648),s=e([r]);async function o(e){let a=process.env.HUGGING_FACE_API_KEY;console.log(`Analyzing sentiment for: "${e}"`);try{let t=await r.default.post("https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment",{inputs:e},{headers:{Authorization:`Bearer ${a}`}});if(console.log("Raw sentiment response:",t.data),t.data&&Array.isArray(t.data))return t.data[0]?.label||"Unknown sentiment";return"Unknown sentiment"}catch(e){return console.error("Error in sentiment analysis:",e.response?.data||e.message),"Unknown sentiment"}}r=(s.then?(await s)():s)[0],n()}catch(e){n(e)}})},9776:(e,a,t)=>{t.a(e,async(e,n)=>{try{t.d(a,{N:()=>o});var r=t(9648),s=e([r]);async function o(e){let a=process.env.HUGGING_FACE_API_KEY;console.log(`Summarizing the following text: "${e}"`);try{let t=await r.default.post("https://api-inference.huggingface.co/models/facebook/bart-large-cnn",{inputs:e},{headers:{Authorization:`Bearer ${a}`}});return console.log("Raw summarization response:",t.data),t.data[0]?.summary_text||"No summary available"}catch(e){return console.error("Error in summarization:",e.response?.data||e.message),"No summary available"}}r=(s.then?(await s)():s)[0],n()}catch(e){n(e)}})},4484:(e,a,t)=>{t.a(e,async(e,n)=>{try{t.r(a),t.d(a,{default:()=>u});var r=t(9648),s=t(2961),o=t(3909),i=t(9776),l=t(5499),c=e([r,s,o,i,l]);async function u(e,a){let{query:t,state:n}=e.query;try{let e=process.env.OPENSTATES_API_KEY,o=await r.default.get("https://v3.openstates.org/bills",{params:{state:n,search_query:t,apikey:e}}),c=await Promise.all(o.data.results.map(async e=>{let a=e.title||e.summary||"No text available",t=await (0,i.N)(a),n=await (0,l.i)(a),r=await (0,s.a)(a);return{...e,summary:t,sentiment:n,bias:r}}));console.log("Final bills data:",c),a.status(200).json({results:c})}catch(e){console.error("Error fetching bills:",e.response?.data||e.message),a.status(500).json({message:"Error fetching bills"})}}[r,s,o,i,l]=c.then?(await c)():c,n()}catch(e){n(e)}})},7153:(e,a)=>{var t;Object.defineProperty(a,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},1802:(e,a,t)=>{e.exports=t(145)}};var a=require("../../../webpack-api-runtime.js");a.C(e);var t=a(a.s=1881);module.exports=t})();