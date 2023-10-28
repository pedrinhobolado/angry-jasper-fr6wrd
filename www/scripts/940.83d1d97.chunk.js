(self.webpackChunkasf_ui=self.webpackChunkasf_ui||[]).push([[940],{4098:(e,t,a)=>{"use strict";a.d(t,{B4:()=>s,Hx:()=>o,Js:()=>i,WH:()=>r});var n=a(144);const r=[{name:n.default.i18n.translate("basic"),fields:["SteamOwnerID"]},{name:n.default.i18n.translate("trade"),fields:["MaxTradeHoldDuration","FilterBadBots","LicenseID"]},{name:n.default.i18n.translate("customization"),fields:["AutoRestart","Blacklist","CommandPrefix","CurrentCulture","SteamMessagePrefix"]},{name:n.default.i18n.translate("remote-access"),fields:["Headless","IPC","IPCPassword","IPCPasswordFormat"]},{name:n.default.i18n.translate("connection"),fields:["ConnectionTimeout","SteamProtocols","WebProxy","WebProxyPassword","WebProxyUsername"]},{name:n.default.i18n.translate("farming"),fields:["FarmingDelay","IdleFarmingPeriod","MaxFarmingTime","MinFarmingDelayAfterBlock"]},{name:n.default.i18n.translate("performance"),fields:["OptimizationMode","ConfirmationsLimiterDelay","GiftsLimiterDelay","InventoryLimiterDelay","LoginLimiterDelay","WebLimiterDelay"]},{name:n.default.i18n.translate("updates"),fields:["UpdateChannel","UpdatePeriod"]},{name:n.default.i18n.translate("advanced"),fields:["Debug"]}],s=[{name:n.default.i18n.translate("basic"),fields:["Name","SteamLogin","SteamPassword","Enabled","Paused","OnlineStatus","BotBehaviour"]},{name:n.default.i18n.translate("security"),fields:["PasswordFormat","UseLoginKeys"]},{name:n.default.i18n.translate("access"),fields:["SteamUserPermissions","SteamParentalCode"]},{name:n.default.i18n.translate("trade"),fields:["SteamTradeToken","AcceptGifts","TradeCheckPeriod","SendTradePeriod","SendOnFarmingFinished","CompleteTypesToSend","TradingPreferences","LootableTypes","TransferableTypes","MatchableTypes"]},{name:n.default.i18n.translate("farming"),fields:["FarmingOrders","AutoSteamSaleEvent","FarmPriorityQueueOnly","SkipRefundableGames","FarmOffline","ShutdownOnFarmingFinished"]},{name:n.default.i18n.translate("customization"),fields:["RemoteCommunication","SteamMasterClanID","UserInterfaceMode","OnlineFlags","RedeemingPreferences","GamesPlayedWhileIdle","CustomGamePlayedWhileFarming","CustomGamePlayedWhileIdle"]},{name:n.default.i18n.translate("performance"),fields:["HoursUntilCardDrops"]}],i=[{name:n.default.i18n.translate("basic"),fields:["Name","SteamLogin","SteamPassword"]}],o=[{name:n.default.i18n.translate("general"),fields:[n.default.i18n.translate("default-page"),n.default.i18n.translate("notification-position"),n.default.i18n.translate("notify-release"),n.default.i18n.translate("display-categories"),n.default.i18n.translate("tooltip-delay")]},{name:n.default.i18n.translate("bots"),fields:[n.default.i18n.translate("bot-nicknames"),n.default.i18n.translate("bot-game-name"),n.default.i18n.translate("bot-order-numeric"),n.default.i18n.translate("bot-order-disabled"),n.default.i18n.translate("bot-fav-buttons")]},{name:n.default.i18n.translate("commands"),fields:[n.default.i18n.translate("timestamps")]},{name:n.default.i18n.translate("log"),fields:[n.default.i18n.translate("log-previous-amount"),n.default.i18n.translate("log-information"),n.default.i18n.translate("log-timestamp")]}]},9049:(e,t,a)=>{"use strict";function n(e){const t=document.implementation.createHTMLDocument().createElement("html");return t.innerHTML=e,t}a.d(t,{Z:()=>n})},3827:(e,t,a)=>{"use strict";a.d(t,{$:()=>s,d:()=>i});const n=/"s_(\w+)":\s*"(\d+)"/g;function r(e,t,a,r){const s=document.createElement("a"),i=t?(o=e,JSON.stringify(o,null,2).replace(n,'"$1":$2')):e.join("\n");var o;s.setAttribute("href",`data:text/plain;charset=utf-8,${encodeURIComponent(i)}`),s.setAttribute("download",`${a}.${r}`),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)}function s(e,t){r(e,!0,t,"json")}function i(e){r(e,!1,"log","txt")}},1692:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(3063);const r=new Map,s=new Map,i=/\[[^\]]+]/g;async function o(e){if(s.has(e))return s.get(e);const t=n.U2(`structure/${encodeURIComponent(e)}`);return s.set(e,t),t}async function l(e){const t=function(e){const t=e.match(i);return t?t.map((e=>e.slice(1,e.length-1))):[]}(e);switch(e.split("`")[0]){case"System.Boolean":return{type:"boolean"};case"System.String":case"System.Guid":return{type:"string"};case"System.Byte":return{type:"byte"};case"System.UInt32":return{type:"uint32"};case"System.UInt16":return{type:"uint16"};case"System.Collections.Generic.HashSet":case"System.Collections.Immutable.ImmutableHashSet":return{type:"hashSet",values:await l(t[0])};case"System.Collections.Immutable.ImmutableList":return{type:"list",values:await l(t[0])};case"System.UInt64":return{type:"uint64"};case"System.Collections.Generic.Dictionary":case"System.Collections.Immutable.ImmutableDictionary":return{type:"dictionary",key:await l(t[0]),value:await l(t[1])};case"System.Nullable":const{type:a}=await l(t[0]);return{type:a,nullable:!0};default:return u(e)}}function c(e){const t={};return Object.keys(e).forEach((a=>{t[a]=parseInt(e[a],10)})),t}async function u(e){"ArchiSteamFarm.Steam.Storage.BotConfig"===e&&o(e);const t=await async function(e){if(r.has(e))return r.get(e);const t=n.U2(`type/${encodeURIComponent(e)}`);return r.set(e,t),t}(e);switch(t.Properties.BaseType){case"System.Object":return async function(e,t){const a={type:"object",body:{}},[n,r]=await Promise.all([o(e),Promise.all(Object.keys(t.Body).map((async e=>({param:e,type:await l(t.Body[e])}))))]);return r.forEach((e=>{const{param:r,type:s}=e,i="System.UInt64"!==t.Body[r]?r:`s_${r}`;a.body[r]={defaultValue:n[r],paramName:i,param:r,...s}})),a}(e,t);case"System.Enum":return{type:(t.Properties.CustomAttributes||[]).includes("System.FlagsAttribute")?"flag":"enum",values:c(t.Body)};default:return{type:"unknown",typeDefinition:t,structureDefinition:await o(e)}}}const d=u},9086:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(3063),r=a(9764);async function s(e,t,a){const s=await async function(e,t,a){const s=(0,r.Z)(a),i=`www/github/wiki/page/${e}${s}`;if(!t)return i;if(t>=(await n.U2("www/github/release")).Version)return i;const o=await n.U2(`www/github/release/${t}`),l=new Date(o.ReleasedAt),c=await n.U2(`www/github/wiki/history/${e}${s}`),u=Object.entries(c).map((e=>({id:e[0],releaseTime:new Date(e[1])})));u.sort(((e,t)=>new Date(t.releaseTime)-new Date(e.releaseTime)));const d=u.find((e=>{let{releaseTime:t}=e;return t<l}));return d?`${i}?revision=${d.id}`:i}(e,t,a);return n.U2(s)}},9764:(e,t,a)=>{"use strict";function n(e){return"en-US"!==e?`-${e}`:""}a.d(t,{Z:()=>n})},2741:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(576);function r(e,t){for(const[a]of Object.entries(e)){let r=!1;if(r="object"==typeof t[a]?!(0,n.Z)(t[a],e[a]):a.startsWith("s_")?t[a]!==e[a].toString():t[a]!==e[a],r)return!1}return!0}},678:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(9086),r=a(9764),s=a(795),i=a(9049);async function o(e,t){const a=s.U2(`cache:parameter-descriptions:${t}`);if(a){const{timestamp:e,descriptions:t}=a;if(e>Date.now()-216e5)return t}const o={},c=await(0,n.Z)("Configuration",e,t),u=(0,i.Z)(c);return Array.from(u.querySelectorAll("h3 > a > code")).forEach((e=>{const a=e.innerText,n=[];let s=e.parentElement.parentElement.nextElementSibling;for(;s&&"hr"!==s.tagName.toLowerCase();)l(s.querySelectorAll('a[href^="#"]'),"Configuration",(0,r.Z)(t)),n.push(s.outerHTML),s=s.nextElementSibling;o[a]=n.join(" ")})),s.t8(`cache:parameter-descriptions:${t}`,{timestamp:Date.now(),descriptions:o}),o}function l(e,t,a){e.forEach((e=>{e&&(e.setAttribute("href",`https://github.com/JustArchiNET/ArchiSteamFarm/wiki/${t}${a}${e.hash}`),e.setAttribute("target","_blank"))}))}},5258:(e,t,a)=>{var n=a(8081),r=a(3645)(n);r.push([e.id,".main-container--bot-config{max-width:1000px}",""]),e.exports=r},940:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var n=function(){var e=this,t=e._self._c;return e.bot?t("main",{staticClass:"main-container main-container--bot-config"},[t("h2",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.bot.name,expression:"bot.name"}],staticClass:"title"},[e._v(e._s(e.bot.viewableName))]),e._v(" "),e.loading?t("h3",{staticClass:"subtitle"},[t("FontAwesomeIcon",{attrs:{icon:"spinner",size:"lg",spin:""}})],1):t("div",{staticClass:"container"},[t("ConfigEditor",{attrs:{fields:e.fields,model:e.model,categories:e.displayCategories?e.categories:null,deleteDefaultValues:!1}}),e._v(" "),t("div",{staticClass:"form-item"},[t("div",{staticClass:"form-item__buttons"},[t("button",{staticClass:"button button--confirm",on:{click:e.onSave}},[e.saving?t("FontAwesomeIcon",{attrs:{icon:"spinner",spin:""}}):t("span",[e._v(e._s(e.$t("save")))])],1),e._v(" "),t("router-link",{attrs:{custom:"",to:{name:"bot-copy",params:{bot:e.bot.name}}},scopedSlots:e._u([{key:"default",fn:function(a){let{navigate:n}=a;return[t("button",{staticClass:"button button--confirm",on:{click:n}},[e._v(e._s(e.$t("bot-copy")))])]}}],null,!1,64561345)}),e._v(" "),t("button",{staticClass:"button button--link pull-right",on:{click:e.onDownload}},[e._v("\n          "+e._s(e.$t("download-raw-config"))+"\n        ")])],1)])],1)]):e._e()};n._withStripped=!0;var r=a(629),s=a(8530),i=a(1692),o=a(678),l=a(3827),c=a(4098),u=a(2741);const d={name:"BotConfig",components:{ConfigEditor:s.Z},data:()=>({loading:!1,saving:!1,fields:[],model:{},categories:c.B4}),computed:{...(0,r.Se)({version:"asf/version",displayCategories:"settings/displayCategories",bots:"bots/bots"}),bot(){return this.$store.getters["bots/bot"](this.$route.params.bot)}},watch:{$route:{immediate:!0,async handler(){this.bot&&await this.loadConfig()}}},created(){this.bot||this.$router.replace({name:"bots"})},methods:{async loadConfig(){if(!this.loading){this.loading=!0;try{const[{body:e},{[this.bot.name]:{BotConfig:t}},a]=await Promise.all([(0,i.Z)("ArchiSteamFarm.Steam.Storage.BotConfig"),this.$http.get(`bot/${this.bot.name}`),(0,o.Z)(this.version,this.$i18n.locale)]);Object.keys(t).forEach((e=>{e.startsWith("s_")&&delete t[e.substr(2)]})),this.model=t,0!==Object.keys(this.$route.params).length&&(this.model.SteamPassword=this.$route.params?.steamPassword,this.model.PasswordFormat=this.$route.params?.passwordFormat);const n={SteamLogin:{placeholder:this.$t("keep-unchanged")},SteamPassword:{placeholder:this.$t("keep-unchanged")},SteamParentalCode:{placeholder:this.$t("keep-unchanged")}};this.fields=Object.keys(e).map((t=>({description:a[t]?a[t].replace(/<a href="/g,'<a target="_blank" rel="noreferrer noopener" href="'):this.$t("description-not-found"),...e[t],...n[t]||[]})))}catch(e){this.$error(e.message)}finally{this.loading=!1}}},async onSave(){if(!this.saving)if("ASF"!==this.model.Name){this.saving=!0;try{const{[this.bot.name]:{BotConfig:e}}=await this.$http.get(`bot/${this.bot.name}`);if((0,u.Z)(this.model,e))return void this.$info(this.$t("config-no-changes"));await this.$http.post(`bot/${this.bot.name}`,{botConfig:this.model}),this.$parent.back()}catch(e){this.$error(e.message)}finally{this.saving=!1}}else this.$error(this.$t("bot-create-name-asf"))},async onDownload(){(0,l.$)(this.model,this.bot.name)}}};a(631);const m=(0,a(1900).Z)(d,n,[],!1,null,null,null).exports},631:(e,t,a)=>{var n=a(5258);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(5346).Z)("21096bb2",n,!1,{})},1152:(e,t,a)=>{"use strict";a.d(t,{Z:()=>j});var n=a(5365),r=a(520);function s(e){var t=-1,a=null==e?0:e.length;for(this.__data__=new r.Z;++t<a;)this.add(e[t])}s.prototype.add=s.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},s.prototype.has=function(e){return this.__data__.has(e)};const i=s,o=function(e,t){for(var a=-1,n=null==e?0:e.length;++a<n;)if(t(e[a],a,e))return!0;return!1},l=function(e,t,a,n,r,s){var l=1&a,c=e.length,u=t.length;if(c!=u&&!(l&&u>c))return!1;var d=s.get(e),m=s.get(t);if(d&&m)return d==t&&m==e;var f=-1,h=!0,p=2&a?new i:void 0;for(s.set(e,t),s.set(t,e);++f<c;){var b=e[f],y=t[f];if(n)var g=l?n(y,b,f,t,e,s):n(b,y,f,e,t,s);if(void 0!==g){if(g)continue;h=!1;break}if(p){if(!o(t,(function(e,t){if(i=t,!p.has(i)&&(b===e||r(b,e,a,n,s)))return p.push(t);var i}))){h=!1;break}}else if(b!==y&&!r(b,y,a,n,s)){h=!1;break}}return s.delete(e),s.delete(t),h};var c=a(7685),u=a(7623),d=a(9651);const m=function(e){var t=-1,a=Array(e.size);return e.forEach((function(e,n){a[++t]=[n,e]})),a},f=function(e){var t=-1,a=Array(e.size);return e.forEach((function(e){a[++t]=e})),a};var h=c.Z?c.Z.prototype:void 0,p=h?h.valueOf:void 0;var b=a(1808),y=Object.prototype.hasOwnProperty;var g=a(4158),v=a(7771),w=a(6706),S=a(7212),C="[object Arguments]",_="[object Array]",$="[object Object]",P=Object.prototype.hasOwnProperty;const Z=function(e,t,a,r,s,i){var o=(0,v.Z)(e),c=(0,v.Z)(t),h=o?_:(0,g.Z)(e),Z=c?_:(0,g.Z)(t),k=(h=h==C?$:h)==$,j=(Z=Z==C?$:Z)==$,D=h==Z;if(D&&(0,w.Z)(e)){if(!(0,w.Z)(t))return!1;o=!0,k=!1}if(D&&!k)return i||(i=new n.Z),o||(0,S.Z)(e)?l(e,t,a,r,s,i):function(e,t,a,n,r,s,i){switch(a){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!s(new u.Z(e),new u.Z(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return(0,d.Z)(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var o=m;case"[object Set]":var c=1&n;if(o||(o=f),e.size!=t.size&&!c)return!1;var h=i.get(e);if(h)return h==t;n|=2,i.set(e,t);var b=l(o(e),o(t),n,r,s,i);return i.delete(e),b;case"[object Symbol]":if(p)return p.call(e)==p.call(t)}return!1}(e,t,h,a,r,s,i);if(!(1&a)){var I=k&&P.call(e,"__wrapped__"),A=j&&P.call(t,"__wrapped__");if(I||A){var O=I?e.value():e,F=A?t.value():t;return i||(i=new n.Z),s(O,F,a,r,i)}}return!!D&&(i||(i=new n.Z),function(e,t,a,n,r,s){var i=1&a,o=(0,b.Z)(e),l=o.length;if(l!=(0,b.Z)(t).length&&!i)return!1;for(var c=l;c--;){var u=o[c];if(!(i?u in t:y.call(t,u)))return!1}var d=s.get(e),m=s.get(t);if(d&&m)return d==t&&m==e;var f=!0;s.set(e,t),s.set(t,e);for(var h=i;++c<l;){var p=e[u=o[c]],g=t[u];if(n)var v=i?n(g,p,u,t,e,s):n(p,g,u,e,t,s);if(!(void 0===v?p===g||r(p,g,a,n,s):v)){f=!1;break}h||(h="constructor"==u)}if(f&&!h){var w=e.constructor,S=t.constructor;w==S||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof S&&S instanceof S||(f=!1)}return s.delete(e),s.delete(t),f}(e,t,a,r,s,i))};var k=a(8533);const j=function e(t,a,n,r,s){return t===a||(null==t||null==a||!(0,k.Z)(t)&&!(0,k.Z)(a)?t!=t&&a!=a:Z(t,a,n,r,e,s))}},576:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(1152);const r=function(e,t){return(0,n.Z)(e,t)}}}]);