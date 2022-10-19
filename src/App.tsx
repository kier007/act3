import { FC, MouseEventHandler, useState } from "react";
import Sign from "./Sign";
import Header from "./Header";
import FormValidation from "reactjs-forms";
import lexia from "./Lexia";

type Language = "en";

const App: FC = () => {
  const [lan, setLan] = useState<Language>("en");

  const setLanguage: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { language } = e.currentTarget.dataset;
    if (language && language !== lan) setLan(language as Language);
  };

  return (
    <FormValidation
      config={{
        customMessages: lexia[lan].validation
      }}
    >
      <Header clickHandler={setLanguage} />
      <Sign lexia={lexia[lan]} />
    </FormValidation>
  );
};

export default App;
