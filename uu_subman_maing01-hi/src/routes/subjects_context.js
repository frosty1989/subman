//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef, useContext } from "uu5g04-hooks";
import Config from "./config/config";
import SubjectList from "../bricks/subject-list";
import SubjectProvider from "../bricks/subject-provider";
import SubjectCreate from "../bricks/subject-create";
import SubjectsTitle from "../bricks/subjects-title";
import SubjectsInstanceContext from "../bricks/subjects-instance-context";
//@@viewOff:imports

const Subjects = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Subjects",
  //@@viewOff:statics

  render() {
    //@@viewOn:hooks
    const {
      data: { authorizedProfileList }
    } = useContext(SubjectsInstanceContext);
    const createSubjectRef = useRef();
    const updateSubjectRef = useRef();
    const deleteSubjectRef = useRef();
    //@viewOff:hooks

    //@@viewOn:private
    function showError(content) {
      UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content,
          colorSchema: "red"
        });
    }

    async function handleCreateSubject(subject) {
      try {
        await createSubjectRef.current(subject);
      } catch {
        showError(`Creation of ${subject.name} failed!`);
      }
    }

    /* eslint no-unused-vars: "off" */
    async function handleUpdateSubject(subject, values) {
      try {
        await updateSubjectRef.current({ id: subject.id, ...values });
      } catch {
        showError(`Update of ${subject.name} failed!`);
      }
    }

    async function handleDeleteSubject(subject) {
      try {
        await deleteSubjectRef.current({ id: subject.id });
      } catch {
        showError(`Deletion of ${subject.name} failed!`);
      }
    }

    function isCreateAuthorized() {
      return authorizedProfileList.some(
        profile => profile === Config.Profiles.AUTHORITIES || profile === Config.Profiles.EXECUTIVES
      );
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(subjects) {
      return (
        <>
          <SubjectsTitle subjects={subjects} />
          {isCreateAuthorized() && <SubjectCreate onCreate={handleCreateSubject} />}
          <SubjectList subjects={subjects} onDelete={handleDeleteSubject} />
        </>
      );
    }

    function renderError(errorData) {
      switch (errorData.operation) {
        case "load":
        case "loadNext":
        default:
          return <UU5.Bricks.Error content="Error happened!" error={errorData.error} errorData={errorData.data} />;
      }
    }

    return (
      <UU5.Bricks.Container>
        <SubjectProvider>
          {({ state, data, errorData, pendingData, handlerMap }) => {
            createSubjectRef.current = handlerMap.createSubject;
            updateSubjectRef.current = handlerMap.updateSubject;
            deleteSubjectRef.current = handlerMap.deleteSubject;

            switch (state) {
              case "pending":
              case "pendingNoData":
                return renderLoad();
              case "error":
              case "errorNoData":
                return renderError(errorData);
              case "itemPending":
              case "ready":
              case "readyNoData":
              default:
                return renderReady(data);
            }
          }}
        </SubjectProvider>
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  }
});

export default Subjects;