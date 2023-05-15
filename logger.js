
const EventEmiter = require('events');

var url = 'http://myloggedr.io/log';

class Logger extends EventEmiter{
    log(message) {
        console.log(message);

        // Raise an event
        this.emit('messegeLogged', {id: 1, url: url});
    }
}

module.exports = Logger;