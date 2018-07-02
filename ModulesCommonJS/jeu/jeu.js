// Dépendances de fichiers
const readline = require('readline');
const random = require('./random');

// 2 - class
class Jeu {
  constructor(options = {}) {
    //options = options || {};
    // 4 - destructurer l'objet avec default value
    //const min = options.min || 0;
    //const max = options.max !== undefined ? options.max : 100;
    const { min = 0, max = 100 } = options;

    // Object.assign(this, options, { min: 0, max: 100 });

    this._entierAlea = random.getIntInclusive(min, max);
    this._essais = [];
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  jouer() {
    if (this._essais.length) {
      // 5 - template literal
      console.log(`Vous avez déjà joué : ${this._essais.join(' | ')}`);
    }
    this._rl.question('Quel est le nombre ? ', (answer) => {
      // 6 - Number.parseInt()
      const entierSaisi = Number.parseInt(answer);
      // 7 - Number.isNaN()
      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }
      this._essais.push(entierSaisi);
      if (entierSaisi < this._entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }
      if (entierSaisi > this._entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }
      console.log('Gagné !');
      this._rl.close();
    });
  }
}

module.exports = Jeu;