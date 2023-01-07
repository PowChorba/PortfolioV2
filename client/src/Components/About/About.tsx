import { useLocalStorage } from "../../useLocaleStorage/useLocaleStorage";
import AboutEs from "./AbouteEsp";
import AboutEn from "./AboutEn";

export default function About(){
    const useLocale = useLocalStorage('idioma', '')

    if(useLocale[0] === 'en'){
        return <AboutEn/>
    }else {
        return <AboutEs/>
    }
}