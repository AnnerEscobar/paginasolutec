import './polyfills.server.mjs';
import{C as y,D as S,a,b as d,c as u,d as t,e as n,f as s,g as i,h as l,i as f,p as v,r as b,s as x,v as h,z as C}from"./chunk-YPQPR22W.mjs";var D=()=>["/Planes"],I=()=>["/About"],M=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["app-navbar"]],standalone:!0,features:[l],decls:12,vars:4,consts:[[1,"navbar","border-bottom","border-body"],[1,"container-fluid"],[1,"navbar-nav","mb-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","href","#",1,"nav-link"],["routerLinkActive","active",1,"nav-link",3,"routerLink"]],template:function(o,m){o&1&&(t(0,"nav",0)(1,"div",1)(2,"ul",2)(3,"li",3)(4,"a",4),i(5,"Inicio"),n()(),t(6,"li",3)(7,"a",5),i(8,"Planes"),n()(),t(9,"li",3)(10,"a",5),i(11,"Sobre Nosotros"),n()()()()()),o&2&&(d(7),u("routerLink",f(2,D)),d(3),u("routerLink",f(3,I)))},dependencies:[y],styles:[".navbar-nav[_ngcontent-%COMP%]{flex-direction:row}.nav-item[_ngcontent-%COMP%]{margin:10px}"]});let r=e;return r})();var P=(()=>{let e=class e{constructor(){this.title="app"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["app-root"]],standalone:!0,features:[l],decls:2,vars:0,template:function(o,m){o&1&&s(0,"app-navbar")(1,"router-outlet")},dependencies:[C,M]});let r=e;return r})();var g=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["app-home"]],standalone:!0,features:[l],decls:38,vars:0,consts:[[1,"div-general"],[1,"div-left"],["width","740","height","600","autoplay","",1,"videoBox"],["src","../../assets/videoblog.mp4","type","video/mp4"],[1,"div-rigth"],[1,"div-rigth-part"],[1,"bi","bi-tools","big"],["href","http://clientes.portalinternet.io/solicitar-instalacion/solutec-jutiapa/","target","_blank",1,"btn","btn-primary"],[1,"bi","bi-cash-stack","big"],["href","http://clientes.portalinternet.io/saldo/solutec-jutiapa/","target","_blank",1,"btn","btn-primary"],[1,"bi","bi-box-arrow-in-right","big"],["href","https://clientes.portalinternet.io/accounts/login/?empresa=solutec-jutiapa","target","_blank",1,"btn","btn-primary"],[1,"bi","bi-map","big"],["href","http://clientes.portalinternet.io/saldo/solutec-jutiapa/","target","_blank",1,"btn","btn-primary","disabled"]],template:function(o,m){o&1&&(t(0,"div",0)(1,"div",1)(2,"video",2),s(3,"source",3),i(4," Tu navegador no soporta la etiqueta de video. "),n()(),t(5,"div",4)(6,"div",5),s(7,"i",6),t(8,"h3"),i(9,"Solicitar Instalacion"),n(),t(10,"p"),i(11,"Solicita una instalacion y un asesor se contactara contigo en las siguientes 24 horas"),n(),t(12,"a",7),i(13,"Llenar formuario"),n()(),t(14,"div",5),s(15,"i",8),t(16,"h3"),i(17,"Consultar Saldo"),n(),t(18,"p"),i(19,"Consulta tu saldo, usando numero telefonico, correo electronico, DPI, NIT o el nombre registrado"),n(),t(20,"a",9),i(21,"Consultar saldo"),n()(),t(22,"div",5),s(23,"i",10),t(24,"h3"),i(25,"Ingresar al Portal"),n(),t(26,"p"),i(27,"Ingresa al portal y podras descargar tus facturas, ver consumos, crear tickets, sino tienes usuario, solicitalo!"),n(),t(28,"a",11),i(29,"Ingresar al portal"),n()(),t(30,"div",5),s(31,"i",12),t(32,"h3"),i(33,"Ver Cobertura"),n(),t(34,"P"),i(35,"Conoce los lugares en los que actualmente brindamos nuestros servicios de internet residencial"),n(),t(36,"a",13),i(37,"Ver cobertura"),n()()()())},styles:[".div-general[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%}.div-left[_ngcontent-%COMP%]{text-align:center;flex:1;height:100vh}.div-rigth[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;text-align:center;flex:1;height:100vh}.div-rigth-part[_ngcontent-%COMP%]{padding:1px;margin:5px 1px 1px}.div-rigth-part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:#787878}.big[_ngcontent-%COMP%]{font-size:4em;color:#49bf67}.btn-primary[_ngcontent-%COMP%]{background-color:#00acec}.div-left[_ngcontent-%COMP%]{align-items:center;margin-top:15px}.videoBox[_ngcontent-%COMP%]{border-radius:10%}"]});let r=e;return r})();var E=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["app-about"]],standalone:!0,features:[l],decls:2,vars:0,template:function(o,m){o&1&&(t(0,"p"),i(1,"about works!"),n())}});let r=e;return r})();var k=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["app-planes"]],standalone:!0,features:[l],decls:2,vars:0,template:function(o,m){o&1&&(t(0,"p"),i(1,"planes works!"),n())}});let r=e;return r})();var O=[{path:"Inicio",component:g},{path:"About",component:E},{path:"Planes",component:k},{path:"**",component:g}];var w={providers:[S(O),x()]};var _={providers:[h()]},F=v(w,_);var A=()=>b(P,F),ie=A;export{ie as a};