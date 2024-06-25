// Create a code that could handle a queue on food ordering process, with this specification:
// ● Create a class to handle queuing process in a file.
// ● Create file to handle and execute queue class.
// ● Each queue process takes a random interval from 1-10 seconds.
// ● Clue : Use while & promise

class Queue {
  constructor() {
    this.queue = [];
  }

  // Add order to the queue
  enqueue(order) {
    this.queue.push(order);
  }

  // Remove order from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.queue.length;
  }

  // Process the queue
  async processQueue() {
    while (!this.isEmpty()) {
      const order = this.dequeue();
      console.log(`Processing order: ${order}`);
      await this.randomInterval();
      console.log(`Finished order: ${order}`);
    }
    console.log("All orders processed");
  }

  // Simulate a random interval between 1 to 10 seconds
  randomInterval() {
    const time = Math.floor(Math.random() * 10 + 1) * 1000;
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}

module.exports = Queue;
