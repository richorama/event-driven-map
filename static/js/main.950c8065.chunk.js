(this["webpackJsonpevent-driven-map"]=this["webpackJsonpevent-driven-map"]||[]).push([[0],{107:function(e,t,a){e.exports=a(116)},112:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n,r=a(8),o=a.n(r),l=a(87),i=a.n(l),s=(a(112),a(45)),u=a(46),c=a(49),h=a(47),d=a(50),m=(a(113),a(89)),f=a(80),p=a(120),g=a(123);!function(e){e[e.dataLoaded=0]="dataLoaded",e[e.filterByMag=1]="filterByMag",e[e.showAllFeatures=2]="showAllFeatures",e[e.showSingleFeature=3]="showSingleFeature"}(n||(n={}));var b,v=a(90),w=a(122),E=a(121),y=a(84),F=a(85),k=a(83),M=a(31),j=a.n(M),S=a(88),A=new y.b({image:new F.a({radius:8,fill:new k.a({color:"#0D47A1"})})}),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).map=void 0,a.features=[],a.tokens=[],a.source=void 0,a.geoJson=void 0,a.subscribe=function(e,t){a.tokens.push(j.a.subscribe(e,t))},a.filterByMag=function(e,t){var n,r,o,l;null===(n=a.source)||void 0===n||n.clear();var i=t.mag,s=a.features.filter((function(e){return Math.floor(e.get("mag"))===i}));null===(r=a.source)||void 0===r||r.addFeatures(s),null===(o=a.map)||void 0===o||o.getView().setCenter(null===(l=a.source)||void 0===l?void 0:l.getExtent())},a.showAllFeatures=function(){var e,t,n;null===(e=a.source)||void 0===e||e.clear(),null===(t=a.source)||void 0===t||t.addFeatures(a.features),null===(n=a.map)||void 0===n||n.getView().setZoom(2)},a.showSingleFeature=function(e,t){var n,r,o,l,i,s;console.log(t),null===(n=a.source)||void 0===n||n.clear();var u=null!==(r=a.features.find((function(e){return e.get("code")===t.properties.code})))&&void 0!==r?r:new S.a;u&&(null===(o=a.source)||void 0===o||o.addFeature(u)),null===(l=a.map)||void 0===l||l.getView().setCenter(null===(i=a.source)||void 0===i?void 0:i.getExtent()),null===(s=a.map)||void 0===s||s.getView().setZoom(10)},a.dataLoaded=function(e,t){var n;a.geoJson=t,a.features=new v.a({dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}).readFeatures(t),a.source=new w.a({features:a.features});var r=new p.a({source:a.source,style:a.styleFunction});null===(n=a.map)||void 0===n||n.addLayer(r)},a.styleFunction=function(){return A},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.configureMap(),this.configureSubscriptions()}},{key:"componentWillUnmount",value:function(){this.tokens.forEach(j.a.unsubscribe)}},{key:"configureMap",value:function(){var e=this;this.map=new m.a({layers:[new g.a({source:new E.a})],target:"map",view:new f.a({center:[0,0],zoom:2})}),this.map.on("click",(function(t){var a,r=[];if(null===(a=e.map)||void 0===a||a.forEachFeatureAtPixel(t.pixel,(function(e){r.push(e)})),r.length>0){var o=r[0].get("code"),l=e.geoJson.features.find((function(e){return e.properties.code===o}));j.a.publish(n.showSingleFeature,l)}}))}},{key:"configureSubscriptions",value:function(){this.subscribe(n.dataLoaded,this.dataLoaded),this.subscribe(n.filterByMag,this.filterByMag),this.subscribe(n.showAllFeatures,this.showAllFeatures),this.subscribe(n.showSingleFeature,this.showSingleFeature)}},{key:"render",value:function(){return o.a.createElement("div",{id:"map",style:{width:"100%",height:"100%"}})}}]),t}(o.a.Component),B=a(91),J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).handleSelectMag=function(e){j.a.publish(n.filterByMag,{mag:e})},a.renderMag=function(e){var t=a.props.geoJson.features.filter((function(t){return Math.floor(t.properties.mag)===e})).length;return o.a.createElement("tr",{key:e},o.a.createElement("td",null,o.a.createElement("button",{className:"link-button",onClick:a.handleSelectMag.bind(null,e)},"Mag ",e," to ",e+1)),o.a.createElement("td",null,o.a.createElement("span",{style:{float:"right"},className:"ui label"},t)))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this.props.geoJson.features.map((function(e){return e.properties.mag})).map((function(e){return Math.floor(e)})),t=Math.max.apply(Math,Object(B.a)(e)),a=[],n=0;n<=t;n++)a.push(n);return o.a.createElement(o.a.Fragment,null,o.a.createElement("h5",null,"By Magnitude"),o.a.createElement("table",{className:"ui table"},o.a.createElement("tbody",null,a.map(this.renderMag))))}}]),t}(o.a.Component),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).handleClickFeature=function(e){return j.a.publish(n.showSingleFeature,e)},a.handleShowAll=function(){return j.a.publish(n.showAllFeatures,{})},a.renderFeature=function(e,t){return o.a.createElement("tr",{key:t,style:{paddingBottom:8}},o.a.createElement("td",null,o.a.createElement("div",null,o.a.createElement("button",{className:"link-button",onClick:a.handleClickFeature.bind(null,e)},e.properties.place)),o.a.createElement("small",null,"Mag ",e.properties.mag)))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{paddingBottom:12}},o.a.createElement("button",{className:"link-button",onClick:this.handleShowAll},"Show All")),o.a.createElement("h5",null,this.props.title),o.a.createElement("table",{className:"ui table"},o.a.createElement("tbody",null,this.props.features.map(this.renderFeature))))}}]),t}(o.a.Component),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleShowAll=function(){return j.a.publish(n.showAllFeatures,{})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.feature;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{paddingBottom:12}},o.a.createElement("button",{className:"link-button",onClick:this.handleShowAll},"Show All")),o.a.createElement("h5",null,e.properties.title),o.a.createElement("table",{className:"ui table"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{className:"label"},"Magnitude"),o.a.createElement("td",null,e.properties.mag)),o.a.createElement("tr",null,o.a.createElement("td",{className:"label"},"Time"),o.a.createElement("td",null,new Date(e.properties.time).toLocaleDateString()," ",new Date(e.properties.time).toLocaleTimeString())),o.a.createElement("tr",null,o.a.createElement("td",{className:"label"},"Location"),o.a.createElement("td",null,e.properties.place)),o.a.createElement("tr",null,o.a.createElement("td",{colSpan:2},o.a.createElement("a",{href:e.properties.url,target:"_blank",rel:"noopener noreferrer"},"More Information"))))))}}]),t}(o.a.Component);!function(e){e[e.showAll=0]="showAll",e[e.showMag=1]="showMag",e[e.showFeature=2]="showFeature"}(b||(b={}));var N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).tokens=[],a.subscribe=function(e,t){a.tokens.push(j.a.subscribe(e,t))},a.filterByMag=function(e,t){var n=t.mag;a.setState({mag:n,mode:b.showMag})},a.showAllFeatures=function(){return a.setState({mode:b.showAll})},a.showFeature=function(e,t){return a.setState({mode:b.showFeature,feature:t})},a.dataLoaded=function(e,t){a.setState({geoJson:t,loading:!1,mode:b.showAll})},a.state={geoJson:{},loading:!0,mode:b.showAll,mag:0,feature:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.configureSubscriptions()}},{key:"componentWillUnmount",value:function(){this.tokens.forEach(j.a.unsubscribe)}},{key:"configureSubscriptions",value:function(){this.subscribe(n.dataLoaded,this.dataLoaded),this.subscribe(n.filterByMag,this.filterByMag),this.subscribe(n.showAllFeatures,this.showAllFeatures),this.subscribe(n.showSingleFeature,this.showFeature)}},{key:"render",value:function(){var e=this;return this.state.loading?o.a.createElement(o.a.Fragment,null,"Loading..."):o.a.createElement("div",null,o.a.createElement("h3",{style:{marginTop:0}},this.state.geoJson.features.length," Earthquakes"),this.state.mode===b.showAll&&o.a.createElement(J,{geoJson:this.state.geoJson}),this.state.mode===b.showMag&&o.a.createElement(L,{title:"Magnitude ".concat(this.state.mag," - ").concat(this.state.mag+1),features:this.state.geoJson.features.filter((function(t){return Math.floor(t.properties.mag)===e.state.mag}))}),this.state.mode===b.showFeature&&o.a.createElement(C,{feature:this.state.feature}))}}]),t}(o.a.Component),x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:300,height:"100vh",overflow:"auto"}},o.a.createElement("div",{style:{padding:8}},o.a.createElement(N,null))),o.a.createElement("div",{style:{position:"absolute",top:0,left:300,width:"calc(100vw - ".concat(300,"px)"),height:"100vh"}},o.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=function(e){return function(e,t,a){return new Promise((function(n,r){var o=new XMLHttpRequest;o.open(e,t,!0),o.setRequestHeader("Content-Type","application/json"),o.setRequestHeader("Accept","application/json"),o.onload=function(){try{if(o.status>=400)return r(o.status);n(JSON.parse(o.responseText||"null"))}catch(e){r(e)}},o.onerror=r,o.send(a?JSON.stringify(a):void 0)}))}("GET",e)};(function(){return e="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",new Promise((function(t,a){P(e).then((function(e){return t(e)})).catch(a)}));var e})().then((function(e){j.a.publish(n.dataLoaded,e)})),i.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[107,1,2]]]);
//# sourceMappingURL=main.950c8065.chunk.js.map