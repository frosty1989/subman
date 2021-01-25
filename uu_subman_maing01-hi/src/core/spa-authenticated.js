//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";

import Config from "./config/config.js";
import SubjectInstanceProvider from "../bricks/subjects-instance-provider";
import SubjectsInstanceContext from "../bricks/subjects-instance-context";
import SpaReady from "./spa-ready.js";
//@@viewOff:imports

const SpaAuthenticated = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SpaAuthenticated",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <SubjectInstanceProvider>
        <SubjectsInstanceContext.Consumer>
          {({ state, errorData }) => {
            switch (state) {
              case "pending":
              case "pendingNoData":
                return <UU5.Bricks.Loading />;
              case "error":
              case "errorNoData":
                return <UU5.Bricks.Error error={errorData.error} />;
              case "ready":
              case "readyNoData":
              default:
                return <SpaReady />;
            }
          }}
        </SubjectsInstanceContext.Consumer>
      </SubjectInstanceProvider>
    );
    //@@viewOff:render
  }
});

export default SpaAuthenticated;