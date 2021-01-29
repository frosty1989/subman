//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

let initialTopics = [
  {
    id: 1,
    name: "První téma prvního předmětu",
    description: "Toto je první téma prvního předmětu. Budeme se zabývat ...",
    subjectId: 1

  },
  {
    id: 2,
    name: "Druhé téma",
    description: "Toto je druhé téma prvního předmětu. Budeme se zabývat ...",
    subjectId: 1

  },
  {
    id: 3,
    name: "Třetí téma",
    description: "Toto je třetí téma prvního předmětu. Budeme se zabývat ...",
    subjectId: 1

  },

  {
    id: 4,
    name: "První téma prvního předmětu",
    description: "Toto je první téma druhého předmětu. Budeme se zabývat ...",
    subjectId: 2

  },
  {
    id: 5,
    name: "Druhé téma",
    description: "Toto je druhé téma druhého předmětu. Budeme se zabývat ...",
    subjectId: 2

  },
  {
    id: 6,
    name: "Třetí téma",
    description: "Toto je třetí téma druhého předmětu. Budeme se zabývat ...",
    subjectId: 2
    
  },


];

const TopicProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "TopicProvider",
  //@@viewOff:statics

  render({ children }) {

    //@viewOn:hooks
    const [topics, setTopics] = useState(initialTopics);
    //@viewOff:hooks

    //@@viewOn:private

    function handleCreate(topic) {
        topic.id = UU5.Common.Tools.generateUUID();
        setTopics(prevTopics => prevTopics.concat([topic]));
      }

    function handleDelete(topic) {
        setTopics(prevTopics => prevTopics.filter(item => item.id !== topic.id));
      }
    //@@viewOff:private

    //@@viewOn:render
    return children({ topics, handleCreate, handleDelete });
    //@@viewOff:render
  }
});

export default TopicProvider;