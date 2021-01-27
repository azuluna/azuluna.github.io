var db = firebase.database()

var dataTable = null

async function main() {
    let FETCH_STATUS = false
    // let FETCHED_DATA = []
    let index = 1
    await db.ref('/SENSOR2').limitToLast(5000).once('value', function (snapshot) {
        // FETCHED_DATA = []

        snapshot.forEach(s => {
            // FETCHED_DATA.push(s.val())
            const {
                parameter,
                waktu
            } = s.val()

            if (parameter.node !== 'Node-03') {
                return //bawahnya ga dieksekusi
            }

            const bodyTable = document.getElementById('bodyTable')

            const tr = document.createElement('tr')
            const arr = [index, waktu.date, waktu.time, parameter.node, parameter.miring_x, parameter.miring_y, parameter.lembab, parameter.jarak, parameter.getar]
            const tds = []

            arr.map(a => {
                let x = document.createElement('td')

                x.innerText = a
                tds.push(x)
            })

            tds.forEach(td => tr.appendChild(td))

            bodyTable.appendChild(tr)
            index += 1
        })
        dataTable = $('#table').DataTable();
    })

    db.ref('/SENSOR2').endAt().limitToLast(1).on('child_added', function (snapshot) {
        // biar data terakhir ga kedobel
        if (!FETCH_STATUS) {
            FETCH_STATUS = true
            return
        }

        const {
            parameter,
            waktu
        } = snapshot.val()

        if (parameter.node !== 'Node-03') {
            return //bawahnya ga dieksekusi
        }

        const bodyTable = document.getElementById('bodyTable')

        const tr = document.createElement('tr')
        const arr = [index, waktu.date, waktu.time, parameter.node, parameter.miring_x, parameter.miring_y, parameter.lembab, parameter.jarak, parameter.getar]
        const tds = []

        arr.map(a => {
            let x = document.createElement('td')

            x.innerText = a
            tds.push(x)
        })

        tds.forEach(td => tr.appendChild(td))

        // bodyTable.appendChild(tr)
        index += 1
        dataTable.row.add(arr).draw(false)

    })

}

main()