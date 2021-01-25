//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
import SubjectsInstanceContext from "./subjects-instance-context";
//@@viewOff:imports

const SubjectInstanceProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectInstanceProvider",
  //@@viewOff:statics

  render({ children }) {
    //@@viewOn:hooks
    const state = useDataObject({
      handlerMap: {
        load: Calls.loadSubjectsInstance
      }
    });
    //@@viewOff:hooks

    //@@viewOn:render
    return <SubjectsInstanceContext.Provider value={state}>{children}</SubjectsInstanceContext.Provider>;
    //@@viewOff:render
  }
});

export default SubjectInstanceProvider;