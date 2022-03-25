export const handleActions = action => {
  switch (action.type) {
    case "ADD": {
      console.log("ADD: ", action.text);
      break;
    }
  }
};
