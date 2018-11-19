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