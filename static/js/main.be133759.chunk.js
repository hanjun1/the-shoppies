(this.webpackJsonpshopify_challenge=this.webpackJsonpshopify_challenge||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(8),i=s.n(a),r=(s(16),s(3)),o=s.n(r),l=s(5),h=s(2),j=(s(18),s(19),s(20),s(28)),u=s(0);var d=function(e){var t=function(t){t.preventDefault(),e.setNominated(e.nominated.filter((function(e){return e.imdbID!==t.target.movie.value})))};return Object(u.jsxs)("div",{className:"Nominations",children:[Object(u.jsx)("h2",{children:"Nominations"}),Object(u.jsx)("div",{className:"nomination-container",children:e.nominated.map((function(e){return Object(u.jsxs)("div",{className:"movie-container",children:[Object(u.jsx)("div",{className:"image-container",children:Object(u.jsx)("img",{src:e.Poster,alt:"NOT AVAILABLE"})}),Object(u.jsx)("div",{className:"movie-details-container",children:Object(u.jsxs)("form",{onSubmit:t,children:[Object(u.jsx)("input",{type:"hidden",value:e.imdbID,name:"movie"}),Object(u.jsxs)("p",{children:[e.Title," (",e.Year,")"]}),Object(u.jsx)("div",{className:"nominate-button-container",children:Object(u.jsx)("button",{children:"Remove"})})]})})]},Object(j.a)())}))})]})},m=s(10);s(22);var b=function(e){var t=function(e){e.preventDefault(),s(e.target.movie.value)},s=function(){var t=Object(l.a)(o.a.mark((function t(s){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.omdbapi.com/?apikey=f724aaa&type=movie&i="+s);case 3:return(n=t.sent).ok||console.log("bad fetch!"),t.next=7,n.json();case 7:c=t.sent,e.setNominated([].concat(Object(m.a)(e.nominated),[c])),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),c=function(t){for(var s=0;s<e.nominated.length;s++)if(e.nominated[s].imdbID===t)return!0;return!1},a=function(){document.getElementById("searchresults").offsetHeight+document.getElementById("searchresults").scrollTop===document.getElementById("searchresults").scrollHeight&&0!==document.getElementById("searchresults").scrollTop&&e.setIsChangingPage(!0)};return Object(n.useEffect)((function(){document.getElementById("searchresults").addEventListener("scroll",a)}),[]),Object(u.jsxs)("div",{className:"SearchResults",id:"searchresults",children:[Object(u.jsxs)("h2",{children:['Results for "',Object(u.jsx)("span",{children:e.search}),'"...']}),e.result.length>0?Object(u.jsx)("div",{className:"movies-container",children:e.result.map((function(s){return Object(u.jsxs)("div",{className:"movie-container",children:[Object(u.jsx)("div",{className:"image-container",children:Object(u.jsx)("img",{src:s.Poster,alt:"NOT AVAILABLE"})}),Object(u.jsx)("div",{className:"movie-details-container",children:Object(u.jsxs)("form",{onSubmit:t,children:[Object(u.jsx)("input",{type:"hidden",value:s.imdbID,name:"movie"}),Object(u.jsxs)("p",{children:[s.Title," (",s.Year,")"]}),Object(u.jsx)("div",{className:"nominate-button-container",children:c(s.imdbID)?Object(u.jsx)("p",{children:"Already Nominated"}):e.nominated.length>=5?Object(u.jsx)("button",{id:"disable-button",disabled:!0,children:"Nominate"}):Object(u.jsx)("button",{children:"Nominate"})})]})})]},Object(j.a)())}))}):e.isGetMovie?Object(u.jsx)("div",{className:"loading-container",children:Object(u.jsx)("p",{className:"loading",children:"Loading..."})}):Object(u.jsx)("p",{className:"no-results",children:"There are no results!"})]})};s(23);var g=function(e){var t=Object(n.useState)(""),s=Object(h.a)(t,2),c=s[0],a=s[1];return Object(u.jsx)("div",{className:"SearchBar",children:Object(u.jsx)("div",{className:"search-input-container",children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.setSearch(c),e.setIsSearching(!e.isSearching)},children:[Object(u.jsx)("div",{className:"search-image-container",children:Object(u.jsx)("button",{children:Object(u.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M14.2939 12.5786H13.3905L13.0703 12.2699C14.191 10.9663 14.8656 9.27387 14.8656 7.43282C14.8656 3.32762 11.538 0 7.43282 0C3.32762 0 0 3.32762 0 7.43282C0 11.538 3.32762 14.8656 7.43282 14.8656C9.27387 14.8656 10.9663 14.191 12.2699 13.0703L12.5786 13.3905V14.2939L18.2962 20L20 18.2962L14.2939 12.5786V12.5786ZM7.43282 12.5786C4.58548 12.5786 2.28702 10.2802 2.28702 7.43282C2.28702 4.58548 4.58548 2.28702 7.43282 2.28702C10.2802 2.28702 12.5786 4.58548 12.5786 7.43282C12.5786 10.2802 10.2802 12.5786 7.43282 12.5786Z"})})})}),Object(u.jsx)("input",{type:"text",onChange:function(e){a(e.target.value)},placeholder:"Search for a movie...",value:c})]})})})};var O=function(e){return Object(u.jsxs)("div",{className:"ResultsPage",children:[Object(u.jsxs)("p",{className:"title",children:["The ",Object(u.jsx)("span",{children:"Shoppies"})," \ud83c\udf89"]}),Object(u.jsx)(g,{getMovie:e.getMovie,search:e.search,setSearch:e.setSearch,setResult:e.setResult,result:e.result,setPage:e.setPage,isSearching:e.isSearching,setIsSearching:e.setIsSearching}),Object(u.jsxs)("div",{className:"results-container",children:[Object(u.jsx)(b,{result:e.result,search:e.search,nominated:e.nominated,setNominated:e.setNominated,setPage:e.setPage,page:e.page,getMovie:e.getMovie,setIsFetching:e.setIsFetching,setIsChangingPage:e.setIsChangingPage,isGetMovie:e.isGetMovie}),Object(u.jsx)(d,{nominated:e.nominated,setNominated:e.setNominated})]})]})};s(24);var v=function(e){return Object(u.jsxs)("div",{className:"HomePage",children:[Object(u.jsxs)("p",{className:"title",children:["The ",Object(u.jsx)("span",{children:"Shoppies"})," \ud83c\udf89"]}),Object(u.jsx)(g,{setResult:e.setResult,getMovie:e.getMovie,search:e.search,setSearch:e.setSearch,setPage:e.setPage,isSearching:e.isSearching,setIsSearching:e.setIsSearching})]})};s(25);var f=function(e){return Object(u.jsx)("div",{className:"Banner",children:Object(u.jsx)("p",{children:"You have reached your limit of 5 nominations! Remove nominations to nominate other movies!"})})};s(26);var x=function(e){var t=Object(n.useState)(!1),s=Object(h.a)(t,2),c=s[0],a=s[1];return Object(u.jsxs)("div",{className:"ResultsPageMobile",children:[Object(u.jsxs)("p",{className:"title",children:["The ",Object(u.jsx)("span",{children:"Shoppies"})," \ud83c\udf89"]}),Object(u.jsx)(g,{getMovie:e.getMovie,search:e.search,setSearch:e.setSearch,setResult:e.setResult,result:e.result,setPage:e.setPage,isSearching:e.isSearching,setIsSearching:e.setIsSearching}),Object(u.jsx)("div",{className:"results-container",children:c?Object(u.jsx)(d,{nominated:e.nominated,setNominated:e.setNominated}):Object(u.jsx)(b,{result:e.result,search:e.search,nominated:e.nominated,setNominated:e.setNominated,setPage:e.setPage,page:e.page,getMovie:e.getMovie,setIsFetching:e.setIsFetching,setIsChangingPage:e.setIsChangingPage,isGetMovie:e.isGetMovie})}),Object(u.jsx)("div",{className:"mobile-show-nomination",children:Object(u.jsx)("button",{onClick:function(){a(!c)},children:c?"Search Results":"Nominations"})})]})},p=s(9);var S=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)([]),i=Object(h.a)(a,2),r=i[0],j=i[1],d=Object(n.useState)([]),m=Object(h.a)(d,2),b=m[0],g=m[1],S=Object(n.useState)(1),N=Object(h.a)(S,2),I=N[0],P=N[1],M=Object(n.useState)(!1),C=Object(h.a)(M,2),y=C[0],w=C[1],R=Object(n.useState)(!1),E=Object(h.a)(R,2),L=E[0],T=E[1],B=Object(n.useState)(!1),k=Object(h.a)(B,2),D=k[0],F=k[1],A=Object(n.useState)(!1),G=Object(h.a)(A,2),H=G[0],V=G[1],Y=Object(p.useMediaQuery)({maxWidth:695}),J=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.omdbapi.com/?apikey=f724aaa&type=movie&s="+s+"&page="+I);case 3:return(t=e.sent).ok||console.log("fetch error!"),e.next=7,t.json();case 7:"True"===(n=e.sent).Response&&j(r.concat(n.Search)),L&&T(!1),D&&F(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y&&(P(1),j([]),T(!L))}),[y]),Object(n.useEffect)((function(){L&&(J(),w(!1))}),[L]),Object(n.useEffect)((function(){H&&(P(I+1),F(!0),V(!1))}),[H]),Object(n.useEffect)((function(){D&&J()}),[D]),Object(u.jsxs)("div",{className:"App",children:[b.length>=5&&Object(u.jsx)(f,{}),null===s?Object(u.jsx)(v,{getMovie:J,setSearch:c,search:s,setResult:j,setPage:P,isSearching:y,setIsSearching:w}):Y?Object(u.jsx)(x,{getMovie:J,setSearch:c,search:s,result:r,setNominated:g,nominated:b,setPage:P,page:I,setResult:j,isSearching:y,setIsSearching:w,setIsFetching:F,setIsChangingPage:V,isGetMovie:L}):Object(u.jsx)(O,{getMovie:J,setSearch:c,search:s,result:r,setNominated:g,nominated:b,setPage:P,page:I,setResult:j,isSearching:y,setIsSearching:w,setIsChangingPage:V,isGetMovie:L})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,29)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),N()}],[[27,1,2]]]);
//# sourceMappingURL=main.be133759.chunk.js.map