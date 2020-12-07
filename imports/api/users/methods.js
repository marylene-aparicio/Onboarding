import { Meteor } from 'meteor/meteor';
import { Email } from  'meteor/email';
import emails from '/imports/utils/emails';

import EmployeesCollection from '.';

Meteor.methods({
    'employee.create': function ({ 
        express, hiringType, eureciaAccount, biCubeAccount, 
        umlautMission, clientMission, firstName,
        secondName, nationality, mail,
        jobName, jobLocation, department,
        manager, clientName }) 
        {
            //Rajouter condition de role autorisé !!!
            if (!this.userId) {
            throw new Meteor.Error('403', 'Vous devez être connecté');
        }
        const thisDate = new Date()
        console.log(arrival);
        console.log(thisDate);

        check(express, Boolean);
        check(hiringType, String);
        check(eureciaAccount, Boolean);
        check(biCubeAccount, Boolean);
        check(umlautMission, Boolean);
        check(clientMission, Boolean);
        check(firstName, String);
        check(secondName, String);
        check(nationality, String);
        check(mail, String);
        check(jobName, String);
        check(jobLocation, String);
        check(department, String);
        check(manager, String);
        check(clientName, String);
        check(arrival, Date);
        check(departure, Date);



        EmployeesCollection.insert({
            userId: this.userId,
            createdAt: new Date(),
            express, 
            hiringType, 
            eureciaAccount, 
            biCubeAccount, 
            umlautMission, 
            clientMission, 
            firstName,
            secondName,
            nationality,
            mail,
            jobName,
            jobLocation,
            department,
            manager,
            clientName,
            arrival: {
                date,
                validated: false,
            }, 
            departure: {
                date,
                validated: false,
            }, 
            newcomer: true,
        });
    },

    'employee.delete': function ({ _id }) {
        //Rajouter condition de role Admin !!!
        if (!this.userId) {
        throw new Meteor.Error('403', 'Vous devez être connecté');
        }
        const employee = EmployeeCollection.findOne(_id);
        EmployeeCollection.remove(employee);
    },

    'employee.update': function ({ _id }) {
        //Rajouter condition de role Admin !!!
        if (!this.userId) {
        throw new Meteor.Error('403', 'Vous devez être connecté');
        }
        const employee = EmployeeCollection.findOne(_id);
        EmployeeCollection.update(employee);
    },

    'employee.all': function () {
        return EmployeeCollection.find({}, {
          sort: { createdAt: 1 },
          limit: 10000,
        }).fetch();

    },

    'emails.send' : function ({ to, subject }) {
        Email.send({ 
            to,
            from: "contact@ex.com",
            subject,
            html: emails.email1.html.replace("{{url}}", "https://google.com"),
            text: emails.email1.text.replace("{{url}}", "https://google.com")
        });
    },
});