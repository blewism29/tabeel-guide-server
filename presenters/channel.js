/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-16 02:07:19 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-16 02:44:14
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

const Channel = require('../models/channel');

/* ===================================== */
/*             DECLARATIONS              */
/* ===================================== */

/* 
  Creates a channel object with the object as parameter.
*/
const decorateChannel = (pChannel) => new Channel (pChannel.id, pChannel.name, pChannel.number);

/* 
  Maps a list of objects to Channel objects.
*/
const decorateChannels = (pChannels) => {
  return pChannels.map(
    (pChannel) => decorateChannel(pChannel)
  );
}

/* ===================================== */
/*                 CLASS                 */
/* ===================================== */

module.exports = {
  decorateChannel: decorateChannel,
  decorateChannels: decorateChannels
}