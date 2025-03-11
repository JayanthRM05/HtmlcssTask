import { Column } from "../types"

interface props{
    column: Column;


}

const ColumnsContainer = (props:props) => {
  
  const {column}= props;

    return <div
    className="
    bg-columnBackgroundColor
    w-[350px]
    h-[500px]
    max-h-[500px]
    ">{column.title}</div>
  
}

export default ColumnsContainer