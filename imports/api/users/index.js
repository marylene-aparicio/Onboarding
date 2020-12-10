import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const EmployeesCollection = new Mongo.Collection('employees');

const DateSchema = new SimpleSchema({
  date: {
    type: Date
  },
  validated: {
    type: Boolean
  }
});

const EmployeesSchema = new SimpleSchema({
  userId: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  express: {
    type: Boolean,
  },
  hiringType: {
    type: String,
  },
  eureciaAccount: {
    type: Boolean,
  },
  biCubeAccount: {
    type: Boolean,
  },
  umlautMission: {
    type: Boolean,
  },
  clientMission: {
    type: Boolean,
  },
  firstName: {
    type: String,
  },
  secondName: {
    type: String,
  },
  nationality: {
    type: String,
  },
  mail: {
    type: String,
  },
  jobName: {
    type: String,
  },
  location: {
    type: String,
  },
  department: {
    type: String,
  },
  manager: {
    type: String,
  },
  clientName: {
    type: String,
  },
  arrival: {
    type: DateSchema
  },
  departure: {
    type: DateSchema
  }
});

EmployeesCollection.attachSchema(EmployeesSchema);
EmployeesCollection.attachSchema(DateSchema);

export default EmployeesCollection;
