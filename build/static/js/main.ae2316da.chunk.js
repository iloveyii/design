(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/banner.aed88df2.png"},44:function(e,t,a){e.exports=a(78)},55:function(e,t,a){},56:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),i=a.n(c),l=a(17),s=a(25),o=a(43),u=(a(53),a(81));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=!0,m=a(9),p=a(10),h=a(12),b=a(11),E=a(13),g=a(83),f=a(80),v=a(79),y=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"services"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",{className:"focus-box"},r.a.createElement("li",null,r.a.createElement(v.a,{to:"/news"},r.a.createElement("div",{className:"service-icon"},r.a.createElement("i",{style:w.parraImg,className:"pixeden glyphicon"}),r.a.createElement("p",{id:"cat"},"\u062e\u0628\u0631\u06cc\u06ba")))),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/interesting"},r.a.createElement("div",{className:"service-icon"},r.a.createElement("i",{style:w.roundImg,className:"pixeden glyphicon"}),r.a.createElement("p",{id:"cat"}," \u062f\u0644\u0686\u0633\u067e ")))),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/mazahia"},r.a.createElement("div",{className:"service-icon"},r.a.createElement("i",{style:w.parraImg,className:"pixeden glyphicon"}),r.a.createElement("p",{id:"cat"},"\u0645\u0632\u0627\u062e\u06cc\u06c1"))))),r.a.createElement("ul",{className:"focus-box"},r.a.createElement("li",null,r.a.createElement(v.a,{to:"/international"},r.a.createElement("div",{className:"service-icon"},r.a.createElement("i",{style:w.parraImg,className:"pixeden glyphicon"}),r.a.createElement("p",{id:"cat"},"\u0628\u06cc\u0646 \u0627\u0644\u0627\u0642\u0648\u0627\u0645\u06cc")))),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/science"},r.a.createElement("div",{className:"service-icon"},r.a.createElement("i",{style:w.roundImg,className:"pixeden glyphicon"}),r.a.createElement("p",{id:"cat"}," \u0633\u0627\u0626\u0646\u0633 ")))),r.a.createElement("li",null,r.a.createElement("div",{className:"service-icon"},r.a.createElement("i",{style:w.parraImg,className:"pixeden glyphicon"}),r.a.createElement("p",{id:"cat"}," \u0645\u0644\u06a9")))),r.a.createElement("ul",{className:"focus-box"},r.a.createElement("li",null,r.a.createElement("div",{className:"service-icon"},r.a.createElement("i",{style:w.parraImg,className:"pixeden glyphicon"}),r.a.createElement("p",{id:"cat"},"\u0645\u0627\u0631\u0634\u0644"))),r.a.createElement("li",null,r.a.createElement("div",{className:"service-icon"},r.a.createElement("i",{style:w.roundImg,className:"pixeden glyphicon"}),r.a.createElement("p",{id:"cat"}," \u067e\u06cc\u067e\u0644\u0632 "))),r.a.createElement("li",null,r.a.createElement("div",{className:"service-icon"},r.a.createElement("i",{style:w.parraImg,className:"pixeden glyphicon"}),r.a.createElement("p",{id:"cat"}," \u0645\u0644\u06a9"))))))}}]),t}(r.a.Component),w={roundImg:{background:"url(images/ti-logo.png) no-repeat center",width:"100%",height:"100%"},parraImg:{background:"url(images/parallax.png) no-repeat center",width:"100%",height:"100%"}},x=y,j=a(18),O=a(82),I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={expanded:!1},a.expand=a.expand.bind(Object(j.a)(a)),a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"expand",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){var e=this.props.item;return r.a.createElement("section",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:e.image,alt:"Image"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null," ",e.title," ")))),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{className:"btn fifth",onClick:this.expand},"\u0645\u0632\u06cc\u062f"),this.state.expanded?r.a.createElement("div",{className:"description"},r.a.createElement("p",{className:"urdu"},e.contentSnippet.trim()),r.a.createElement("p",{className:"bodoni"},"YnZ")):null,r.a.createElement("hr",null)),r.a.createElement("div",{className:"clear"})))}}]),t}(r.a.Component),k="News.Read",N=function(e){return{type:k,payload:{newsId:e}}},R=function(e){return{type:"News.Read.Success",payload:{news:e}}},A=function(){return{type:"News.Read.Fail",payload:{}}},S="Interesting.Read",z=function(e){return console.log("Inside interestingReadAction"),{type:S,payload:{newsId:e}}},C=function(e){return{type:"Interesting.Read.Success",payload:{interesting:e}}},D=function(){return{type:"Interesting.Read.Fail",payload:{}}},F="International.Read",M=function(e){return console.log("Inside internationalReadAction"),{type:F,payload:{newsId:e}}},T=function(e){return{type:"International.Read.Success",payload:{international:e}}},W=function(){return{type:"International.Read.Fail",payload:{}}},B=a(40),J=a.n(B),P=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"middle-banner"},r.a.createElement("img",{src:J.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",{className:"banner-content"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",null,r.a.createElement("li",null,"This is first line on our banner"),r.a.createElement("li",null,"This is second line on our banner")))))}}]),t}(r.a.Component),$=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={items:[]},a.getData=a.getData.bind(Object(j.a)(a)),a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"getData",value:function(e){var t=e.news,a=e.interesting,n=e.international,r=e.science,c=e.mazahia;switch(e.location.pathname){case"/news":t&&Array.isArray(t)&&this.setState({items:t.slice()});break;case"/interesting":a&&Array.isArray(a)&&this.setState({items:a.slice(0,15)});break;case"/international":n&&Array.isArray(n)&&this.setState({items:n.slice()});break;case"/science":r&&Array.isArray(r)&&this.setState({items:r.slice(0,15)});break;case"/mazahia":c&&Array.isArray(c)&&this.setState({items:c.slice(0,15)})}}},{key:"componentWillReceiveProps",value:function(e){console.log("Inside componentWillReceiveProps"),this.getData(e)}},{key:"componentDidMount",value:function(){this.getData(this.props)}},{key:"render",value:function(){return r.a.createElement("div",{id:"cards"},this.state.items&&this.state.items.length>0?this.state.items.map(function(e,t){return r.a.createElement(I,{key:t,item:e})}):r.a.createElement("div",null,"Loading ..."),r.a.createElement(P,null))}}]),t}(r.a.Component),H={newsReadAction:N,interestingReadAction:z,internationalReadAction:M},L=Object(O.a)(Object(s.b)(function(e){return{news:e.news,interesting:e.interesting,international:e.international,science:e.science,mazahia:e.mazahia}},H)($)),Y=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Not Implemented component")}}]),t}(r.a.Component),Z=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("nav",{id:"main-nav"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.a,{to:"/"},r.a.createElement("span",null,"Home"))),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/news"},r.a.createElement("span",null,"News"))),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/interesting"},r.a.createElement("span",null,"Interesting"))),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/mazahia"},r.a.createElement("span",null,"Fun"))),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/international"},r.a.createElement("span",null,"International"))),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/science"},r.a.createElement("span",null,"Science")))))))}}]),t}(r.a.Component),_=(a(55),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(g.a,null,r.a.createElement(f.a,{exact:!0,path:"/news",component:L}),r.a.createElement(f.a,{exact:!0,path:"/interesting",component:L}),r.a.createElement(f.a,{exact:!0,path:"/international",component:L}),r.a.createElement(f.a,{exact:!0,path:"/science",component:L}),r.a.createElement(f.a,{exact:!0,path:"/mazahia",component:L}),r.a.createElement(f.a,{exact:!0,path:"/",component:x}),r.a.createElement(f.a,{component:Y})))}}]),t}(n.Component));a(56),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(7),G=a.n(q),K="Science.Read",Q="Mazahia.Read",U=a(5),V=a(20),X=a.n(V),ee="http://be_newsapp.softhem.se",te={feed:{interesting:function(){return X.a.get(ee+"/urdu/interesting").then(function(e){return e.data}).catch(function(e){throw new Error(e)})},news:function(){return X.a.get(ee+"/urdu/news").then(function(e){return e.data}).catch(function(e){throw new Error(e)})},international:function(){return X.a.get(ee+"/urdu/international").then(function(e){return e.data}).catch(function(e){throw new Error(e)})},science:function(){return X.a.get(ee+"/urdu/science").then(function(e){return e.data}).catch(function(e){throw new Error(e)})},mazahia:function(){return X.a.get(ee+"/urdu/mazahia").then(function(e){return e.data}).catch(function(e){throw new Error(e)})}}},ae=G.a.mark(ne);function ne(e){var t;return G.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(U.a)(te.feed.news,e.payload.newsId);case 3:if(t=a.sent,!Array.isArray(t)){a.next=9;break}return a.next=7,Object(U.b)(R(t));case 7:a.next=11;break;case 9:return a.next=11,Object(U.b)(A(t));case 11:a.next=18;break;case 13:return a.prev=13,a.t0=a.catch(0),console.log("error",a.t0),a.next=18,Object(U.b)(A(a.t0));case 18:case"end":return a.stop()}},ae,null,[[0,13]])}var re=G.a.mark(ce);function ce(e){var t;return G.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(U.a)(te.feed.interesting,e.payload.newsId);case 3:if(t=a.sent,!Array.isArray(t)){a.next=10;break}return console.log("Inside interestingReadSaga",e,t),a.next=8,Object(U.b)(C(t));case 8:a.next=12;break;case 10:return a.next=12,Object(U.b)(D(t));case 12:a.next=19;break;case 14:return a.prev=14,a.t0=a.catch(0),console.log("error",a.t0),a.next=19,Object(U.b)(D(a.t0));case 19:case"end":return a.stop()}},re,null,[[0,14]])}var ie=G.a.mark(le);function le(e){var t;return G.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(U.a)(te.feed.international,e.payload.newsId);case 3:if(t=a.sent,!Array.isArray(t)){a.next=10;break}return console.log("Inside internationalReadSaga",e,t),a.next=8,Object(U.b)(T(t));case 8:a.next=12;break;case 10:return a.next=12,Object(U.b)(W(t));case 12:a.next=19;break;case 14:return a.prev=14,a.t0=a.catch(0),console.log("error",a.t0),a.next=19,Object(U.b)(W(a.t0));case 19:case"end":return a.stop()}},ie,null,[[0,14]])}var se=function(e){return{type:"Science.Read.Success",payload:{science:e}}},oe=function(){return{type:"Science.Read.Fail",payload:{}}},ue=G.a.mark(de);function de(e){var t;return G.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(U.a)(te.feed.science,e.payload.newsId);case 3:if(t=a.sent,!Array.isArray(t)){a.next=10;break}return console.log("Inside scienceReadSaga",e,t),a.next=8,Object(U.b)(se(t));case 8:a.next=12;break;case 10:return a.next=12,Object(U.b)(oe(t));case 12:a.next=19;break;case 14:return a.prev=14,a.t0=a.catch(0),console.log("error",a.t0),a.next=19,Object(U.b)(oe(a.t0));case 19:case"end":return a.stop()}},ue,null,[[0,14]])}var me=function(e){return{type:"Mazahia.Read.Success",payload:{mazahia:e}}},pe=function(){return{type:"Mazahia.Read.Fail",payload:{}}},he=G.a.mark(be);function be(e){var t;return G.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(U.a)(te.feed.mazahia,e.payload.newsId);case 3:if(t=a.sent,!Array.isArray(t)){a.next=10;break}return console.log("Inside mazahiaReadSaga",e,t),a.next=8,Object(U.b)(me(t));case 8:a.next=12;break;case 10:return a.next=12,Object(U.b)(pe(t));case 12:a.next=19;break;case 14:return a.prev=14,a.t0=a.catch(0),console.log("error",a.t0),a.next=19,Object(U.b)(pe(a.t0));case 19:case"end":return a.stop()}},he,null,[[0,14]])}var Ee=G.a.mark(ge);function ge(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)(k,ne);case 2:return e.next=4,Object(U.c)(S,ce);case 4:return e.next=6,Object(U.c)(F,le);case 6:return e.next=8,Object(U.c)(K,de);case 8:return e.next=10,Object(U.c)(Q,be);case 10:case"end":return e.stop()}},Ee)}var fe,ve=[],ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"News.Read.Success":return t.payload.news;default:return e}},we=[],xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"Interesting.Read.Success":return console.log("Inside InterestingReducer",t.payload),t.payload.interesting;default:return e}},je=[],Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"International.Read.Success":return console.log("Inside InterestingReducer",t.payload),t.payload.international;default:return e}},Ie=[],ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"Science.Read.Success":return console.log("Inside ScienceReducer",t.payload),t.payload.science;default:return e}},Ne=[],Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"Mazahia.Read.Success":return console.log("Inside MazahiaReducer",t.payload),t.payload.mazahia;default:return e}},Ae=Object(l.c)({news:ye,interesting:xe,international:Oe,science:ke,mazahia:Re}),Se=Object(o.a)(),ze=window.navigator.userAgent.includes("Chrome")&&window.devToolsExtension&&d?Object(l.d)(Object(l.a)(Se),window.devToolsExtension&&window.devToolsExtension()):Object(l.a)(Se),Ce=Object(l.e)(Ae,{},ze);Se.run(ge),console.log(Ce.getState()),Ce.dispatch(z()),Ce.dispatch(N()),Ce.dispatch(M()),Ce.dispatch((console.log("Inside scienceReadAction"),{type:K,payload:{newsId:fe}})),Ce.dispatch(function(e){return console.log("Inside mazahiaReadAction"),{type:Q,payload:{newsId:e}}}()),d&&Ce.subscribe(function(){console.log("subscribed store in index",Ce.getState())}),i.a.render(r.a.createElement(u.a,null,r.a.createElement(s.a,{store:Ce},r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.ae2316da.chunk.js.map