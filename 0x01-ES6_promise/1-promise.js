export default function getResponseFromAPI(state) {
  return new Promise((resolve, reject) => {
    /* eslint-disable no-constant-condition */
    if (state) {
      resolve({status: 200,body: 'Success'});
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
