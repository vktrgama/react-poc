import React from 'react';
import timelineItems from "./timelineItems";
import Timeline from './Components/Timeline';
import './App.css'

function App() {
    return (
        <div className="main">
          <div className="app-title">
            <h2>Start editing to see some magic happen {"\u2728"}</h2>
            <h3>{timelineItems.length} timeline items to render</h3>
          </div>
          <Timeline events={timelineItems}/>
          <div>
            <h2>Timeline details:</h2>
            <ul>
              <li>
                Implement a rudimentaty scrolling based on div overflow, a better UX can be done with more time, and not a requirement in the current scope.
              </li>
              <li>
                Inline edition is implemented and is activated when user click the name of the event (text). Updates are stored in state and not persisted, refresh will load original data,
                 to submit user can press enter or press the close button.
              </li>
              <li>
                Drag-drop functionallity is not implemented, it requires time to do from scratch, in normal ciscumstances an open source library can be use for it. (i.e. <a href="https://github.com/atlassian/react-beautiful-dnd">React Beautiful DnD</a> from Atlassian).
              </li>
              <li>
                Zoom, nice to have, however, scope is ambiguos and description is broad, not clear requirements.
              </li>
            </ul>
          </div>
      </div>
    );
}

export default App;
