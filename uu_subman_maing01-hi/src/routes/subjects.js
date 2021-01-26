//@@viewOn:imports
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import SubjectList from "../bricks/subject-list";
import SubjectProvider from "../bricks/subject-provider";
import SubjectCreate from "../bricks/subject-create";
import SubjectsTitle from "../bricks/subjects-title";
import SubjectDetail from "../bricks/subject-detail";
//@@viewOff:imports



const Subjects = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Subjects",
  //@@viewOff:statics

  render() {

    //@@viewOn:hooks
    const detailRef = useRef();
    //@@viewOff:hooks

    //@@viewOn:private
    function openDetail(joke) {
      detailRef.current.open(joke);
    }
    //@@viewOff:private

    //@@viewOn:render
    return (
    <UU5.Bricks.Container>
      <SubjectProvider>
        {({ viewState, subjects, handleCreate, handleDelete }) => {
          return (
            <>
              <SubjectsTitle subjects={subjects} />
              <SubjectCreate onCreate={handleCreate} />
              <SubjectList subjects={subjects} onDetail={openDetail} onDelete={handleDelete} />
              <SubjectDetail ref={detailRef} />
            </>
          );
        }}
      </SubjectProvider>
    </UU5.Bricks.Container>
    );
    //@@viewOff:render
  }
});

export default Subjects;
