import "./App.css";
import { Reminder } from "./types/reminder";
import { ChangeEvent, FormEvent, MouseEventHandler, useState } from "react";

const data: Reminder[] = [
  {
    id: 1,
    text: "First reminder",
    stattus: "PENDING",
  },
  {
    id: 2,
    text: "Second reminder",
    stattus: "PENDING",
  },
];

function App() {
  const [text, setText] = useState("");
  const [reminder, setReminder] = useState<Reminder>({} as Reminder);
  const [reminders, setReminders] = useState<Reminder[]>(data);

  const handleTextChange = (e: ChangeEvent) => {
    setText(e.target.value);
  };

  const handleCreateReminder = (e: FormEvent) => {
    e.preventDefault();

    const newReminder: Reminder = {
      id: reminders.length + 1 + +Math.random().toLocaleString(),
      text: text,
      stattus: "PENDING",
    };
    setReminders([...reminders, newReminder]);
  };

  const handleRemove = (id: number) => {
    const filtered = reminders.filter((reminder) => reminder.id != id);
    setReminders([...filtered]);
  };

  return (
    <>
      <div className='container'>
        <h1>Reminders app</h1>

        <form action='' className='mb-4' onSubmit={handleCreateReminder}>
          <label htmlFor=''>Reminder</label>
          <input
            type='text'
            className='form-control '
            value={text}
            onChange={handleTextChange}
          />
          <button type='submit' className='btn btn-success mt-2'>
            CREATE
          </button>
        </form>
        <ul>
          {reminders.map((item: Reminder) => (
            <li className='list-item' key={item.id}>
              {item.text}
              <button
                className='btn btn-danger mr-2'
                onClick={() => handleRemove(item.id)}
              >
                DELETE REMIDNER
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
