import { Square } from "./Square"

export const DrawingMatrix = () => {
    const matrix: Array<Array<number>> = Array(52).fill(Array(7).fill(0));

    return <div style={{display: 'flex', flexDirection: 'row', width: '200px'}}>
        {matrix.map((week) => {
            return <div>
                {week.map((day) => {
                    return <Square color={day} onClick={()=>{}} />
                })}
            </div>
        })}
    </div>
}