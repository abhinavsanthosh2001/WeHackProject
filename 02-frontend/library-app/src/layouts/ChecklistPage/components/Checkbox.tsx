import { Link } from "react-router-dom";
import React, { useState } from 'react';

export const Checkbox =()=>{
    
      const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Accept Admission Offer', checked: false },
        { id: 2, label: 'Verify Admitted Major: Check your admitted major as listed in your admissions acceptance letter and academics tab in Galaxy.', checked: false },
        { id: 3, label: 'Register for Freshman Orientation', checked: false },
        { id: 4, label: 'ALEKS Math Placement Assessment Exam OR college level math credits earned while in high school', checked: false },
        { id: 5, label: 'Review and resolve any holds on your account', checked: false },
        { id: 6, label: 'Optional Computer Science Placement Test: ', checked: false },

        /*{ id: 1, label: 'Calculus (AB or BC)', checked: false },
        { id: 2, label: 'Physics C Mechanics', checked: false },
        { id: 3, label: 'Physics C Electromagnetism and Waves', checked: false },
        { id: 4, label: 'Computer Science A', checked: false },
        { id: 5, label: 'Applying for Admission', checked: false },
        { id: 6, label: 'Freshman Orientation', checked: false },
        { id: 7, label: 'Math Placement: The ALEKS Assessment OR college level math credits earned while in high school.', checked: false },*/
        
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
          <h2>Freshman Checklist</h2>
            {checkboxes.map(checkbox => (
                <div key={checkbox.id} style={{ marginLeft: '50px', marginBottom: '10px' }}>
                  
                    <input
                        type="checkbox"
                        id={checkbox.id+""}
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    <label htmlFor={checkbox.id + ""} style={{ marginLeft: '5px', fontSize: '18px' }}>{checkbox.label}</label>
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