function decode(a) {
    return a.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    })
};

function openMailerMichael(element) {
    var y = decode("znvygb:zvpunry.xynhfre@oyhrlrgv.pu");
    element.setAttribute("href", y);
    element.setAttribute("onclick", "");
    element.firstChild.nodeValue = "E-Mail-Software öffnet..";
};
function openMailerPhilippe(element) {
    var y = decode("znvygb:cuvyvccr.gurvf@oyhrlrgv.pu");
    element.setAttribute("href", y);
    element.setAttribute("onclick", "");
    element.firstChild.nodeValue = "E-Mail-Software öffnet..";
};
