export default Currency;
class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter for the code attribute
  get code() {
    return this._code;
  }

  // Setter for the code attribute
  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new Error('Code must be a string');
    }
  }

  // Getter for the name attribute
  get name() {
    return this._name;
  }

  // Setter for the name attribute
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  // Method to display the currency attributes in the specified format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
