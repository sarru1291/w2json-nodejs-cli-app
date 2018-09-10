const fs = require("fs");
const readline = require("readline");
const prisoners = require("./prisonerDetailObjects.js");

var fetchData = () => {
    let allPrisonerData = {
        prisoner: []
    };
    try {
        var jsonString = fs.readFileSync('./prisoners-data.json');
        allPrisonerData = JSON.parse(jsonString);
        return allPrisonerData;
    } catch (e) {
        return allPrisonerData;
    }
};

var filterData = (filteredPrisoner) => {
    let allPrisonerData = {
        prisoner: []
    };
    for (var i = 0; i < filteredPrisoner.length; i++) {
        allPrisonerData.prisoner.push(filteredPrisoner[i]);
    }
    var allData = JSON.stringify(allPrisonerData);
    // console.log(allData);
    fs.writeFileSync('./prisoners-data.json', allData);
};
var addData = () => {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log("\n          ----------Fill the Prisoner Detail----------\n");
    rl.question("Prisoner Id: ", (id) => {

        prisoners.prisonerDetail.id = id;
        rl.question("Cell No.: ", (cellNo) => {
            prisoners.prisonerDetail.cellNo = cellNo;
            rl.question("Last Name: ", (lastName) => {
                prisoners.prisonerDetail.name.lastName = lastName;
                rl.question("First Name: ", (firstName) => {
                    prisoners.prisonerDetail.name.firstName = firstName;
                    rl.question("Date of Birth: day: ", (day) => {
                        prisoners.prisonerDetail.dob.day = day;
                        rl.question("               month: ", (month) => {
                            prisoners.prisonerDetail.dob.month = month;
                            rl.question("               year: ", (year) => {
                                prisoners.prisonerDetail.dob.year = year;
                                rl.question("Age: ", (age) => {
                                    prisoners.prisonerDetail.age = age;
                                    rl.question("Sex: ", (sex) => {
                                        prisoners.prisonerDetail.sex = sex;

                                        console.log('         \n\n          ----------Prisoner Crime Detail----------\n');

                                        rl.question("Crime Type: ", (type) => {
                                            prisoners.prisonerCrimeDetail.type = type;
                                            rl.question("Description: ", (description) => {
                                                prisoners.prisonerCrimeDetail.description = description;
                                                rl.question("Date Of Crime: day: ", (day) => {
                                                    prisoners.prisonerCrimeDetail.dateOfCrime.day = day;
                                                    rl.question("               month: ", (month) => {
                                                        prisoners.prisonerCrimeDetail.dateOfCrime.month = month;
                                                        rl.question("               year: ", (year) => {
                                                            prisoners.prisonerCrimeDetail.dateOfCrime.year = year;
                                                            rl.question("Location: Area:  ", (area) => {
                                                                prisoners.prisonerCrimeDetail.location.area = area;
                                                                rl.question("          city:  ", (city) => {
                                                                    prisoners.prisonerCrimeDetail.location.city = city;
                                                                    rl.question("          state:  ", (state) => {
                                                                        prisoners.prisonerCrimeDetail.location.state = state;
                                                                        rl.question("          country:  ", (country) => {
                                                                            prisoners.prisonerCrimeDetail.location.country = country;

                                                                            console.log('\n\n         ----------Prisoner Status detail----------\n');

                                                                            rl.question("Date of Admit: day: ", (day) => {
                                                                                prisoners.prisonerStatusDetail.dateOfAdmit.day = day;
                                                                                rl.question("               month: ", (month) => {
                                                                                    prisoners.prisonerStatusDetail.dateOfAdmit.month = month;
                                                                                    rl.question("               year: ", (year) => {
                                                                                        prisoners.prisonerStatusDetail.dateOfAdmit.year = year;
                                                                                        rl.question("Duration of Punishment: ", (durationOfPunishment) => {
                                                                                            prisoners.prisonerStatusDetail.durationOfPunishment = durationOfPunishment;
                                                                                            rl.question("Current Status: ", (currentStatus) => {
                                                                                                prisoners.prisonerStatusDetail.currentStatus = currentStatus;
                                                                                                rl.question("Medical Status: ", (medicalStatus) => {
                                                                                                    prisoners.prisonerStatusDetail.medicalStatus = medicalStatus;

                                                                                                    console.log('\n\n         ----------Prison Detail----------\n');

                                                                                                    rl.question("Prison Name: ", (name) => {
                                                                                                        prisoners.prisonDetail.name = name;
                                                                                                        rl.question("Location: area:  ", (area) => {
                                                                                                            prisoners.prisonDetail.location.area = area;
                                                                                                            rl.question("          city:  ", (city) => {
                                                                                                                prisoners.prisonDetail.location.city = city;
                                                                                                                rl.question("          state:  ", (state) => {
                                                                                                                    prisoners.prisonDetail.location.state = state;
                                                                                                                    rl.question("          country:  ", (country) => {
                                                                                                                        prisoners.prisonDetail.location.country = country;

                                                                                                                        var allPrisonerData = {
                                                                                                                            prisoner: []
                                                                                                                        };
                                                                                                                        fs.createReadStream('./prisoners-data.json').on('data', (chunk) => {

                                                                                                                            allPrisonerData = JSON.parse(chunk);

                                                                                                                            allPrisonerData.prisoner.push(prisoners);
                                                                                                                            fs.writeFileSync('./prisoners-data.json', JSON.stringify(allPrisonerData));

                                                                                                                        });


                                                                                                                        console.log('\n\n           Data filled up successfully!!!');
                                                                                                                        rl.close();
                                                                                                                    });
                                                                                                                });

                                                                                                            });
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
var add = () => {
    let allPrisonerData = {
        prisoner: []
    };
    try {
        if (fs.readFileSync('./prisoners-data.json') == "") {
            fs.writeFileSync('./prisoners-data.json', JSON.stringify(allPrisonerData));
            addData();
        } else {
            addData();
        }
    } catch (ENOENT) {
        console.log('\n File not found!! create a prisoners-data.json file.\n');
    }
};
var remove = (pid) => {
    let allPrisonerData = {
        prisoner: []
    };
    allPrisonerData = fetchData();
    let arrayOfPrisoner = allPrisonerData.prisoner;
    let filteredPrisoner = arrayOfPrisoner.filter((prisoner) => {
        return prisoner.prisonerDetail.id != pid;
    });
    if (filteredPrisoner.length !== arrayOfPrisoner.length) {
        filterData(filteredPrisoner);
        console.log('\nData removed successfully!!!\n');
    } else {
        console.log('\nNo match found !! Please Enter Valid Prisoner Id\n');
    }

};

var removeAll = () => {
    let allPrisonerData = {
        prisoner: []
    };
    allPrisonerData = fetchData();

    if (allPrisonerData.prisoner.length == 0) {
        console.log('\nEmpty file!!!\n');
    } else {
        fs.writeFileSync('./prisoners-data.json', '');
        console.log('\nAll Data Removed!!!\n');
    }
};

var showDetail = (prisoner) => {
    console.log('>PRISONER DETAIL: ');
    console.log(`           ID: ${prisoner.prisonerDetail.id}`);
    console.log(`           CELL NO: ${prisoner.prisonerDetail.cellNo}`);
    console.log(`           NAME: ${prisoner.prisonerDetail.name.firstName} ${prisoner.prisonerDetail.name.lastName}`);
    console.log(`           DATE OF BIRTH: ${prisoner.prisonerDetail.dob.day}-${prisoner.prisonerDetail.dob.month}-${prisoner.prisonerDetail.dob.year}`);
    console.log(`           AGE: ${prisoner.prisonerDetail.age}`);
    console.log(`           SEX: ${prisoner.prisonerDetail.sex}`);
    console.log('\n>PRISONER CRIME DETAIL: ');
    console.log(`           CRIME TYPE:${prisoner.prisonerCrimeDetail.type}`);
    console.log(`           DESCRIPTION: ${prisoner.prisonerCrimeDetail.description}`);
    console.log(`           DATE OF CRIME:${prisoner.prisonerCrimeDetail.dateOfCrime.day}-${prisoner.prisonerCrimeDetail.dateOfCrime.month}-${prisoner.prisonerCrimeDetail.dateOfCrime.year}`);
    console.log(`           LOCATION: ${prisoner.prisonerCrimeDetail.location.area}, ${prisoner.prisonerCrimeDetail.location.city}, ${prisoner.prisonerCrimeDetail.location.state}, ${prisoner.prisonerCrimeDetail.location.country}`);
    console.log('\n>PRISONER STATUS DETAIL: ');
    console.log(`           DATE OF ADMIT: ${prisoner.prisonerStatusDetail.dateOfAdmit.day}-${prisoner.prisonerStatusDetail.dateOfAdmit.month}-${prisoner.prisonerStatusDetail.dateOfAdmit.year}`);
    console.log(`           DURATION OF PUNISHMENT: ${prisoner.prisonerStatusDetail.durationOfPunishment}`);
    console.log(`           CURRENT STATUS: ${prisoner.prisonerStatusDetail.currentStatus}`);
    console.log(`           MEDICAL STATUS: ${prisoner.prisonerStatusDetail.medicalStatus}`);
    console.log('\n>PRISON DETAIL: ');
    console.log(`           NAME: ${prisoner.prisonDetail.name}`);
    console.log(`           LOCATION: ${prisoner.prisonDetail.location.area}, ${prisoner.prisonDetail.location.city}, ${prisoner.prisonDetail.location.state}, ${prisoner.prisonDetail.location.country}`);
}
var show = (pid) => {
    let allPrisonerData = {
        prisoner: []
    };
    allPrisonerData = fetchData();
    if (allPrisonerData.prisoner.length == 0) {
        console.log('\nEmpty file!!!\n');
    } else {
        let filteredPrisoner = allPrisonerData.prisoner.filter((prisoner) => {
            return prisoner.prisonerDetail.id == pid;
        });
        if (filteredPrisoner.length == 0) {
            console.log('\nNo match found !! Please Enter Valid Prisoner Id\n');
        } else {
            console.log('\n                    -------------------');
            showDetail(filteredPrisoner[0]);
            console.log('\n                   -----------------\n');
        }
    }
};
var showAll = () => {
    let allPrisonerData = {
        prisoner: []
    };
    allPrisonerData = fetchData();

    console.log('\n         ---------------All Prisonsers Details---------------\n');
    console.log(`total ${allPrisonerData.prisoner.length} Prisoner(s) detail found.\n\n                    --------------------\n`);
    if (allPrisonerData.prisoner.length == 0) {
        console.log('Empty file!!!\n');
    } else {
        for (let i = 0; i < allPrisonerData.prisoner.length; i++) {
            showDetail(allPrisonerData.prisoner[i]);
            console.log('\n                  -------------------\n');
        }
    }
};

module.exports = {
    add,
    remove,
    removeAll,
    show,
    showAll
};