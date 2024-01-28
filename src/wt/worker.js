// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

import { parentPort, workerData } from "node:worker_threads";

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread

  const result = nthFibonacci(workerData);
  parentPort.postMessage(result);
};

sendResult();
