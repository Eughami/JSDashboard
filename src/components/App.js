import React, { Component } from 'react';
import NumberWidgetContainer from '../components/NumberWidgetContainer'
import ListWidgetContainer from '../components/ListWidgetContainer'
import GraphWidgetContainer from '../components/GraphWidgetContainer'
// Import widgets being used in this component

// Add in styles
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Add Widgets to display */}

                <ListWidgetContainer
                  href="http://localhost:3001/stats/top"
                  heading="Top Ticets Answers"
                  rowspan={3} />

                <NumberWidgetContainer href="http://localhost:3001/tickets/open"
                  heading="open a Theatre"
                />

                <GraphWidgetContainer
                  href="http://localhost:3001/tickets/progression"
                  heading="Tickets Over Time"
                  colspan={2} rowspan={2}
                />
                <NumberWidgetContainer href="
                  http://localhost:3001/tickets/today"
                  heading="Tickets Opened Today"
                />
                <NumberWidgetContainer href="http://localhost:3001/tickets/urgent"
                  heading="Tickets Marked 'Urgent'"
                />
                <NumberWidgetContainer href="
                  http://localhost:3001/stats/response"
                  heading="4 Hour Response %"
                colspan={2}
              />
            </div>
        );
    }
}

export default App;
