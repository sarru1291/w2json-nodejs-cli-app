const fs = require("fs");
const readline = require("readline");
const prisoners = require("./prisonerDetailObjects.js");

var fetchData = () => {
    try {
        var jsonString = fs.readFileSync('./prisoners-data.json');
        allPrisonerData = JSON.parse(jsonString);
        // console.log(allPrisonerData);
        return allPrisonerData;
    } catch (e) {
        return allPrisonerData;
    }
};

var filterData = (filteredPrisoner) => {
    let allPrisonerData = {
        prisoner: []
    };
    // console.log(filteredPrisoner[0]);
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
    addData();
};
var remove = (pid) => {
    let allPrisonerData = {
        prisoner: []
    };
    allPrisonerData = fetchData();
    var arrayOfPrisoner = allPrisonerData.prisoner;
    // console.log(arrayOfPrisoner[5]);
    var filteredPrisoner = arrayOfPrisoner.filter((prisoner) => {
        return prisoner.prisonerDetail.id != pid;
    });
    // console.log(filteredPrisoner);
    filterData(filteredPrisoner);
    console.log('data removed successfully!!!');
};

var showDetail = () => {

}
var show = (pid) => {
    allPrisonerData = fetchData();
    console.log(allPrisonerData);


};
var showAll = () => {
    allPrisonerData = fetchData();
    console.log(allPrisonerData);

};

module.exports = {
    add,
    remove,
    show,
    showAll
};