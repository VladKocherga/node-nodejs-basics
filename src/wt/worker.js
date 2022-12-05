import * as Worker from 'worker_threads';
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const result = nthFibonacci(Worker.workerData);
    Worker.parentPort.postMessage(result);
    // This function sends result of nthFibonacci computations to main thread
};

sendResult();