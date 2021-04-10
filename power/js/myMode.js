var a = document.getElementById("relay1-sts");
var b = document.getElementById("relay2-sts");
var c = document.getElementById("relay3-sts");
var d = document.getElementById("relay4-sts");
var x = document.getElementById("mode1");
var y = document.getElementById("mode2");
var z = document.getElementById("mode3");

function myMode1() {
    if (x.innerHTML === "eco mode off") {
        x.innerHTML = "eco mode on";
        firebase.database().ref("control").set({
            mode: "eco"
        });
        y.innerHTML = "sport mode off";
        z.innerHTML = "normal mode off";
    }
}

function myMode2() {
    if (y.innerHTML === "sport mode off") {
        y.innerHTML = "sport mode on";
        firebase.database().ref("control").set({
            mode: "sport"
        });
        x.innerHTML = "eco mode off";
        z.innerHTML = "normal mode off";
    }
}

function myMode3() {
    if (z.innerHTML === "normal mode off") {
        z.innerHTML = "normal mode on";
        firebase.database().ref("control").set({
            mode: "normal"
        });
        x.innerHTML = "eco mode off";
        y.innerHTML = "sport mode off";
    }
}

function myMode4() {
    firebase.database().ref("control").set({
        mode: "timed",
        time: Math.floor((Date.now() / 1000) + 7 * 3600 + parseInt(document.getElementById("time").value) * 60)
    });
    Swal.fire(
        'Timed Mode',
        `Cut the power in ${document.getElementById("time").value} minute(s)`,
        'success'
    )
    document.getElementById('time').value = '';
    x.innerHTML = "eco mode off";
    y.innerHTML = "sport mode off";
    z.innerHTML = "normal mode off";
}

function myRelay1() {
    if (a.innerHTML === "on") {
        a.innerHTML === "off";
        firebase.database().ref("relay1").set({
            relay1: 0
        })
    } else if (a.innerHTML === "off") {
        a.innerHTML === "on";
        firebase.database().ref("relay1").set({
            relay1: 1
        })
    }
}

function myRelay2() {
    if (b.innerHTML === "on") {
        b.innerHTML === "off";
        firebase.database().ref("relay2").set({
            relay2: 0
        })
    } else if (b.innerHTML === "off") {
        b.innerHTML === "on";
        firebase.database().ref("relay2").set({
            relay2: 1
        })
    }
}

function myRelay3() {
    if (c.innerHTML === "on") {
        c.innerHTML === "off";
        firebase.database().ref("relay3").set({
            relay3: 0
        })
    } else if (c.innerHTML === "off") {
        c.innerHTML === "on";
        firebase.database().ref("relay3").set({
            relay3: 1
        })
    }
}

function myRelay4() {
    if (d.innerHTML === "on") {
        d.innerHTML === "off";
        firebase.database().ref("relay4").set({
            relay4: 0
        })
    } else if (d.innerHTML === "off") {
        d.innerHTML === "on";
        firebase.database().ref("relay4").set({
            relay4: 1
        })
    }
}
