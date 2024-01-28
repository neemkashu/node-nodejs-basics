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
    // if you know a better way please connect me
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData });
      worker.on("message", resolve);
      worker.on("error", reject);
    });
  }

  const results = [];
  for (let i = MIN_FIBONACCI_ARGUMENT; i < MAX_FIBONACCI_ARGUMENT; i++) {
    results.push(runService(i));
  }
  const workersData = await Promise.allSettled(results);

  const dataConverted = workersData.map((elem) => {
    const { status, value = null } = elem;
    const statusConverted = convertStatus(status);
    return {
      status: statusConverted,
      data: value,
    };
  });

  console.log(dataConverted);
};

await performCalculations();

function convertStatus(status) {
  const map = {
    rejected: "error",
    fulfilled: "resolved",
  };
  return map[status];
}
