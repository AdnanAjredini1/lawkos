import "./select-languagea.scss";
import { useDispatch, useSelector } from "react-redux";
import england from "./select-language-assets/flags/england.svg";
import albania from "./select-language-assets/flags/albania.svg";
import german from "./select-language-assets/flags/german.svg";
import france from "./select-language-assets/flags/france.svg";
import italy from "./select-language-assets/flags/italy.svg";
import spain from "./select-language-assets/flags/spain.svg";
import turkey from "./select-language-assets/flags/turkey.svg";
import portugal from "./select-language-assets/flags/portugal.svg";
import russia from "./select-language-assets/flags/russia.svg";
import china from "./select-language-assets/flags/china.svg";
import japan from "./select-language-assets/flags/japan.svg";
import SingleLanguage from "./SingleLanguage/SingleLanguage";
import arrpw from '../SelectLanguage/select-language-assets/flags/Polygon 3.svg'
import { languageActions } from "../../../store/slice/languageSlice";


function SelectLanguage() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const languages = [
    { value: "en-GB", lang: "English", flag: england },
    { value: "sq-AL", lang: "Albanian", flag: albania },
    { value: "de-DE", lang: "German", flag: german },
    { value: "fr-FR", lang: "French", flag: france },
    { value: "it-IT", lang: "Italian", flag: italy },
    { value: "es-ES", lang: "Spanish", flag: spain },
    { value: "tr-TR", lang: "Turkish", flag: turkey },
    { value: "pr-PR", lang: "Portuguese", flag: portugal },
    { value: "rs-RS", lang: "Russian", flag: russia },
    { value: "ch-CH", lang: "Chinese", flag: china },
    { value: "jp-JP", lang: "Japanese", flag: japan },
  ];

  const selectedFlag =
    languages.find((lang) => lang.value === language)?.flag || england;

  const handleLanguageChange = (language) => {
    dispatch(languageActions.chooseLanguage(language));
  };

  return (
    <div className="select-language">
      <img src={selectedFlag} alt="selected-flag" className="selected-flag" />
      {languages.find((lang) => lang.value === language)?.lang || "English"}
      <img
        src={arrpw}
        className="language-arrow"
      />

      <div className="dropdown-languages">
        {languages
          .sort((a, b) => a.lang.localeCompare(b.lang))
          .map((thisLang, i) => (
            <SingleLanguage
              value={thisLang.value}
              key={i}
              handleLanguageChange={() =>
                handleLanguageChange(thisLang.value)
              }
              styles={thisLang.value === language && "selected"}
              language={thisLang.lang}
              flag={thisLang.flag}
            />
          ))}
      </div>
    </div>
  );
}

export default SelectLanguage;
