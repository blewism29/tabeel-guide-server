/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-16 01:33:19 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-16 03:01:49
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

const ChannelInteractor = require('../interactors/channel');
const presenter = require('../presenters/channel');

/* ===================================== */
/*             DECLARATIONS              */
/* ===================================== */

const interactor = new ChannelInteractor(null);
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
    app.get(baseUrl, (req, res) => {
      const channels = interactor.getChannels(null);
      const response = presenter.decorateChannels(channels);
      res.send(response);
    });
  } 
}