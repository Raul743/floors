import User from "../models/User";

export default class LoggedInService {
  static _user: User;

  static get user() {
    return LoggedInService._user;
  }
}
