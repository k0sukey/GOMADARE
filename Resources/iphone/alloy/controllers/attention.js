function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "attention";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId0 = {};
    var __alloyId2 = [];
    var __alloyId3 = {
        type: "Ti.UI.ImageView",
        bindId: "photo",
        properties: {
            top: "0dp",
            right: "0dp",
            bottom: "0dp",
            left: "0dp",
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            bindId: "photo"
        }
    };
    __alloyId2.push(__alloyId3);
    var __alloyId4 = {
        type: "Ti.UI.View",
        properties: {
            top: "0dp",
            right: "0dp",
            left: "0dp",
            width: Ti.UI.FILL,
            height: "60dp",
            backgroundColor: "#000",
            opacity: .2
        }
    };
    __alloyId2.push(__alloyId4);
    var __alloyId5 = {
        type: "Ti.UI.View",
        bindId: "curator",
        properties: {
            top: "10dp",
            right: "10dp",
            left: "10dp",
            width: "40dp",
            height: "40dp",
            backgroundColor: "#eee",
            borderRadius: 20,
            bindId: "curator"
        }
    };
    __alloyId2.push(__alloyId5);
    var __alloyId6 = {
        type: "Ti.UI.Label",
        bindId: "name",
        properties: {
            top: "10dp",
            right: "10dp",
            left: "60dp",
            width: Ti.UI.FILL,
            height: Ti.UI.SIZE,
            color: "#fff",
            shadowColor: "#000",
            shadowOffset: {
                x: 0,
                y: 1
            },
            font: {
                fontSize: "14dp",
                fontWeight: "bold"
            },
            touchEnabled: false,
            bindId: "name"
        }
    };
    __alloyId2.push(__alloyId6);
    var __alloyId7 = {
        type: "Ti.UI.Label",
        bindId: "title",
        properties: {
            top: "34dp",
            right: "10dp",
            left: "60dp",
            width: Ti.UI.FILL,
            height: Ti.UI.SIZE,
            color: "#fff",
            shadowColor: "#000",
            shadowOffset: {
                x: 0,
                y: 1
            },
            font: {
                fontSize: "12dp"
            },
            touchEnabled: false,
            bindId: "title"
        }
    };
    __alloyId2.push(__alloyId7);
    var __alloyId8 = {
        type: "Ti.UI.View",
        properties: {
            bottom: "0dp",
            right: "0dp",
            left: "0dp",
            width: Ti.UI.FILL,
            height: "60dp",
            backgroundColor: "#000",
            opacity: .8
        }
    };
    __alloyId2.push(__alloyId8);
    var __alloyId9 = {
        type: "Ti.UI.Label",
        bindId: "message",
        properties: {
            right: "10dp",
            bottom: "34dp",
            left: "10dp",
            width: Ti.UI.FILL,
            height: Ti.UI.SIZE,
            color: "#fff",
            shadowColor: "#000",
            shadowOffset: {
                x: 0,
                y: 1
            },
            font: {
                fontSize: "14dp",
                fontWeight: "bold"
            },
            touchEnabled: false,
            bindId: "message"
        }
    };
    __alloyId2.push(__alloyId9);
    var __alloyId10 = {
        type: "Ti.UI.Label",
        bindId: "location",
        properties: {
            bottom: "10dp",
            left: "10dp",
            width: Ti.UI.FILL,
            height: Ti.UI.SIZE,
            color: "#fff",
            shadowColor: "#000",
            shadowOffset: {
                x: 0,
                y: 1
            },
            font: {
                fontSize: "12dp"
            },
            touchEnabled: false,
            bindId: "location"
        }
    };
    __alloyId2.push(__alloyId10);
    var __alloyId1 = {
        properties: {
            height: "300dp",
            name: "attention"
        },
        childTemplates: __alloyId2
    };
    __alloyId0["attention"] = __alloyId1;
    $.__views.__alloyId11 = Ti.UI.createListSection({
        id: "__alloyId11"
    });
    var __alloyId13 = [];
    __alloyId13.push($.__views.__alloyId11);
    $.__views.attentions = Ti.UI.createListView({
        separatorStyle: Ti.UI.iPhone.ListViewSeparatorStyle.NONE,
        sections: __alloyId13,
        templates: __alloyId0,
        id: "attentions",
        defaultItemTemplate: "attention"
    });
    $.__views.attentions && $.addTopLevelView($.__views.attentions);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var photos = [ "http://miil.me/g/21qdy.jpeg", "http://miil.me/g/207xx.jpeg", "http://miil.me/g/1zox6.jpeg", "http://miil.me/g/1xzrc.jpeg", "http://miil.me/g/1vqw8.jpeg", "http://miil.me/g/1tzri.jpeg", "http://miil.me/g/21qdy.jpeg", "http://miil.me/g/1s154.jpeg", "http://miil.me/g/1qcfk.jpeg", "http://miil.me/g/1ogmk.jpeg", "http://miil.me/g/1kz6u.jpeg", "http://miil.me/g/1kp43.jpeg", "http://miil.me/g/1jl95.jpeg", "http://miil.me/g/1jijk.jpeg", "http://miil.me/g/1jbry.jpeg", "http://miil.me/g/1imi5.jpeg", "http://miil.me/g/1gbrs.jpeg", "http://miil.me/g/1e01z.jpeg", "http://miil.me/g/1cgjv.jpeg", "http://miil.me/g/1c2eu.jpeg" ];
    var items = [];
    for (var i = 0; 256 > i; i++) items.push({
        template: "attention",
        photo: {
            image: photos[i % photos.length]
        },
        name: {
            text: "なんとか かんとか" + i
        },
        title: {
            text: "おえらいさん" + i
        },
        message: {
            text: "ほんとにウマいの？" + i
        },
        location: {
            text: "どこぞのおみせ" + i + "（どこか）"
        }
    });
    $.attentions.sections[0].items = items;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;