import { useLocalStorage } from "../../useLocaleStorage/useLocaleStorage";
import ProyectsEn from "./ProyectsEn";
import ProyectsEsp from "./ProyectsEsp";


export default function About(){
    const useLocale = useLocalStorage('idioma', '')

    if(useLocale[0] === 'en'){
        return <ProyectsEn/>
    }else {
        return <ProyectsEsp/>
    }
}