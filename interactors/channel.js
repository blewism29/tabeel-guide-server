/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-16 02:08:06 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-16 02:45:08
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

/* ===================================== */
/*             DECLARATIONS              */
/* ===================================== */

/* ===================================== */
/*                 CLASS                 */
/* ===================================== */

class ChannelInteractor {
  constructor(db) {
    this.db = db;
  }
  
  /*
    Retrieves all channels stored in database. 
  */
  getChannels () {
    return [
      {
        id: 1,
        name: 'HBO',
        number: 54
      },
      {
        id: 2,
        name: 'Cine Canal',
        number: 52
      }
    ];
  }
}

module.exports = ChannelInteractor;