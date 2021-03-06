define([], function() {
    function fix(x, n) {
        return beautify.fix(x, n);
    };

    function capF(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    var beautify = {
        prefixes: ["m ", "b ", "t ", "q ", "Q ", "s ", "S ", "o ", "n ",
            "D ", "UD ", "DD ", "TD ", "qD ", "QD ", "sD ", "SD ", "OD ", "ND ",
            "V ", "UV ", "DV ", "TV ", "qV ", "QV ", "sV ", "SV ", "OV ", "NV ",
            "T ", "UT ", "DT ", "TT ", "qT ", "QT ", "sT ", "ST ", "OT ", "NT ",
            "~q ", "Uq ", "Dq ", "Tq ", "qq ", "Qq ", "sq ", "Sq ", "Oq ", "Nq "
        ],

        beautify: function(x, n) {
            if (x >= 1e6) {
                var z = Math.floor(this.logFloor(x) / 3);
                var s = this.beautify(x / Math.pow(10, 3 * z), n);
                return s + "" + this.prefixes[z - 2];
            } else if (x === 0 || typeof x == "undefined" || isNaN(x)) {
                return 0;
            } else {
                return this.numberWithCommas(x.toFixed(n));
            };
        },

        numberWithCommas: function(n) {
            var parts = n.toString().split(".");
            return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
        },

        logFloor: function(x) {
            var count = 0;
            while (x >= 10) {
                count++;
                x /= 10;
            };
            return count;
        },

        fix: function(x, n) {
            if (x >= 1e6)
                return this.beautify(x, 3);
            else
                return this.beautify(x, 2);
        },

        init: function() {
            window["beautify"] = this;
            window["fix"] = fix;
            window["capF"] = capF;
            log("Beautify init.");
        }
    };

    return beautify.init();
});
