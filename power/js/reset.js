function myReset() {
    firebase.database().ref("control").set({
        mode: "eco"
    });
    firebase.database().ref("relay1").set({
        relay1: 1
    });
    firebase.database().ref("relay2").set({
        relay2: 1
    });
    firebase.database().ref("relay3").set({
        relay3: 1
    });
    firebase.database().ref("relay4").set({
        relay4: 1
    });
    firebase.database().ref("user").set({
        current: 0,
        power: 0,
        voltage: 0,
        kwh: 0,
        location: "WC Kepresidenan"
    });
    Swal.fire(
        'Database has been reset!',
        'I hope you know what you have done',
        'success'
    )
}