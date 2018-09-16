/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-16 01:33:15 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-16 02:42:19
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

const channelsRouter = require('./channel');

/* ===================================== */
/*             DECLARATIONS              */
/* ===================================== */

/* ===================================== */
/*                 CLASS                 */
/* ===================================== */

module.exports = {
  addRoutes: (app) => {
    if (!app) throw new Error('App parameter is required');
    
    channelsRouter.addRoutes(app);
  } 
} 