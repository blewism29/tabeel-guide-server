/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-16 01:33:19 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-16 03:12:46
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

const controller = require('../controllers/channel');

/* ===================================== */
/*             DECLARATIONS              */
/* ===================================== */

const baseUrl = '/channels'

/* ===================================== */
/*                 CLASS                 */
/* ===================================== */

module.exports = {
  addRoutes: (app) => {
    if (!app) throw new Error('App parameter is required');
    
    /* 
      Get all channels stored in database.
    */
    app.get(baseUrl, controller.getChannels);
  } 
}