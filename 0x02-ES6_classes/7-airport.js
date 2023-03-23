export default class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  }
  
  //default string description of the class
  Airport.prototype.toString = function airportToString() {
    return `[object ${this._code}]`;
  };