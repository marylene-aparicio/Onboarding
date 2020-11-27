import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const EmployeesCollection = new Mongo.Collection('employees');

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
  arrival: Object,
  'arrival.date': Date,
  'arrival.validated': Boolean,
  departure: Object,
  'departure.date': Date,
  'departure.validated': Boolean,
});

EmployeesCollection.attachSchema(EmployeesSchema);

export default EmployeesCollection;
