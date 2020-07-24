import axios from 'axios';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  const result=JSON.stringify(values, null, 2);
  console.log(`You submitted:\n${result}`);
  console.log(values);
  axios.post("http://localhost:3000/emp/reg",values)
  .then(Response=>{
    console.log(Response)
  })
   .catch(error=>{
     console.log(error)
   })
});
