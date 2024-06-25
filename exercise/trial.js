const Queue = require("./day13");

const foodQueue = new Queue();

// Add orders to the queue
foodQueue.enqueue("Order 1");
foodQueue.enqueue("Order 2");
foodQueue.enqueue("Order 3");
foodQueue.enqueue("Order 4");

// Process the queue
foodQueue.processQueue().then(() => {
  console.log("Queue processing completed");
});
