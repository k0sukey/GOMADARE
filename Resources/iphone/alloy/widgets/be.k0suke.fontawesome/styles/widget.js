function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "be.k0suke.fontawesome/" + s : s.substring(0, index) + "/be.k0suke.fontawesome/" + s.substring(index + 1);
    return path;
}

module.exports = [];