define(["angular"],function(){var e={prestigeReset:function(e){if(e){var t={moneyAll:game.allTimeMoney,reputationAll:game.allTimeReputation,reputation:game.reputation,level:game.level,itemsOwned:game.collections.owned,optionsStarted:game.options.started,optionsFirst:game.options.firstTime},n=t;warn("Starting a soft-reset!"),game.save.removeInt(),window.removeEventListener("beforeunload",game.save.eventListenerSave,!1),localStorage.removeItem(game.save.name+game.save.salt),game.options.pause=!0,game.money=0,game.totalMoney=0,game.totalReputation=0,game.achievements.varInit(),game.actions.varInit(),game.collections.varInit(),game.research.varInit(),game.save.save("silent"),game.save.load("silent"),game.allTimeMoney=n.moneyAll,game.allTimeReputation=n.reputationAll,game.reputation=n.reputation,game.level=n.level,game.collections.owned=n.itemsOwned,game.options.started=n.optionsStarted,game.options.first=n.optionsFirst,game.save.save("silent"),game.save.setInt(),game.options.pause=!1,window.history.pushState("","","/#/"),warn("Soft-reset finished."),notify.pop("success","You have successfully soft-reset.")}else $("#prestige-softreset-btn").removeClass("btn-info").addClass("btn-warning").html("Really?").attr("onclick","game.prestige.prestigeReset(true);"),window.setTimeout(function(){$("#prestige-softreset-btn").removeClass("btn-warning").addClass("btn-info").html("Soft-reset").attr("onclick","game.prestige.prestigeReset(false);")},5e3)},display:function(){},varInit:function(){},domInit:function(){$("#prestige-softreset-btn").attr("onclick","game.prestige.prestigeReset(false);"),this.display()},angularInit:function(){this.domInit()},init:function(){this.varInit(),window.game.prestige=this,log("Prestige init.")}};return e.init()});