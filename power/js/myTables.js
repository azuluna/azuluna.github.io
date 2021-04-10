var db = firebase.database()

var dataTable = null

async function myTable() {
    let FETCH_STATUS = false
    // let FETCHED_DATA = []
    let index = 1
    await db.ref('/data').limitToLast(5000).once('value', function (snapshot) {
        // FETCHED_DATA = []

        snapshot.forEach(s => {
            // FETCHED_DATA.push(s.val())
            const {
                usage,
                time
            } = s.val()

            const bodyTable = document.getElementById('bodyTable')

            const tr = document.createElement('tr')
            const arr = [index, time.date, time.toki, usage.current, usage.voltage, usage.power, usage.kwh]
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

    db.ref('/data').endAt().limitToLast(1).on('child_added', function (snapshot) {
        // biar data terakhir ga kedobel
        if (!FETCH_STATUS) {
            FETCH_STATUS = true
            return
        }

        const {
            usage,
            time
        } = snapshot.val()

        const tr = document.createElement('tr')
        const arr = [index, time.date, time.toki, usage.current, usage.voltage, usage.power, usage.kwh]
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

myTable()