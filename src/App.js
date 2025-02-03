import TaskFive from "./components/5";
import TaskOne from "./components/1";
import TaskTwo from "./components/2";
import TaskThree from "./components/3";
import TaskFour from "./components/4";
import ZenosParadox from "./components/6ZenosParadox";
import ZenosParadoxSolved from "./components/6ZenosParadoxSolved";
import TaskSeven from "./components/7";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import { useState } from "react";

export default function App() {
  const [taskDisplay, setTaskDisplay] = useState();
  return (
    <>
      <div className="container">
        <h1 className="h1">Please select the task you would like to see</h1>
        <div>
          <ButtonGroup
            orientation="vertical"
            aria-label="Vertical button group"
            variant="contained"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              boxShadow: "none",
            }}
          >
            <Button key="one" onClick={() => setTaskDisplay(1)}>
              Task One
            </Button>
            ,
            <Button key="two" onClick={() => setTaskDisplay(2)}>
              Task Two
            </Button>
            ,
            <Button key="three" onClick={() => setTaskDisplay(3)}>
              Task Three
            </Button>
            ,
            <Button key="four" onClick={() => setTaskDisplay(4)}>
              Task Four
            </Button>
            ,
            <Button key="five" onClick={() => setTaskDisplay(5)}>
              Task Five
            </Button>
            ,
            <Button key="six" onClick={() => setTaskDisplay(6)}>
              Task Six
            </Button>
            ,
            <Button key="seven" onClick={() => setTaskDisplay(7)}>
              Task Seven
            </Button>
            ,
          </ButtonGroup>
        </div>
        <Paper
          elevation={3}
          sx={{
            padding: "15px 50px 15px 50px",
            display: "flex",
            flexDirection: "column",
            minWidth: "1000px",
            minHeight: "150px",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          {taskDisplay && taskDisplay === 1 && <TaskOne />}
          {taskDisplay && taskDisplay === 2 && <TaskTwo />}
          {taskDisplay && taskDisplay === 3 && <TaskThree />}
          {taskDisplay && taskDisplay === 4 && <TaskFour />}
          {taskDisplay && taskDisplay === 5 && <TaskFive />}
          {taskDisplay && taskDisplay === 6 && (
            <>
              <h1>
                Here the paradox is demonstrated. According to Zeno, Achilles
                would never caught the tortoise because he needs to get to the
                tortoise's previous location before moving again.
              </h1>
              <ZenosParadox />
              <h1>
                Here the paradox is solved using maths. Since Achilles moves on
                a speed that is faster than the tortoise he eventually catches
                it
              </h1>
              <ZenosParadoxSolved />
            </>
          )}
          {taskDisplay && taskDisplay === 7 && <TaskSeven />}
        </Paper>
      </div>
    </>
  );
}
