(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(e,a,t){e.exports=t.p+"static/media/undraw_empty.0fb34e8a.svg"},247:function(e,a,t){e.exports=t(518)},252:function(e,a,t){},518:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(49),s=t.n(r),c=(t(252),t(50)),o=t(51),i=t(54),m=t(52),u=t(55),h=t(528),d=t(525),p=t(529),b=t(524),y=t(530),g=t(519);var v=Object(y.a)(function(e){var a="/jobs"===e.match.path;return l.a.createElement("div",{className:"flex justify-between items-center b pv3 ph3 ph2-l"},l.a.createElement("div",{className:"f4 b"},l.a.createElement(b.a,{to:"/",className:"link dark-gray hover-dark-gray"},"Citizen Tech")),l.a.createElement("div",{className:"f5 b lh-title flex"},a&&l.a.createElement("a",{href:"https://airtable.com/shrAPBjzRwAcDHBui",className:"link dark-gray hover-dark-gray underline-hover mr3 mr4-ns flex items-center",target:"_blank",rel:"noreferrer noopener"},l.a.createElement(g.a,{name:"plus",size:"small"}),l.a.createElement("span",null,"Add Job")),l.a.createElement(b.a,{to:"/jobs",className:"link dark-gray hover-dark-gray underline-hover"},"Job Board")))});var E=function(){return l.a.createElement("div",{className:"mw8 center"},l.a.createElement(v,null),l.a.createElement("div",{className:"measure center pv5 mt5 ph3"},l.a.createElement("h1",{className:"f1 lh-title mv1 mr3 dib"},"Citizen Tech"),l.a.createElement("b",{className:"dib"},"0.0.1"),l.a.createElement("h2",{className:"f5 lh-copy pb3 ma0 bb"},"To build socially responsible technologists."),l.a.createElement("p",{className:"f5 lh-copy"},"Citizen tech is a community for social and civic tech projects. It provides a place for anyone interested in civic and social participation. Our mission is to connect professionals with socially important work."),l.a.createElement("p",{className:"f5 lh-copy"},l.a.createElement("b",null,"Want to get involved?")," Signing up for the newsletter below is a good place to get started."),l.a.createElement("form",{action:"https://space.us17.list-manage.com/subscribe/post?u=6ba21cd3bc4ade157639edfbd&id=dc859dd739",method:"post",className:"pv4",target:"_blank",noValidate:!0},l.a.createElement("label",{className:"f5 b lh-copy"},"Join newsletter"),l.a.createElement("div",{className:"flex"},l.a.createElement("input",{type:"email",name:"EMAIL",placeholder:"Email address",className:"f6 b--solid b--dark-gray bg-washed-blue w-100 pa2"}),l.a.createElement("button",{type:"submit",className:"f6 b b--solid b--dark-gray bg-washed-blue ml1 ph3 bw1 bg-animate hover-bg-dark-gray hover-washed-blue"},"Subscribe")))))},f=t(57),k=t(220),N=t(221),w=t(526),x=t(527),A=t(222),j=t.n(A),C=t(140),O=t.n(C),S=t(223),T=t(224),L={airtableApiKey:"keyQA0RVPw7CGqNhp",airtableApiId:"appIZsTErtvjhR8Y6",googleAnalyticsKey:"UA-131025204-1"},M=new(t.n(T).a)({apiKey:L.airtableApiKey}).base(L.airtableApiId),I=function(e){return{id:e.id,title:e.get("Title"),organization:e.get("Organization"),location:e.get("Location"),state:e.get("State"),role_types:e.get("Role Types"),employment_type:e.get("Employment Type"),remote_friendly:e.get("Remote Friendly"),link:e.get("Job Link"),description:e.get("Organization Description"),org_type:e.get("Organization type"),createdAt:e.get("Created At"),salary:e.get("Estimated Salary")}},z=function(){var e=Object(S.a)(O.a.mark(function e(){var a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,M("Code For America").select().eachPage(function(e,t){e.forEach(function(e){a.push(I(e))}),t()});case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),D=t(5),R=t.n(D);var _=function(e){var a=e.items,t=e.active,n=e.pageSize,r=e.onSelect,s=Math.min(Math.ceil(a.length/n),12);return l.a.createElement("div",{className:"f4 flex b"},Object(f.a)(new Array(s)).map(function(e,n){return l.a.createElement("div",{key:n,onClick:function(){return r(n)},className:R()("pa2",{green:a.length>0&&t===n,"moon-gray":0===a.length}),style:{cursor:"pointer"}},n+1)}))},W=t(225),H=t.n(W),F=[{key:"design",value:"design",text:"Design"},{key:"product",value:"product",text:"Product Management"},{key:"development",value:"development",text:"Software Development"},{key:"content",value:"content",text:"Content Strategy"},{key:"analytics",value:"analytics",text:"Analytics"},{key:"leadership",value:"leadership",text:"Leadership"}],J=[{key:"AL",value:"AL",text:"Alabama"},{key:"AK",value:"AK",text:"Alaska"},{key:"AR",value:"AR",text:"Arkansas"},{key:"CA",value:"CA",text:"California"},{key:"CO",value:"CO",text:"Colorado"},{key:"CT",value:"CT",text:"Connecticut"},{key:"DE",value:"DE",text:"Delaware"},{key:"DC",value:"DC",text:"District Of Columbia"},{key:"FL",value:"FL",text:"Florida"},{key:"GA",value:"GA",text:"Georgia"},{key:"HI",value:"HI",text:"Hawaii"},{key:"ID",value:"ID",text:"Idaho"},{key:"IL",value:"IL",text:"Illinois"},{key:"IN",value:"IN",text:"Indiana"},{key:"IA",value:"IA",text:"Iowa"},{key:"KS",value:"KS",text:"Kansas"},{key:"KY",value:"KY",text:"Kentucky"},{key:"LA",value:"LA",text:"Louisiana"},{key:"ME",value:"ME",text:"Maine"},{key:"MD",value:"MD",text:"Maryland"},{key:"MA",value:"MA",text:"Massachusetts"},{key:"MI",value:"MI",text:"Michigan"},{key:"MN",value:"MN",text:"Minnesota"},{key:"MS",value:"MS",text:"Mississippi"},{key:"MO",value:"MO",text:"Missouri"},{key:"MT",value:"MT",text:"Montana"},{key:"NE",value:"NE",text:"Nebraska"},{key:"NV",value:"NV",text:"Nevada"},{key:"NH",value:"NH",text:"New Hampshire"},{key:"NJ",value:"NJ",text:"New Jersey"},{key:"NM",value:"NM",text:"New Mexico"},{key:"NY",value:"NY",text:"New York"},{key:"NC",value:"NC",text:"North Carolina"},{key:"ND",value:"ND",text:"North Dakota"},{key:"OH",value:"OH",text:"Ohio"},{key:"OK",value:"OK",text:"Oklahoma"},{key:"OR",value:"OR",text:"Oregon"},{key:"PA",value:"PA",text:"Pennsylvania"},{key:"RI",value:"RI",text:"Rhode Island"},{key:"SC",value:"SC",text:"South Carolina"},{key:"SD",value:"SD",text:"South Dakota"},{key:"TN",value:"TN",text:"Tennessee"},{key:"TX",value:"TX",text:"Texas"},{key:"UT",value:"UT",text:"Utah"},{key:"VT",value:"VT",text:"Vermont"},{key:"VA",value:"VA",text:"Virginia"},{key:"WA",value:"WA",text:"Washington"},{key:"WV",value:"WV",text:"West Virginia"},{key:"WI",value:"WI",text:"Wisconsin"},{key:"WY",value:"WY",text:"Wyoming"}],V={CREATED_AT:"Recent",ALPHA:"A \u2192 Z",ALPHA_REVERSE:"Z \u2192 A"},K=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={jobs:[],results:[],page:0,stateFilter:"",roleFilter:"",isLoading:!0,sort:V.CREATED_AT},t.onPageSelect=function(e){t.setState({page:e}),window.scrollTo(0,0)},t.handleChange=function(e,a){var n=a.value,l=a.name;return t.setState(Object(k.a)({},l,n))},t.handleSearch=function(e){e.preventDefault(),t.setState({isLoading:!0});var a=t.state,n=a.jobs,l=a.stateFilter,r=a.roleFilter,s=n.filter(function(e){return!l||e.state===l}).filter(function(e){return e.role_types&&(!r||e.role_types.indexOf(r)>-1)});setTimeout(function(){return t.setState({results:s,page:0,isLoading:!1})},300)},t.getSortedResults=function(e,a){switch(a){case V.CREATED_AT:return Object(f.a)(e).sort(function(e,a){return new Date(a.createdAt)-new Date(e.createdAt)});case V.ALPHA:return Object(f.a)(e).sort(function(e,a){var t=e.organization.toLowerCase(),n=a.organization.toLowerCase();return t<n?-1:t>n?1:0});case V.ALPHA_REVERSE:return Object(f.a)(e).sort(function(e,a){var t=a.organization.toLowerCase(),n=e.organization.toLowerCase();return t<n?-1:t>n?1:0});default:return e}},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;z().then(function(a){return e.setState({jobs:a,results:a,isLoading:!1})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this.state,a=e.results,t=e.page,n=e.sort,r=e.isLoading,s=this.getSortedResults(a,n);return l.a.createElement("div",{className:"job-board"},l.a.createElement(N.Helmet,null,l.a.createElement("title",null,"A Better Job Board | Citizen Tech"),l.a.createElement("meta",{name:"description",content:"A curated list of jobs focused on finding satisfying work."})),l.a.createElement("div",{className:"bg-light-green black bb b--light-green"},l.a.createElement("div",{className:"mw8 center"},l.a.createElement(v,null),l.a.createElement("div",{className:"pt5 bt bw2 b--black mb3 ph3 ph2-l relative"},l.a.createElement("span",{className:"absolute mt2 black",style:{top:0,right:0}},l.a.createElement(b.a,{to:"/jobs/about",className:"black hover-black"},l.a.createElement("span",{className:"mr1 b"},"About"),l.a.createElement(g.a,{name:"question circle outline",size:"large",style:{outlineColor:"transparent"}}))),l.a.createElement("h1",{className:"f2 lh-title b mv0"},"Find Better Work."),l.a.createElement("h2",{className:"f3 f4-ns lh-title mv0 normal"},"A curated list of jobs good for you and ",l.a.createElement("b",{className:"magical"},"good for society"),"."),l.a.createElement("form",{className:"flex flex-column flex-row-ns mt4 mb4 items-end",onSubmit:this.handleSearch},l.a.createElement("div",{className:"fl w-100 w-50-ns pb2 pr1-ns flex flex-column"},l.a.createElement("label",{className:"f6 b lh-copy ph1"},"Role"),l.a.createElement(w.a,{search:!0,selection:!0,clearable:!0,placeholder:"Any",name:"roleFilter",value:this.state.roleFilter,onChange:this.handleChange,options:F,style:{background:"transparent",border:".125rem solid black",borderRadius:"0"}})),l.a.createElement("div",{className:"fl w-100 w-40-ns pr1-ns pb2 flex flex-column"},l.a.createElement("label",{className:"f6 b lh-copy ph1"},"Location"),l.a.createElement(w.a,{search:!0,selection:!0,clearable:!0,fluid:!0,placeholder:"Any",name:"stateFilter",value:this.state.stateFilter,onChange:this.handleChange,options:J,style:{background:"transparent",border:".125rem solid black",borderRadius:"0"}})),l.a.createElement("button",{className:"fl w-100 w-20-m w-10-ns b--black pa2 mt1 mt0-ns mb2 bg-transparent black b hover-bg-black hover-light-green",style:{height:"39.5px",borderWidth:".125rem"},type:"submit"},r?l.a.createElement("span",{className:"flex justify-center items-center"},l.a.createElement(g.a,{name:"spinner",loading:!0}),l.a.createElement("span",{className:"dn-ns"},"Searching...")):"Search"))))),l.a.createElement("div",{className:"mw8 center"},l.a.createElement("div",{className:"flex justify-between items-end pb2 pt3 ph3"},l.a.createElement("span",{className:"f5 green b"},a.length," results "),l.a.createElement(w.a,{name:"sort",text:"Sort: ".concat(n),value:n,onChange:this.handleChange,options:Object.keys(V).map(function(e){return{key:e,value:V[e],text:V[e]}})})),s.length>0?l.a.createElement("div",{className:"bt"},s.slice(15*t,15*t+15).map(function(e){return l.a.createElement("a",{href:e.link,key:e.id,className:"dark-gray hover-bg-washed-green bg-animate hover-dark-gray pv4 bb ph3 db",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"green b"},e.org_type),l.a.createElement("h4",{className:"f3 b ma0"},e.title),l.a.createElement("h5",{className:"f4 fw4 ma0 pa0 mid-gray"},e.organization),l.a.createElement("div",{className:"flex flex-wrap mb3"},e.createdAt&&l.a.createElement("div",{className:"mr3 pt2"},l.a.createElement(g.a,{name:"clock"}),l.a.createElement("span",{className:"gray"},j.a.ago(e.createdAt))),e.location&&l.a.createElement("div",{className:"mr3 pt2"},l.a.createElement(g.a,{name:"map marker alternate"}),l.a.createElement("span",{className:"gray"},e.location)),e.employment_type&&l.a.createElement("div",{className:"mr3 pt2"},l.a.createElement(g.a,{name:"briefcase"}),l.a.createElement("span",{className:"gray"},e.employment_type.join(", "))),e.remote_friendly&&l.a.createElement("div",{className:"mr3 pt2"},l.a.createElement(g.a,{name:"wifi"}),l.a.createElement("span",{className:"gray"},"Remote Friendly")),e.salary&&l.a.createElement("div",{className:"mr3 pt2"},l.a.createElement(g.a,{name:"usd",className:"green"}),l.a.createElement("span",{className:"gray"},e.salary))),e.description&&l.a.createElement("p",{className:"lh-copy"},l.a.createElement("b",null,"Description:")," ",e.description))})):l.a.createElement("div",{className:"bt"},r?l.a.createElement("div",null,l.a.createElement("div",{className:"pv4 ph2 bb b--light-gray"},l.a.createElement(x.a,null,l.a.createElement(x.a.Line,null),l.a.createElement(x.a.Line,null),l.a.createElement(x.a.Line,null),l.a.createElement(x.a.Line,null),l.a.createElement(x.a.Line,null))),l.a.createElement("div",{className:"pv4 ph2 bb b--light-gray"},l.a.createElement(x.a,null,l.a.createElement(x.a.Line,null),l.a.createElement(x.a.Line,null),l.a.createElement(x.a.Line,null),l.a.createElement(x.a.Line,null),l.a.createElement(x.a.Line,null)))):l.a.createElement("div",{className:"pv5 center"},l.a.createElement("div",{className:"mw5 center"},l.a.createElement("img",{src:H.a,alt:"Empty view"})),l.a.createElement("h4",{className:"f4 b lh-title tc ma0 mt4"},"No results found"),l.a.createElement("h5",{className:"f4 normal gray lh-title tc ma0"},"Try different criteria and search again."))),l.a.createElement("div",{className:"mv3 flex justify-center items-center"},l.a.createElement(_,{items:a,active:t,pageSize:15,onSelect:this.onPageSelect})),l.a.createElement("div",{className:"bg-light-green b--dark-green pa4 mt6 mb5"},l.a.createElement("form",{action:"https://space.us17.list-manage.com/subscribe/post?u=6ba21cd3bc4ade157639edfbd&id=dc859dd739",method:"post",className:"mw6 center pv4",target:"_blank",noValidate:!0},l.a.createElement("h3",{className:"f4 ma0"},"Citizen Tech Newsletter"),l.a.createElement("p",{className:"f5 lh-copy ma0 mb3"},"Join our community newsletter to hear how to get more involved with socially important work."),l.a.createElement("label",{className:"f5 b lh-copy"},"Join newsletter"),l.a.createElement("div",{className:"flex"},l.a.createElement("input",{type:"email",name:"EMAIL",placeholder:"Email address",className:"f6 b--solid b--dark-gray bg-washed-blue w-100 pa2"}),l.a.createElement("button",{type:"submit",className:"f6 b b--solid b--dark-gray bg-washed-blue ml1 ph3 bw1 bg-animate hover-bg-dark-gray hover-washed-blue"},"Subscribe"))))),l.a.createElement("div",{className:"mw8 center pv4 ph3 ph2-l flex justify-between black-80 bt b--black-80"},l.a.createElement("span",{className:"f5 b"},"Citizen Tech \xa9 2018"),l.a.createElement("a",{href:"mailto:hey@citizen.tech",className:"f5 b black-80 hover-black"},"Contact")))}}]),a}(n.Component),P=function(e){var a=e.to,t=e.children;return l.a.createElement("a",{href:a,className:"b dark-green underline-hover hover-dark-green",target:"_blank",rel:"noopener noreferrer"},t)};var B=function(){return l.a.createElement("div",{className:"job-board bg-light-green black",style:{minHeight:"100vh"}},l.a.createElement("div",{className:"bg-light-green bb b--light-green"},l.a.createElement("div",{className:"mw8 center"},l.a.createElement(v,null),l.a.createElement("div",{className:"pv5 bt bw2 b--black mb3 ph3 ph2-l"},l.a.createElement("h1",{className:"f2 lh-title black"},"About"),l.a.createElement("p",{className:"f3 lh-copy"},"This job board is designed to help techologists find better work. Better work means being good for you and good for society.")))),l.a.createElement("div",{className:"mw8 center ph3 ph2-l"},l.a.createElement("h3",{className:"f3"},"What's the point?"),l.a.createElement("p",{className:"f4 lh-copy"},"The point of this job board is to help technologists find more satisfying work. This job board is for people that want to feel ethically comfortable with the work they do. To be included in this job board, the job must be focussed on a pressing social issue with the opportunity for real positive change."),l.a.createElement("p",{className:"f4 lh-copy"},"It contains a mixture of advocacy, service, philanthropy, international development, social enterprise, corporate social responsibility, and government improvement."),l.a.createElement("h3",{className:"f3"},"Even Better Job Boards"),l.a.createElement("p",{className:"f4 lh-copy"},"This job board was inspired and helped by this collection of even better job boards. Check them out and consider bookmarking them."),l.a.createElement("ul",{className:"f4 lh-copy ml0 pl4"},l.a.createElement("li",null,"Code for America's"," ",l.a.createElement(P,{to:"https://jobs.codeforamerica.org/"},"Public Interest Tech Job Board")),l.a.createElement("li",null,"80,000 Hours'"," ",l.a.createElement(P,{to:"https://80000hours.org/job-board/"},"High Impact Job Board")),l.a.createElement("li",null,l.a.createElement(P,{to:"https://twitter.com/mollieruskin"},"Mollie")," &"," ",l.a.createElement(P,{to:"https://twitter.com/SFath"},"Sarah"),"'s ",l.a.createElement(P,{to:"https://www.designgigsforgood.org/"},"Design Gigs for Good")),l.a.createElement("li",null,l.a.createElement(P,{to:"https://twitter.com/@chris_whong"},"Chris Whong"),"'s ",l.a.createElement(P,{to:"https://civicjobs.nyc/"},"NYC Civic Jobs"))),l.a.createElement("h3",{className:"f3 mt4"},"Who made this?"),l.a.createElement("p",{className:"f4 lh-copy"},l.a.createElement(P,{to:"http://citizen.tech"},"Citizen Tech")," and its job board was created by"," ",l.a.createElement(P,{to:"https://twitter.com/nikolazaris"},"Niko Lazaris")," to help other designers, developers, and product managers. It is"," ",l.a.createElement(P,{to:"https://github.com/nlaz/citizen-tech"},l.a.createElement(g.a,{name:"github",size:"small",className:"dark-green"}),"open source")," ","if you are curious."),l.a.createElement("p",{className:"f4 lh-copy"},"I'm happy to answer your questions over"," ",l.a.createElement(P,{to:"https://twitter.com/nikolazaris"},"twitter")," or"," ",l.a.createElement(P,{to:"mailto:hey@citizen.tech"},"email"),", too.")))},Y=t(99);Y.a.initialize(L.googleAnalyticsKey);var G=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return Y.a.set({page:window.location.pathname+window.location.hash}),Y.a.pageview(window.location.pathname+window.location.hash),null}}]),a}(n.Component),U=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"helvetica dark-gray bg-washed-blue",style:{minHeight:"100vh"}},l.a.createElement(h.a,null,l.a.createElement("div",{className:"center",style:{minHeight:"100vh"}},l.a.createElement(d.a,{path:"/",component:G}),l.a.createElement(p.a,null,l.a.createElement(d.a,{path:"/",exact:!0,component:E}),l.a.createElement(d.a,{path:"/jobs",exact:!0,component:K}),l.a.createElement(d.a,{path:"/jobs/about",exact:!0,component:B})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(513),t(515);s.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[247,2,1]]]);
//# sourceMappingURL=main.cf3969a2.chunk.js.map