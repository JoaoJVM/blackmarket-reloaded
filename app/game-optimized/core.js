define([],function(){var e={money:0,totalMoney:0,level:1,reputation:0,reputationNeed:100,options:{fps:20,interval:50,firstTime:!0,pause:!0,menu:"sidebar",before:(new Date).getTime(),now:(new Date).getTime(),version:.001},scope:function(e){return angular.element(e).scope()},togglePause:function(){this.options.pause=!this.options.pause,this.options.pause?notify.pop("alert","<strong>Game paused...</strong>"):notify.pop("alert","<strong>Game un-paused.</strong>")},gainMoney:function(e){this.money+=e,this.totalMoney+=e},repLevelUp:function(){if(this.reputation>=this.reputationNeed)while(this.reputation>=this.reputationNeed)this.level++,this.reputation-=this.reputationNeed,this.reputationNeed=Math.floor(100*Math.pow(1.3,this.level))},menuSwitch:function(e){this.options.menu=e,this.menuType()},menuType:function(){var e=this.options.menu;e=="sidebar"?$('li[id^="navbar-menu"]').fadeOut("fast",function(){$("#navbar-sidebarmenu").fadeIn("fast")}):$("#navbar-sidebarmenu").fadeOut("fast",function(){$('li[id^="navbar-menu"]').fadeIn("fast")})},display:function(){this.production.displayDrugs(),$(".navbar-brand").html("$"+beautify.fix(e.money)+" - reputation lvl. "+this.level+" <small>("+fix(this.reputation,0)+"/"+fix(this.reputationNeed,0)+")")},coreLoop:function(){var e=this.game;e.options.now=(new Date).getTime();var t=e.options.now-e.options.before;t>e.options.interval?e.updateGame(Math.floor(t/e.options.interval)):e.updateGame(1),e.options.before=(new Date).getTime()},updateGame:function(t){this.display(),e.actions.run(t),e.production.run(t)},init:function(){window.game=this,window.log=console.info.bind(console,"BR :"),require(["beautify","sidebar","notify"],function(){log("App core libs end init."),require(["actions","production","research-center","achievements","prestige","gangs","anticheat"],function(){log("Game scripts end init."),require(["save"],function(){e.save.load(),log("Save.js end init"),require(["angular","bootstrap"],function(){localStorage.getItem(e.save.name+e.save.salt)===null&&(e.options.before=(new Date).getTime()),e.options.pause=!1,log("Angular & Bootstrap init.")})})})})}};return e.init()});