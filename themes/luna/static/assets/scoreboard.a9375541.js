import{c}from"./base.9def3074.js";import{d as f}from"./duration.c050dc80.js";function p(n){let t=[...n];for(let s=0;s<n.length;s++)t[s]=n.slice(0,s+1).reduce(function(o,e){return o+e});return t}function y(n,t){let s={title:{left:"center",text:"Top 10 "+(n==="teams"?"Teams":"Users")},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{type:"scroll",orient:"horizontal",align:"left",bottom:35,data:[]},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},saveAsImage:{}}},grid:{containLabel:!0},xAxis:[{type:"time",boundaryGap:!1,data:[]}],yAxis:[{type:"value"}],dataZoom:[{id:"dataZoomX",type:"slider",xAxisIndex:[0],filterMode:"filter",height:20,top:35,fillerColor:"rgba(233, 236, 241, 0.4)"}],series:[]};const o=Object.keys(t);for(let e=0;e<o.length;e++){const r=[],l=[];for(let a=0;a<t[o[e]].solves.length;a++){r.push(t[o[e]].solves[a].value);const i=f(t[o[e]].solves[a].date);l.push(i.toDate())}const m=p(r);let d=l.map(function(a,i){return[a,m[i]]});s.legend.data.push(t[o[e]].name);const u={name:t[o[e]].name,type:"line",label:{normal:{position:"top"}},itemStyle:{normal:{color:c(t[o[e]].name+t[o[e]].id)}},data:d};s.series.push(u)}return s}export{p as c,y as g};
