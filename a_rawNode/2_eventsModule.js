const EventEmitter = require("events");

// "require("events")" returns a class.
// so we will be able to produce objects using the "EventEmitter" class

const emitter = new EventEmitter();

// now "emitter" is an object, which will provide us event related functions

emitter.on("event1", () => {
   console.log("Event 1 is called");
});

emitter.on("event2", (e) => {
   console.log("Event 2 is called also");
   console.log({ emittedArg: e });
});

// "on" function is working like a event listener. Whenever an "emit" function is called then the "on" function will be called

emitter.emit("event1");

emitter.emit("event2", { name: "Asif", id: 1 });

// "event1" is an event name. So "emitter.emit("event1")" will call the "event1" event
// "we can send an argument to the callback function of the "on" function from "emit". It will be an object

//-> Using the class "MyEvent" (from "./3_inheritingEventEmitter") which inherits the "EventEmitter" class

const MyEvent = require("./3_inheritingEventEmitter");
const myEvent = new MyEvent();

myEvent.on("an_event", () => {
   console.log("An event");
});

myEvent.emit("an_event");

myEvent.on("event_foreigner", () => {
   console.log("Event foreigner");
});

myEvent.function1();
