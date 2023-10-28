(self.webpackChunkasf_ui=self.webpackChunkasf_ui||[]).push([[6738],{9496:(e,t,a)=>{"use strict";function n(e,t){return e.filter((e=>e.name===t)).length>0}a.d(t,{Z:()=>n})},4098:(e,t,a)=>{"use strict";a.d(t,{B4:()=>i,Hx:()=>o,Js:()=>r,WH:()=>s});var n=a(144);const s=[{name:n.default.i18n.translate("basic"),fields:["SteamOwnerID"]},{name:n.default.i18n.translate("trade"),fields:["MaxTradeHoldDuration","FilterBadBots","LicenseID"]},{name:n.default.i18n.translate("customization"),fields:["AutoRestart","Blacklist","CommandPrefix","CurrentCulture","SteamMessagePrefix"]},{name:n.default.i18n.translate("remote-access"),fields:["Headless","IPC","IPCPassword","IPCPasswordFormat"]},{name:n.default.i18n.translate("connection"),fields:["ConnectionTimeout","SteamProtocols","WebProxy","WebProxyPassword","WebProxyUsername"]},{name:n.default.i18n.translate("farming"),fields:["FarmingDelay","IdleFarmingPeriod","MaxFarmingTime","MinFarmingDelayAfterBlock"]},{name:n.default.i18n.translate("performance"),fields:["OptimizationMode","ConfirmationsLimiterDelay","GiftsLimiterDelay","InventoryLimiterDelay","LoginLimiterDelay","WebLimiterDelay"]},{name:n.default.i18n.translate("updates"),fields:["UpdateChannel","UpdatePeriod"]},{name:n.default.i18n.translate("advanced"),fields:["Debug"]}],i=[{name:n.default.i18n.translate("basic"),fields:["Name","SteamLogin","SteamPassword","Enabled","Paused","OnlineStatus","BotBehaviour"]},{name:n.default.i18n.translate("security"),fields:["PasswordFormat","UseLoginKeys"]},{name:n.default.i18n.translate("access"),fields:["SteamUserPermissions","SteamParentalCode"]},{name:n.default.i18n.translate("trade"),fields:["SteamTradeToken","AcceptGifts","TradeCheckPeriod","SendTradePeriod","SendOnFarmingFinished","CompleteTypesToSend","TradingPreferences","LootableTypes","TransferableTypes","MatchableTypes"]},{name:n.default.i18n.translate("farming"),fields:["FarmingOrders","AutoSteamSaleEvent","FarmPriorityQueueOnly","SkipRefundableGames","FarmOffline","ShutdownOnFarmingFinished"]},{name:n.default.i18n.translate("customization"),fields:["RemoteCommunication","SteamMasterClanID","UserInterfaceMode","OnlineFlags","RedeemingPreferences","GamesPlayedWhileIdle","CustomGamePlayedWhileFarming","CustomGamePlayedWhileIdle"]},{name:n.default.i18n.translate("performance"),fields:["HoursUntilCardDrops"]}],r=[{name:n.default.i18n.translate("basic"),fields:["Name","SteamLogin","SteamPassword"]}],o=[{name:n.default.i18n.translate("general"),fields:[n.default.i18n.translate("default-page"),n.default.i18n.translate("notification-position"),n.default.i18n.translate("notify-release"),n.default.i18n.translate("display-categories"),n.default.i18n.translate("tooltip-delay")]},{name:n.default.i18n.translate("bots"),fields:[n.default.i18n.translate("bot-nicknames"),n.default.i18n.translate("bot-game-name"),n.default.i18n.translate("bot-order-numeric"),n.default.i18n.translate("bot-order-disabled"),n.default.i18n.translate("bot-fav-buttons")]},{name:n.default.i18n.translate("commands"),fields:[n.default.i18n.translate("timestamps")]},{name:n.default.i18n.translate("log"),fields:[n.default.i18n.translate("log-previous-amount"),n.default.i18n.translate("log-information"),n.default.i18n.translate("log-timestamp")]}]},9049:(e,t,a)=>{"use strict";function n(e){const t=document.implementation.createHTMLDocument().createElement("html");return t.innerHTML=e,t}a.d(t,{Z:()=>n})},3827:(e,t,a)=>{"use strict";a.d(t,{$:()=>i,d:()=>r});const n=/"s_(\w+)":\s*"(\d+)"/g;function s(e,t,a,s){const i=document.createElement("a"),r=t?(o=e,JSON.stringify(o,null,2).replace(n,'"$1":$2')):e.join("\n");var o;i.setAttribute("href",`data:text/plain;charset=utf-8,${encodeURIComponent(r)}`),i.setAttribute("download",`${a}.${s}`),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)}function i(e,t){s(e,!0,t,"json")}function r(e){s(e,!1,"log","txt")}},1692:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(3063);const s=new Map,i=new Map,r=/\[[^\]]+]/g;async function o(e){if(i.has(e))return i.get(e);const t=n.U2(`structure/${encodeURIComponent(e)}`);return i.set(e,t),t}async function l(e){const t=function(e){const t=e.match(r);return t?t.map((e=>e.slice(1,e.length-1))):[]}(e);switch(e.split("`")[0]){case"System.Boolean":return{type:"boolean"};case"System.String":case"System.Guid":return{type:"string"};case"System.Byte":return{type:"byte"};case"System.UInt32":return{type:"uint32"};case"System.UInt16":return{type:"uint16"};case"System.Collections.Generic.HashSet":case"System.Collections.Immutable.ImmutableHashSet":return{type:"hashSet",values:await l(t[0])};case"System.Collections.Immutable.ImmutableList":return{type:"list",values:await l(t[0])};case"System.UInt64":return{type:"uint64"};case"System.Collections.Generic.Dictionary":case"System.Collections.Immutable.ImmutableDictionary":return{type:"dictionary",key:await l(t[0]),value:await l(t[1])};case"System.Nullable":const{type:a}=await l(t[0]);return{type:a,nullable:!0};default:return m(e)}}function c(e){const t={};return Object.keys(e).forEach((a=>{t[a]=parseInt(e[a],10)})),t}async function m(e){"ArchiSteamFarm.Steam.Storage.BotConfig"===e&&o(e);const t=await async function(e){if(s.has(e))return s.get(e);const t=n.U2(`type/${encodeURIComponent(e)}`);return s.set(e,t),t}(e);switch(t.Properties.BaseType){case"System.Object":return async function(e,t){const a={type:"object",body:{}},[n,s]=await Promise.all([o(e),Promise.all(Object.keys(t.Body).map((async e=>({param:e,type:await l(t.Body[e])}))))]);return s.forEach((e=>{const{param:s,type:i}=e,r="System.UInt64"!==t.Body[s]?s:`s_${s}`;a.body[s]={defaultValue:n[s],paramName:r,param:s,...i}})),a}(e,t);case"System.Enum":return{type:(t.Properties.CustomAttributes||[]).includes("System.FlagsAttribute")?"flag":"enum",values:c(t.Body)};default:return{type:"unknown",typeDefinition:t,structureDefinition:await o(e)}}}const d=m},9086:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(3063),s=a(9764);async function i(e,t,a){const i=await async function(e,t,a){const i=(0,s.Z)(a),r=`www/github/wiki/page/${e}${i}`;if(!t)return r;if(t>=(await n.U2("www/github/release")).Version)return r;const o=await n.U2(`www/github/release/${t}`),l=new Date(o.ReleasedAt),c=await n.U2(`www/github/wiki/history/${e}${i}`),m=Object.entries(c).map((e=>({id:e[0],releaseTime:new Date(e[1])})));m.sort(((e,t)=>new Date(t.releaseTime)-new Date(e.releaseTime)));const d=m.find((e=>{let{releaseTime:t}=e;return t<l}));return d?`${r}?revision=${d.id}`:r}(e,t,a);return n.U2(i)}},9764:(e,t,a)=>{"use strict";function n(e){return"en-US"!==e?`-${e}`:""}a.d(t,{Z:()=>n})},678:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(9086),s=a(9764),i=a(795),r=a(9049);async function o(e,t){const a=i.U2(`cache:parameter-descriptions:${t}`);if(a){const{timestamp:e,descriptions:t}=a;if(e>Date.now()-216e5)return t}const o={},c=await(0,n.Z)("Configuration",e,t),m=(0,r.Z)(c);return Array.from(m.querySelectorAll("h3 > a > code")).forEach((e=>{const a=e.innerText,n=[];let i=e.parentElement.parentElement.nextElementSibling;for(;i&&"hr"!==i.tagName.toLowerCase();)l(i.querySelectorAll('a[href^="#"]'),"Configuration",(0,s.Z)(t)),n.push(i.outerHTML),i=i.nextElementSibling;o[a]=n.join(" ")})),i.t8(`cache:parameter-descriptions:${t}`,{timestamp:Date.now(),descriptions:o}),o}function l(e,t,a){e.forEach((e=>{e&&(e.setAttribute("href",`https://github.com/JustArchiNET/ArchiSteamFarm/wiki/${t}${a}${e.hash}`),e.setAttribute("target","_blank"))}))}},5076:(e,t,a)=>{var n=a(8081),s=a(3645)(n);s.push([e.id,".main-container--bot-create{max-width:1000px}",""]),e.exports=s},6738:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var n=function(){var e=this,t=e._self._c;return t("main",{staticClass:"main-container main-container--bot-create"},[t("h2",{staticClass:"title"},[e._v(e._s(e.$t("bot-new")))]),e._v(" "),e.loading?t("h3",{staticClass:"subtitle"},[t("FontAwesomeIcon",{attrs:{icon:"spinner",size:"lg",spin:""}})],1):t("div",{staticClass:"container"},[t("ConfigEditor",{attrs:{fields:e.fields,model:e.model,categories:e.displayCategories?e.categories:null}}),e._v(" "),t("div",{staticClass:"form-item"},[t("div",{staticClass:"form-item__buttons"},[t("button",{staticClass:"button button--confirm",on:{click:e.onCreate}},[e.creating?t("FontAwesomeIcon",{attrs:{icon:"spinner",spin:""}}):t("span",[e._v(e._s(e.$t("create")))])],1),e._v(" "),t("button",{staticClass:"button button--link pull-right",on:{click:e.onDownload}},[e._v("\n          "+e._s(e.$t("download-raw-config"))+"\n        ")])])])],1)])};n._withStripped=!0;var s=a(629),i=a(8530),r=a(1692),o=a(678),l=a(3827),c=a(6169),m=a(9496),d=a(4098);const u={name:"BotCreate",components:{ConfigEditor:i.Z},data:()=>({loading:!0,creating:!1,fields:[],model:{},categories:d.B4}),computed:(0,s.Se)({version:"asf/version",displayCategories:"settings/displayCategories",bots:"bots/bots"}),async created(){await this.loadConfig();const e=document.getElementById("Name");e&&e.focus()},methods:{async loadConfig(){const[{body:e},t]=await Promise.all([(0,r.Z)("ArchiSteamFarm.Steam.Storage.BotConfig"),(0,o.Z)(this.version,this.$i18n.locale)]);this.fields=[{defaultValue:"",param:"Name",paramName:"Name",type:"string",description:this.$t("name-description")},...Object.keys(e).map((a=>({description:t[a],...e[a]})))],this.model={},this.loading=!1},async onCreate(){if(this.creating)return;const{Name:e,...t}=JSON.parse(JSON.stringify(this.model));if(e)if("ASF"!==e)if((0,m.Z)(this.bots,e))this.$error(this.$t("bot-create-name-exist",{name:e}));else{this.creating=!0;try{await this.$http.post(`bot/${e}`,{botConfig:t}),await(0,c.Z)(1e3),await this.$store.dispatch("bots/updateBot",{name:e}),this.$parent.close()}catch(e){this.$error(e.message)}finally{this.creating=!1}}else this.$error(this.$t("bot-create-name-asf"));else this.$error(this.$t("bot-create-name"))},async onDownload(){const{Name:e,...t}=JSON.parse(JSON.stringify(this.model));(0,l.$)(t,e)}}};a(1937);const f=(0,a(1900).Z)(u,n,[],!1,null,null,null).exports},1937:(e,t,a)=>{var n=a(5076);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(5346).Z)("c742b9b6",n,!1,{})}}]);