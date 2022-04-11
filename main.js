// withdrow function

let balance = 100;
let name = "halim";
function withdrow(amount) {
  if (balance - amount >= 0) {
    balance = balance - amount;
    return name + " your new balance is " + balance;
  } else {
    return "go home poor " + name;
  }
}

const halimAccount = {
  name: "halim",
  balance: 100,
  withdrow: function (amount) {
    if (this.balance - amount >= 0) {
      this.balance = this.balance - amount;
      return this.name + " your new balance is " + this.balance;
    } else {
      return "go home poor " + this.name;
    }
  },
  depose: function (amount) {
    this.balance = this.balance + amount;
    return this.name + " your new balance is " + this.balance;
  },
  checkBalance: function () {
    return this.name + " your balance is " + this.balance;
  },
};

// factory function a function that will return object
function makeAccount(owner, init) {
  const account = {
    name: owner,
    balance: init,
    withdrow: function (amount) {
      if (this.balance - amount >= 0) {
        this.balance = this.balance - amount;
        return this.name + " your new balance is " + this.balance;
      } else {
        return "go home poor " + this.name;
      }
    },
    depose: function (amount) {
      this.balance = this.balance + amount;
      return this.name + " your new balance is " + this.balance;
    },
    checkBalance: function () {
      return this.name + " your balance is " + this.balance;
    },
  };
  return account;
}

// Constructor function and this keyword
// new keyword
// protorype chain

function MakeAccount(owner, init, pass) {
  this.name = owner;
  this.balance = init;
  this.password = pass;
}

MakeAccount.prototype.withdrow = function (pass, amount) {
  if (pass === this.password) {
    if (this.balance - amount >= 0) {
      this.balance = this.balance - amount;
      return this.name + " your new balance is " + this.balance;
    } else {
      return "go home poor " + this.name;
    }
  } else {
    return "wrong password";
  }
};
MakeAccount.prototype.depose = function (amount) {
  this.balance = this.balance + amount;
  return this.name + " your new balance is " + this.balance;
};
MakeAccount.prototype.checkBalance = function () {
  return this.name + " your balance is " + this.balance;
};
