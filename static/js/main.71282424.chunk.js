(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,a){},159:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(37),r=a.n(i),o=(a(85),a(6)),c=a(7),s=a(9),m=a(8),d=a(10),u=(a(87),a(88),a(90),function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{height:"98%"}},l.a.createElement("div",{className:"banner-holder"},l.a.createElement("div",{className:"banner-tint"},l.a.createElement("label",{className:"banner-name"},"Avin Vij"),l.a.createElement("br",null),l.a.createElement("label",{className:"banner-designation"},"Your Friendly Neighbourhood Software Developer")),l.a.createElement("div",{className:"banner-dp-holder"},l.a.createElement("div",{style:{backgroundImage:"url("+a(92)+")"},className:"banner-dp"}))))}}]),t}(n.Component)),p=a(173),g=(a(93),a(169)),h=a(170),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).renderTitleDetails=function(){if(a.props.data.objects)return a.props.data.objects.map(function(e,t){return e.icon?l.a.createElement(g.a,{style:{textAlign:"center",maxHeight:"300px",minHeight:"300px"},xs:12,lg:12/a.props.data.objects.length},l.a.createElement("div",{style:{width:"100px",marginLeft:"auto",marginRight:"auto",marginTop:"20px",height:"100px",backgroundColor:"grey",border:"1px solid white",display:"block",borderRadius:"150px"}},l.a.createElement("img",{height:50,width:50,style:{marginTop:"20px"},src:"/assets/"+e.icon})),l.a.createElement("label",{className:"details-item-description"},e.text)):l.a.createElement(g.a,{xs:12,lg:12/a.props.data.objects.length,style:{maxHeight:"300px",minHeight:"300px"}},e.subTitle&&l.a.createElement("label",{className:"details-duration"},e.subTitle),e.duration&&l.a.createElement("label",{className:"details-duration"},e.duration),l.a.createElement("label",{className:"details-item-description"},e.text))})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"details-item-holder"},l.a.createElement("label",{className:"details-item-title-text"},this.props.data.title),l.a.createElement(h.a,null,this.renderTitleDetails()))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).my_details=[{title:"About Me",objects:[{text:"Hi , I'm Avin vij, softawre developer from India, I like to solve the real world problems using the technology. I have made many mobile games using Unity 3D , blender and adobe illustrator. Also proficient in writing mobile applications using native techonology Android Studios or using the hybrid technology i.e. React Native. Last but not the least , I also love to design websites and webapps using ReactJS ,HTML & CSS. Apart from technology I like to play cricket or do gymming or even listen to music in my free time."}]},{title:"Expirience",objects:[{subTitle:"Xoriant Solutions",duration:"2016-2019",text:"I worked as a softawre developer where I worked on many vivid technologies like COCOS2D , Unity3D , React Native , ReactJS , NodeJS and many more. I handled projects of Disney , ACCLOUD , DYNOSENSE , BLUEHEXAGON and NICKELODEON."},{subTitle:"epiKAT Studios",duration:"2014-Current",text:"epiKAT studios is a small company I started with my friends. epiKAT studios makes mobile games specially for android platform. Rolling Planets , Flakky Run , Shape Patcher , Flying Puffy and The Indian Bingo are the games launched under epiKAT studios. Apart from that we have worked on many other games using the recent idealogies of AR and VR."}]},{title:"Skills",objects:[{icon:"reactjs.png",text:"ReactJS & React Native"},{icon:"unity.png",text:"Unity"},{icon:"nodejs.png",text:"Node JS"},{icon:"mongo.png",text:"Mongo DB"},{icon:"android.png",text:"Android Studios"},{icon:"blender.png",text:"Blender"}]},{title:"Hobbies & Intrests",objects:[{icon:"hand.png",text:"Coin Collection"},{icon:"cricket.png",text:"Cricket"},{icon:"music.png",text:"Music"},{icon:"gadget.png",text:"Exploring Gadgets"}]}],a.generateDetails=function(){return a.my_details.map(function(e,t){return l.a.createElement(p.a.Item,null,l.a.createElement(b,{data:e}))})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{position:"relative"}},l.a.createElement(p.a,{slide:!0,controls:!1},this.generateDetails()))}}]),t}(n.Component),E=(a(62),a(76)),x=a.n(E),y=(n.Component,a(172)),v=a(171),j=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(y.a,{fixed:"top",style:{background:"#00000077"},expand:"loght"},l.a.createElement(y.a.Brand,{style:{color:"white"},onClick:function(){e.props.scrollTo("nameholder")}},"Avin Vij"),l.a.createElement(v.a,{style:{float:"left",position:"relative"}},l.a.createElement("div",null,l.a.createElement(v.a.Link,{onClick:function(){e.props.scrollTo("detailscarousel")},style:{float:"left",color:"white"}},"About Me"),l.a.createElement(v.a.Link,{onClick:function(){e.props.scrollTo("portfolio")},eventKey:2,style:{float:"left",color:"white",marginLeft:"20px"}},"Portfolio"),l.a.createElement(v.a.Link,{onClick:function(){e.props.scrollTo("contact")},eventKey:2,style:{float:"left",color:"white",marginLeft:"20px"}},"Contact"))),l.a.createElement(v.a,null),l.a.createElement(v.a,null),l.a.createElement(v.a,null),l.a.createElement(v.a,null),l.a.createElement(v.a,null))}}]),t}(n.Component),k=(a(157),function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact-container"},l.a.createElement(h.a,{style:{margin:"0px",minHeight:"400px"}},l.a.createElement(g.a,{style:{backgroundColor:"#2e4975"},lg:6,xs:12,md:6,sm:12},l.a.createElement("div",{className:"quick-id-container"},l.a.createElement("label",{style:{color:"white",marginTop:"20px"},className:"details-item-title-text"},"Quick ID"),l.a.createElement("table",{className:"quick-id-table"},l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{style:{color:"white",fontSize:"35px"}},"Phone : ")),l.a.createElement("td",null,l.a.createElement("label",{style:{marginLeft:"10px",color:"white",fontSize:"35px"}},"9420650091"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{style:{color:"white",fontSize:"35px"}},"Email : ")),l.a.createElement("td",null,l.a.createElement("label",{style:{marginLeft:"10px",color:"white",fontSize:"35px"}},"avinvij26@gmail.com"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{style:{color:"white",fontSize:"35px"}},"Skype : ")),l.a.createElement("td",null,l.a.createElement("label",{style:{marginLeft:"10px",color:"white",fontSize:"35px"}},"avinvij26")))))),l.a.createElement(g.a,{style:{backgroundColor:"#bbc8dd"},lg:6,xs:12,md:6,sm:12},l.a.createElement("label",{style:{marginTop:"20px"},className:"details-item-title-text"},"Get In Touch"),l.a.createElement("div",{style:{marginTop:"20px"}},l.a.createElement("form",null,l.a.createElement(h.a,null,l.a.createElement(g.a,{lg:6,sm:12,xs:12},l.a.createElement("input",{type:"text",placeholder:"Name",className:"contact-field"})),l.a.createElement(g.a,{lg:6,sm:12,xs:12},l.a.createElement("input",{type:"text",placeholder:"Email",className:"contact-field"}))),l.a.createElement(h.a,null,l.a.createElement(g.a,{lg:12,sm:12,xs:12},l.a.createElement("input",{type:"text",placeholder:"Subject",className:"contact-field"}))),l.a.createElement(h.a,null,l.a.createElement(g.a,{lg:12,sm:12,xs:12},l.a.createElement("textarea",{type:"text",placeholder:"Message",className:"contact-field"}))),l.a.createElement(h.a,null,l.a.createElement(g.a,{lg:12,sm:12,xs:12},l.a.createElement("label",{className:"submit-button"},"Submit"))))))))}}]),t}(n.Component)),w=(a(159),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).projects=[{title:"GetSetDine",img:"/assets/getsetdine.png"},{title:"Freshka Foods",img:"/assets/freshka.png"},{title:"Falari Wholesalers",img:"/assets/falari.jpg"},{title:"Stud Muffin",img:"/assets/studmuffin.png"},{title:"Scash 15",img:"/assets/scash15.png"},{title:"Monginis Catalog",img:"/assets/monginis-catalog.png"}],a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"skills-holder"},l.a.createElement("div",{style:{position:"absolute",background:"#00000077",height:"100%",width:"100%"}},l.a.createElement("div",{style:{marginLeft:"72px"}},l.a.createElement("label",{style:{marginTop:"20px",color:"white"},className:"details-item-title-text"},"Portfolio"),l.a.createElement("div",{style:{minHeight:"80px"}},l.a.createElement(h.a,{style:{margin:"0px"}},this.projects.map(function(e){return l.a.createElement(g.a,{xs:6,sm:6,lg:4,md:4},l.a.createElement("div",{className:"project-tile"},l.a.createElement("img",{src:e.img,style:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%"}}),l.a.createElement("div",{style:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",background:"#00000044"}}),l.a.createElement("label",{className:"project-title-text"},e.title)))}))))))}}]),t}(n.Component)),O=a(78),N=a.n(O),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).scrollToRef=function(e){N()(a.refs[e],{offset:-120,align:"top",duration:800})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(j,{scrollTo:this.scrollToRef}),l.a.createElement(u,{ref:"nameholder"}),l.a.createElement(f,{ref:"detailscarousel"}),l.a.createElement(w,{ref:"portfolio"}),l.a.createElement(k,{ref:"contact"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){},79:function(e,t,a){e.exports=a(168)},85:function(e,t,a){},87:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},88:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){e.exports=a.p+"static/media/dp.f7b26f8f.jpeg"},93:function(e,t,a){}},[[79,2,1]]]);
//# sourceMappingURL=main.71282424.chunk.js.map