//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import Calls from "calls";
import SubjectsInstanceContext from "./subjects-instance-context";
import Config from "./config/config";
import Css from "./subject-detail-content.css";
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
      name: UU5.PropTypes.string.isRequired,
      text: UU5.PropTypes.string,
      supervisor: UU5.PropTypes.string,
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
    //@@viewOff:private

    //@@viewOn:render
    return (
      <div>
        {subject.text}
        {subject.supervisor}



        <Line icon="mdi-account" content={subject.uuIdentityName} />

      </div>
    );
    //@@viewOff:render
  }
});

export default SubjectDetailContent;