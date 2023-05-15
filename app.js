
const EventEmiter = require('events');

const Logger = require('./logger')
const logger = new Logger();

// Register a listener
logger.on('messegeLogged', function(arg) {
    console.log('Listener called', arg);
});

logger.log("Misbah");