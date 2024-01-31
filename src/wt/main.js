import { Worker } from "worker_threads";
import { cpus } from "os";
import path from "path";

const performCalculations = async () => {
  const CORES_AMOUNT = cpus().length;
  const MIN_FIBONACCI_ARGUMENT = 10;
  const MAX_FIBONACCI_ARGUMENT = 10 + CORES_AMOUNT;
  const __dirname = import.meta.dirname;
  const workerPath = path.join(__dirname, "worker.js");

  function runService(workerData) {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath, { workerData });
      worker.on("message", (data) => resolve({ data, status: "resolved" }));
      worker.on("error", () => resolve({ data: null, status: "error" }));
    });
  }

  const results = [];
  for (let i = MIN_FIBONACCI_ARGUMENT; i < MAX_FIBONACCI_ARGUMENT; i++) {
    results.push(runService(i));
  }
  const workersData = await Promise.all(results);

  console.log(workersData);
};

await performCalculations();
