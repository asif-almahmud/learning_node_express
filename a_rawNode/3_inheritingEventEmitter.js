const EventEmitter = require("events");

class MyEvent extends EventEmitter {
   function1 = () => {
      this.emit("event_foreigner");
   };
}

//-> Extending "EventEmitter" class for inheritence and enabling the use of same EventEmitter class from different modules

module.exports = MyEvent;
