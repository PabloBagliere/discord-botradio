const radios = {
  FmVida: {
    name: 'FmVida',
    estacion: '97.9',
    image:
      'https://imgsvr.radiocut.site/get/thumb/900/900/radio_logos/11/f3/11f3b8d9-4747-4088-8c58-3fdb0beed4ce.png',
    url: 'http://fmvida.radio.rosario3.com:8000/fmvida.mp3',
  },
  FmBoing: {
    name: 'La Boing',
    estacion: '97.3',
    image:
      'https://lh3.googleusercontent.com/proxy/6i1NQyidVYnokQgGYQlUBe9gsLWvZ4fYWvIuRC1_Sa5mx4-VLs4Cfh2fpmFGg9rYvNUjkHlz2qfULoYb7cMyvtHySD6VUFFuDG1ZCE8',
    url: 'http://200.58.106.247:8626/',
  },
  FmMega: {
    name: 'Radio Mega',
    estacion: '98.3',
    image: 'https://cdn-profiles.tunein.com/s3110/images/logog.png?t=153597',
    url: 'https://mega.stweb.tv/mega983/live/chunks.m3u8',
  },
  Fm40: {
    name: 'Los 40',
    estacion: '105.5',
    image:
      'https://player.los40.com.ar/build/assets/los40argentina/img/destacada.png',
    url: 'https://18433.live.streamtheworld.com/LOS40_ARGENTINAAAC.aac',
  },
  getRadio(radio) {
    switch (radio) {
      case 'fmvida':
        return this.FmVida;
      case 'fmlos40':
        return this.Fm40;
      case 'fmmega':
        return this.FmMega;
      case 'fmboing':
        return this.FmBoing;
      default:
        break;
    }
  },
};

exports.radios = radios;
