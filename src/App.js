import logo from './logo.svg';
import './App.css';
import FontSize from './FontSize.js';
import Table from './Table.js';
import ToDo from './ToDo.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontSize />
        <Table 
          head={["ID", "Song Name", "Length in Seconds", "Album ID"]}
          body={[
            {
              id: 1,
              song_name: "Running in Circles",
              length_sec: 236,
              album_id: 1
            },
            {
              id: 2,
              song_name: "Careful What You Wish For",
              length_sec: 271,
              album_id: 1
            }
          ]}
        />
        <ToDo
          body={[
            {
              id:1,
              value: "Check the mail"
            },
            {
              id:2,
              value: "Feed the dog"
            }
          ]}
        />
      </header>
    </div>
  );
}

export default App;
