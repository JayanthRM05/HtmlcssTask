import { useMemo, useState } from "react";
import PlusIcon from "../Icons/PlusIcon";
import { Column, Id, Task } from "../types";
import ColumnContainer from "./ColumnContainer";
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCard from "./TaskCard";

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);
  const columnsId = useMemo(()=> columns.map((col) => col.id),[columns])

  console.log(columns);


const [tasks,setTasks] = useState<Task[]>([]);


  const [activeColumn, setActiveColumn] = useState<Column | null>(null);

const [activeTask,setActiveTask]= useState<Task | null>(null)
  const sensors = useSensors(useSensor(PointerSensor,{
    activationConstraint:{
        distance:3,//3px

    }
  } ) 
);
      


  return (
    <div
      className="m-auto
    flex
    min-h-screen
    w-full
    items-center
    overFlow-x-auto
    overflow-y-hidden
    px-[40px]
    "
    >
        <DndContext
         sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd}
         onDragOver={onDragOver}
         
         >
      <div
        className="
        m-auto
        flex
        gap-4"
      >
        <div
          className="
           flex 
           gap-4 "
        >
            <SortableContext items={columnsId}>
          {columns.map((col) => (
            <ColumnContainer key={col.id} 
            column={col}
            deleteColumn={deleteColumn} 
            updateColumn={updateColumn}
            createTask={createTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
            tasks={tasks.filter(task => task.columnId === col.id)}
            />
          ))}
          </SortableContext>
        </div>
        <button
          onClick={() => {
            createNewColumn();
          }}
          className="
    h-[60px]
    w-[350px]
    main-w-[350px]
    cursor-pointer
    rounded-lg
    bg-mainBackgroundColor
    border-columnBackgroundColor
    border-ColumnBackgroundColor
    p-4
    ring-rose-500
    hover:ring-2
    flex
    gap-2
    "
        >
          <PlusIcon />
          Add Column
        </button>
      </div>
{createPortal(
<DragOverlay>
{activeColumn &&(
    <ColumnContainer
            column={activeColumn}
            deleteColumn={deleteColumn}
            updateColumn={updateColumn}
            createTask={createTask} 
            deleteTask={deleteTask}
            updateTask={updateTask}
            tasks={tasks.filter(task => task.columnId === activeColumn.id)}
            
           
            />
            
)}
 {activeTask && <TaskCard task={activeTask} deleteTask={deleteTask} updateTask={updateTask}/>}

</DragOverlay>,
document.body
)}

      </DndContext>
    </div>
    
  );

function createTask(columnId:Id){

    const newTask:Task={
        id: generateId(),
        columnId,
        content:`Task ${tasks.length+1}`,
    }
    setTasks([...tasks,newTask])
}

function deleteTask(id: Id){
    const newTasks = tasks.filter((task)=> 
        task.id !== id);
    setTasks(newTasks)
}

 function updateTask(id:Id, content:string){

    const newTasks = tasks.map((task)=>{
        if (task.id !== id) return task;
        return {...task,content}
    })
    setTasks(newTasks);
 }

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id:Id){
    const filteredColumns = columns.filter(col => col.id !== id);
    setColumns(filteredColumns);

    const newTasks = tasks.filter(t => t.columnId !== id);
    setTasks (newTasks)
  }
  function updateColumn(id: Id, title:string){

    const newColumns = columns.map(col =>{
         if (col.id !== id) return col;
         return{...col, title};
    })
    setColumns(newColumns)
  }

function onDragStart(event:DragStartEvent){
   console.log("DRAG START" , event);
   if( event.active.data.current?.type === "Column") {
    setActiveColumn(event.active.data.current.column)
    return;
   }
   if( event.active.data.current?.type === "Task") {
    setActiveTask(event.active.data.current.task)
    return;
   }
}
function onDragEnd(event:DragEndEvent){
 setActiveColumn(null);
 setActiveTask(null);

 const {active,over}= event;
 if(!over) return;

    const activeColumnId= active.id;
    const overColumnId =over.id;


    if (activeColumnId===overColumnId) return;
 setColumns(columns=>{
    const activeColumnIndex = columns.findIndex(col => col.id ===
        activeColumnId )
        const overColumnIndex = columns.findIndex( (col)=> col.id === overColumnId);

        return arrayMove(columns,activeColumnIndex,overColumnIndex)
 })
}



function onDragOver(event: DragOverEvent){
    const {active,over}= event;
 if(!over) return;

    const activeId = active.id;
    const overId = over.id;


    if (activeId === overId) return;

    const isActiveATask=active.data.current?.type === "Task";
    const isOverATask=over.data.current?.type === "Task";



    if (! isActiveATask) return;
    // iamdroping a Task over another task
if(isActiveATask && isOverATask){
    setTasks((tasks)=>{

const activeIndex =tasks.findIndex((t)=>t.id=== activeId);
const overIndex = tasks.findIndex((t)=> t.id === overId);


 tasks[activeIndex].columnId = tasks[overIndex].columnId;


 return arrayMove(tasks,activeIndex,overIndex)
    });


}

const isOverAColumn = over.data.current?.type === "column";
    // im dropping a task over a column

if(isActiveATask && isOverAColumn){
    setTasks(tasks=>{

        const activeIndex =tasks.findIndex((t)=>t.id === activeId);
       
        
        
         tasks[activeIndex].columnId = overId
        
        
         return arrayMove(tasks,activeIndex,activeIndex)
            });

}
}
}


function generateId() {
  //Generating a random number between 0 and 1
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;
