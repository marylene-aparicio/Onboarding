import { Meteor } from 'meteor/meteor';
import { Email } from  'meteor/email';
import emails from '/imports/utils/emails';

// import Collection from '.';

Meteor.methods({
    'employees.create': function ({}) {
        if (!this.userId) {
        throw new Meteor.Error('403', 'Vous devez être connecté');
        }
        const sanitizedContent = content
        .replace(/</gi, '&lt;')
        .replace(/\n/gi, '<br/>');

        employees.insert({
        content: sanitizedContent,
        userId: this.userId,
        createdAt: new Date(),
        });
    },

    'emails.send' : function ({ to, subject }) {
        Email.send({ 
            to,
            from: "contact@ex.com",
            subject,
            html: emails.email1.html.replace("{{url}}", "https://google.com"),
            text: emails.email1.text.replace("{{url}}", "https://google.com")
            // version text: pour etre lu par les liseuses (+ description courte, + detecteur de spam)
        });
    },

});