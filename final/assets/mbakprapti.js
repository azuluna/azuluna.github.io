src = "https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"

const TelegramBot = require('node-telegram-bot-api');
const token = '915761392:AAG5hvFtn8uUE_QxH_ch9Ni6_-hcRFj9IXk';
const bot = new TelegramBot(token, {
    polling: true
});
const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyBqzL3Eg4NUBf6jdaxacp2Vdm-3-V0TwZg",
    authDomain: "larys-project.firebaseapp.com",
    databaseURL: "https://larys-project.firebaseio.com",
    projectId: "larys-project",
    storageBucket: "larys-project.appspot.com",
    messagingSenderId: "308826173367",
    appId: "1:308826173367:web:57f71cc8956719dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

bot.on('message', (msg) => {

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }

});

var db = firebase.database()
// var GLOBAL_takeLastN = 0
// var GLOBAL_beginLimit = 0
// var GLOBAL_endLimit = 0

async function main() {
    let FETCH_STATUS = false

    // NGAMBIL DATA BARU -> TAMPILIN
    db.ref('/SENSOR2').endAt().limitToLast(1).on('child_added', function (snapshot) {
        if (FETCH_STATUS) {
            const {
                parameter,

            } = snapshot.val()

            if (parameter.node == 'Node-01') {
                if (parameter.jarak >= 3) {
                    bot.sendMessage(-1001157829381, "Kawasan 1 mengalami pergerakan tanah!")
                }

                if (parameter.lembab >= 50) {
                    bot.sendMessage(-1001157829381, "Kawasan 1 mengalami saturasi tinggi!")

                }

                if (parameter.miring_x, parameter.miring_y >= 5) {
                    bot.sendMessage(-1001157829381, "Kawasan 1 mengalami perubahan kemiringan")

                }

                if (parameter.miring_x, parameter.miring_y <= 5) {
                    bot.sendMessage(-1001157829381, "Kawasan 1 mengalami perubahan kemiringan")

                }
                // bot.sendMessage(562592345, "setan"
            }

            if (parameter.node == 'Node-02') {
                if (parameter.jarak >= 3) {
                    bot.sendMessage(-1001157829381, "Kawasan 2 mengalami pergerakan tanah!")
                }

                if (parameter.lembab >= 50) {
                    bot.sendMessage(-1001157829381, "Kawasan 2 mengalami saturasi tinggi!")

                }

                if (parameter.miring_x, parameter.miring_y >= 5) {
                    bot.sendMessage(-1001157829381, "Kawasan 2 mengalami perubahan kemiringan")

                }

                if (parameter.miring_x, parameter.miring_y <= 5) {
                    bot.sendMessage(-1001157829381, "Kawasan 2 mengalami perubahan kemiringan")

                }
                // bot.sendMessage(562592345, "setan"
            }

            if (parameter.node == 'Node-03') {
                if (parameter.jarak >= 3) {
                    bot.sendMessage(-1001157829381, "Kawasan 3 mengalami pergerakan tanah!")
                }

                if (parameter.lembab >= 50) {
                    bot.sendMessage(-1001157829381, "Kawasan 3 mengalami saturasi tinggi!")

                }

                if (parameter.miring_x, parameter.miring_y >= 5) {
                    bot.sendMessage(-1001157829381, "Kawasan 3 mengalami perubahan kemiringan")

                }

                if (parameter.miring_x, parameter.miring_y <= 5) {
                    bot.sendMessage(-1001157829381, "Kawasan 3 mengalami perubahan kemiringan")

                }
                // bot.sendMessage(562592345, "setan"
            }

            if (parameter.node == 'Node-04') {
                if (parameter.jarak >= 3) {
                    bot.sendMessage(-1001157829381, "Kawasan 4 mengalami pergerakan tanah!")
                }

                if (parameter.lembab >= 50) {
                    bot.sendMessage(-1001157829381, "Kawasan 4 mengalami saturasi tinggi!")

                }

                if (parameter.miring_x, parameter.miring_y >= 5) {
                    bot.sendMessage(-1001157829381, "Kawasan 4 mengalami perubahan kemiringan")

                }

                if (parameter.miring_x, parameter.miring_y <= 5) {
                    bot.sendMessage(-1001157829381, "Kawasan 4 mengalami perubahan kemiringan")

                }
                // bot.sendMessage(562592345, "setan"
            }

        }
        FETCH_STATUS = true
    })
}

main()