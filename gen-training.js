for(let i = 0; i < 100; i++){
  let nums = i.toString().split('');
  if(nums.length == 1) nums.unshift(0);
  console.log(`\ttrainPerceptron(${nums[0]}, ${nums[1]}, ${parseInt(nums[0]) + parseInt(nums[1])});`);
}