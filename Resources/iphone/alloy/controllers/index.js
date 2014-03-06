function Controller() {
    function toggle() {
        $.drawer.toggleLeftWindow();
    }
    function changeTitle(_id) {
        var title = "";
        switch (_id) {
          case "attention":
            title = "注目";
            break;

          case "column":
            title = "コラム";
            break;

          case "favorite":
            title = "お気に入り";
            break;

          case "curators":
            title = "キュレーター一覧";
            break;

          case "curator":
            title = "キュレーター";
            break;

          case "setting":
            title = "設定";
            break;

          case "notice":
            title = "お知らせ";
            break;

          case "login":
            title = "ログイン";
        }
        $.main.applyProperties({
            title: title
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId14 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        role: "leftWindow",
        id: "__alloyId14"
    });
    $.__views.menu = Alloy.createController("menu", {
        id: "menu",
        __parentSymbol: $.__views.__alloyId14
    });
    $.__views.menu.setParent($.__views.__alloyId14);
    $.__views.main = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "main",
        title: "注目"
    });
    $.__views.__alloyId18 = Ti.UI.createView({
        id: "__alloyId18"
    });
    toggle ? $.__views.__alloyId18.addEventListener("click", toggle) : __defers["$.__views.__alloyId18!click!toggle"] = true;
    $.__views.__alloyId19 = Alloy.createWidget("be.k0suke.fontawesome", "widget", {
        icon: "fa-bars",
        id: "__alloyId19",
        __parentSymbol: $.__views.__alloyId18
    });
    $.__views.__alloyId19.setParent($.__views.__alloyId18);
    $.__views.main.leftNavButton = $.__views.__alloyId18;
    $.__views.__alloyId20 = Alloy.createController("attention", {
        id: "__alloyId20",
        __parentSymbol: $.__views.main
    });
    $.__views.__alloyId20.setParent($.__views.main);
    $.__views.__alloyId16 = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.main,
        role: "centerWindow",
        id: "__alloyId16"
    });
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_ALL",
        closeDrawerGestureMode: "CLOSE_MODE_ALL",
        leftDrawerWidth: 270,
        id: "drawer",
        children: [ $.__views.__alloyId14, $.__views.__alloyId15, $.__views.__alloyId16, $.__views.__alloyId21 ]
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menu.on("menu", function(e) {
        changeTitle(e.id);
        toggle();
    });
    $.drawer.open();
    __defers["$.__views.__alloyId18!click!toggle"] && $.__views.__alloyId18.addEventListener("click", toggle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;