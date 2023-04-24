import "./App.css";
import Data from "../src/Data.json";
import ListHeading from "./Components/List_Heading";
import Username from "./Components/Username";
import Position from "./Components/Position";
import Status from "./Components/Status";
import Download from "./Components/Download";
import Action from "./Components/Action";

function App() {
  return (
    <div className="body">
      <table>
        <ListHeading></ListHeading>
        <tbody>
          {Data.users.map((user, index) => {
            return (
              <tr key={index}>
                <Username full_name={user.full_name}></Username>
                <Position designation={user.designation}></Position>
                <Status status={user.active_status}></Status>
                <Download
                  download_total={user.download_completed_rate.total}
                  download_complete={user.download_completed_rate.completed}
                  download_size={user.download_completed_rate.size_type}
                ></Download>
                <Action action={user.invited_status}></Action>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
