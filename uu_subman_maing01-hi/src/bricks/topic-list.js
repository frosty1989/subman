//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Topic from "./topic";
import Subject from "./subject";
import SubjectInstanceContext from "./subjects-instance-context";
//@@viewOff:imports

function conditionalRender(topic) {


    if (subject.id == topic.subjectId) {
    
        return true;

    }

  }

const TopicList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "TopicList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    subjects: UU5.PropTypes.array,
    topics: UU5.PropTypes.array.isRequired,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func,
    subjectId: UU5.PropTypes.string,


    subject: UU5.PropTypes.shape({
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
    subject: null,
    subjects: [],   
    topics: [],
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({ topics, onDetail, onUpdate, onDelete, subject, subjectId}) {
    //@@viewOn:render
    if (topics.length === 0) {
      return <UU5.Common.Error content="No topics!" />;
    }

    return (
        <div>
        <UU5.Bricks.Text>{subjectId}</UU5.Bricks.Text>

        {topics.map(topic => (

          <Topic
            key={topic.id}
            topic={topic}
            colorSchema="green"
            onDetail={onDetail}
            onUpdate={onUpdate}
            onDelete={onDelete}
            subjectId={subjectId}
          />

        ))}


      </div>
    );
    //@@viewOff:render
  }
});

export default TopicList;