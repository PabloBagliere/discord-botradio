const connection = {
  Con: null,
  Dispatcher: null,
  volumen: 100,
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
  set setVolumen(vol) {
    this.volumen = vol;
  },
  get getVolumen() {
    return this.volumen;
  },
};

exports.connection = connection;
