//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Topic from "./topic";
import Subject from "./subject";
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
    topics: UU5.PropTypes.array.isRequired,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    topics: [],
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({ topics, onDetail, onUpdate, onDelete }) {
    //@@viewOn:render
    if (topics.length === 0) {
      return <UU5.Common.Error content="No topics!" />;
    }

    return (
        <div>


        {topics.map(topic => (

          <Topic
            key={topic.id}
            topic={topic}
            colorSchema="green"
            onDetail={onDetail}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />

        ))}


      </div>
    );
    //@@viewOff:render
  }
});

export default TopicList;