import React, { Component } from 'react';
import SQLite from 'react-native-sqlite-storage';

class Database {
    constructor() {
        db = SQLite.openDatabase({ name: 'my.db', location: 'default' }, this.successCB, this.errorCB);
        db.transaction((tx) => {
            for (query of creationQueries) {
                tx.executeSql(query);
            }
        });


        this.db = db;
    }

    quote(string) {
        return "'" + string + "'"
    }

    async getDoctor(SSN_D) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {
                tx.executeSql('Select Doctor.SSN_D, Name_D, Name_P from Doctor,Patient,Has_a where Doctor.SSN_D=' + this.quote(SSN_D) + ' and Has_a.SSN_D=Doctor.SSN_D and Has_a.SSN_P=Patient.SSN_P',
                    [], (tx, results) => {
                        resolve(results);
                    })
                // tx.executeSql('Select * from Pharmacy',
                //     [], (tx, results) => {
                //         resolve(results);
                //     })
            });
        });
    }

    async getPatientDrugs(SSN_P) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('Select Prescribe.SSN_P, Name_P, Trade_Name from Patient, Prescribe where Prescribe.SSN_P= ' + this.quote(SSN_P) + 'and Prescribe.SSN_P=Patient.SSN_P',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async getPatientDoctors(SSN_P) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('Select Patient.SSN_P, Name_P, Name_D from Doctor, Patient,Has_a where Patient.SSN_P= ' + this.quote(SSN_P) + 'and Has_a.SSN_P=Patient.SSN_P and Has_a.SSN_D=Doctor.SSN_D',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async getPharmacies() {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('Select * from Pharmacy',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async addDoctor(SSN_D, Name_D, Speciality, Years_experience) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('INSERT INTO Doctor values(' + this.quote(SSN_D) + ',' + this.quote(Name_D) + ',' + this.quote(Speciality) + ',' + Years_experience + ')',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async addPatient(SSN_P, Name_P, Age, SSN_D) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('INSERT INTO Patient values(' + this.quote(SSN_P) + ',' + this.quote(Name_P) + ',' + Age + ',' + this.quote(SSN_D) + ')',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async addAddress(add_id, add_Name, SSN_P) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('INSERT INTO Addresses values(' + add_id + ',' + this.quote(add_Name) + ',' + this.quote(SSN_P) + ')',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async addDrug(Trade_Name, formula) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('INSERT INTO Drug values(' + this.quote(Trade_Name) + ',' + this.quote(formula) + ')',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async addPC(Name_PC, Phone_Number_PC) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('INSERT INTO Pharmaceutical_Company values(' + this.quote(Name_PC) + ',' + Phone_Number_PC + ')',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async addPharmacy(Name_Ph, Address_Ph, Phone_Number_Ph) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('INSERT INTO Pharmacy values(' + this.quote(Name_Ph) + ',' + this.quote(Address_Ph) + ',' + Phone_Number_Ph + ')',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async addPrescribe(Date, Quantity, Trade_Name, SSN_D, SSN_P) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('INSERT INTO Prescribe values(' + Date + ',' + Quantity + ',' + this.quote(Trade_Name) + ',' + this.quote(SSN_D) + ',' + this.quote(SSN_P) + ')',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async addSells(Trade_Name, Price, Name_Ph, Address_Ph) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('INSERT INTO Sells values(' + this.quote(Trade_Name) + ',' + Price + ',' + this.quote(Name_Ph) + ',' + this.quote(Address_Ph) + ')',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async addSells2(Trade_Name, Name_PC) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('INSERT INTO Sells2 values(' + this.quote(Trade_Name) + ',' + this.quote(Name_PC) + ')',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async addContract(Name_Ph, Address_Ph, Name_PC, Start_Date, End_Date, Text, Supervisor) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('INSERT INTO Contract values(' + this.quote(Name_Ph) + ',' + this.quote(Address_Ph) + ',' + this.quote(Name_PC) + ',' + Start_Date + ',' + End_Date + ',' + this.quote(Text) + ',' + this.quote(Supervisor) + ')',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }

    async addHas_a(SSN_D, SSN_P) {
        return new Promise(resolve => {
            this.db.transaction((tx) => {

                tx.executeSql('INSERT INTO Has_a values(' + this.quote(SSN_D) + ',' + this.quote(SSN_P) + ')',
                    [], (tx, results) => {
                        resolve(results);
                    })
            });
        });
    }




    errorCB(err) {
        console.log('SQL Error: ' + err);
    }

    successCB() {
        console.log('SQL executed fine');
    }

}

const creationQueries = [
    'create table if not exists Doctor (SSN_D char(10) primary key, Name_D char(20) not null, Speciality char(20), Years_experience int) ',
    'create table if not exists Patient (SSN_P char(10) primary key, Name_P char(20) not null, Age int,SSN_D char(10) not null, foreign key(SSN_D) references Doctor(SSN_D))',
    'create table if not exists Addresses (add_id char (10), add_Name char(40) not null, SSN_P char(10),foreign key (SSN_P) references Patient(SSN_P), primary key (add_id,SSN_P))',
    'create table if not exists Drug(Trade_Name char(15) primary key, formula char(50) not null)',
    'create table if not exists Pharmaceutical_Company(Name_PC char(20) primary key, Phone_Number_PC int unique)',
    'create table if not exists Pharmacy(Name_Ph char(20),Address_Ph char(40),Phone_Number_Ph int unique, primary key (Name_Ph, Address_Ph))',
    'create table if not exists Prescribe(Date datetime not null, Quantity int not null,Trade_Name char(15), SSN_D char (10), SSN_P char(10),foreign key(Trade_Name) references Drug(Trade_Name),foreign key(SSN_P) references Patient(SSN_P),foreign key(SSN_D) references Doctor(SSN_D), primary key (Trade_Name, SSN_D, SSN_P))',
    'create table if not exists Sells (Trade_Name char(15),Price real not null, Name_Ph char(20), Address_Ph char(40),foreign key (Trade_Name) references Drug(Trade_Name), foreign key (Name_Ph, Address_Ph) references Pharmacy(Name_Ph, Address_Ph), primary key (Trade_Name, Name_Ph, Address_Ph))',
    'create table if not exists Sells2 (Trade_Name char(15), Name_PC char(20), foreign key(Trade_Name) references Drug(Trade_Name), foreign key(Name_PC) references Pharmaceutical_Company(Name_PC),primary key (Trade_Name, Name_PC))',
    'create table if not exists Contract (Name_Ph char(20),Address_Ph char(40),Name_PC char(20),Start_Date datetime not null, End_Date datetime not null, Text char (100), Supervisor char(15) not null, foreign key (Name_Ph, Address_Ph) references Pharmacy(Name_Ph, Address_Ph), foreign key(Name_PC) references Pharmaceutical_Company(Name_PC),primary key (Name_Ph, Name_PC))',
    'create table if not exists Has_a (SSN_D char(10),SSN_P char(10), foreign key(SSN_D) references Doctor(SSN_D), foreign key(SSN_P) references Patient(SSN_P), primary key (SSN_D, SSN_P))'
]
export default Database;