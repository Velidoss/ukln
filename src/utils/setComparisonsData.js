const setComparisonsData = (workers) => {
  console.log(workers)
  return workers.reduce((acc, worker) => {
    worker.compared.forEach((comparison) => {
      if (comparison.result === 1) {
        acc.push({      
          better: worker.workerName,
          worse: comparison.with
        });
      }
    });
    return acc;
  }, []);
};


export default setComparisonsData;