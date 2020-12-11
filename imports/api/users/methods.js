import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Email } from  'meteor/email';
import emails from '/imports/utils/emails';


import EmployeesCollection from '.';

Meteor.methods({
    'employee.create': function ({ employee }) {
        //Rajouter autorisation de creation de profil avec alanning role
        if (!this.userId) {
            throw new Meteor.Error('403', 'Vous devez être connecté');
        }

        check(employee.express, Boolean);
        check(employee.hiringType, String);
        check(employee.eureciaAccount, Boolean);
        check(employee.biCubeAccount, Boolean);
        check(employee.umlautMission, Boolean);
        check(employee.clientMission, Boolean);
        check(employee.firstName, String);
        check(employee.secondName, String);
        check(employee.nationality, String);
        check(employee.mail, String);
        check(employee.jobName, String);
        check(employee.jobLocation, String);
        check(employee.department, String);
        check(employee.manager, String);
        check(employee.clientName, String);
        check(employee.arrival.date, Date);
        check(employee.arrival.validated, Boolean);
        check(employee.departure.date, Date);
        check(employee.departure.validated, Boolean);

        employee.userId = this.userId;
        employee.createdAt = new Date();
        EmployeesCollection.insert(employee);

    },

    'employee.delete': function ({ _id }) {
        //Rajouter condition de role Admin !!!
        if (!this.userId) {
        throw new Meteor.Error('403', 'Vous devez être connecté');
        }
        const employee = EmployeesCollection.findOne(_id);
        EmployeesCollection.remove(employee);
    },

    'employee.update': function ({ _id }) {
        //Rajouter condition de role Admin !!!
        if (!this.userId) {
        throw new Meteor.Error('403', 'Vous devez être connecté');
        }
        const employee = EmployeesCollection.findOne(_id);
        EmployeesCollection.update(employee);
    },

    'employee.all': function () {
        return EmployeesCollection.find({}, {
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