//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponentWithRef, useContext, useRef, useImperativeHandle } from "uu5g04-hooks";
import Config from "./config/config";
import SubjectsIntanceContext from "./subjects-instance-context";
//@@viewOff:imports

const SubjectUpdateForm = createVisualComponentWithRef({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectUpdateForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSave: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSave: () => {}
  },
  //@@viewOff:defaultProps

  render({ onSave }, ref) {
    //@@viewOn:hooks
    //const inputLsi = useLsiValues(Lsi);
    //const imageRef = useRef();
    const modalRef = useRef();
    const subjectRef = useRef();

    /*
    const {
      data: { categoryList }
    } = useContext(SubjectsIntanceContext);
    */

    useImperativeHandle(ref, () => ({
      open: subject => {
        subjectRef.current = subject;
        modalRef.current.open({
          header: renderHeader(),
          content: renderForm(subject),
          footer: renderControls()
        });
      }
    }));
    //@@viewOn:hooks

    //@@viewOn:private
    /*
    function validateText(opt) {
      let result = { feedback: "initial", value: opt.value };
      // when there is no event, validation comes from "isValid" method
      if (opt.event === undefined) {
        // text is empty, check file
        if (!opt.value && !imageRef.current.getValue()) {
          result.feedback = "error";
          result.message = <UU5.Bricks.Lsi lsi={Lsi.textOrFile} />;
          opt.component.setFeedback(result.feedback, result.message);
        }
      }
      return result;
    }
    */

    function handleSave(opt) {
      modalRef.current.close(true, () => {
        onSave(subjectRef.current, opt.values);
      });
    }

    function handleCancel() {
      modalRef.current.close();
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <UU5.Forms.ContextHeader
          content="Update subject"
          info="You can update the subject..."
        />
      );
    }

    function renderControls() {
      return <UU5.Forms.ContextControls buttonSubmitProps={{ content: "Save" }} />;
    }

    function renderForm(subject) {
      return (
        <UU5.Forms.ContextForm onSave={handleSave} onCancel={handleCancel}>
        <UU5.Forms.Text label="Name:" name="name" />
        <UU5.Forms.Text label="Credits:" name="text" />
        <UU5.Forms.Text label="Supervisor:" name="supervisor" />
        <UU5.Forms.Text label="Subject goal:" name="goal" />
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

          {/*
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Select
                label={inputLsi.category}
                name="categoryList"
                value={subject.categoryList}
                controlled={false}
                multiple
              >
                {renderCategories()}
              </UU5.Forms.Select>
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.File ref_={imageRef} label={inputLsi.image} name="image" controlled={false} />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
          */}
        </UU5.Forms.ContextForm>
      );
    }

    /*
    function renderCategories() {
      return categoryList.map(category => (
        <UU5.Forms.Select.Option value={category.id} key={category.id}>
          {category.name}
        </UU5.Forms.Select.Option>
      ));
    }
    */

    return <UU5.Forms.ContextModal ref_={modalRef} overflow />;
    //@@viewOff:render
  }
});

export default SubjectUpdateForm;