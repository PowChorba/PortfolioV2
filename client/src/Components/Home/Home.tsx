import { useLocalStorage } from "../../useLocaleStorage/useLocaleStorage";
import HomeEn from "./HomeEn";
import HomeEsp from "./HomeEsp";


export default function About(){
    const useLocale = useLocalStorage('idioma', '')

    if(useLocale[0] === 'en'){
        return <HomeEn/>
    }else {
        return <HomeEsp/>
    }
}