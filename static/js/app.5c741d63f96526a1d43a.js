webpackJsonp([5],{"4/hK":function(t,e){},Fc1Y:function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"https://note-server.hunger-valley.com"}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=n("zL8q"),a=n.n(r),s=(n("tvR6"),n("Dd8w")),u=n.n(s),c=n("NYxO"),i={data:function(){return{}},created:function(){this.setUser()},methods:u()({},Object(c.b)({setUser:"checkLogin"})),computed:u()({},Object(c.c)(["username","slug"]))},d={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var l={components:{avatar:n("VU/8")(i,d,!1,function(t){n("brgn")},"data-v-5a8887d7",null).exports},methods:u()({},Object(c.b)(["logout"]),{onLogout:function(){this.logout({path:"/login"})}})},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout"},[e("i",{staticClass:"iconfont icon-logout",on:{click:this.onLogout}})])],1)},staticRenderFns:[]};var h={name:"App",components:{Slidebar:n("VU/8")(l,f,!1,function(t){n("Pn1D")},"data-v-d8a9a102",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Slidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var m=n("VU/8")(h,b,!1,function(t){n("Fc1Y")},null,null).exports,p=n("/ocq");o.default.use(p.a);var v=new p.a({routes:[{path:"/",alias:"/notebooks",component:function(){return n.e(2).then(n.bind(null,"C3fl"))}},{path:"/login",component:function(){return n.e(3).then(n.bind(null,"xJsL"))}},{path:"/note",component:function(){return n.e(0).then(n.bind(null,"Gb2o"))}},{path:"/trash",component:function(){return n.e(1).then(n.bind(null,"WMg/"))}}]}),k=n("//Fk"),g=n.n(k),I=n("p+dL"),N=n("VmfC"),T={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},A=function(){return new g.a(function(t,e){Object(I.a)(T.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt?1:-1}),e.data.forEach(function(t){t.createdAtFriendly=Object(N.a)(t.createdAt),t.updatedAtFriendly=Object(N.a)(t.updatedAt)}),t(e)}).catch(function(t){e(t)})})},E=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""}).title,n=void 0===e?"":e;return Object(I.a)(T.UPDATE.replace(":id",t),"PATCH",{title:n})},O=function(t){return Object(I.a)(T.DELETE.replace(":id",t),"DELETE")},j=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""}).title,e=void 0===t?"":t;return new g.a(function(t,n){Object(I.a)(T.ADD,"POST",{title:e}).then(function(e){e.data.createdAtFriendly=Object(N.a)(e.data.createdAt),e.data.updatedAtFriendly=Object(N.a)(e.data.updatedAt),t(e)}).catch(function(t){n(t)})})},w={state:{notebooks:null,curBookId:null},getters:{notebooks:function(t){return t.notebooks||[]},curBook:function(t){return Array.isArray(t.notebooks)?t.curBookId?t.notebooks.find(function(e){return e.id==t.curBookId})||{}:t.notebooks[0]||{}:{}}},mutations:{setNotebooks:function(t,e){t.notebooks=e.notebooks},addNotebook:function(t,e){t.notebooks.unshift(e.notebook)},updateNotebook:function(t,e){(t.notebooks.find(function(t){return t.id==e.notebookId})||{}).title=e.title},deleteNotebook:function(t,e){t.notebooks=t.notebooks.filter(function(t){return t.id!=e.notebookId})},setCurBook:function(t,e){t.curBookId=e.curBookId}},actions:{getNotebooks:function(t){var e=t.commit;return null!==t.state.notebooks?g.a.resolve():A().then(function(t){e("setNotebooks",{notebooks:t.data})})},addNotebook:function(t,e){var n=t.commit;return j({title:e.title}).then(function(t){console.log("add success...",t),n("addNotebook",{notebook:t.data}),r.Message.success(t.msg)})},updateNotebook:function(t,e){var n=t.commit;return E(e.notebookId,{title:e.title}).then(function(t){n("updateNotebook",{notebookId:e.notebookId,title:e.title}),r.Message.success(t.msg)})},deleteNotebook:function(t,e){var n=t.commit;return O(e.notebookId).then(function(t){n("deleteNotebook",{notebookId:e.notebookId}),r.Message.success(t.msg)})}}},D={GET:"/notes/from/:notebookId",ADD:"/notes/to/:notebookId",UPDATE:"/notes/:noteId",DELETE:"/notes/:noteId"},L=function(t){var e=t.notebookId;return new g.a(function(t,n){Object(I.a)(D.GET.replace(":notebookId",e)).then(function(e){e.data=e.data.map(function(t){return t.createdAtFriendly=Object(N.a)(t.createdAt),t.updatedAtFriendly=Object(N.a)(t.updatedAt),t}).sort(function(t,e){return t.updatedAt<e.updatedAt}),t(e)}).catch(function(t){n(t)})})},y=function(t,e){var n=t.noteId,o=e.title,r=e.content;return Object(I.a)(D.UPDATE.replace(":noteId",n),"PATCH",{title:o,content:r})},C=function(t){var e=t.noteId;return Object(I.a)(D.DELETE.replace(":noteId",e),"DELETE")},F=function(t){var e=t.notebookId,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:"",content:""},o=n.title,r=void 0===o?"":o,a=n.content,s=void 0===a?"":a;return new g.a(function(t,n){Object(I.a)(D.ADD.replace(":notebookId",e),"POST",{title:r,content:s}).then(function(e){e.data.createdAtFriendly=Object(N.a)(e.data.createdAt),e.data.updatedAtFriendly=Object(N.a)(e.data.updatedAt),t(e)}).catch(function(t){n(t)})})},U={state:{notes:null,curNoteId:null},getters:{notes:function(t){return t.notes||[]},curNote:function(t){return Array.isArray(t.notes)?t.curNoteId?t.notes.find(function(e){return e.id==t.curNoteId})||{title:"",content:""}:Array.isArray(t.notebooks)?t.notebooks[0]:{title:"",content:""}:{title:"",content:""}}},mutations:{setNote:function(t,e){t.notes=e.notes},addNote:function(t,e){t.notes.unshift(e.note)},updateNote:function(t,e){var n=t.notes.find(function(t){return t.id===e.noteId})||{};n.title=e.title,n.content=e.content},deleteNote:function(t,e){t.notes=t.notes.filter(function(t){return t.id!==e.noteId})},setCurNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curNoteId=e.curNoteId}},actions:{getNotes:function(t,e){var n=t.commit,o=e.notebookId;return L({notebookId:o}).then(function(t){n("setNote",{notes:t.data})})},addNote:function(t,e){var n=t.commit,o=e.notebookId,r=e.title,a=e.content;return F({notebookId:o},{title:r,content:a}).then(function(t){console.log("add success...",t),n("addNote",{note:t.data})})},updateNote:function(t,e){var n=t.commit,o=e.noteId,r=e.title,a=e.content;return y({noteId:o},{title:r,content:a}).then(function(t){n("updateNote",{noteId:o,title:r,content:a})})},deleteNote:function(t,e){var n=t.commit,o=e.noteId;return C({noteId:o}).then(function(t){n("deleteNote",{noteId:o}),r.Message.success(t.msg)})}}},_={GET:"/notes/trash",REVERT:"/notes/:noteId/revert",DELETE:"/notes/:noteId/confirm"},M=function(){return new g.a(function(t,e){Object(I.a)(_.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt?1:-1}),e.data.forEach(function(t){t.createdAtFriendly=Object(N.a)(t.createdAt),t.updatedAtFriendly=Object(N.a)(t.updatedAt)}),t(e)}).catch(function(t){e(t)})})},P=function(t){var e=t.noteId;return Object(I.a)(_.DELETE.replace(":noteId",e),"DELETE")},R=function(t){var e=t.noteId;return Object(I.a)(_.REVERT.replace(":noteId",e),"PATCH")},G={state:{trashNotes:null,curTrashNoteId:null},getters:{trashNotes:function(t){return t.trashNotes||[]},curTrashNote:function(t,e){return t.curTrashNoteId?t.trashNotes.find(function(e){return e.id==t.curTrashNoteId})||{}:e.trashNotes[0]||{}},belongTo:function(t,e,n,o){return console.log(o.notebooks),console.log(e.trashNotes.notebookId),(o.notebooks.find(function(t){return t.id==e.trashNotes.notebookId})||{}).title||""}},mutations:{setTrashNotes:function(t,e){t.trashNotes=e.trashNotes},addTrashNote:function(t,e){setTrashNotes.unshift(e.note)},deleteTrashNote:function(t,e){t.trashNotes=t.trashNotes.filter(function(t){return t.id!=e.noteId})},setCurTrashNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curTrashNoteId=e.curTrashNoteId}},actions:{getTrashNotes:function(t){var e=t.commit;return M().then(function(t){e("setTrashNotes",{trashNotes:t.data})})},deleteTrashNote:function(t,e){var n=t.commit,o=e.noteId;return P({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),r.Message.success(t.msg)})},revertTrashNote:function(t,e){var n=t.commit,o=e.noteId;return R({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),r.Message.success(t.msg)})}}},S=n("Q98j"),x={state:{user:null},getters:{username:function(t){return null===t.user?"未登录":t.user.username},slug:function(t){return null===t.user?"未":t.user.username.charAt(0)}},mutations:{setUser:function(t,e){t.user=e.user}},actions:{login:function(t,e){var n=t.commit,o=e.username,r=e.password;return S.a.login({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},register:function(t,e){var n=t.commit,o=e.username,r=e.password;return S.a.register({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},logout:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/login"};return S.a.logout().then(function(t){e("setUser",{user:null}),console.log(n),v.push(n)})},checkLogin:function(t,e){var n=t.commit;return null!==t.state.user?g.a.resolve():S.a.getInfo().then(function(t){t.isLogin?n("setUser",{user:t.data}):(console.log("jump"),v.push(e))})}}};o.default.use(c.a);var B=new c.a.Store({modules:{notebook:w,note:U,trash:G,user:x}}),V=n("E5Az"),H=n.n(V);n("4/hK");o.default.use(H.a),o.default.use(a.a),o.default.config.productionTip=!1,window.vm=new o.default({el:"#app",router:v,store:B,components:{App:m},template:"<App/>"})},Pn1D:function(t,e){},Q98j:function(t,e,n){"use strict";var o=n("p+dL"),r="/auth/register",a="/auth/login",s="/auth/logout",u="/auth";e.a={register:function(t){var e=t.username,n=t.password;return Object(o.a)(r,"POST",{username:e,password:n})},login:function(t){var e=t.username,n=t.password;return Object(o.a)(a,"POST",{username:e,password:n})},logout:function(){return Object(o.a)(s)},getInfo:function(){return Object(o.a)(u)}}},VmfC:function(t,e,n){"use strict";e.a=function(t){var e=("object"===(void 0===t?"undefined":r()(t))?t:new Date(t)).getTime(),n=Date.now()-e,o="";switch(!0){case n<6e4:o="刚刚";break;case n<36e5:o=Math.floor(n/6e3+"分钟前");break;case n<864e5:o=Math.floor(n/36e5)+"小时前";break;default:o=Math.floor(n/864e5)+"天前"}return o};var o=n("pFYg"),r=n.n(o)},brgn:function(t,e){},"p+dL":function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new r.a(function(o,r){var s={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?s.params=n:s.data=n,Object(a.a)(s).then(function(t){200===t.status?o(t.data):(c.Message.error(t.data.msg),r(t.data))}).catch(function(t){c.Message.error("网络异常"),r({msg:"网络异常"})})})};var o=n("//Fk"),r=n.n(o),a=n("mtWM"),s=n("Jdfc"),u=n.n(s),c=n("zL8q");n.n(c);a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a.a.defaults.baseURL=u.a.baseURL,a.a.defaults.withCredentials=!0},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5c741d63f96526a1d43a.js.map