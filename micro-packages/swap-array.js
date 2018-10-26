// Swap position of two items in array without changing the state of the passed array.
module.exports = (Arr, Caller, Target) => {
  let Instance = Arr.constructor();
  let Stash = Arr;

  //判断是否是数组，返回类型
  let InstanceType = Array.isArray(Instance) ? "array" : typeof Instance;

  // Check types and throw err if no arr is passed
  if (InstanceType !== "array")
    throw "[ERR] SwapArray expects a array as first param";

  // Copy the Arr-Content into new Instance - so we don't overwrite the passed array
  Stash.map((s, i) => (Instance[i] = s));

  //获取移除的元素
  let targetEle = Instance.splice(Target, 1, Instance[Caller]);
  // Update indexes
  Instance[Caller] = targetEle[0];

  return Instance;
};
