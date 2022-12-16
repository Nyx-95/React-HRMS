import { useCallback, useState } from "react";

var Xis=0
let screenWidth = window.innerWidth;
if(screenWidth <= 576){
     Xis=160;
}
else if (screenWidth <= 768){
     Xis=250;
 
}
else if (screenWidth <= 992){
     Xis=400;
}
else if (screenWidth <= 1200){
    Xis=450;
}
else if (screenWidth <= 1400){
    Xis=500;
}
console.log(Xis)



export const useCenteredTree = (
    defaultTranslate = { x: Xis, y: 0 }) => {
    const [translate, setTranslate] = useState(defaultTranslate);
    const containerRef = useCallback((containerElem) => {
        if (containerElem !== null) {
            const { width, height } = containerElem.getBoundingClientRect();
            setTranslate({ x: width / 2, y: height / 2 });
        }
    }, []);
    return [translate, containerRef];
};