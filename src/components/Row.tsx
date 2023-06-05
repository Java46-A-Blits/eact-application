import React from "react";
import LifeGameConfig from "../config/LifeGameConfig.json"

function getStyle(cellValue: number): React.CSSProperties{
    const size: number = getCellSize();
    return {
        backgroundColor: !!cellValue? 'black': 'white',
        border: '1px solid gray',
        width: size,
        height: size,
    }
}
function getCellSize(): number {
    return Math.min(window.innerHeight, window.innerWidth)/LifeGameConfig.dimension - 2;
}
type Props = {
    row: number[];
}
const Row: React.FC<Props> = ({row}) => {
    function getCells(): React.ReactNode{
        return row.map((c, i) => <div style = {getStyle(c)} key={i}></div>) // 'row' is in a closure
    }
    return <div style = {{display: "flex"}}>
        {getCells()}
    </div>
}
export default Row