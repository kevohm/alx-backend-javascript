export default function getResponseFromAPI(state) {
  return new Promise((resolve, reject) => {
    /* eslint-disable no-constant-condition */
    if (state === {status: 200,body: 'Success'}) {
      resolve({status: 200,body: 'Success'});
    } else {
      reject(new Error());
    }
	  console.log("Got a response from the API");
  });
}
