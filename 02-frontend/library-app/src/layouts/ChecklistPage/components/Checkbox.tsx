import { Link } from "react-router-dom";
import React, { useState } from 'react';

export const Checkbox =()=>{
    
      const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Option 1', checked: false },
        { id: 2, label: 'Option 2', checked: false },
        { id: 3, label: 'Option 3', checked: false },
        // Add more options as needed
    ]);

    const handleCheckboxChange = (id: number) => {
        setCheckboxes(prevCheckboxes =>
            prevCheckboxes.map(checkbox =>
                checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
            )
        );
    };

    return (
        <div>
            {checkboxes.map(checkbox => (
                <div key={checkbox.id}>
                    <input
                        type="checkbox"
                        id={checkbox.id+""}
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    <label htmlFor={checkbox.id+""}>{checkbox.label}</label>
                </div>
            ))}
        </div>

    );
    
}

/*interface Item {
    id: number;
    text: string;
    completed: boolean;
  }
  
  const Checkbox: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [text, setText] = useState<string>('');
  
    const addItem = () => {
      if (text.trim() !== '') {
        const newItem: Item = {
          id: Date.now(),
          text: text,
          completed: false,
        };
        setItems([...items, newItem]);
        setText('');
      }
    };
  
    const toggleComplete = (id: number) => {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      );
    };
  
    return (
      <div>
        <h2>Checkbox

        </h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new item"
        />
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(item.id)}
              />
              <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Checkbox;*/