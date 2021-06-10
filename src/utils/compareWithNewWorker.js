const compareWithNewWorker = (workersArray, newWorker) => {
  for (let i = 0; i < workersArray.length; i++) {
    if (parseInt(workersArray[i].workHours) > parseInt(newWorker.workHours)) {
      workersArray[i].score += 1;
      newWorker.compared.push({ with: workersArray[i].workerName, result: 0 });
      workersArray[i].compared.push({ with: newWorker.workerName, result: 1 });
    } else {
      newWorker.score += 1;
      newWorker.compared.push({ with: workersArray[i].workerName, result: 1 });
      workersArray[i].compared.push({ with: newWorker.workerName, result: 0 });
    }
  }
  workersArray.push(newWorker);
};

export default compareWithNewWorker;