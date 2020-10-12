const connection = {
  Con: null,
  Dispatcher: null,
  set setCon(conet) {
    this.Con = conet;
  },
  get getCon() {
    return this.Con;
  },
  set setDispatcher(dispat) {
    this.Dispatcher = dispat;
  },
  get getDispatcher() {
    return this.Dispatcher;
  },
};

exports.connection = connection;
