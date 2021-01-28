//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

let initialSubjects = [
  {
    id: 1,
    name: "Analytická geometrie",
    credits: 12,
    supervisor: "Martin Hanak",
    goal: "Phasellus faucibus molestie nisl. Et harum quidem rerum facilis est et expedita distinctio. Fusce aliquam vestibulum ipsum. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quisque porta. Nunc tincidunt ante vitae massa. Aliquam erat volutpat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Pellentesque ipsum. Et harum quidem rerum facilis est et expedita distinctio. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Etiam bibendum elit eget erat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Quisque porta. Integer vulputate sem a nibh rutrum consequat. Aliquam erat volutpat.",
    degree: "Bc.",
    language: "EN",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus velit libero,"

  },
  {
    id: 2,
    name: "Deskriptivní geometrie",
    credits: 12,
    supervisor: "Martin Hanak",
    goal: "Phasellus faucibus molestie nisl. Et harum quidem rerum facilis est et expedita distinctio. Fusce aliquam vestibulum ipsum. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quisque porta. Nunc tincidunt ante vitae massa. Aliquam erat volutpat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Pellentesque ipsum. Et harum quidem rerum facilis est et expedita distinctio. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Etiam bibendum elit eget erat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Quisque porta. Integer vulputate sem a nibh rutrum consequat. Aliquam erat volutpat.",
    degree: "Bc.",
    language: "EN",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus velit libero,"

  },
  {
    id: 3,
    name: "Kvantová mechanika",
    credits: 9,
    supervisor: "Albert Einstein",
    goal: "Phasellus faucibus molestie nisl. Et harum quidem rerum facilis est et expedita distinctio. Fusce aliquam vestibulum ipsum. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quisque porta. Nunc tincidunt ante vitae massa. Aliquam erat volutpat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Pellentesque ipsum. Et harum quidem rerum facilis est et expedita distinctio. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Etiam bibendum elit eget erat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Quisque porta. Integer vulputate sem a nibh rutrum consequat. Aliquam erat volutpat.",
    degree: "Bc.",
    language: "EN",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus velit libero,"

  },
  {
    id: 4,
    name: "Klasická mechanika",
    credits: 9,
    supervisor: "Isaac Newton",
    goal: "Phasellus faucibus molestie nisl. Et harum quidem rerum facilis est et expedita distinctio. Fusce aliquam vestibulum ipsum. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quisque porta. Nunc tincidunt ante vitae massa. Aliquam erat volutpat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Pellentesque ipsum. Et harum quidem rerum facilis est et expedita distinctio. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Etiam bibendum elit eget erat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Quisque porta. Integer vulputate sem a nibh rutrum consequat. Aliquam erat volutpat.",
    degree: "Bc.",
    language: "EN",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus velit libero,"

  },

];

const SubjectProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectProvider",
  //@@viewOff:statics

  render({ children }) {

    //@viewOn:hooks
    const [subjects, setSubjects] = useState(initialSubjects);
    //@viewOff:hooks

    //@@viewOn:private

    function handleCreate(subject) {
        subject.id = UU5.Common.Tools.generateUUID();
        setSubjects(prevSubjects => prevSubjects.concat([subject]));
      }

    function handleDelete(subject) {
        setSubjects(prevSubjects => prevSubjects.filter(item => item.id !== subject.id));
      }
    //@@viewOff:private

    //@@viewOn:render
    return children({ subjects, handleCreate, handleDelete });
    //@@viewOff:render
  }
});

export default SubjectProvider;