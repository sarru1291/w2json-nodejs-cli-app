var prisonerDetail = {
    id: '',
    cellNo: '',
    name: {
        firstName: '',
        lastName: ''
    },
    dob: {
        day: '',
        month: '',
        year: ''
    },
    age: '',
    sex: '',
};

var prisonerCrimeDetail = {
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
};

var prisonerStatusDetail = {
    dateOfAdmit: {
        day: '',
        month: '',
        year: ''
    },
    durationOfPunishment: '',
    currentStatus: '',
    medicalStatus: ''
};

var prisonDetail = {
    name: '',
    location: {
        area: '',
        city: '',
        state: '',
        country: ''
    }
};

module.exports = {
    prisonerDetail,
    prisonerCrimeDetail,
    prisonerStatusDetail,
    prisonDetail

}