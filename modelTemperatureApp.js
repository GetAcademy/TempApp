const model = {
    // del 1
    app: {
        currentPage: 'register', // 'graph'
    },

    // del 2
    inputs: {
        registerPage: {
            temp: 7,
            date: '2024-09-30',
        },
        graphPage: {
            fromDate: '2024-01-01',
            toDate: '2024-12-31',
            mode: 'graph', // 'table'
            // isGraph: true,
        },
    },

    // del 3 - felles data
    temperatureRegistrations: [
        { temp: 7, date: '2024-09-28', },
        { temp: 8, date: '2024-09-29', },
        { temp: 9, date: '2024-09-30', },
    ],
};