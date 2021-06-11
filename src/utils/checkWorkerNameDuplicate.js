const checkWorkerNameDuplicate = (workers, newWorker) => {
  return workers.some((worker) => worker.workerName === newWorker.workerName);
};

export default checkWorkerNameDuplicate;