(this.webpackJsonpworldcup=this.webpackJsonpworldcup||[]).push([[0],{69:function(e,t,n){},71:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),o=(n(69),n(37)),s=n(38),u=n.n(s),d=n(46),l=n(11),j=(n(71),n(49)),b=(n(75),n(2)),h=function(e){var t=e.id,n=e.img,a=e.name,c=e.onPick,r=e.width,i=void 0===r?"400px":r,o=e.height,s=void 0===o?"400px":o;return Object(b.jsxs)("div",{className:"tc bg-white dib br3 pd3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:n,width:i,height:s,alt:"loading failed",className:"br3 pointer",onClick:function(){return c(t)}}),Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:a})})]})},m=function(e){var t=e.WorldCups,n=e.worldcupSelect;return Object(b.jsx)("div",{id:"WorldCupList",children:0===t.length?Object(b.jsx)("h1",{children:"Loading . . ."}):t.map((function(e){return Object(b.jsx)(h,{id:e.id,img:e.thumbnail,name:e.worldcupname,onPick:function(){return n(e.worldcupname)},width:"300px",height:"300px"},e.id)}))})},p=function(e){var t=e.currentCandidates,n=e.onPickItem;return Object(b.jsx)("div",{id:"CardList",children:0===t.length?Object(b.jsx)("h1",{children:"Loading . . ."}):t.map((function(e){return Object(b.jsx)(h,{id:e.id,img:e.img,name:e.name,onPick:n},e.id)}))})},f=(n(77),function(e){var t=e.winner,n=Object(a.useState)([]),c=Object(l.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){fetch("https://young-mesa-11204.herokuapp.com/rank",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({worldcupName:t.worldcupName})}).then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){return console.log(e,"rank \ubd88\ub7ec\uc624\ub294\uc911 \uc5d0\ub7ec")}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"\uba85\uc608\uc758 \uc804\ub2f9"}),0===r.length?Object(b.jsx)("h1",{children:"Rank Loading . . ."}):r.map((function(e){return Object(b.jsxs)("div",{className:"tc bg-skyblue dib br3 pd3 ma2 bw2 shadow-5 w-50",children:[Object(b.jsx)("img",{src:e.img,height:"100px","max-width":"200px",alt:"load failed"}),Object(b.jsxs)("h2",{className:"rankFont",children:[e.name,e.wincount]})]},e.name)}))]})}),O=function(e){var t=e.winner,n=(e.worldcup,t.img),a=t.name;return Object(b.jsxs)("div",{id:"winner",children:[Object(b.jsxs)("div",{className:"tc bg-white dib br3 pd3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://4.bp.blogspot.com/-womv7NA3W-M/UPyIwPrV2pI/AAAAAAAAKww/gzSI1ikUuM4/s400/king_oukan.png",width:"50px",height:"50px",alt:"crown"}),Object(b.jsx)("br",{}),Object(b.jsx)("img",{src:n,width:"400px",height:"400px",alt:"img",className:"br3"}),Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:a})})]}),Object(b.jsx)(f,{winner:t})]})},g=function(e){var t=e.worldcupName,n=e.isEnd,a=e.routeChange,c=e.currentCount,r=e.route;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("button",{className:"b f4 link dim ba bw1 ph3 pv2 mb2 dib black br3",onClick:function(){return a("home")},children:"\ud648\uc73c\ub85c"}),Object(b.jsx)("button",{className:"b f4 link dim ba bw1 ph3 pv2 mb2 dib black br3",disabled:"game"===r,onClick:function(){return a("addWorldcup")},children:"\uc6d4\ub4dc\ucef5 \ucd94\uac00"}),"home"===r?Object(b.jsx)("h1",{children:"\uc6d4\ub4dc\ucef5\uc744 \uc120\ud0dd\ud558\uc138\uc694"}):"addWorldcup"===r?Object(b.jsx)("h1",{children:"[\uc5ec\uae30\uc5d0 \uc6d4\ub4dc\ucef5 \uc785\ub825]"}):n?Object(b.jsx)("h1",{children:"\uc6b0\uc2b9\uc790"}):Object(b.jsx)("h2",{children:c()})]})},x=n(125),v=n(119),w=n(127),C=Object(v.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}})),y=function(e){var t=e.world,n=e.routeChange,c=C(),r=Object(a.useState)(4),i=Object(l.a)(r,2),s=i[0],u=i[1],d=Object(a.useState)(""),j=Object(l.a)(d,2),h=j[0],m=j[1],p=Object(a.useState)(""),f=Object(l.a)(p,2),O=f[0],g=f[1],v=Object(a.useState)(""),y=Object(l.a)(v,2),N=y[0],S=y[1],k=Object(a.useState)(""),W=Object(l.a)(k,2),I=W[0],A=W[1];Object(a.useEffect)((function(){S(new Array(s)),A(new Array(s))}),[s]);var E=function(e){u(Number(e.target.value))},T=function(e){var t=Object(o.a)(N);t[Number(e.target.id)]=e.target.value,S(t)},P=function(e){var t=Object(o.a)(I);t[Number(e.target.id)]=e.target.value,A(t)};return Object(b.jsx)("form",{className:c.root,noValidate:!0,autoComplete:"off",children:Object(b.jsxs)("div",{id:"textFieldList",children:[Object(b.jsx)(x.a,{id:"standard-basic",label:"\uc6d4\ub4dc\ucef5 \uc774\ub984",variant:"outlined",onChange:function(e){m(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{id:"standard-basic",label:"\uc6d4\ub4dc\ucef5 \uc378\ub124\uc77c",onChange:function(e){g(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsxs)("select",{name:"addNumberOfCandidates",id:"cars",onChange:E,children:[Object(b.jsx)("option",{value:"4",children:"4\uac15"}),Object(b.jsx)("option",{value:"8",children:"8\uac15"}),Object(b.jsx)("option",{value:"16",children:"16\uac15"}),Object(b.jsx)("option",{value:"32",children:"32\uac15"}),Object(b.jsx)("option",{value:"64",children:"64\uac15"}),Object(b.jsx)("option",{value:"128",children:"128\uac15"})]}),function(e){for(var t=[],n=0;n<e;n++)t.push(Object(b.jsxs)("form",{className:c.root,noValidate:!0,autoComplete:"off",children:[Object(b.jsx)(x.a,{id:n.toString(),label:n+1,variant:"filled",onChange:T}),Object(b.jsx)(x.a,{id:n.toString(),label:"\uc774\ubbf8\uc9c0 \ub9c1\ud06c",variant:"filled",onChange:P})]},Number(n)));return t}(s),Object(b.jsx)(w.a,{variant:"contained",color:"primary",onClick:function(){var e=[];console.log(h,N,I);for(var a=0;a<s;a++){if(!I[a]||!N[a])return void alert("\ubaa8\ub4e0 \ud56d\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694");e.push({worldcupname:h,name:N[a],img:I[a]})}for(var c=0;c<t.length;c++)if(t[c].worldcupname===h)return void alert("\uc911\ubcf5\ub41c \uc6d4\ub4dc\ucef5 \uc774\ub984\uc785\ub2c8\ub2e4. \ub2e4\ub978 \uc774\ub984\uc744 \uc0ac\uc6a9\ud574\uc8fc\uc138\uc694.");fetch("https://young-mesa-11204.herokuapp.com/addWorldcupName",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({addWorldcupName:h,addThumbnail:O,addNumberOfCandidates:s})}).then((function(t){t&&fetch("https://young-mesa-11204.herokuapp.com/addCandidates",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})).then((function(e){console.log(e),alert("\ucd94\uac00\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),n("home")}))},children:"\ub4f1\ub85d!"}),Object(b.jsx)("h5",{children:"\u203b\uc544\uc9c1\uc740 2\uc758 \uc644\uc804\uc81c\uacf1\uc218\ub9cc \ub4f1\ub85d\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."})]})})},N=n(128),S=n(124),k=n(122),W=n(126),I=n(52),A=n.n(I),E=n(89),T=n(123);function P(){return Object(b.jsxs)(E.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(b.jsx)(k.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var F=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function J(e){var t=e.routeChange,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),u=s[0],d=s[1],j=F();return Object(b.jsxs)(T.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(S.a,{}),Object(b.jsxs)("div",{className:j.paper,children:[Object(b.jsx)(N.a,{className:j.avatar,children:Object(b.jsx)(A.a,{})}),Object(b.jsx)(E.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(b.jsxs)("form",{className:j.form,noValidate:!0,children:[Object(b.jsx)(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){i(e.target.value)},autoFocus:!0}),Object(b.jsx)(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){d(e.target.value)},autoComplete:"current-password"}),Object(b.jsx)(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:j.submit,onClick:function(e){e.preventDefault(),fetch("https://young-mesa-11204.herokuapp.com/signIn",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:u})}).then((function(e){return e.json()})).then((function(e){"signInSuccess"===e?t("home"):alert("\uc798\ubabb\ub41c \uc774\uba54\uc77c \ud639\uc740 \ud328\uc2a4\uc6cc\ub4dc\uc785\ub2c8\ub2e4.")}))},children:"Sign In"})]})]}),Object(b.jsx)(W.a,{mt:8,children:Object(b.jsx)(P,{})})]})}var L=function(){var e=Object(a.useState)(1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),i=Object(l.a)(r,2),s=i[0],h=i[1],f=Object(a.useState)("\uc774\uc0c1\ud615\uc6d4\ub4dc\ucef5"),x=Object(l.a)(f,2),v=x[0],w=x[1],C=Object(a.useState)([]),N=Object(l.a)(C,2),S=N[0],k=N[1],W=Object(a.useState)(!1),I=Object(l.a)(W,2),A=I[0],E=I[1],T=Object(a.useState)(""),P=Object(l.a)(T,2),F=P[0],L=P[1],M=Object(a.useState)("home"),D=Object(l.a)(M,2),V=D[0],q=D[1],B=Object(a.useState)([S[2*(n-1)],S[2*(n-1)+1]]),U=Object(l.a)(B,2),Y=U[0],z=U[1],K=Object(a.useState)([]),R=Object(l.a)(K,2),_=R[0],G=R[1],H={method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({worldcupName:v})};Object(a.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://young-mesa-11204.herokuapp.com/load",H);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,G(n),console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[V]),Object(a.useEffect)((function(){z([S[2*(n-1)],S[2*(n-1)+1]]),console.log("cand",S)}),[S]),Object(a.useEffect)((function(){A&&function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://young-mesa-11204.herokuapp.com/addWinner",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({winner:F.name,worldcupname:F.worldcupName})});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[A]);var Q=function(e){"home"===e&&(c(1),L(""),k([]),E(!1),w("\uc774\uc0c1\ud615\uc6d4\ub4dc\ucef5")),q(e)};Object(a.useEffect)((function(){"\uc774\uc0c1\ud615\uc6d4\ub4dc\ucef5"!==v&&fetch("https://young-mesa-11204.herokuapp.com/candidates",H).then((function(e){return e.json()})).then((function(e){k(function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}(e)),h(e.length)})).then(console.log("candidate \uc77d\uc5c8\uc74c",S)).catch((function(e){return console.log(e,"candidate \ubd88\ub7ec\uc624\ub294\uc911 \uc5d0\ub7ec")}))}),[v]),Object(a.useEffect)((function(){0!==S.length&&"signIn"!==V&&Q("game")}),[S]);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j.a,{children:Object(b.jsx)("meta",{charSet:"utf-8"})}),"signIn"===V?Object(b.jsx)("h2",{}):Object(b.jsx)(g,{worldcupName:v,isEnd:A,routeChange:Q,currentCount:function(){for(var e=s,t=n;t>e/2;)t-=e/2,e/=2;return 2===e?"\uacb0\uc2b9":e+"\uac15 "+t+"/"+e/2},route:V}),"signIn"===V?Object(b.jsx)(J,{routeChange:Q}):"addWorldcup"===V?Object(b.jsx)(y,{world:_,routeChange:Q}):"home"===V?Object(b.jsx)(m,{WorldCups:_,worldcupSelect:function(e){w(e),console.log("worldcupSelect",S),console.log(F)}}):!0===A?Object(b.jsx)(O,{winner:F}):Object(b.jsx)(p,{currentCandidates:Y,onPickItem:function(e){S.forEach((function(t){t.id===e&&(k((function(e){return[].concat(Object(o.a)(e),[{id:1e3*t.id,worldcupName:v,name:t.name,img:t.img}])})),L(t))})),n===s-1?E(!0):c(n+1)}})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};n(85);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),M()}},[[86,1,2]]]);
//# sourceMappingURL=main.50997fd2.chunk.js.map