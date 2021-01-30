//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useScreenSize, useSession  } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "./topic.css.js";
import Subject from "./subject";

//@@viewOff:imports

const Topic = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Topic",
  //@@viewOff:statics


  //@@viewOn:propTypes
  propTypes: {
    topic: UU5.PropTypes.shape({
      name: UU5.PropTypes.string,
      description: UU5.PropTypes.string,
      subjectId: UU5.PropTypes.number,



    }),
    colorSchema: UU5.PropTypes.string,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func,
    subjectId: UU5.PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    topic: null,
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {},
    onPage: () => {}
  },
  //@@viewOff:defaultProps

  render({ topic, colorSchema, onDetail, onUpdate, onDelete, onPage, subjectId}) {

    //@@viewOn: hooks
    const screenSize = useScreenSize();
    const { identity } = useSession();
    //@@viewOff: hooks

    //@@viewOn:private
    function handleDelete() {
      onDelete(topic);
    }

    function handleUpdate() {
      onUpdate(topic);
    }

    function handleDetail() {
      onDetail(topic);
    }

    function handlePage() {
      onPage(topic);
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <>
          {topic.name}
          <UU5.Bricks.Button onClick={handleDelete} colorSchema="red">
            <UU5.Bricks.Icon icon="mdi-delete" />
          </UU5.Bricks.Button>
        </>
      );
    }

    function renderCredits() {
      if (screenSize === "xs") {
        return null;
      }
    
      let creditSize = screenSize === "s" ? "m" : "s";
      return <div>{topic.credits}</div>
    }

    if (!topic) {
      return null;
    }

    return (
          <div>

          <div className={Css.textHeader()}>
              Name:
          </div>
          <div className={Css.text()}>
            {topic.name}
          </div>

          <div className={Css.textHeader()}>
              Description:
          </div>
          <div className={Css.text()}>
            {topic.description}
          </div>

          <div className={Css.textHeader()}>
              SubjectId:
          </div>
          <div className={Css.text()}>
            {subjectId}
          </div>

          <UU5.Bricks.Button onClick={handleUpdate} bgStyle="transparent">
              <UU5.Bricks.Icon icon="mdi-pencil" />
            </UU5.Bricks.Button>
            <UU5.Bricks.Button onClick={handleDelete} bgStyle="transparent">
              <UU5.Bricks.Icon icon="mdi-delete" />
            </UU5.Bricks.Button>


          </div>


          
        

      /*
      <UU5.Bricks.Card header={renderHeader()} colorSchema={colorSchema}>
        <div>Text:</div><div>{topic.text}</div>
        <div>Supervisor:</div><div>{topic.topicSupervisor}</div>
        {renderCredits()}

      </UU5.Bricks.Card>
      */
    );
    //@@viewOff:render
  }
});

export default Topic;