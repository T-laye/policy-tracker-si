"use strict";(()=>{var e={};e.id=383,e.ids=[383],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9648:e=>{e.exports=import("axios")},6249:(e,a)=>{Object.defineProperty(a,"l",{enumerable:!0,get:function(){return function e(a,t){return t in a?a[t]:"then"in a&&"function"==typeof a.then?a.then(a=>e(a,t)):"function"==typeof a&&"default"===t?a:void 0}}})},9172:(e,a,t)=>{t.a(e,async(e,n)=>{try{t.r(a),t.d(a,{config:()=>u,default:()=>c,routeModule:()=>d});var r=t(1802),s=t(7153),i=t(6249),o=t(4231),l=e([o]);o=(l.then?(await l)():l)[0];let c=(0,i.l)(o,"default"),u=(0,i.l)(o,"config"),d=new r.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/bills",pathname:"/api/bills",bundlePath:"",filename:""},userland:o});n()}catch(e){n(e)}})},2961:(e,a,t)=>{t.a(e,async(e,n)=>{try{t.d(a,{a:()=>i});var r=t(9648),s=e([r]);async function i(e){let a=process.env.HUGGING_FACE_API_KEY;console.log(`Detecting bias for: "${e}"`);try{let t=await r.default.post("https://api-inference.huggingface.co/models/facebook/bart-large-mnli",{inputs:e,parameters:{candidate_labels:["neutral","biased left","biased right"]}},{headers:{Authorization:`Bearer ${a}`}});if(console.log("Raw bias detection response:",t.data),t.data&&t.data.labels)return t.data.labels[0];return"No bias detected"}catch(e){return console.error("Error in bias detection:",e.response?.data||e.message),"No bias detected"}}r=(s.then?(await s)():s)[0],n()}catch(e){n(e)}})},3909:(e,a,t)=>{t.a(e,async(e,n)=>{try{t.d(a,{k:()=>i});var r=t(9648),s=e([r]);async function i(e){let a=process.env.HUGGING_FACE_API_KEY;console.log(`Predicting passage likelihood for: "${e}"`);try{let t=await r.default.post("https://api-inference.huggingface.co/models/facebook/bart-large-mnli",{inputs:e,parameters:{candidate_labels:["likely to pass","unlikely to pass"]}},{headers:{Authorization:`Bearer ${a}`}});if(console.log("Raw prediction response:",t.data),t.data&&t.data.labels)return t.data.labels[0];return"No prediction available"}catch(e){return console.error("Error in prediction:",e.response?.data||e.message),"No prediction available"}}r=(s.then?(await s)():s)[0],n()}catch(e){n(e)}})},5499:(e,a,t)=>{t.a(e,async(e,n)=>{try{t.d(a,{i:()=>i});var r=t(9648),s=e([r]);async function i(e){let a=process.env.HUGGING_FACE_API_KEY;console.log(`Analyzing sentiment for: "${e}"`);try{let t=await r.default.post("https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment",{inputs:e},{headers:{Authorization:`Bearer ${a}`}});if(console.log("Raw sentiment response:",t.data),t.data&&Array.isArray(t.data))return t.data[0]?.label||"Unknown sentiment";return"Unknown sentiment"}catch(e){return console.error("Error in sentiment analysis:",e.response?.data||e.message),"Unknown sentiment"}}r=(s.then?(await s)():s)[0],n()}catch(e){n(e)}})},9776:(e,a,t)=>{t.a(e,async(e,n)=>{try{t.d(a,{N:()=>i});var r=t(9648),s=e([r]);async function i(e){let a=process.env.HUGGING_FACE_API_KEY;console.log(`Summarizing the following text: "${e}"`);try{let t=await r.default.post("https://api-inference.huggingface.co/models/facebook/bart-large-cnn",{inputs:e},{headers:{Authorization:`Bearer ${a}`}});return console.log("Raw summarization response:",t.data),t.data[0]?.summary_text||"No summary available"}catch(e){return console.error("Error in summarization:",e.response?.data||e.message),"No summary available"}}r=(s.then?(await s)():s)[0],n()}catch(e){n(e)}})},4231:(e,a,t)=>{t.a(e,async(e,n)=>{try{t.r(a),t.d(a,{default:()=>u});var r=t(9648),s=t(2961),i=t(3909),o=t(9776),l=t(5499),c=e([r,s,i,o,l]);async function u(e,a){let{query:t,state:n}=e.query;if(!t||!n)return a.status(400).json({message:"Both 'query' and 'state' parameters are required."});try{let e=process.env.OPENSTATES_API_KEY,c=`ocd-jurisdiction/country:us/state:${n}/government`,u=await r.default.get("https://v3.openstates.org/bills",{params:{jurisdiction:c,q:t,apikey:e}});console.log("Bills fetched from OpenStates:",u.data.results);let d=await Promise.all(u.data.results.map(async e=>{let a=await (0,o.N)(e.title||e.summary||""),t=await (0,l.i)(e.title||e.summary||""),n=await (0,s.a)(e.title||e.summary||""),r=await (0,i.k)(e.title||e.summary||"");return{...e,summary:a,sentiment:t,bias:n,prediction:r}}));console.log("Final bills data with sentiment, bias, and prediction:",d),a.status(200).json({results:d})}catch(e){console.error("Error fetching bills:",e.response?.data||e.message),a.status(500).json({message:"Error fetching bills"})}}[r,s,i,o,l]=c.then?(await c)():c,n()}catch(e){n(e)}})},7153:(e,a)=>{var t;Object.defineProperty(a,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},1802:(e,a,t)=>{e.exports=t(145)}};var a=require("../../webpack-api-runtime.js");a.C(e);var t=a(a.s=9172);module.exports=t})();