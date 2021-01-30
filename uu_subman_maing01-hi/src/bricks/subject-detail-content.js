//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import Calls from "calls";
import SubjectsInstanceContext from "./subjects-instance-context";
import Config from "./config/config";
import Css from "./subject-detail-content.css";
import TopicProvider from "../bricks/topic-provider";
import TopicList from "../bricks/topic-list";
import TopicCreate from "../bricks/topic-create";
import SubjectProvider from "../bricks/subject-provider";
import SubjectList from "../bricks/subject-list";
//@@viewOff:imports

function Line({ icon, content }) {
  return (
    <div className={Css.line()}>
      <UU5.Bricks.Icon className={Css.icon()} icon={icon} />
      {content}
    </div>
  );
}

const SubjectDetailContent = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectDetailContent",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    subject: UU5.PropTypes.shape({
      id:UU5.PropTypes.string,
      name: UU5.PropTypes.string.isRequired,
      credits: UU5.PropTypes.number,
      supervisor: UU5.PropTypes.string,
      goal: UU5.PropTypes.string,
      degree: UU5.PropTypes.string,
      language: UU5.PropTypes.string,
      descriptiom: UU5.PropTypes.string,
      uuIdentity: UU5.PropTypes.string
    }).isRequired
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    subject: null
  },
  //@@viewOff:defaultProps


  render({ subject }) {
    //@@viewOn:hooks

    //@@viewOff:hooks

   //@@viewOn:private
   function renderBender() {
    return true;
  }
   //@@viewOff:private


    //@@viewOn:render
    return (
      <div>


        
        <UU5.Bricks.Line colorSchema='primary' size='s'/>
        <div className={Css.textHeader()}>
        <UU5.Bricks.Text>Name:</UU5.Bricks.Text>
        </div>
        <UU5.Bricks.Text>{subject.name}</UU5.Bricks.Text>

        <UU5.Bricks.Line colorSchema='primary' size='s'/>
        <div className={Css.textHeader()}>
        <UU5.Bricks.Text>Number of credits:</UU5.Bricks.Text>
        </div>
        <UU5.Bricks.Text>{subject.credits}</UU5.Bricks.Text>

        <UU5.Bricks.Line colorSchema='primary' size='s'/>
        <div className={Css.textHeader()}>
        <UU5.Bricks.Text>Supervisor:</UU5.Bricks.Text>
        </div>
        <UU5.Bricks.Text>{subject.supervisor}</UU5.Bricks.Text>

        <UU5.Bricks.Line colorSchema='primary' size='s'/>
        <div className={Css.textHeader()}>
        <UU5.Bricks.Text>Subject goal:</UU5.Bricks.Text>
        </div>
        <UU5.Bricks.Text>{subject.goal}</UU5.Bricks.Text>

        <UU5.Bricks.Line colorSchema='primary' size='s'/>
        <div className={Css.textHeader()}>
        <UU5.Bricks.Text>Degree of study:</UU5.Bricks.Text>
        </div>
        <UU5.Bricks.Text>{subject.degree}</UU5.Bricks.Text>

        <UU5.Bricks.Line colorSchema='primary' size='s'/>
        <div className={Css.textHeader()}>
        <UU5.Bricks.Text>Subject Language:</UU5.Bricks.Text>
        </div>
        <UU5.Bricks.Text>{subject.language}</UU5.Bricks.Text>

        <UU5.Bricks.Line colorSchema='primary' size='s'/>
        <div className={Css.textHeader()}>
        <UU5.Bricks.Text>Description:</UU5.Bricks.Text>
        </div>
        <UU5.Bricks.Text>{subject.description}</UU5.Bricks.Text>

        <UU5.Bricks.Line colorSchema='primary' size='s'/>
        <div className={Css.textHeader()}>
        <UU5.Bricks.Text>Subject ID:</UU5.Bricks.Text>
        </div>
        <UU5.Bricks.Text>{subject.id}</UU5.Bricks.Text>
    
        <UU5.Bricks.Line colorSchema='primary' size='s'/>
        <div className={Css.textHeader()}>
        <UU5.Bricks.Text>Subject Topics:</UU5.Bricks.Text>

        </div>
        {renderBender() && (
        <TopicProvider subjectId={254}>
        {({ viewState, topics, handleCreate, handleDelete, subjects, subjectId }) => {
          return (
            <>
              <div>
              <TopicCreate onCreate={handleCreate} />
              <UU5.Bricks.Text>{subjectId}</UU5.Bricks.Text>
              </div>
              <TopicList topics={topics} subjects={subjects} onDelete={handleDelete} subjectId = {subjectId} />

            </>
          );
        }}
      </TopicProvider>
      )}


      </div>
    );
    //@@viewOff:render
  }
});

export default SubjectDetailContent;