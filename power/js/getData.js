// Initialize Firebase
function getData() {
    firebase.database().ref('/').on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("kwh").innerHTML = childData['kwh'];
            document.getElementById("current").innerHTML = childData['current'];
            document.getElementById("power").innerHTML = childData['power'];
            document.getElementById("voltage").innerHTML = childData['voltage'];
            document.getElementById("location").innerHTML = childData['location'];
            document.getElementById("relay1-name").innerHTML = childData['relay1-name'];
            document.getElementById("relay2-name").innerHTML = childData['relay2-name'];
            document.getElementById("relay3-name").innerHTML = childData['relay3-name'];
            document.getElementById("relay4-name").innerHTML = childData['relay4-name'];

            if (childData['mode'] === "eco") {
                document.getElementById("mode1").innerHTML = "eco mode on";
                document.getElementById("mode1").style.backgroundColor = "#0d6efd";
                document.getElementById("mode2").innerHTML = "sport mode off";
                document.getElementById("mode2").style.backgroundColor = "#707070";
                document.getElementById("mode3").innerHTML = "normal mode off";
                document.getElementById("mode3").style.backgroundColor = "#707070";
                document.getElementById("mode4").style.backgroundColor = "#707070";
            } else if (childData['mode'] === "sport") {
                document.getElementById("mode1").innerHTML = "eco mode off";
                document.getElementById("mode1").style.backgroundColor = "#707070";
                document.getElementById("mode2").innerHTML = "sport mode on";
                document.getElementById("mode2").style.backgroundColor = "#0d6efd";
                document.getElementById("mode3").innerHTML = "normal mode off";
                document.getElementById("mode3").style.backgroundColor = "#707070";
                document.getElementById("mode4").style.backgroundColor = "#707070";
            } else if (childData['mode'] === "normal") {
                document.getElementById("mode1").innerHTML = "eco mode off";
                document.getElementById("mode1").style.backgroundColor = "#707070";
                document.getElementById("mode2").innerHTML = "sport mode off";
                document.getElementById("mode2").style.backgroundColor = "#707070";
                document.getElementById("mode3").innerHTML = "normal mode on";
                document.getElementById("mode3").style.backgroundColor = "#0d6efd";
                document.getElementById("mode4").style.backgroundColor = "#707070";
            } else if (childData['mode'] === "timed") {
                document.getElementById("mode1").innerHTML = "eco mode off";
                document.getElementById("mode1").style.backgroundColor = "#707070";
                document.getElementById("mode2").innerHTML = "sport mode off";
                document.getElementById("mode2").style.backgroundColor = "#707070";
                document.getElementById("mode3").innerHTML = "normal mode off";
                document.getElementById("mode3").style.backgroundColor = "#707070";
                document.getElementById("mode4").style.backgroundColor = "#0d6efd";
            }


            if (childData['relay1'] === 1) {
                document.getElementById("relay1-sts").innerHTML = "on";
                document.getElementById("relay1-crd").style.backgroundColor = "#0d6efd";
            } else if (childData['relay1'] === 0) {
                document.getElementById("relay1-sts").innerHTML = "off";
                document.getElementById("relay1-crd").style.backgroundColor = "#dc3546";
            }

            if (childData['relay2'] === 1) {
                document.getElementById("relay2-sts").innerHTML = "on";
                document.getElementById("relay2-crd").style.backgroundColor = "#0d6efd";
            } else if (childData['relay2'] === 0) {
                document.getElementById("relay2-sts").innerHTML = "off";
                document.getElementById("relay2-crd").style.backgroundColor = "#dc3546";
            }

            if (childData['relay3'] === 1) {
                document.getElementById("relay3-sts").innerHTML = "on";
                document.getElementById("relay3-crd").style.backgroundColor = "#0d6efd";
            } else if (childData['relay3'] === 0) {
                document.getElementById("relay3-sts").innerHTML = "off";
                document.getElementById("relay3-crd").style.backgroundColor = "#dc3546";
            }

            if (childData['relay4'] === 1) {
                document.getElementById("relay4-sts").innerHTML = "on";
                document.getElementById("relay4-crd").style.backgroundColor = "#0d6efd";
            } else if (childData['relay4'] === 0) {
                document.getElementById("relay4-sts").innerHTML = "off";
                document.getElementById("relay4-crd").style.backgroundColor = "#dc3546";
            }
        })
    })
}
getData();