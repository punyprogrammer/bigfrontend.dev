class Singleton {
  // Step 1: Static property to hold the single instance
  static instance;

  // Step 2: Private constructor to prevent external instantiation
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    // Initialize your state
    this.timestamp = Date.now();

    // Save the instance
    Singleton.instance = this;
  }

  getTime() {
    return this.timestamp;
  }
}
