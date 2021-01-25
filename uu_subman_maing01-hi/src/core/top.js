//@@viewOn:imports
import Plus4U5 from "uu_plus4u5g01";
import { createVisualComponent, useContext, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import SubjectsInstanceContext from "../bricks/subjects-instance-context";
//@@viewOff:imports

const Top = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Top",
  //@@viewOff:statics

  render() {
    //@@viewOn:hooks
    const { data: subjectsInstance } = useContext(SubjectsInstanceContext);
    const { identity } = useSession();
    //@@viewOff:hooks

    //@@viewOn:render
    const title = `${subjectsInstance.name} [${subjectsInstance.state}] User: ${identity.uuIdentity}`;
    //User:${identity.uuIdentity}
    return <Plus4U5.App.TopBt>{title}</Plus4U5.App.TopBt>;
    //@@viewOff:render
  }
});

export default Top;