define(["angular"], function() {
    var achievements = {
        actions: {
            list: new Array,
            complete: new Array
        },
        create: function(e, t, n, r, i, s, o, u, a, f) {
            this.name = e, this.type = t, this.desc = n, this.desc2 = r, this.part = i, this.reqName = s, this.reqValue = o, this.changeName = u, this.changeValue = a, this.rep = f
        },
        getCurrent: function(e, t) {
            var n;
            switch (e) {
                case 0:
                    for (var r = 0; r < this.actions.list.length; r++) !this.actions.complete[r] && this.actions.list[r].type == t && (n = r, r = this.actions.list.length);
                    break;
                case 1:
            }
            return n
        },
        isComplete: function(e, t) {
            var n = window.game.achievements[t].list[e].reqValue,
                r = window.game.achievements[t].list[e].reqName,
                i = r.substring(r.indexOf("[") + 1, r.indexOf("]")),
                s = window.game[t][r.substring(0, r.indexOf("["))][i];
            return s >= n
        },
        achieve: function(index, part) {
            var changeValue = window.game.achievements[part].list[index].changeValue,
                changeName = window.game.achievements[part].list[index].changeName;
            if (changeName !== "") {
                var changeNameIndex = changeName.substring(changeName.indexOf("[") + 1, changeName.indexOf("]")),
                    actual = window.game[part][changeName.substring(0, changeName.indexOf("["))][changeNameIndex];
                window.game[part][changeName.substring(0, changeName.indexOf("["))][changeNameIndex] = eval(actual + changeValue)
            }
            this.display(), game.collections.getItemDroppedByChance(), game.animateMenu("achievements");
            var name = window.game.achievements[part].list[index].name,
                effect = window.game.achievements[part].list[index].desc2;
            notify.pop("success", "Achievement earned : " + name + "<br>" + effect)
        },
        countCompleted: function(e) {
            var t = 0;
            switch (e) {
                case 0:
                    for (var n = 0; n < this.actions.complete.length; n++) this.actions.complete[n] && t++;
                    break;
                case 1:
            }
            return t
        },
        loop: function(e) {
            for (var t = 0; t < this.actions.list.length; t++) e === !0 ? game.achievements.isComplete(t, "actions") && (this.actions.complete[t] = !0) : game.achievements.isComplete(t, "actions") && !this.actions.complete[t] && (game.achievements.achieve(t, "actions"), this.actions.complete[t] = !0);
            this.display()
        },
        display: function() {
            for (var e = 0; e < game.actions.list.length; e++) {
                var t = this.getCurrent(0, e),
                    n = this.countCompleted(0),
                    r = this.actions.list.length;
                if (typeof this.actions.list[t] != "undefined") {
                    var i = {
                        name: this.actions.list[t].name,
                        desc: this.actions.list[t].desc,
                        desc2: this.actions.list[t].desc2
                    };
                    $("#achievements-actions-" + (e + 1)).html("<b>" + i.name + ":</b><span>" + i.desc + "</span><br>" + i.desc2)
                } else $("#achievements-actions-" + (e + 1)).html("<b>All available achievements earned!</b>");
                $("#achievements-actions-total").html("(" + n + "/" + r + ")")
            }
        },
        varInit: function() {
            this.actions.list = [new this.create("Shooter I", 0, "Shooting at level 25", "Shooting speed x2", "actions", "owned[0]", 25, "timeMultiplier[0]", "*2", 10), new this.create("Shooter II", 0, "Shooting at level 50", "Shooting speed x2", "actions", "owned[0]", 50, "timeMultiplier[0]", "*2", 20), new this.create("Shooter III", 0, "Shooting at level 75", "Chance of getting item", "actions", "owned[0]", 75, "", "", 0), new this.create("Shooter IV", 0, "Shooting at level 100", "Shooting speed x2", "actions", "owned[0]", 100, "timeMultiplier[0]", "*2", 30), new this.create("Shooter V", 0, "Shooting at level 125", "Chance of getting item", "actions", "owned[0]", 125, "", "", 0), new this.create("Shooter VI", 0, "Shooting at level 150", "Chance of getting item", "actions", "owned[0]", 150, "", "", 0), new this.create("Shooter VII", 0, "Shooting at level 175", "Chance of getting item", "actions", "owned[0]", 175, "", "", 0), new this.create("Shooter VIII", 0, "Shooting at level 200", "Shooting speed x2", "actions", "owned[0]", 200, "timeMultiplier[0]", "*2", 40), new this.create("Shooter IX", 0, "Shooting at level 300", "Shooting speed x2", "actions", "owned[0]", 300, "timeMultiplier[0]", "*2", 50), new this.create("Shooter X", 0, "Shooting at level 400", "Shooting speed x2", "actions", "owned[0]", 400, "timeMultiplier[0]", "*2", 60), new this.create("Shooter XI", 0, "Shooting at level 500", "Shooting reward x3", "actions", "owned[0]", 500, "rewardMultiplier[0]", "*3", 70), new this.create("Fighter I", 1, "Street fight at level 25", "Street fight speed x2", "actions", "owned[1]", 25, "timeMultiplier[1]", "*2", 15), new this.create("Fighter II", 1, "Street fight at level 50", "Street fight speed x2", "actions", "owned[1]", 50, "timeMultiplier[1]", "*2", 25), new this.create("Fighter III", 1, "Street at level 75", "Chance of getting item", "actions", "owned[0]", 75, "", "", 0), new this.create("Fighter IV", 1, "Street fight at level 100", "Street fight speed x2", "actions", "owned[1]", 100, "timeMultiplier[1]", "*2", 35), new this.create("Fighter V", 1, "Street at level 125", "Chance of getting item", "actions", "owned[0]", 125, "", "", 0), new this.create("Fighter VI", 1, "Street at level 150", "Chance of getting item", "actions", "owned[0]", 150, "", "", 0), new this.create("Fighter VII", 1, "Street at level 175", "Chance of getting item", "actions", "owned[0]", 175, "", "", 0), new this.create("Fighter VIII", 1, "Street fight at level 200", "Street fight speed x2", "actions", "owned[1]", 200, "timeMultiplier[1]", "*2", 45), new this.create("Fighter IX", 1, "Street fight at level 300", "Street fight speed x2", "actions", "owned[1]", 300, "timeMultiplier[1]", "*2", 55), new this.create("Fighter X", 1, "Street fight at level 400", "Street fight speed x2", "actions", "owned[1]", 400, "timeMultiplier[1]", "*2", 65), new this.create("Fighter XI", 1, "Street fight at level 500", "Street fight reward x3", "actions", "owned[1]", 500, "rewardMultiplier[1]", "*3", 75), new this.create("Pickpocket I", 2, "Pickpocket at level 25", "Pickpocket speed x2", "actions", "owned[2]", 25, "timeMultiplier[2]", "*2", 20), new this.create("Pickpocket II", 2, "Pickpocket at level 50", "Pickpocket speed x2", "actions", "owned[2]", 50, "timeMultiplier[2]", "*2", 30), new this.create("Pickpocket III", 2, "Pickpocket at level 75", "Chance of getting item", "actions", "owned[0]", 75, "", "", 0), new this.create("Pickpocket IV", 2, "Pickpocket at level 100", "Pickpocket speed x2", "actions", "owned[2]", 100, "timeMultiplier[2]", "*2", 40), new this.create("Pickpocket V", 2, "Pickpocket at level 125", "Chance of getting item", "actions", "owned[0]", 125, "", "", 0), new this.create("Pickpocket VI", 2, "Pickpocket at level 150", "Chance of getting item", "actions", "owned[0]", 150, "", "", 0), new this.create("Pickpocket VII", 2, "Pickpocket at level 175", "Chance of getting item", "actions", "owned[0]", 175, "", "", 0), new this.create("Pickpocket VIII", 2, "Pickpocket at level 200", "Pickpocket speed x2", "actions", "owned[2]", 200, "timeMultiplier[2]", "*2", 50), new this.create("Pickpocket IX", 2, "Pickpocket at level 300", "Pickpocket speed x2", "actions", "owned[2]", 300, "timeMultiplier[2]", "*2", 60), new this.create("Pickpocket X", 2, "Pickpocket at level 400", "Pickpocket speed x2", "actions", "owned[2]", 400, "timeMultiplier[2]", "*2", 70), new this.create("Pickpocket XI", 2, "Pickpocket at level 500", "Pickpocket reward x3", "actions", "owned[2]", 500, "rewardMultiplier[2]", "*3", 80), new this.create("Scammer I", 3, "Scam at level 25", "Scam speed x2", "actions", "owned[3]", 25, "timeMultiplier[3]", "*2", 25), new this.create("Scammer II", 3, "Scam at level 50", "Scam speed x2", "actions", "owned[3]", 50, "timeMultiplier[3]", "*2", 35), new this.create("Scammer III", 3, "Scam at level 75", "Chance of getting item", "actions", "owned[0]", 75, "", "", 0), new this.create("Scammer IV", 3, "Scam at level 100", "Scam speed x2", "actions", "owned[3]", 100, "timeMultiplier[3]", "*2", 45), new this.create("Scammer V", 3, "Scam at level 125", "Chance of getting item", "actions", "owned[0]", 125, "", "", 0), new this.create("Scammer VI", 3, "Scam at level 150", "Chance of getting item", "actions", "owned[0]", 150, "", "", 0), new this.create("Scammer VII", 3, "Scam at level 175", "Chance of getting item", "actions", "owned[0]", 175, "", "", 0), new this.create("Scammer VIII", 3, "Scam at level 200", "Scam speed x2", "actions", "owned[3]", 200, "timeMultiplier[3]", "*2", 55), new this.create("Scammer IX", 3, "Scam at level 300", "Scam speed x2", "actions", "owned[3]", 300, "timeMultiplier[3]", "*2", 65), new this.create("Scammer X", 3, "Scam at level 400", "Scam speed x2", "actions", "owned[3]", 400, "timeMultiplier[3]", "*2", 75), new this.create("Scammer XI", 3, "Scam at level 500", "Scam reward x3", "actions", "owned[3]", 500, "rewardMultiplier[3]", "*3", 85), new this.create("Car dealer I", 4, "Steal car at level 25", "Steal car speed x2", "actions", "owned[4]", 25, "timeMultiplier[4]", "*2", 30), new this.create("Car dealer II", 4, "Steal car at level 50", "Steal car speed x2", "actions", "owned[4]", 50, "timeMultiplier[4]", "*2", 40), new this.create("Car dealer III", 4, "Steal car at level 75", "Chance of getting item", "actions", "owned[0]", 75, "", "", 0), new this.create("Car dealer IV", 4, "Steal car at level 100", "Steal car speed x2", "actions", "owned[4]", 100, "timeMultiplier[4]", "*2", 50), new this.create("Car dealer V", 4, "Steal car at level 125", "Chance of getting item", "actions", "owned[0]", 125, "", "", 0), new this.create("Car dealer VI", 4, "Steal car at level 150", "Chance of getting item", "actions", "owned[0]", 150, "", "", 0), new this.create("Car dealer VII", 4, "Steal car at level 175", "Chance of getting item", "actions", "owned[0]", 175, "", "", 0), new this.create("Car dealer VIII", 4, "Steal car at level 200", "Steal car speed x2", "actions", "owned[4]", 200, "timeMultiplier[4]", "*2", 60), new this.create("Car dealer IX", 4, "Steal car at level 300", "Steal car speed x2", "actions", "owned[4]", 300, "timeMultiplier[4]", "*2", 70), new this.create("Car dealer X", 4, "Steal car at level 400", "Steal car speed x2", "actions", "owned[4]", 400, "timeMultiplier[4]", "*2", 80), new this.create("Car dealer XI", 4, "Steal car at level 500", "Steal car reward x3", "actions", "owned[4]", 500, "rewardMultiplier[4]", "*3", 90), new this.create("Robber I", 5, "Jewelry robbery at level 25", "Jewelry robbery speed x2", "actions", "owned[5]", 25, "timeMultiplier[5]", "*2", 35), new this.create("Robber II", 5, "Jewelry robbery at level 50", "Jewelry robbery speed x2", "actions", "owned[5]", 50, "timeMultiplier[5]", "*2", 45), new this.create("Robber III", 5, "Jewelry robbery at level 75", "Chance of getting item", "actions", "owned[0]", 75, "", "", 0), new this.create("Robber IV", 5, "Jewelry robbery at level 100", "Jewelry robbery speed x2", "actions", "owned[5]", 100, "timeMultiplier[5]", "*2", 55), new this.create("Robber V", 5, "Jewelry robbery at level 125", "Chance of getting item", "actions", "owned[0]", 125, "", "", 0), new this.create("Robber VI", 5, "Jewelry robbery at level 150", "Chance of getting item", "actions", "owned[0]", 150, "", "", 0), new this.create("Robber VII", 5, "Jewelry robbery at level 175", "Chance of getting item", "actions", "owned[0]", 175, "", "", 0), new this.create("Robber VIII", 5, "Jewelry robbery at level 200", "Jewelry robbery speed x2", "actions", "owned[5]", 200, "timeMultiplier[5]", "*2", 65), new this.create("Robber IX", 5, "Jewelry robbery at level 300", "Jewelry robbery speed x2", "actions", "owned[5]", 300, "timeMultiplier[5]", "*2", 75), new this.create("Robber X", 5, "Jewelry robbery at level 400", "Jewelry robbery speed x2", "actions", "owned[5]", 400, "timeMultiplier[5]", "*2", 85), new this.create("Robber XI", 5, "Jewelry robbery at level 500", "Jewelry robbery reward x3", "actions", "owned[5]", 500, "rewardMultiplier[5]", "*3", 95), new this.create("Hacker I", 6, "Hacking at level 25", "Hacking speed x2", "actions", "owned[6]", 25, "timeMultiplier[6]", "*2", 40), new this.create("Hacker II", 6, "Hacking at level 50", "Hacking speed x2", "actions", "owned[6]", 50, "timeMultiplier[6]", "*2", 50), new this.create("Hacker III", 6, "Hacking at level 75", "Chance of getting item", "actions", "owned[0]", 75, "", "", 0), new this.create("Hacker IV", 6, "Hacking at level 100", "Hacking speed x2", "actions", "owned[6]", 100, "timeMultiplier[6]", "*2", 60), new this.create("Hacker V", 6, "Hacking at level 125", "Chance of getting item", "actions", "owned[0]", 125, "", "", 0), new this.create("Hacker VI", 6, "Hacking at level 150", "Chance of getting item", "actions", "owned[0]", 150, "", "", 0), new this.create("Hacker VII", 6, "Hacking at level 175", "Chance of getting item", "actions", "owned[0]", 175, "", "", 0), new this.create("Hacker VIII", 6, "Hacking at level 200", "Hacking speed x2", "actions", "owned[6]", 200, "timeMultiplier[6]", "*2", 70), new this.create("Hacker IX", 6, "Hacking at level 300", "Hacking speed x2", "actions", "owned[6]", 300, "timeMultiplier[6]", "*2", 80), new this.create("Hacker X", 6, "Hacking at level 400", "Hacking speed x2", "actions", "owned[6]", 400, "timeMultiplier[6]", "*2", 90), new this.create("Hacker XI", 6, "Hacking at level 500", "Hacking reward x3", "actions", "owned[6]", 500, "rewardMultiplier[6]", "*3", 100), new this.create("Arms dealers I", 7, "Arms sales at level 25", "Arms sales speed x2", "actions", "owned[7]", 25, "timeMultiplier[7]", "*2", 45), new this.create("Arms dealers II", 7, "Arms sales at level 50", "Arms sales speed x2", "actions", "owned[7]", 50, "timeMultiplier[7]", "*2", 55), new this.create("Arms dealers III", 7, "Arms sales at level 75", "Chance of getting item", "actions", "owned[0]", 75, "", "", 0), new this.create("Arms dealers IV", 7, "Arms sales at level 100", "Arms sales speed x2", "actions", "owned[7]", 100, "timeMultiplier[7]", "*2", 65), new this.create("Arms dealers V", 7, "Arms sales at level 125", "Chance of getting item", "actions", "owned[0]", 125, "", "", 0), new this.create("Arms dealers VI", 7, "Arms sales at level 150", "Chance of getting item", "actions", "owned[0]", 150, "", "", 0), new this.create("Arms dealers VII", 7, "Arms sales at level 175", "Chance of getting item", "actions", "owned[0]", 175, "", "", 0), new this.create("Arms dealers VIII", 7, "Arms sales at level 200", "Arms sales speed x2", "actions", "owned[7]", 200, "timeMultiplier[7]", "*2", 75), new this.create("Arms dealers IX", 7, "Arms sales at level 300", "Arms sales speed x2", "actions", "owned[7]", 300, "timeMultiplier[7]", "*2", 85), new this.create("Arms dealers X", 7, "Arms sales at level 400", "Arms sales speed x2", "actions", "owned[7]", 400, "timeMultiplier[7]", "*2", 95), new this.create("Arms dealers XI", 7, "Arms sales at level 500", "Arms sales reward x3", "actions", "owned[7]", 500, "rewardMultiplier[7]", "*3", 105), new this.create("Drugs sales I", 8, "Drugs sales at level 25", "Drugs sales speed x2", "actions", "owned[8]", 25, "timeMultiplier[8]", "*2", 50), new this.create("Drugs sales II", 8, "Drugs sales at level 50", "Drugs sales speed x2", "actions", "owned[8]", 50, "timeMultiplier[8]", "*2", 60), new this.create("Drugs sales III", 8, "Drugs sales at level 75", "Chance of getting item", "actions", "owned[0]", 75, "", "", 0), new this.create("Drugs sales IV", 8, "Drugs sales at level 100", "Drugs sales speed x2", "actions", "owned[8]", 100, "timeMultiplier[8]", "*2", 70), new this.create("Drugs sales V", 8, "Drugs sales at level 125", "Chance of getting item", "actions", "owned[0]", 125, "", "", 0), new this.create("Drugs sales VI", 8, "Drugs sales at level 150", "Chance of getting item", "actions", "owned[0]", 150, "", "", 0), new this.create("Drugs sales VII", 8, "Drugs sales at level 175", "Chance of getting item", "actions", "owned[0]", 175, "", "", 0), new this.create("Drugs sales VIII", 8, "Drugs sales at level 200", "Drugs sales speed x2", "actions", "owned[8]", 200, "timeMultiplier[8]", "*2", 80), new this.create("Drugs sales IX", 8, "Drugs sales at level 300", "Drugs sales speed x2", "actions", "owned[8]", 300, "timeMultiplier[8]", "*2", 90), new this.create("Drugs sales X", 8, "Drugs sales at level 400", "Drugs sales speed x2", "actions", "owned[8]", 400, "timeMultiplier[8]", "*2", 100), new this.create("Drugs sales XI", 8, "Drugs sales at level 500", "Drugs sales reward x3", "actions", "owned[8]", 500, "rewardMultiplier[8]", "*3", 110)];
            for (var e = 0; e < this.actions.list.length; e++) this.actions.complete.push(!1)
        },
        domInit: function() {
            for (var e = 0; e < game.actions.list.length; e++) $("#achievements-actions").append('<li id="achievements-actions-' + (e + 1) + '" class="list-group-item achievement"></li>');
            var t = $("body").height();
            $("#achievements-actions").css({
                "max-height": t - 200 + "px",
                "overflow-y": "auto"
            }), this.loop(!0), this.display()
        },
        angularInit: function() {
            this.domInit()
        },
        init: function() {
            this.varInit(), window.game.achievements = this, log("Achievements init.")
        }
    };
    return achievements.init()
});;
define(["angular"], function() {
    var e = {
        list: ["Shooting", "Fight Club", "Pickpocket", "Scam", "Car Theft", "Theft of Jewels", "Hacking", "Arms Sales", "Drugs Sales"],
        inflation: [1.09, 1.15, 1.15, 1.14, 1.13, 1.12, 1.11, 1.1, 1.09],
        progress: new Array,
        owned: new Array,
        price: [4, 92, 2116, 48668, 1119364, 25745372, 592143556, 13619301788, 313243941124],
        reward: [1, 23, 529, 12167, 279841, 6436343, 148035889, 3404825447, 78310985281],
        rewardMultiplier: new Array,
        totalRewardMultiplier: 1,
        time: [1.5, 3, 6, 12, 24, 96, 384, 1536, 6144],
        timeMultiplier: new Array,
        totalTimeMultiplier: 1,
        reputation: [1, 3, 9, 27, 81, 243, 729, 2187, 6561],
        reputationMultiplier: new Array,
        reputationDivider: 6,
        totalReputationMultiplier: 1,
        gainedMoneyThisRun: 0,
        gainedRepThisRun: 0,
        buy: 1,
        getRep: function(e) {
            return this.reputation[e] / this.reputationDivider * Math.pow(1.01, this.owned[e]) * this.reputationMultiplier[e] * this.totalReputationMultiplier
        },
        getTime: function(e) {
            return this.time[e] / this.timeMultiplier[e] / this.totalTimeMultiplier
        },
        getReward: function(e) {
            return this.owned[e] * this.reward[e] * this.rewardMultiplier[e] * this.totalRewardMultiplier
        },
        getPrice: function(e) {
            var t = this.price[e] * Math.pow(this.inflation[e], this.owned[e]);
            return t
        },
        getPerSec: function(e) {
            var t = this.getReward(e),
                n = this.getTime(e);
            return t / n
        },
        multiplierN: function(e) {
            e = parseFloat(e), e >= 1 && e <= 500 ? this.buy = e : this.buy = 1, $("#action-buy-button").html("Buy x" + this.buy), this.display()
        },
        multiplier: function() {
            this.buy >= 1 && this.buy < 10 ? this.buy = 10 : this.buy >= 10 && this.buy < 100 ? this.buy = 100 : this.buy >= 100 && this.buy < 250 ? this.buy = 250 : this.buy >= 250 && this.buy < 500 ? this.buy = 500 : this.buy = 1, $("#buySlider").val(this.buy), this.display()
        },
        upgrade: function(e) {
            var t = this.getPrice(e),
                n = this.buy;
            if (n > 1)
                for (var r = 0; r < n; r++) this.upgradeOnce(e);
            else this.upgradeOnce(e)
        },
        upgradeOnce: function(e) {
            var t = this.getPrice(e);
            if (game.money < t) return;
            game.money -= t, this.owned[e]++, game.achievements.loop(), this.display(), $("#action-upgrade-" + (e + 1)).html("Upgrade")
        },
        run: function(e, t) {
            if (!game.options.pause)
                for (var n = 0; n < this.list.length; n++)
                    if (this.owned[n] > 0) {
                        var r = game.options.fps,
                            i = this.getTime(n),
                            s = this.getReward(n),
                            o = this.getRep(n);
                        this.progress[n] += e / r, moneyAction = Math.floor(this.progress[n] / i) * s, game.gainMoney(moneyAction), repAction = Math.floor(this.progress[n] / i) * o, game.gainRep(repAction), t === !0 && (this.gainedMoneyThisRun += moneyAction, this.gainedRepThisRun += repAction), game.repLevelUp(), this.progress[n] %= i;
                        var u = this.progress[n] / i * 100;
                        i < .2 && (u = 100, repWidth = 100), u = Math.max(u, 1), $("#action-progress-" + (n + 1)).css("width", u + "%"), $("#action-progress-" + (n + 1) + "-info").html(Math.floor(u) + "%")
                    }
        },
        display: function() {
            for (var e = 0; e < this.list.length; e++) {
                var t = this.displayPrice(e),
                    n = this.getReward(e),
                    r = this.getTime(e),
                    i = this.getPerSec(e),
                    s = this.displayPrice(e),
                    o = this.reputation[e],
                    u = this.getRep(e);
                $("#action-name-" + (e + 1)).html(this.list[e] + " (lvl. " + this.owned[e] + ")"), $("#action-info-" + (e + 1)).html("+$" + fix(n) + " <span>($" + fix(i, 3) + "/sec)</span><br>" + fix(r) + " sec.<br>" + "+" + fix(u, 0) + " rep."), $("#action-cost-" + (e + 1)).html("Cost $" + fix(t))
            }
            var a = game.research.getCheapest(0);
            if (typeof game.research.actions.list[a] != "undefined") {
                var f = {
                    name: game.research.actions.list[a].name,
                    desc: game.research.actions.list[a].desc,
                    price: game.research.actions.list[a].price
                };
                $("#action-quickbuy-button").html(f.name + " ($" + fix(f.price, 0) + ")")
            } else $("#action-quickbuy-button").removeAttr("onclick").prop("disabled", !0).attr("disabled", "disabled").addClass("btn-disabled").html("All Upgrades bought!");
            $("#action-buy-button").html("Buy x" + this.buy)
        },
        displayPrice: function(e) {
            var t = this.buy,
                n = this.owned[e],
                r = t + this.owned[e],
                i = this.price[e] * (Math.pow(this.inflation[e], r) - Math.pow(this.inflation[e], n)) / (this.inflation[e] - 1);
            return i
        },
        varInit: function() {
            for (var e = 0; e < this.list.length; e++) this.progress.push(0), this.rewardMultiplier.push(1), this.timeMultiplier.push(1), this.owned.push(0), this.owned[0] = 1, this.reputationMultiplier.push(1)
        },
        domInit: function() {
            for (var e = 0; e < this.list.length; e++) $("#action-upgrade-" + (e + 1)).attr("onclick", "game.actions.upgrade(" + e + ");"), this.owned[e] < 1 ? $("#action-upgrade-" + (e + 1)).html("Unlock") : $("#action-upgrade-" + (e + 1)).html("Upgrade"), $("#buySlider").val(this.buy), game.achievements.loop(!0), this.display();
            $("#buySlider").on("input change", function() {
                game.actions.multiplierN(this.value)
            })
        },
        angularInit: function() {
            this.domInit()
        },
        init: function() {
            this.varInit(), window.game.actions = this, log("Actions init.")
        }
    };
    return e.init()
});;
define(["angular"], function() {
    var e = {
        tiers: ["common", "uncommon", "rare", "unique"],
        chances: [.75, .9, .95, 1],
        categories: ["actions", "production"],
        names: {
            actions: {
                common: ["Desolation", "Lightning", "Moonsight", "Dragonstrike", "Peacekeeper", "Betty", "Ole Betsy", "Limbo", "Interrogator", "Harmony", "Apocalypse", "Stormbringer", "Shadowfury", "Retirement", "Deathbringer", "Legionaire", "Deadeye", "Birthmark", "Despair", "Hatred", "Echo", "Hope's End", "Sunshine", "Piety", "Endbringer", "Damnation", "Requiem", "Fury", "Crash", "The Light", "Injection", "Rigormortis", "Eveningstar", "Destruction"],
                uncommon: ["Warrior Rifle", "Defender Carbine", "Corroded Blaster", "Knight's Fall", "Corroded Blaster", "Massive Repeater", "Wrathful Carbine", "Savage Longrifle", "Phantom Rifle", "Reincarnated Repeater", "Hero Sniper", "Yearning Rifle", "Warped Sniper", "Warrior's Carbine", "Bloodied Shooter"],
                rare: ["Silent Silver Shooter", "Roaring Golden Blaster", "Vile Ebon Shooter", "Trooper Ivory Fusil", "Frenzied Iron Repeater", "Lightning Stainless Rifle", "Dire Steel Launcher", "Ghostly Bronze Sniper", "Phantom Fiberglass Rifle", "Refined Silver Longrifle"],
                unique: ["Remorse, Memory Of Infinite Trials", "Widow Maker, Scepter Of Vengeance", "Limbo, Sculptor Of Twisted Visions", "King Of Nines, Butcher Of The Immortal", "Dreamhunter, Soul Of Summoning", "Deadeye, Voice Of Conquered Worlds", "Termination, Call Of Shadow Strikes", "Brutality, Bringer Of Shifting Sands", "Salvation, Boon Of The Summoner", "Burn, Repeater Of The Insane", "Justifier, Protector Of Traitors", "Shadowmoon, Disposer Of The Basilisk"]
            },
            production: {
                common: [],
                uncommon: [],
                rare: [],
                unique: []
            }
        },
        owned: new Array,
        list: new Array,
        startPrice: 1e17,
        startRep: 1e5,
        increasePrice: 1.55,
        increaseRep: 1.55,
        chanceEarningItem: .1,
        chanceEarningItemMultiplier: 1,
        getRandTier: function() {
            var e = Math.random().toFixed(3);
            return e <= this.chances[0] ? tier = 0 : e <= this.chances[1] ? tier = 1 : e <= this.chances[2] ? tier = 2 : tier = 3, tier
        },
        getRandItem: function(e) {
            return this.list[e][Math.floor(Math.random() * this.list[e].length)]
        },
        getTableColor: function(e) {
            var t;
            switch (e) {
                case "common":
                    t = "";
                    break;
                case "uncommon":
                    t = "info";
                    break;
                case "rare":
                    t = "success";
                    break;
                case "unique":
                    t = "warning"
            }
            return t
        },
        create: function(e, t, n, r, i, s, o, u) {
            this.name = e, this.tier = t, this.category = n, this.desc = r, this.who = i, this.effect = s, this.otherWho = o, this.otherEffect = u
        },
        addRandomItem: function() {
            var e = this.getRandItem(this.getRandTier()),
                t = window.game.collections.names[this.categories[e.category]][game.collections.tiers[e.tier]].length;
            e.name = window.game.collections.names[this.categories[e.category]][game.collections.tiers[e.tier]][Math.floor(Math.random() * t)];
            switch (e.category) {
                case 0:
                    var n = game.actions.totalReputationMultiplier,
                        r = game.actions.totalRewardMultiplier;
                    window.game.actions[e.who] = window.game.actions[e.who] * e.effect, window.game.actions[e.otherWho] = window.game.actions[e.otherWho] * e.otherEffect;
                    break;
                case 1:
            }
            this.owned.reverse(), this.owned[this.owned.length] = e, this.owned.reverse()
        },
        earnItem: function(e) {
            switch (e) {
                case "money":
                    var t = this.startPrice * Math.pow(this.increasePrice, this.owned.length);
                    if (game.money >= t) return game.money -= t, this.addRandomItem(), this.display(), !0;
                    return !1;
                case "rep":
                    var n = this.startRep * Math.pow(this.increaseRep, this.owned.length);
                    if (game.reputation >= n) return game.reputation -= n, this.addRandomItem(), this.display(), !0;
                    return !1;
                default:
                    this.addRandomItem()
            }
            this.display()
        },
        getItemDroppedByChance: function() {
            var e = Math.random().toFixed(3),
                t = this.chanceEarningItemMultiplier * this.chanceEarningItem;
            return e <= t ? (this.earnItem(), game.animateMenu("collections"), !0) : !1
        },
        display: function() {
            this.categories.forEach(function(e) {
                $("#collection-" + e + "-tbody").html("")
            }), typeof this.owned == "object" && this.owned.length > 0 && this.owned.forEach(function(e) {
                var t = game.collections.categories[e.category],
                    n = game.collections.getTableColor(game.collections.tiers[e.tier]);
                $("#collection-" + t + "-tbody").append('<tr class="' + n + '">' + "<th>" + capF(game.collections.tiers[e.tier]) + "</th>" + "<td>" + e.name + "</td>" + "<td>" + e.desc + "</td>" + "</tr>")
            })
        },
        varInit: function() {
            this.list[0] = new Array(new this.create("COMMON 1", 0, 0, "+2% money reward +2% rep. reward</span>", "totalRewardMultiplier", "1.02", "totalReputationMultiplier", "1.02"), new this.create("COMMON 2", 0, 0, "+3% money reward +3% rep. reward</span>", "totalRewardMultiplier", "1.03", "totalReputationMultiplier", "1.03"), new this.create("COMMON 3", 0, 0, "+4% money reward +4% rep. reward</span>", "totalRewardMultiplier", "1.04", "totalReputationMultiplier", "1.04"), new this.create("COMMON 4", 0, 0, "+5% money reward +5% rep. reward</span>", "totalRewardMultiplier", "1.05", "totalReputationMultiplier", "1.05"), new this.create("COMMON 5", 0, 0, "+6% money reward +6% rep. reward</span>", "totalRewardMultiplier", "1.06", "totalReputationMultiplier", "1.06"), new this.create("COMMON 6", 0, 0, "+7% money reward +7% rep. reward</span>", "totalRewardMultiplier", "1.07", "totalReputationMultiplier", "1.07"), new this.create("COMMON 7", 0, 0, "+8% money reward +8% rep. reward</span>", "totalRewardMultiplier", "1.08", "totalReputationMultiplier", "1.08"), new this.create("COMMON 8", 0, 0, "+9% money reward +9% rep. reward</span>", "totalRewardMultiplier", "1.09", "totalReputationMultiplier", "1.09"), new this.create("Dealer Stuff I-I", 0, 1, "+2% money reward", "totalRewardMultiplier", "1.02", "", ""), new this.create("Dealer Stuff I-II", 0, 1, "+3% money reward", "totalRewardMultiplier", "1.03", "", ""), new this.create("Dealer Stuff I-III", 0, 1, "+5% money reward", "totalRewardMultiplier", "1.05", "", "")), this.list[1] = new Array(new this.create("UNCOMMON 1", 1, 0, "+10% money reward +10% rep. reward", "totalRewardMultiplier", "1.10", "totalReputationMultiplier", "1.10"), new this.create("UNCOMMON 2", 1, 0, "+12% money reward +12% rep. reward", "totalRewardMultiplier", "1.12", "totalReputationMultiplier", "1.12"), new this.create("UNCOMMON 3", 1, 0, "+14% money reward +14% rep. reward", "totalRewardMultiplier", "1.14", "totalReputationMultiplier", "1.14"), new this.create("Dealer Stuff II-I", 1, 1, "+6% money reward", "totalRewardMultiplier", "1.06", "", ""), new this.create("Dealer Stuff II-II", 1, 1, "+7% money reward", "totalRewardMultiplier", "1.07", "", ""), new this.create("Dealer Stuff II-III", 1, 1, "+8% money reward", "totalRewardMultiplier", "1.08", "", "")), this.list[2] = new Array(new this.create("RARE 1", 2, 0, "+16% money reward +16% rep. reward", "totalRewardMultiplier", "1.16", "totalReputationMultiplier", "1.16"), new this.create("RARE 2", 2, 0, "+18% money reward +18% rep. reward", "totalRewardMultiplier", "1.18", "totalReputationMultiplier", "1.18"), new this.create("RARE 3", 2, 0, "+20% money reward +20% rep. reward", "totalRewardMultiplier", "1.20", "totalReputationMultiplier", "1.20"), new this.create("Dealer Stuff III-I", 2, 1, "9% money reward", "totalRewardMultiplier", "1.09", "", ""), new this.create("Dealer Stuff III-II", 2, 1, "10% money reward", "totalRewardMultiplier", "1.10", "", ""), new this.create("Dealer Stuff III-III", 2, 1, "11% money reward", "totalRewardMultiplier", "1.11", "", "")), this.list[3] = new Array(new this.create("UNIQUE 1", 3, 0, "+22% money reward +22% rep. reward", "totalRewardMultiplier", "1.22", "totalReputationMultiplier", "1.22"), new this.create("UNIQUE 2", 3, 0, "+24% money reward +24% rep. reward", "totalRewardMultiplier", "1.24", "totalReputationMultiplier", "1.24"), new this.create("UNIQUE 3", 3, 0, "+26% money reward +26% rep. reward", "totalRewardMultiplier", "1.26", "totalReputationMultiplier", "1.26"), new this.create("Dealer Stuff IV-I", 3, 1, "+12% money reward", "totalRewardMultiplier", "*1.12", "", ""), new this.create("Dealer Stuff IV-II", 3, 1, "+13% money reward", "totalRewardMultiplier", "*1.13", "", ""), new this.create("Dealer Stuff IV-III", 3, 1, "+14% money reward", "totalRewardMultiplier", "*1.14", "", ""))
        },
        domInit: function() {
            this.display()
        },
        angularInit: function() {
            this.domInit()
        },
        init: function() {
            this.varInit(), window.game.collections = this, log("Collections init.")
        }
    };
    return e.init()
});;
define([], function() {
    var e = {
        money: 0,
        totalMoney: 0,
        level: 1,
        reputation: 0,
        reputationNeed: 100,
        options: {
            fps: 20,
            interval: 50,
            angularInit: !1,
            init: !1,
            pause: !0,
            firstTime: !0,
            menu: "navbar",
            before: (new Date).getTime(),
            now: (new Date).getTime(),
            version: .001
        },
        scope: function(e) {
            return angular.element(e).scope()
        },
        togglePause: function() {
            this.options.pause = !this.options.pause, this.options.pause ? notify.pop("alert", "<strong>Game paused...</strong>") : notify.pop("alert", "<strong>Game un-paused.</strong>")
        },
        gainMoney: function(e) {
            this.money += e, this.totalMoney += e
        },
        gainRep: function(e) {
            this.reputation += e
        },
        repLevelUp: function() {
            if (this.reputation >= this.reputationNeed)
                while (this.reputation >= this.reputationNeed) this.level++, this.reputation -= this.reputationNeed, this.reputationNeed = Math.floor(100 * Math.pow(1.3, this.level))
        },
        menuSwitch: function(e) {
            this.options.menu = e, this.menuType()
        },
        menuType: function() {
            var e = this.options.menu;
            e == "sidebar" ? ($('li[id^="navbar-menu"]').fadeOut("fast", function() {
                $("#navbar-sidebarmenu").fadeIn("fast")
            }), sidebar.activated = !0) : ($("#navbar-sidebarmenu").fadeOut("fast", function() {
                $('li[id^="navbar-menu"]').fadeIn("fast")
            }), sidebar.activated = !1)
        },
        animateMenu: function(e) {
            var t = ".navbar-menu-" + e;
            $(t).addClass("glow").delay(1e3).queue(function() {
                $(this).removeClass("glow").dequeue()
            })
        },
        toggleModal: function() {
            this.options.firstTime && ($("#modal-newPlayer").modal({
                keyboard: !1,
                backdrop: "static"
            }), $("#modal-newPlayer").fadeIn("slow"))
        },
        closeModal: function() {
            this.options.firstTime && (this.options.firstTime = !1, e.options.pause = !1, window.setTimeout(function() {
                $("#modal-newPlayer").remove()
            }, 3e3))
        },
        display: function() {
            $("#sidebar-version").html("v" + this.options.version), $(".navbar-brand").html("$" + beautify.fix(e.money) + " - reputation lvl. " + this.level + " <small>(" + fix(this.reputation, 0) + "/" + fix(this.reputationNeed, 0) + ")")
        },
        coreLoop: function() {
            var t = this.game;
            t.options.now = (new Date).getTime();
            var n = t.options.now - t.options.before;
            n > t.options.interval ? n > 1e3 ? (t.updateGame(Math.floor(n / t.options.interval), !0), notify.pop("success", "While you were offline, you gained:<br>$" + fix(e.actions.gainedMoneyThisRun, 3) + "<br>" + fix(e.actions.gainedRepThisRun, 3) + " rep.")) : t.updateGame(Math.floor(n / t.options.interval), !1) : t.updateGame(1, !1), t.options.before = (new Date).getTime()
        },
        updateGame: function(t, n) {
            this.display(), e.actions.run(t, n)
        },
        domInit: function() {
            $("#navbar-save").attr("onclick", 'game.save.save("user");')
        },
        init: function() {
            window.game = this, window.log = console.info.bind(console, "BR-" + this.options.version + " :"), require(["beautify", "sidebar", "notify"], function() {
                log("----------"), require(["actions", "research-center", "achievements", "prestige", "collections", "save"], function() {
                    e.save.load(), localStorage.getItem(e.save.name + e.save.salt) === null && (e.options.before = (new Date).getTime()), log("----------"), require(["angular", "bootstrap"], function() {
                        e.options.firstTime ? window.setTimeout(function() {
                            e.toggleModal()
                        }, 1e3) : e.options.pause = !1, e.domInit(), e.options.init = !0, log("Angular & Bootstrap init. Ready to play.")
                    })
                })
            })
        }
    };
    return e.init()
});;
define(["angular"], function() {});;
define(["angular"], function() {});;
define(["angular"], function() {});;
define(["angular"], function() {
    var research = {
        actions: {
            list: new Array,
            bought: new Array,
            upTypes: 10
        },
        getCurrent: function(e, t) {
            var n;
            switch (e) {
                case 0:
                    for (var r = 0; r < this.actions.list.length; r++) !this.actions.bought[r] && this.actions.list[r].upType == t && (n = r, r = this.actions.list.length);
                    break;
                case 1:
            }
            return n
        },
        getCheapest: function(e) {
            var t, n;
            switch (e) {
                case 0:
                    n = 1e308;
                    for (var r = 0; r < this.actions.list.length; r++) !this.actions.bought[r] && this.actions.list[r].price < n && (n = this.actions.list[r].price, t = r);
                    break;
                case 1:
            }
            return t
        },
        countBought: function(e) {
            var t = 0;
            switch (e) {
                case 0:
                    for (var n = 0; n < this.actions.bought.length; n++) this.actions.bought[n] && t++;
                    break;
                case 1:
            }
            return t
        },
        create: function(e, t, n, r, i, s, o, u, a, f, l) {
            this.name = e, this.desc = t, this.price = n, this.str = r, this.who = i, this.effect = s, this.otherWho = u, this.otherStr = o, this.otherEffect = a, this.type = f, this.upType = l
        },
        buy: function(type, upgradeIndex) {
            switch (type) {
                case 0:
                    var price = this.actions.list[upgradeIndex].price,
                        what = this.actions.list[upgradeIndex].str,
                        whoInWhat = this.actions.list[upgradeIndex].who,
                        effect = this.actions.list[upgradeIndex].effect,
                        otherWhat = this.actions.list[upgradeIndex].otherStr,
                        otherWhoInWhat = this.actions.list[upgradeIndex].otherWho,
                        otherEffect = this.actions.list[upgradeIndex].otherEffect;
                    if (game.money >= price && !this.actions.bought[upgradeIndex]) {
                        game.money -= price, this.actions.bought[upgradeIndex] = !0;
                        if (whoInWhat !== "n") {
                            var value = window.game.actions[what][whoInWhat];
                            window.game.actions[what][whoInWhat] = eval(value + effect)
                        } else {
                            var value2 = window.game.actions[what];
                            window.game.actions[what] = eval(value2 + effect)
                        }
                        if (otherWhat && otherWhoInWhat && otherEffect !== "undefined")
                            if (otherWhoInWhat !== "n") {
                                var value3 = window.game.actions[what][otherWhoInWhat];
                                window.game.actions[otherWhat][otherWhoInWhat] = eval(value3 + otherEffect)
                            } else {
                                var value4 = window.game.actions[otherWhat];
                                window.game.actions[otherWhat] = eval(value4 + otherEffect)
                            }
                        game.collections.getItemDroppedByChance(), game.animateMenu("research")
                    }
                    game.actions.display();
                    break;
                case 1:
            }
            this.display()
        },
        quickbuy: function(e, t) {
            var n = this.getCheapest(e);
            return this.buy(e, n)
        },
        display: function() {
            for (var e = 0; e < this.actions.upTypes; e++) {
                var t = game.research.getCurrent(0, e),
                    n = this.countBought(0),
                    r = this.actions.bought.length;
                if (typeof this.actions.list[t] != "undefined") {
                    var i = {
                        name: this.actions.list[t].name,
                        desc: this.actions.list[t].desc,
                        price: this.actions.list[t].price
                    };
                    $("#research-actions-total").html("(" + n + "/" + r + ")"), $("#research-actions-upgrade-" + (e + 1)).html("<b>" + i.name + "</b><span>Cost <b>$" + fix(i.price, 2) + "</b></span><br>" + i.desc), $("#research-actions-upgrade-" + (e + 1)).attr("onclick", "game.research.buy(0, " + t + ");")
                } else $("#research-actions-upgrade-" + (e + 1)).html("<b>All available Upgrades baught!</b>")
            }
        },
        varInit: function() {
            this.actions.list = [new this.create("Shooting I", "Shooting reward x3<span>Reputation reward x3</span>", 25e4, "rewardMultiplier", "0", "*3", "reputationMultiplier", "0", "*3", 0, 0), new this.create("Shooting II", "Shooting reward x3<span>Reputation reward x3</span>", 1e12, "rewardMultiplier", "0", "*3", "reputationMultiplier", "0", "*3", 0, 0), new this.create("Fight club I", "Fight club reward x3<span>Reputation reward x3</span>", 75e4, "rewardMultiplier", "1", "*3", "reputationMultiplier", "1", "*3", 0, 1), new this.create("Fight club II", "Fight club reward x3<span>Reputation reward x3</span>", 25e12, "rewardMultiplier", "1", "*3", "reputationMultiplier", "1", "*3", 0, 1), new this.create("Pickpocket I", "Pickpocket reward x3<span>Reputation reward x3</span>", 25e5, "rewardMultiplier", "2", "*3", "reputationMultiplier", "2", "*3", 0, 2), new this.create("Pickpocket II", "Pickpocket reward x3<span>Reputation reward x3</span>", 5e13, "rewardMultiplier", "2", "*3", "reputationMultiplier", "2", "*3", 0, 2), new this.create("Scammer I", "Scam reward x3<span>Reputation reward x3</span>", 5e6, "rewardMultiplier", "3", "*3", "reputationMultiplier", "3", "*3", 0, 3), new this.create("Scammer II", "Scam reward x3<span>Reputation reward x3</span>", 1e14, "rewardMultiplier", "3", "*3", "reputationMultiplier", "3", "*3", 0, 3), new this.create("Steal car I", "Steal car reward x3<span>Reputation reward x3</span>", 25e6, "rewardMultiplier", "4", "*3", "reputationMultiplier", "4", "*3", 0, 4), new this.create("Steal car II", "Steal car reward x3<span>Reputation reward x3</span>", 75e13, "rewardMultiplier", "4", "*3", "reputationMultiplier", "4", "*3", 0, 4), new this.create("Jewelry robbery I", "Jewelry robbery reward x3<span>Reputation reward x3</span>", 5e8, "rewardMultiplier", "5", "*3", "reputationMultiplier", "5", "*3", 0, 5), new this.create("Jewelry robbery II", "Jewelry robbery reward x3<span>Reputation reward x3</span>", 25e14, "rewardMultiplier", "5", "*3", "reputationMultiplier", "5", "*3", 0, 5), new this.create("Hacking I", "Hacking reward x3<span>Reputation reward x3</span>", 1e10, "rewardMultiplier", "6", "*3", "reputationMultiplier", "6", "*3", 0, 6), new this.create("Hacking II", "Hacking reward x3<span>Reputation reward x3</span>", 1e16, "rewardMultiplier", "6", "*3", "reputationMultiplier", "6", "*3", 0, 6), new this.create("Arms dealer I", "Arms sales reward x3<span>Reputation reward x3</span>", 5e10, "rewardMultiplier", "7", "*3", "reputationMultiplier", "7", "*3", 0, 7), new this.create("Arms dealer II", "Arms sales reward x3<span>Reputation reward x3</span>", 2e16, "rewardMultiplier", "7", "*3", "reputationMultiplier", "7", "*3", 0, 7), new this.create("Dealer I", "Drugs sales reward x3<span>Reputation reward x3</span>", 5e10, "rewardMultiplier", "8", "*3", "reputationMultiplier", "8", "*3", 0, 8), new this.create("Dealer II", "Drugs sales reward x3<span>Reputation reward x3</span>", 2e16, "rewardMultiplier", "8", "*3", "reputationMultiplier", "8", "*3", 0, 8), new this.create("All actions I", "All actions reward x3<span>Reputation reward x3</span>", 25e10, "totalRewardMultiplier", "n", "*3", "totalReputationMultiplier", "n", "*3", 0, 9), new this.create("All actions II", "All actions reward x3<span>Reputation reward x3</span>", 75e15, "totalRewardMultiplier", "n", "*3", "totalReputationMultiplier", "n", "*3", 0, 9)];
            for (var e = 0; e < this.actions.list.length; e++) this.actions.bought.push(!1)
        },
        domInit: function() {
            for (var e = 0; e < this.actions.upTypes; e++) $("#research-actions").append('<li id="research-actions-upgrade-' + (e + 1) + '" class="list-group-item"></li>'), $("#research-actions-upgrade-" + (e + 1)).attr("onclick", "game.research.buy(0, " + e + ");");
            var t = $("body").height();
            $("#research-actions").css({
                "max-height": t - 200 + "px",
                "overflow-y": "auto"
            }), this.display()
        },
        angularInit: function() {
            this.domInit()
        },
        init: function() {
            this.varInit(), window.game.research = this, log("Research center init.")
        }
    };
    return research.init()
});;
define(["angular"], function() {
    var e = {
        name: "BR-S",
        salt: "BRKey",
        saveInterval: undefined,
        save: function(e) {
            var t = {
                money: game.money,
                totalMoney: game.totalMoney,
                level: game.level,
                reputation: game.reputation,
                reputationNeed: game.reputationNeed,
                actionsProgress: game.actions.progress,
                actionsOwned: game.actions.owned,
                actionsRewardMultiplier: game.actions.rewardMultiplier,
                actionsTotalRewardMultiplier: game.actions.totalRewardMultiplier,
                actionsTimeMultiplier: game.actions.timeMultiplier,
                actionsTotalTimeMultiplier: game.actions.totalTimeMultiplier,
                actionsCurrentRep: game.actions.currentRep,
                researchActionsBought: game.research.actions.bought,
                collectionsOwned: game.collections.owned,
                optionsBefore: game.options.before,
                optionsFirstTime: game.options.firstTime
            };
            game.options.init && localStorage.setItem(this.name + this.salt, JSON.stringify(t)), e == "user" && notify.pop("success", "Game successfully saved!"), log("Game saved.")
        },
        load: function(e) {
            if (localStorage.getItem(this.name + this.salt) === null) notify.pop("alert", "No save found!");
            else {
                var t = JSON.parse(localStorage.getItem(this.name + this.salt));
                game.money = t.money, game.totalMoney = t.totalMoney, game.level = t.level, game.reputation = t.reputation, game.reputationNeed = t.reputationNeed, game.actions.progress = t.actionsProgress, game.actions.owned = t.actionsOwned, game.actions.rewardMultiplier = t.actionsRewardMultiplier, game.actions.totalRewardMultiplier = t.actionsTotalRewardMultiplier, game.actions.timeMultiplier = t.actionsTimeMultiplier, game.actions.totalTimeMultiplier = t.actionsTotalTimeMultiplier, game.actions.currentRep = t.actionsCurrentRep, game.research.actions.bought = t.researchActionsBought, game.options.before = t.optionsBefore, game.options.firstTime = t.optionsFirstTime, game.collections.owned = t.collectionsOwned, game.research.display(), e == "user" && notify.pop("success", "Save-game successfully loaded!"), log("Savegame loaded.")
            }
        },
        eventListenerSave: function() {
            game.save.save()
        },
        reset: function(e, t) {
            $("#options-reset").html("Really?"), $("#options-yes, #options-no").show(), $("#options-reset").addClass("really"), e && (this.saveInterval = undefined, window.removeEventListener("beforeunload", game.save.eventListenerSave, !1), localStorage.removeItem(this.name + this.salt), window.history.pushState("", "", "/#/"), window.location.reload()), t && ($("#options-reset").html("Hard-reset"), $("#options-yes, #options-no").hide(), $("#options-reset").removeClass("really"))
        },
        setInt: function() {
            this.saveInterval = window.setInterval(function() {
                game.save.save()
            }, 1e3)
        },
        init: function() {
            this.setInt(), window.game.save = this, window.addEventListener("beforeunload", game.save.eventListenerSave, !1), log("Save init.")
        }
    };
    return e.init()
});
