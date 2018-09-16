/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-16 01:46:51 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-16 02:40:32
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

class Channel {
  constructor(id, name, number) {
    this.id = id;
    this.name = name;
    this.number = number;
  }
}

module.exports = Channel;