(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var i=a(35),n=a.n(i),r=a(7),o=a.n(r),s=a(0),l=a.n(s),c=a(148),u=a(4),d=a.n(u),m=a(159),p=a.n(m),h=function(e){return l.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},l.a.createElement("img",{src:p.a,alt:"USS",style:{borderRadius:"50%",width:150,height:150,objectFit:"contain"}}),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"Union for Street Solidarity"),l.a.createElement("p",null,"Solidarity not Charity"))),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("intro")}},"Intro")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("donate")}},"Donate")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("distributions")}},"Distributions")))))};h.propTypes={onOpenArticle:d.a.func,timeout:d.a.bool};var f=h,b=a(160),y=a.n(b),v=a(161),g=a.n(v),E=a(162),w=a.n(E),S=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this,t=l.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return l.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},l.a.createElement("article",{id:"intro",className:("intro"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.a.createElement("h2",{className:"major"},"Intro"),l.a.createElement("span",{className:"image main"},l.a.createElement("img",{src:w.a,alt:""})),l.a.createElement("p",null,"Union for Street Solidarity is a group of socialists working to improve the immediate and long-term material conditions of the working poor and homeless in Salt Lake City. We believe that homelessness is a structural condition of capitalist society, not the result of the moral failing of any individual, and a problem which cannot be solved under capitalism. USS practices mutual aid through the distribution of free survival essentials while engaging in political action through collective struggle."),l.a.createElement("p",null,"USS believes that people experiencing poverty and homelessness are the ones who should tell us what their needs are and how best to improve their circumstances. We conduct research through conversation and surveys, and use the information we gather to direct future political action and material aid."),t),l.a.createElement("article",{id:"donate",className:("donate"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.a.createElement("h2",{className:"major"},"Donate"),l.a.createElement("span",{className:"image main"},l.a.createElement("img",{src:y.a,alt:""})),l.a.createElement("p",null,"Union for Street Solidarity receives no grant money or charitable funding -- we pay for distributions out of our own pockets and rely on donations to help us keep providing aid. All contributions we receive go directly to purchases of supplies and equipment."),l.a.createElement("p",null,"If you’re able, please consider a recurring donation. Our DonorBox makes it easy, just set it up once and donations will automatically be sent each month."),l.a.createElement("div",null,l.a.createElement("script",{src:"https://donorbox.org/install-popup-button.js",type:"text/javascript",defer:!0}),l.a.createElement("a",{class:"dbox-donation-button",href:"https://donorbox.org/uss-distribution-funding?default_interval=m",style:{background:"#2d81c5",color:"#fff",textDecoration:"none",fontFamily:"Verdana,sans-serif",display:"inline-block",fontSize:"16px",padding:"15px 38px 15px 38px",borderRadius:"2px",boxShadow:"0 1px 0 0 #1f5a89",textShadow:"0 1px rgba(0, 0, 0, 0.3)"}},"Donate")),t),l.a.createElement("article",{id:"distributions",className:("distributions"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.a.createElement("h2",{className:"major"},"Distributions"),l.a.createElement("span",{className:"image main"},l.a.createElement("img",{src:g.a,alt:""})),l.a.createElement("p",null,"USS conducts distributions every other Saturday next door to the Gateway Inn on North Temple and in the southwest corner of Pioneer Park. We share coffee, food, vitamins, socks, clothing, and other goods to aid in survival on the street. We also conduct surveys and spend time talking with those who come to visit. Through material aid and conversation, we aim to build solidarity, learn from our community, and help people live more safely and happily."),l.a.createElement("p",null,"If you are interested in volunteering, please email"," ",l.a.createElement("a",{href:"mailto:unionforstreetsolidarity@gmail.com?subject=Interested in Volunteering!"},"unionforstreetsolidarity@gmail.com"),"."),t))},t}(l.a.Component);S.propTypes={route:d.a.object,article:d.a.string,articleTimeout:d.a.bool,onCloseArticle:d.a.func,timeout:d.a.bool,setWrapperRef:d.a.func.isRequired};var A=S,x=function(e){return l.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},l.a.createElement("p",{className:"copyright"},"© Union for Street Solidarity"))};x.propTypes={timeout:d.a.bool};var T=x,k=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(n()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(n()(a)),a.setWrapperRef=a.setWrapperRef.bind(n()(a)),a.handleClickOutside=a.handleClickOutside.bind(n()(a)),a}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return l.a.createElement(c.a,{location:this.props.location},l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(f,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),l.a.createElement(A,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),l.a.createElement(T,{timeout:this.state.timeout})),l.a.createElement("div",{id:"bg"})))},t}(l.a.Component);t.default=k},146:function(e,t,a){var i;e.exports=(i=a(150))&&i.default||i},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(146);var c=n.a.createContext({}),u=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){"use strict";var i=a(149),n=a(0),r=a.n(n),o=a(4),s=a.n(o),l=a(151),c=a.n(l),u=a(147),d=(a(152),function(e){var t,a=e.children,n=e.location;return t=n&&"/"===n.pathname?r.a.createElement("div",null,a):r.a.createElement("div",{id:"wrapper",className:"page"},r.a.createElement("div",null,a)),r.a.createElement(u.b,{query:"2994927498",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),t)},data:i})});d.propTypes={children:s.a.node.isRequired},t.a=d},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Union for Street Solidarity"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},159:function(e,t,a){e.exports=a.p+"static/logo-66b70f5f512214af72f29b74c31d6992.jpg"},160:function(e,t,a){e.exports=a.p+"static/clothes-31b987008b7491020b596329ce240b52.jpeg"},161:function(e,t,a){e.exports=a.p+"static/coffee-e9e4bebcc6d5117920412fce0cef2c43.jpeg"},162:function(e,t,a){e.exports=a.p+"static/menu_quesadilla-cf4fdc177f782749e94c790c8491cdce.jpeg"}}]);
//# sourceMappingURL=component---src-pages-index-js-504c8d7a1f3e2936acce.js.map