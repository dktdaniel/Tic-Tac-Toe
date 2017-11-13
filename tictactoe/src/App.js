import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [[0,0,0], 
              [0,0,0], 
              [0,0,0]]
    };
  }

  handleClick() {
    
  }
  
  render() {
    return (
      <div className="App">
        <Header size='huge' textAlign='center'>Tic Tac Toe</Header>
        <Table celled>
          <Table.Body>
            <Table.Row>
              <Table.Cell selectable>
                <a href='#'>Click here</a>
              </Table.Cell>
              <Table.Cell selectable>
                <a href='#'>Click here</a>
              </Table.Cell>
              <Table.Cell selectable>
                <a href='#'>Click here</a>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell selectable>
                <a href='#'>Click here</a>
              </Table.Cell>
              <Table.Cell selectable>
                <a href='#'>Click here</a>
              </Table.Cell>
              <Table.Cell selectable>
                <a href='#'>Click here</a>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell selectable>
                <a href='#'>Click here</a>
              </Table.Cell>
              <Table.Cell selectable>
                <a href='#'>Click here</a>
              </Table.Cell>
              <Table.Cell selectable>
                <a href='#'>Click here</a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default App;
