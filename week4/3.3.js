const simulateAsyncOperation = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeout < 1000) {
        reject(`Error: timeout too short ${timeout} ms`);
      } else {
        resolve(`Operation completed successfully in (${timeout} ms)`);
      }
    }, timeout);
  });
};

const performAsyncTask = async (timeout) => {
  try {
    const result = await simulateAsyncOperation(timeout);
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
};

performAsyncTask(1500);
performAsyncTask(500);
