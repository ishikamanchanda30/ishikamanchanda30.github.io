import the1975 from "../assets/graphicDesign/1975.png"
import gojo from "../assets/graphicDesign/gojo.png"
import itachi from "../assets/graphicDesign/itachi.png"
import joji from "../assets/graphicDesign/joji.png"
import eye from "../assets/graphicDesign/eye.png"
import dune from "../assets/graphicDesign/dune.png"
import kakashi from "../assets/graphicDesign/kakashi.png"
import kurt from "../assets/graphicDesign/kurt.png"
interface Design{
    name: string;
    img: string;
    type: string;
}
const design:Design[] = [
    {
        name: 'Design 1',
        img: kurt,
        type: 'square',
    },
    {
        name: 'Design 1',
        img: itachi,
        type: 'a4'
    },
    {
        name: 'Design 1',
        img: eye,
        type: 'a4'
    },
    {
        name: 'Design 1',
        img: kakashi,
        type: 'a4'
    },
    {
        name: 'Design 1',
        img: joji,
        type: 'a4'
    },
    {
        name: 'Design 1',
        img: the1975,
        type : 'a4'
    },
    {
        name: 'Design 1',
        img: gojo,
        type: 'a4'
    },
    {
        name: 'Design 1',
        img: dune,
        type:'square'
    },
]

export default design;