// please complete the implementation
class EventEmitter {
  constructor() {
    this.events = {};
    this.id = 0;
  }
  // initialize events

  subscribe(eventName, callback) {
    // increment the id
    this.id++;
    // if no array initialised
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    // push into array maintain the callback and the instance that subscribed
    this.events[eventName].push({ callback, id: this.id });
    return {
      release: () => {
        // unsubscribe  the callback for that instance from the event

        this.events[eventName] = this.events[eventName].filter(
          (item) => item.id !== this.id
        );
      },
    };
  }

  emit(eventName, ...args) {
    // call the event
    if (this.events[eventName]) {
      this.events[eventName].forEach((listeners) => {
        listeners.callback.apply(this, args);
      });
    }
  }
}
