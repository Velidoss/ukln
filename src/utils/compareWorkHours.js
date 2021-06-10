const compareWorkHours = (workersArray) => {
  for (let i = 0; i < workersArray.length; i++) {
    for (let j = i + 1; j < workersArray.length; j++) {
      if (parseInt(workersArray[i].workHours) > parseInt(workersArray[j].workHours)) {
        workersArray[i].score += 1;
        workersArray[i].compared.push({ with: workersArray[j].workerName, result: 1 });
        workersArray[j].compared.push({ with: workersArray[i].workerName, result: 0 });
      } else {
        workersArray[j].score += 1;
        workersArray[j].compared.push({ with: workersArray[i].workerName, result: 1 });
        workersArray[i].compared.push({ with: workersArray[j].workerName, result: 0 });
      }
    }
  }
  return workersArray;
};

export default compareWorkHours;