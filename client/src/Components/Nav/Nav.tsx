import { useLocalStorage } from "../../useLocaleStorage/useLocaleStorage";
import NavEn from "./NavEn";
import NavEsp from "./NavEsp";


export default function Nav(){
    const useLocale = useLocalStorage('idioma', '')

    console.log(useLocale[0])

    if(useLocale[0] === 'en'){
        return <NavEn/>
    }else{
        return <NavEsp/>
    }
}