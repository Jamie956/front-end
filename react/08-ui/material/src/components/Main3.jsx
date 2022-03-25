import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import FlatButton from "material-ui/FlatButton";

function handleClick() {
  alert("onClick triggered on the title component");
}

const styles = {
  title: {
    cursor: "pointer"
  }
};

const Main3 = () => (
  <AppBar
    title={<span style={styles.title}>Title</span>}
    onTitleClick={handleClick}
    iconElementLeft={
      <IconButton>
        <NavigationClose />
      </IconButton>
    }
    iconElementRight={<FlatButton label="Save" />}
  />
);

export default Main3;
