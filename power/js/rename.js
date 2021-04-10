function myName1() {
    if (document.getElementById("ou1").value === "") {
        Swal.fire(
            'name cannot be blank',
            ` `,
            'warning'
        )
    } else {
        firebase.database().ref("user/relay1-name").set(
            document.getElementById("ou1").value
        );
        Swal.fire(
            'name changed',
            `name changed into  ${document.getElementById("ou1").value}`,
            'success'
        )
        document.getElementById('ou1').value = '';
    }
}

function myName2() {
    if (document.getElementById("ou2").value === "") {
        Swal.fire(
            'name cannot be blank',
            ` `,
            'warning'
        )
    } else {
        firebase.database().ref("user/relay2-name").set(
            document.getElementById("ou2").value
        );
        Swal.fire(
            'name changed',
            `name changed into  ${document.getElementById("ou2").value}`,
            'success'
        )
        document.getElementById('ou2').value = '';
    }
}

function myName3() {
    if (document.getElementById("ou3").value === "") {
        Swal.fire(
            'name cannot be blank',
            ` `,
            'warning'
        )
    } else {
        firebase.database().ref("user/relay3-name").set(
            document.getElementById("ou3").value
        );
        Swal.fire(
            'name changed',
            `name changed into  ${document.getElementById("ou3").value}`,
            'success'
        )
        document.getElementById('ou3').value = '';
    }
}

function myName4() {
    if (document.getElementById("ou4").value === "") {
        Swal.fire(
            'name cannot be blank',
            ` `,
            'warning'
        )
    } else {
        firebase.database().ref("user/relay4-name").set(
            document.getElementById("ou4").value
        );
        Swal.fire(
            'name changed',
            `name changed into  ${document.getElementById("ou4").value}`,
            'success'
        )
        document.getElementById('ou4').value = '';
    }
}