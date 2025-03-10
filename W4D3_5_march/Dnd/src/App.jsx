import { useState } from 'react';
import './App.css';
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensors, useSensor } from '@dnd-kit/core';
import Column from './components/column/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Input } from './components/input/input';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Jayanth1" },
    { id: 2, title: "Jayanth2" },
    { id: 3, title: "Jayanth3" },
  ]);

  const addTasks = (title) => {
    setTasks(tasks => [...tasks, { id: tasks.length + 1, title }])
  }

  const getTaskPos = id => tasks.findIndex(task => task.id === id);
  
  const handleDragEnd = event => {
    const { active, over } = event;
    if (active.id === over.id) return;
    
    setTasks(tasks => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      
      return arrayMove(tasks, originalPos, newPos);
    })
  }

  // Use useSensors to combine multiple sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  return (
    <div className="App">
      <h1>My Tasks ✅ </h1>
      <DndContext
        sensors={sensors} 
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Input onSubmit={addTasks} />
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default App;
