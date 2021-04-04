(this["webpackJsonpcsv-parser"]=this["webpackJsonpcsv-parser"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"Alabama":"AL","Alaska":"AK","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","Delaware":"DE","District of Columbia":"DC","Florida":"FL","Georgia":"GA","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Pennsylvania":"PA","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY"}')},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),i=t(7),c=t.n(i),o=(t(13),t(5)),s=(t(14),t(15),t(0)),u=function(e){var n=e.message,t=void 0===n?"File format is not correct!":n;return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"message",children:t})})},l=function(e){var n=e.data.map((function(e,n){return Object(s.jsx)("td",{className:e.hasError?"warning":"",children:e.value},n)}));return Object(s.jsx)("tr",{children:n})},f=(t(17),function(e){var n=e.headers,t=e.data;if(0===n.length||0===t.length)return Object(s.jsx)("div",{children:"Data Empty"});var r=n.map((function(e,n){return Object(s.jsx)("th",{children:e},n)})),a=t.map((function(e,n){return Object(s.jsx)(l,{data:e},n)}));return Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:r})}),Object(s.jsx)("tbody",{children:a})]})}),d=(t(18),function(e){var n=e.onLoad,t=e.onError;return Object(s.jsx)("div",{className:"upload",children:Object(s.jsxs)("label",{className:"customFileUpload",children:[Object(s.jsx)("input",{type:"file",accept:".csv, text/csv",multiple:!1,onChange:function(e){return function(e){var r=e.target.files;if(r&&0!==r.length)if(a=r[0],/.+(\.csv)$/.test(a.name)){var a,i=new FileReader;i.onload=function(){var e=function(e){var n=e.split("\n"),t=[];return n.forEach((function(e){var n=e.split(",");n.length>1&&(n=n.map((function(e){return e.trim().replace(/ +/g," ").toString()})),t.push(n))})),t}(i.result);t(""),n(e)},i.readAsText(r[0])}else t("File format is not correct");else t("Select file")}(e)}}),Object(s.jsx)("i",{className:"",children:"Import Users"})]})})}),h=t(6),v=function(e){return e>=21},j=function(e){return e>=0&&e<=1e6},p=function(e){return!(!/^\d{4}-\d{2}-\d{2}$/.test(e)&&!/^\d{2}\/\d{2}\/\d{4}$/.test(e))&&new Date(e)>new Date},m=function(e){return/(^\d{10}$)|(^[1]{1}\d{10}$)|(^[+][1]{1}\d{10}$)/.test(e)},b=function(e){return/^[\w-.]+@[\w-]+.+[\w-]{2,4}$/.test(e)},O=function(e){return"TRUE"===e||"FALSE"===e||""===e},g=function(e){return/^\w{6}$/.test(e)},N=t(8),x=function(e){return(+e).toFixed(2)},w=function(e){var n=e.trim().replace(/ +/g,"").split("|"),t=[];return n.forEach((function(e){if(e.length>2){var n=JSON.parse(JSON.stringify(N))[e];n&&t.push(n)}else t.push(e)})),t.join(", ")},C=function(e){var n=e.match(/[0-9]{10}$/);return n?"+1".concat(n[0]):e},E=function(e,n){return e.map((function(t,r){for(var a=[{value:"".concat(r+1)}].concat(Object(h.a)(t),[{value:""}]),i=function(r){var i=e[r];if(n.some((function(e){return t[e].value.toLowerCase()===i[e].value.toLowerCase()}))){var c=a.length-1;return a[c].value="".concat(r+1),"break"}},c=r+1;c<e.length;c++){if("break"===i(c))break}return a}))},A=function(e,n,t){if(n(e)){var r=e;return t&&(r=t(e)),{value:r}}return{value:e,hasError:!0}},M=function(e,n){return e.map((function(e){return e.map((function(t,r){switch(n[r]){case"phone":return A(t,m,C);case"email":return A(t,b);case"age":return A(t,v);case"experience":var a=n.indexOf("age");return v(+e[a])?(i=+e[a],(c=+t)>=0&&c<i?{value:t}:{value:t,hasError:!0}):{value:t,hasError:!0};case"yearly_income":return A(t,j,x);case"has_children":return A(t,O);case"license_states":return A(t,(function(e){return e}),w);case"expiration_date":return A(t,p);case"license_number":return A(t,g);default:return{value:t}}var i,c}))}))},I=function(e,n){return e.every((function(e){return n.every((function(n){return!(""===e[n])}))}))},S=function(e,n){return e.map((function(e){return n.indexOf(e)}))},y=function(e){var n=[],t=[];return e.forEach((function(e,r){0===r?n=e:t.push(e)})),{headers:n,body:t}};var D=function(){var e=Object(r.useState)({headers:[],data:[]}),n=Object(o.a)(e,2),t=n[0],a=n[1],i=Object(r.useState)("Select file"),c=Object(o.a)(i,2),l=c[0],v=c[1],j=function(e){a(e)};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(d,{onLoad:function(e){!function(e,n,t,r,a){if(!e||e.length<2)r("Not correct data");else if(function(e,n){var t=e.map((function(e){return e.toLowerCase()})),r=n.filter((function(e){return t.includes(e.toLowerCase())}));return t.length===r.length}(n,e[0])){var i=y(e),c=i.headers,o=i.body,s=S(n,c);if(I(o,s)){var u=c.map((function(e){return e.toLowerCase().replace(/ +/g,"_")})),l=S(t,c),f=M(o,u);a({data:E(f,l),headers:["ID"].concat(Object(h.a)(c),["Duplicate with"])})}else r("Error Required Fields")}else r("Error Required Fields")}(e,["Full Name","Phone","Email"],["Phone","Email"],v,j)},onError:v}),l&&Object(s.jsx)(u,{message:l}),!l&&t&&Object(s.jsx)(f,{headers:t.headers,data:t.data})]})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(D,{})}),document.getElementById("root")),F()}],[[19,1,2]]]);
//# sourceMappingURL=main.3dea6d97.chunk.js.map