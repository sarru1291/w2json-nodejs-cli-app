module.exports.prisoners = {
    prisoner: [{
        prisonerDetail: {
            id: '',
            cellNo: '',
            name: {
                firstName: '',
                lastName: ''
            },
            Dob: {
                day: '',
                month: '',
                year: ''
            },
            Age: '',
            sex: '',
        },
        prisonerCrimeDetail: {
            type: '',
            description: '',
            dateOfCrime: {
                day: '',
                month: '',
                year: ''
            },
            location: {
                area: '',
                city: '',
                state: '',
                country: ''
            }
        },
        prisonerStatusDetail: {
            dateOfAdmit: '',
            durationOfPunishment: '',
            currentStatus: '',
            medicalStatus: ''
        },
        prisonDetail: {
            name: '',
            location: {
                area: '',
                city: '',
                state: '',
                country: ''
            }
        }
    }]
};