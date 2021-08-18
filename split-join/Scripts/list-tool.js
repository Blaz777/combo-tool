function remSpcs() {
    var txtList = document.getElementById("txtList").value;
    while (txtList.indexOf(" ") != -1) {
        txtList = txtList.replace(" ", "");
    }
    document.getElementById("txtList").value = txtList;
}

function insertColor() {
    var txtList = document.getElementById("txtList").value;
    var txtSep = document.getElementById("txtSep").value;
    var txtColor = document.getElementById("txtColor").value;
    var o1 = "";
    var p = -1;

    while (txtList.indexOf("\r") != -1) {
        txtList = txtList.replace("\r", "")
    }

    var a = txtList.split("\n");

    for (var i = 0; i < a.length; i++) {
        p = a[i].lastIndexOf(txtSep);
        if (p >= 0) {
            o1 += a[i].substring(0, p) + txtSep + "[color=" + txtColor + "]";
            o1 += a[i].substring(p + 1) + "[/color]\n";
        }
        else {
            o1 += a[i];
        }
    }

    document.getElementById("txtList").value = o1;
}

function split() {
    var txtList = document.getElementById("txtList").value;
    var txtSep = document.getElementById("txtSep").value;
    var o1 = "";
    var o2 = "";
    var p = -1;

    while (txtList.indexOf("\r") != -1) {
        txtList = txtList.replace("\r", "")
    }

    var a = txtList.split("\n");

    for (var i = 0; i < a.length; i++) {
        p = a[i].indexOf(txtSep);
        if (p >= 0) {
            o1 += a[i].substring(0, p) + "\n";
            o2 += a[i].substring(p + 1) + "\n";
        }
        else {
            o1 += a[i] + "\n";
        }
    }

    document.getElementById("txtOut1").value = o1;
    document.getElementById("txtOut2").value = o2;
}

function splitLen() {
    var txtList = document.getElementById("txtList").value;
    var txtLen = parseInt(document.getElementById("txtLen").value);
    var o1 = "";
    var o2 = "";

    while (txtList.indexOf("\r") != -1) {
        txtList = txtList.replace("\r", "")
    }

    txtList = txtList.replace("\n\n", "\n");
    var a = txtList.split("\n");

    for (var i = 0; i < a.length; i++) {
        if (a[i].length <= txtLen) {
            o1 += a[i] + "\n";
        }
        else {
            o2 += a[i] + "\n";
        }
    }

    document.getElementById("txtOut1").value = o1;
    document.getElementById("txtOut2").value = o2;
}

function splitTrunc() {
    var txtList = document.getElementById("txtList").value;
    var txtLen = parseInt(document.getElementById("txtLen").value);
    var o1 = "";
    var o2 = "";

    while (txtList.indexOf("\r") != -1) {
        txtList = txtList.replace("\r", "")
    }

    txtList = txtList.replace("\n\n", "\n");
    var a = txtList.split("\n");

    for (var i = 0; i < a.length; i++) {
        if (a[i].length <= txtLen) {
            o1 += a[i] + "\n";
        }
        else {
            o1 += a[i].substring(0, txtLen) + "\n";
            o2 += a[i].substring(txtLen) + "\n";
        }
    }

    document.getElementById("txtOut1").value = o1;
    document.getElementById("txtOut2").value = o2;
}

function splitCon() {
    var txtList = document.getElementById("txtList").value;
    var txtCon = document.getElementById("txtCon").value;
    var o1 = "";
    var o2 = "";
    var p = -1;

    while (txtList.indexOf("\r") != -1) {
        txtList = txtList.replace("\r", "")
    }

    var a = txtList.split("\n");

    for (var i = 0; i < a.length; i++) {
        p = a[i].indexOf(txtCon);
        if (p >= 0) {
			o2 += a[i] + "\n";
        }
        else {
            o1 += a[i] + "\n";
        }
    }

    document.getElementById("txtOut1").value = o1;
    document.getElementById("txtOut2").value = o2;
}

function combine(direction) {
    var c1 = document.getElementById("txtOut1").value;
    var c2 = document.getElementById("txtOut2").value;
    var txtSepC = document.getElementById("txtSepC").value;
    var o1 = "";

    while (c1.indexOf("\r") != -1) {
        c1 = c1.replace("\r", "")
    }
    while (c2.indexOf("\r") != -1) {
        c2 = c2.replace("\r", "")
    }

    var a1 = c1.split("\n");
    var a2 = c2.split("\n");

    for (var i = 0; i < a1.length; i++) {
        if (a1[i].length == 0) {
            // Do nothing
        }
        else if (i < a2.length) {
            if (direction == 0)
                o1 += a1[i] + txtSepC + a2[i] + "\n";
            else
                o1 += a2[i] + txtSepC + a1[i] + "\n";
        }
        else {
            o1 += a1[i] + "\n";
        }
    }

    document.getElementById("txtList").value = o1;
}