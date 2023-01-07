import { useLocalStorage } from "../../useLocaleStorage/useLocaleStorage";
import SkillsEn from "./SkillsEn";
import SkillsEsp from "./SkillsEsp";

export default function About(){
    const useLocale = useLocalStorage('idioma', '')

    if(useLocale[0] === 'en'){
        return <SkillsEn/>
    }else {
        return <SkillsEsp/>
    }
}