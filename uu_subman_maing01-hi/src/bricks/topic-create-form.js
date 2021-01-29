//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
//@@viewOff:imports

const TopicCreateForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "TopicCreateForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSubmit: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func
  },
  //@@viewOff:propTypes


  //@@viewOn:defaultProps
  defaultProps: {
    onSubmit: () => {},
    onCancel: () => {}
  },
  //@@viewOff:defaultProps

  render({ onSave, onCancel }) {
    //@@viewOn:render
    return (
      <UU5.Forms.Form onSave={onSave} onCancel={onCancel} labelColWidth="xs-12 m-1" inputColWidth="xs-12 m-11">
        <UU5.Forms.Text label="Name:" name="name" />
        <UU5.Forms.Text label="Credits:" name="text" />
        <UU5.Forms.Text label="Supervisor:" name="supervisor" />
        <UU5.Forms.Text label="Topic goal:" name="goal" />
        <UU5.Forms.Select
          label="Degree:" name="degree"
        >
          <UU5.Forms.Select.Option value="Bc."/>
          <UU5.Forms.Select.Option value="Mgr."/>
        </UU5.Forms.Select>
        <UU5.Forms.Select
          label="Language:" name="language"
        >
          <UU5.Forms.Select.Option value="CZ"/>
          <UU5.Forms.Select.Option value="EN"/>
        </UU5.Forms.Select>
        <UU5.Forms.Text label="Description:" name="description" />
        <UU5.Forms.Controls />
      </UU5.Forms.Form>
    );
    //@@viewOff:render
  }
});

export default TopicCreateForm;