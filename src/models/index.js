import mongoose from 'mongoose';
import User from './user.model';
import Client from './client.model';
import Appointment from './appointment.model';
import Control from './control.model';
import Role from './role.model';
import logs from './logs.model';
import 'dotenv/config';

const MongoURI = process.env.MONGO_URI;

const connect = () => {
  return mongoose.connect(MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
};

const models = { User, Client, Appointment, Control, Role };
const ROLES = ['User', 'Moderator', 'Admin'];

const db = {
  connect,
  ROLES,
  models,
  logs
};

export default db;
