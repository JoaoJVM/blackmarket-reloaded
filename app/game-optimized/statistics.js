define(["angular"],function(){var e={cR:function(e,t,n,r,i){if(i&&i==="1-2")var s="<tr><td>"+e+"</td>"+"<td>"+t+"</td>"+'<th colspan="2">'+n+"</td>"+"</tr>";else if(i&&i==="2-1")var s="<tr class='info'><td>"+e+"</td>"+'<th colspan="2">'+t+"</td>"+"<td>"+n+"</td>"+"</tr>";else if(i&&i==="3")var s="<tr><td>"+e+"</td>"+'<th colspan="3">'+t+"</td>"+"</tr>";else var s="<tr><td>"+e+"</td>"+"<td>"+t+"</td>"+"<td>"+n+"</td>"+"<td>"+r+"</td>"+"</tr>";return s},cSH:function(e){var t='<tr class=\'active\'><th colspan="4" style="text-decoration:underline;text-align:center">'+e+"</th>"+"</tr>";return t},display:function(){for(var e=0;e<game.actions.list.length;e++){var t={reward:game.actions.getReward(e),perSec:game.actions.getPerSec(e),level:game.actions.owned[e],rewardMulti:game.actions.rewardMultiplier[e],timeMulti:game.actions.timeMultiplier[e]};$("#action-level-"+(e+1)).html(t.level),$("#action-reward-"+(e+1)).html(fix(t.reward,3)+"$"),$("#action-persec-"+(e+1)).html(fix(t.perSec,3)+"$/sec"),$("#action-timemulti-"+(e+1)).html("x"+fix(t.rewardMulti,3)),$("#action-rewardmulti-"+(e+1)).html("x"+fix(t.timeMulti,3))}var t={money:game.money,moneyRun:game.totalMoney,moneyAll:game.allTimeMoney,reputation:game.reputation,reputationRun:game.totalReputation,reputationAll:game.allTimeReputation,moneyMult:game.actions.totalRewardMultiplier,timeMult:game.actions.totalTimeMultiplier,reputationMult:game.actions.totalReputationMultiplier,countReset:game.options.countReset};$("#stats-money-atm").html("$"+fix(t.money,3)),$("#stats-money-run").html("$"+fix(t.moneyRun,3)),$("#stats-money-all").html("$"+fix(t.moneyAll,3)),$("#stats-rep-atm").html(fix(t.reputation,3)+" rep."),$("#stats-rep-run").html(fix(t.reputationRun,3)+" rep."),$("#stats-rep-all").html(fix(t.reputationAll,3)+" rep."),$("#stats-money-mult-atm").html("x"+fix(t.moneyMult,3)),$("#stats-time-mult-atm").html("x"+fix(t.timeMult,3)),$("#stats-rep-mult-atm").html("x"+fix(t.reputationMult,3)),$("#stats-reset-count-atm").html(t.countReset)},varInit:function(){},domInit:function(){var e=new Date(game.options.started),t=e.getFullYear(),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,r=e.getDate()<10?"0"+e.getDate():e.getDate(),i=e.getHours()<10?"0"+e.getHours():e.getHours(),s=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),o=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();for(var u=0;u<game.actions.list.length;u++){var a={name:game.actions.list[u]};$("#stats-actions tbody").append('<tr id="action-'+(u+1)+'">'+'<td id="action-name-'+(u+1)+'">'+a.name+"</td>"+'<td id="action-level-'+(u+1)+'"></td>'+'<td id="action-timemulti-'+(u+1)+'"></td>'+'<td id="action-rewardmulti-'+(u+1)+'"></td>'+'<td id="action-reward-'+(u+1)+'"></td>'+'<td id="action-persec-'+(u+1)+'"></td>'+"</tr>")}$("#stats-started").html("Game started : "+n+"/"+r+"/"+t+" - "+i+":"+s+":"+o),this.display()},angularInit:function(){this.domInit()},init:function(){this.varInit(),window.game.statistics=this,log("Statistics init.")}};return e.init()});