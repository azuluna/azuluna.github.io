$('.ui.dropdown')
    .dropdown();

const takeLastN = $('#limitChart1')
const limitBegin = $('#limitBeginChart1')
const limitEnd = $('#limitEndChart1')

takeLastN.on('change', function () {
    console.log(this.value);

    limitBegin.val(0)
    limitEnd.val(0)

    GLOBAL_beginLimit = 0
    GLOBAL_endLimit = 0
    GLOBAL_takeLastN = this.value

    main()
})



limitBegin.on('change', function () {
    GLOBAL_beginLimit = this.value

    if (limitEnd.val()) {
        takeLastN.val(0)
        GLOBAL_takeLastN = 0

        main()
    }
})

limitEnd.on('change', function () {
    GLOBAL_endLimit = this.value

    if (limitBegin.val()) {
        console.log({
            GLOBAL_beginLimit,
            GLOBAL_endLimit
        });

        takeLastN.val(0)
        GLOBAL_takeLastN = 0

        main()
    }
})