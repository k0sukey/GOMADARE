function Controller() {
    function curator() {
        $.trigger("menu", {
            id: "curator"
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId23 = [];
    $.__views.__alloyId42 = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: "80dp",
        contentWidth: "auto",
        layout: "horizontal",
        id: "__alloyId42"
    });
    $.__views.__alloyId43 = Ti.UI.createView({
        left: "5dp",
        right: "5dp",
        width: "60dp",
        height: "60dp",
        backgroundColor: "#eee",
        borderRadius: 30,
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    curator ? $.__views.__alloyId43.addEventListener("click", curator) : __defers["$.__views.__alloyId43!click!curator"] = true;
    $.__views.__alloyId44 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        icon: "fa-user",
        id: "__alloyId44",
        __parentSymbol: $.__views.__alloyId43
    });
    $.__views.__alloyId44.setParent($.__views.__alloyId43);
    $.__views.__alloyId45 = Ti.UI.createView({
        left: "5dp",
        right: "5dp",
        width: "60dp",
        height: "60dp",
        backgroundColor: "#eee",
        borderRadius: 30,
        id: "__alloyId45"
    });
    $.__views.__alloyId42.add($.__views.__alloyId45);
    curator ? $.__views.__alloyId45.addEventListener("click", curator) : __defers["$.__views.__alloyId45!click!curator"] = true;
    $.__views.__alloyId46 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        icon: "fa-user",
        id: "__alloyId46",
        __parentSymbol: $.__views.__alloyId45
    });
    $.__views.__alloyId46.setParent($.__views.__alloyId45);
    $.__views.__alloyId47 = Ti.UI.createView({
        left: "5dp",
        right: "5dp",
        width: "60dp",
        height: "60dp",
        backgroundColor: "#eee",
        borderRadius: 30,
        id: "__alloyId47"
    });
    $.__views.__alloyId42.add($.__views.__alloyId47);
    curator ? $.__views.__alloyId47.addEventListener("click", curator) : __defers["$.__views.__alloyId47!click!curator"] = true;
    $.__views.__alloyId48 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        icon: "fa-user",
        id: "__alloyId48",
        __parentSymbol: $.__views.__alloyId47
    });
    $.__views.__alloyId48.setParent($.__views.__alloyId47);
    $.__views.__alloyId49 = Ti.UI.createView({
        left: "5dp",
        right: "5dp",
        width: "60dp",
        height: "60dp",
        backgroundColor: "#eee",
        borderRadius: 30,
        id: "__alloyId49"
    });
    $.__views.__alloyId42.add($.__views.__alloyId49);
    curator ? $.__views.__alloyId49.addEventListener("click", curator) : __defers["$.__views.__alloyId49!click!curator"] = true;
    $.__views.__alloyId50 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        icon: "fa-user",
        id: "__alloyId50",
        __parentSymbol: $.__views.__alloyId49
    });
    $.__views.__alloyId50.setParent($.__views.__alloyId49);
    $.__views.__alloyId51 = Ti.UI.createView({
        left: "5dp",
        right: "5dp",
        width: "60dp",
        height: "60dp",
        backgroundColor: "#eee",
        borderRadius: 30,
        id: "__alloyId51"
    });
    $.__views.__alloyId42.add($.__views.__alloyId51);
    curator ? $.__views.__alloyId51.addEventListener("click", curator) : __defers["$.__views.__alloyId51!click!curator"] = true;
    $.__views.__alloyId52 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        icon: "fa-user",
        id: "__alloyId52",
        __parentSymbol: $.__views.__alloyId51
    });
    $.__views.__alloyId52.setParent($.__views.__alloyId51);
    $.__views.__alloyId53 = Ti.UI.createView({
        left: "5dp",
        right: "5dp",
        width: "60dp",
        height: "60dp",
        backgroundColor: "#eee",
        borderRadius: 30,
        id: "__alloyId53"
    });
    $.__views.__alloyId42.add($.__views.__alloyId53);
    curator ? $.__views.__alloyId53.addEventListener("click", curator) : __defers["$.__views.__alloyId53!click!curator"] = true;
    $.__views.__alloyId54 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        icon: "fa-user",
        id: "__alloyId54",
        __parentSymbol: $.__views.__alloyId53
    });
    $.__views.__alloyId54.setParent($.__views.__alloyId53);
    $.__views.__alloyId55 = Ti.UI.createView({
        left: "5dp",
        right: "5dp",
        width: "60dp",
        height: "60dp",
        backgroundColor: "#eee",
        borderRadius: 30,
        id: "__alloyId55"
    });
    $.__views.__alloyId42.add($.__views.__alloyId55);
    curator ? $.__views.__alloyId55.addEventListener("click", curator) : __defers["$.__views.__alloyId55!click!curator"] = true;
    $.__views.__alloyId56 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        icon: "fa-user",
        id: "__alloyId56",
        __parentSymbol: $.__views.__alloyId55
    });
    $.__views.__alloyId56.setParent($.__views.__alloyId55);
    $.__views.__alloyId57 = Ti.UI.createView({
        left: "5dp",
        right: "5dp",
        width: "60dp",
        height: "60dp",
        backgroundColor: "#eee",
        borderRadius: 30,
        id: "__alloyId57"
    });
    $.__views.__alloyId42.add($.__views.__alloyId57);
    curator ? $.__views.__alloyId57.addEventListener("click", curator) : __defers["$.__views.__alloyId57!click!curator"] = true;
    $.__views.__alloyId58 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        icon: "fa-user",
        id: "__alloyId58",
        __parentSymbol: $.__views.__alloyId57
    });
    $.__views.__alloyId58.setParent($.__views.__alloyId57);
    $.__views.__alloyId59 = Ti.UI.createView({
        left: "5dp",
        right: "5dp",
        width: "60dp",
        height: "60dp",
        backgroundColor: "#eee",
        borderRadius: 30,
        id: "__alloyId59"
    });
    $.__views.__alloyId42.add($.__views.__alloyId59);
    curator ? $.__views.__alloyId59.addEventListener("click", curator) : __defers["$.__views.__alloyId59!click!curator"] = true;
    $.__views.__alloyId60 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        icon: "fa-user",
        id: "__alloyId60",
        __parentSymbol: $.__views.__alloyId59
    });
    $.__views.__alloyId60.setParent($.__views.__alloyId59);
    $.__views.__alloyId61 = Ti.UI.createView({
        left: "5dp",
        right: "5dp",
        width: "60dp",
        height: "60dp",
        backgroundColor: "#eee",
        borderRadius: 30,
        id: "__alloyId61"
    });
    $.__views.__alloyId42.add($.__views.__alloyId61);
    curator ? $.__views.__alloyId61.addEventListener("click", curator) : __defers["$.__views.__alloyId61!click!curator"] = true;
    $.__views.__alloyId62 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        icon: "fa-user",
        id: "__alloyId62",
        __parentSymbol: $.__views.__alloyId61
    });
    $.__views.__alloyId62.setParent($.__views.__alloyId61);
    $.__views.__alloyId24 = Ti.UI.createTableViewSection({
        footerView: $.__views.__alloyId42,
        id: "__alloyId24"
    });
    __alloyId23.push($.__views.__alloyId24);
    $.__views.attention = Ti.UI.createTableViewRow({
        height: "44dp",
        backgroundColor: "#232323",
        selectedBackgroundColor: "#404040",
        id: "attention"
    });
    $.__views.__alloyId24.add($.__views.attention);
    $.__views.__alloyId25 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#eee",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        left: "20dp",
        icon: "fa-bullhorn",
        id: "__alloyId25",
        __parentSymbol: $.__views.attention
    });
    $.__views.__alloyId25.setParent($.__views.attention);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        left: "50dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#eee",
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
        text: "注目",
        id: "__alloyId26"
    });
    $.__views.attention.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#1a1a1a",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        right: "10dp",
        icon: "fa-chevron-right",
        id: "__alloyId27",
        __parentSymbol: $.__views.attention
    });
    $.__views.__alloyId27.setParent($.__views.attention);
    $.__views.__alloyId28 = Ti.UI.createView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: "1dp",
        backgroundColor: "#191919",
        touchEnabled: false,
        id: "__alloyId28"
    });
    $.__views.attention.add($.__views.__alloyId28);
    $.__views.column = Ti.UI.createTableViewRow({
        height: "44dp",
        backgroundColor: "#2a2a2a",
        selectedBackgroundColor: "#404040",
        id: "column"
    });
    $.__views.__alloyId24.add($.__views.column);
    $.__views.__alloyId29 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#535353",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        left: "20dp",
        icon: "fa-file-text-o",
        id: "__alloyId29",
        __parentSymbol: $.__views.column
    });
    $.__views.__alloyId29.setParent($.__views.column);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        left: "50dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#535353",
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
        text: "コラム",
        id: "__alloyId30"
    });
    $.__views.column.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#eee",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        right: "10dp",
        icon: "fa-lock",
        id: "__alloyId31",
        __parentSymbol: $.__views.column
    });
    $.__views.__alloyId31.setParent($.__views.column);
    $.__views.__alloyId32 = Ti.UI.createView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: "1dp",
        backgroundColor: "#191919",
        touchEnabled: false,
        id: "__alloyId32"
    });
    $.__views.column.add($.__views.__alloyId32);
    $.__views.favorite = Ti.UI.createTableViewRow({
        height: "44dp",
        backgroundColor: "#2a2a2a",
        selectedBackgroundColor: "#404040",
        id: "favorite"
    });
    $.__views.__alloyId24.add($.__views.favorite);
    $.__views.__alloyId33 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#535353",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        left: "20dp",
        icon: "fa-star",
        id: "__alloyId33",
        __parentSymbol: $.__views.favorite
    });
    $.__views.__alloyId33.setParent($.__views.favorite);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        left: "50dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#535353",
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
        text: "お気に入り",
        id: "__alloyId34"
    });
    $.__views.favorite.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#eee",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        right: "10dp",
        icon: "fa-lock",
        id: "__alloyId35",
        __parentSymbol: $.__views.favorite
    });
    $.__views.__alloyId35.setParent($.__views.favorite);
    $.__views.__alloyId36 = Ti.UI.createView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: "1dp",
        backgroundColor: "#191919",
        touchEnabled: false,
        id: "__alloyId36"
    });
    $.__views.favorite.add($.__views.__alloyId36);
    $.__views.curators = Ti.UI.createTableViewRow({
        height: "44dp",
        backgroundColor: "#232323",
        selectedBackgroundColor: "#404040",
        id: "curators"
    });
    $.__views.__alloyId24.add($.__views.curators);
    $.__views.__alloyId37 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#eee",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        left: "20dp",
        icon: "fa-users",
        id: "__alloyId37",
        __parentSymbol: $.__views.curators
    });
    $.__views.__alloyId37.setParent($.__views.curators);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        left: "50dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#eee",
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
        text: "キュレーター一覧",
        id: "__alloyId38"
    });
    $.__views.curators.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#1a1a1a",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        right: "10dp",
        icon: "fa-chevron-right",
        id: "__alloyId39",
        __parentSymbol: $.__views.curators
    });
    $.__views.__alloyId39.setParent($.__views.curators);
    $.__views.__alloyId40 = Ti.UI.createView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: "1dp",
        backgroundColor: "#191919",
        touchEnabled: false,
        id: "__alloyId40"
    });
    $.__views.curators.add($.__views.__alloyId40);
    $.__views.__alloyId63 = Ti.UI.createTableViewSection({
        id: "__alloyId63"
    });
    __alloyId23.push($.__views.__alloyId63);
    $.__views.setting = Ti.UI.createTableViewRow({
        height: "44dp",
        backgroundColor: "#232323",
        selectedBackgroundColor: "#404040",
        id: "setting"
    });
    $.__views.__alloyId63.add($.__views.setting);
    $.__views.__alloyId64 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#eee",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        left: "20dp",
        icon: "fa-cog",
        id: "__alloyId64",
        __parentSymbol: $.__views.setting
    });
    $.__views.__alloyId64.setParent($.__views.setting);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        left: "50dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#eee",
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
        text: "設定",
        id: "__alloyId65"
    });
    $.__views.setting.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#1a1a1a",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        right: "10dp",
        icon: "fa-chevron-right",
        id: "__alloyId66",
        __parentSymbol: $.__views.setting
    });
    $.__views.__alloyId66.setParent($.__views.setting);
    $.__views.__alloyId67 = Ti.UI.createView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: "1dp",
        backgroundColor: "#191919",
        touchEnabled: false,
        id: "__alloyId67"
    });
    $.__views.setting.add($.__views.__alloyId67);
    $.__views.notice = Ti.UI.createTableViewRow({
        height: "44dp",
        backgroundColor: "#232323",
        selectedBackgroundColor: "#404040",
        id: "notice"
    });
    $.__views.__alloyId63.add($.__views.notice);
    $.__views.__alloyId68 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#eee",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        left: "20dp",
        icon: "fa-comment",
        id: "__alloyId68",
        __parentSymbol: $.__views.notice
    });
    $.__views.__alloyId68.setParent($.__views.notice);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        left: "50dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#eee",
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
        text: "お知らせ",
        id: "__alloyId69"
    });
    $.__views.notice.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#1a1a1a",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        right: "10dp",
        icon: "fa-chevron-right",
        id: "__alloyId70",
        __parentSymbol: $.__views.notice
    });
    $.__views.__alloyId70.setParent($.__views.notice);
    $.__views.__alloyId71 = Ti.UI.createView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: "1dp",
        backgroundColor: "#191919",
        touchEnabled: false,
        id: "__alloyId71"
    });
    $.__views.notice.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createTableViewSection({
        id: "__alloyId72"
    });
    __alloyId23.push($.__views.__alloyId72);
    $.__views.login = Ti.UI.createTableViewRow({
        height: "44dp",
        backgroundColor: "#232323",
        selectedBackgroundColor: "#404040",
        id: "login"
    });
    $.__views.__alloyId72.add($.__views.login);
    $.__views.__alloyId73 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#eee",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        left: "20dp",
        icon: "fa-key",
        id: "__alloyId73",
        __parentSymbol: $.__views.login
    });
    $.__views.__alloyId73.setParent($.__views.login);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        left: "50dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#eee",
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
        text: "ログイン",
        id: "__alloyId74"
    });
    $.__views.login.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#1a1a1a",
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        touchEnabled: false,
        right: "10dp",
        icon: "fa-chevron-right",
        id: "__alloyId75",
        __parentSymbol: $.__views.login
    });
    $.__views.__alloyId75.setParent($.__views.login);
    $.__views.__alloyId76 = Ti.UI.createView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: "1dp",
        backgroundColor: "#191919",
        touchEnabled: false,
        id: "__alloyId76"
    });
    $.__views.login.add($.__views.__alloyId76);
    $.__views.menu = Ti.UI.createTableView({
        backgroundColor: "#1c1c1c",
        separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
        contentInsets: {
            top: 20,
            right: 0,
            bottom: 0,
            left: 0
        },
        data: __alloyId23,
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.menu.addEventListener("click", function(e) {
        if (!e.rowData) return;
        $.trigger("menu", {
            id: e.rowData.id
        });
    });
    __defers["$.__views.__alloyId43!click!curator"] && $.__views.__alloyId43.addEventListener("click", curator);
    __defers["$.__views.__alloyId45!click!curator"] && $.__views.__alloyId45.addEventListener("click", curator);
    __defers["$.__views.__alloyId47!click!curator"] && $.__views.__alloyId47.addEventListener("click", curator);
    __defers["$.__views.__alloyId49!click!curator"] && $.__views.__alloyId49.addEventListener("click", curator);
    __defers["$.__views.__alloyId51!click!curator"] && $.__views.__alloyId51.addEventListener("click", curator);
    __defers["$.__views.__alloyId53!click!curator"] && $.__views.__alloyId53.addEventListener("click", curator);
    __defers["$.__views.__alloyId55!click!curator"] && $.__views.__alloyId55.addEventListener("click", curator);
    __defers["$.__views.__alloyId57!click!curator"] && $.__views.__alloyId57.addEventListener("click", curator);
    __defers["$.__views.__alloyId59!click!curator"] && $.__views.__alloyId59.addEventListener("click", curator);
    __defers["$.__views.__alloyId61!click!curator"] && $.__views.__alloyId61.addEventListener("click", curator);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;