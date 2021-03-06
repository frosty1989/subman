//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useScreenSize, useSession  } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "./subject.css.js";
//@@viewOff:imports

const Subject = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Subject",
  //@@viewOff:statics


  //@@viewOn:propTypes
  propTypes: {
    subject: UU5.PropTypes.shape({
      name: UU5.PropTypes.string,
      credits: UU5.PropTypes.number,
      supervisor: UU5.PropTypes.string,
      goal: UU5.PropTypes.string,
      degree: UU5.PropTypes.string,
      language: UU5.PropTypes.string,
      description: UU5.PropTypes.string,


    }),
    colorSchema: UU5.PropTypes.string,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    subject: null,
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {},
    onPage: () => {}
  },
  //@@viewOff:defaultProps

  render({ subject, colorSchema, onDetail, onUpdate, onDelete, onPage}) {

    //@@viewOn: hooks
    const screenSize = useScreenSize();
    const { identity } = useSession();
    //@@viewOff: hooks

    //@@viewOn:private
    function handleDelete() {
      onDelete(subject);
    }

    function handleUpdate() {
      onUpdate(subject);
    }

    function handleDetail() {
      onDetail(subject);
    }

    function handlePage() {
      onPage(subject);
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <>
          {subject.name}
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
      return <div>{subject.credits}</div>
    }

    if (!subject) {
      return null;
    }

    return (
      <UU5.Bricks.Card className={Css.main()} colorSchema={colorSchema}>
        <div className={Css.header()}>
          {subject.name}
        </div>

          <div className={Css.textHeader()}>
              Supervisor:
          </div>
          <div className={Css.text()}>
            {subject.supervisor}
          </div>

          <div className={Css.textHeader()}>
              Credits:
          </div>
          <div className={Css.text()}>
            {subject.credits}
          </div>
          
          <div className={Css.textHeader()}>
              Degree:
          </div>
          <div className={Css.text()}>
            {subject.degree}
          </div>

        <div className={Css.footer()}>
          <div>
            <UU5.Bricks.Button onClick={handleUpdate} bgStyle="transparent">
              <UU5.Bricks.Icon icon="mdi-pencil" />
            </UU5.Bricks.Button>
            <UU5.Bricks.Button onClick={handleDelete} bgStyle="transparent">
              <UU5.Bricks.Icon icon="mdi-delete" />
            </UU5.Bricks.Button>
            <UU5.Bricks.Button onClick={handleDetail} bgStyle="transparent">
              <UU5.Bricks.Icon icon="uu5-menu" />
            </UU5.Bricks.Button>
          </div>
        </div>
      </UU5.Bricks.Card>
      /*
      <UU5.Bricks.Card header={renderHeader()} colorSchema={colorSchema}>
        <div>Text:</div><div>{subject.text}</div>
        <div>Supervisor:</div><div>{subject.subjectSupervisor}</div>
        {renderCredits()}

      </UU5.Bricks.Card>
      */
    );
    //@@viewOff:render
  }
});

export default Subject;