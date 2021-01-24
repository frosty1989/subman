//@@viewOn:imports
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import SubjectList from "../bricks/subject-list";
import SubjectProvider from "../bricks/subject-provider";
import SubjectCreate from "../bricks/subject-create";
//@@viewOff:imports

const Subjects = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Subjects",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <SubjectProvider>
        {({ viewState, subjects, handleCreate, handleDelete }) => {
          return (
            <>
              <SubjectCreate onCreate={handleCreate} />
              <SubjectList subjects={subjects} onDelete={handleDelete} />
            </>
          );
        }}
      </SubjectProvider>
    );
    //@@viewOff:render
  }
});

export default Subjects;
