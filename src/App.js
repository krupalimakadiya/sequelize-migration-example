import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import { CTable, RTable, DTable, DColumn, RColumn, AColumn } from "./Constants";

const btnCss =
  "text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-8 my-2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: CTable,
      codeType: 'Create Table',
    };
  }

  render() {
    const generateCode = (codeType) => {
      let code = "";
      switch (codeType) {
        case "add column":
          code = AColumn;
          break;
        case "rename column":
          code = RColumn;
          break;
        case "delete column":
          code = DColumn;
          break;
        case "create table":
          code = CTable;
          break;
        case "delete table":
          code = DTable;
          break;
        case "rename table":
          code = RTable;
          break;
        default:
          code = CTable;
      }
      this.setState({ code: code, codeType: codeType });
    };

    const buttonGroup = (
      <div>
        <button class={btnCss} onClick={() => generateCode("create table")}>
          Create Table
        </button>
        <button class={btnCss} onClick={() => generateCode("delete table")}>
          Delete Table
        </button>
        <button class={btnCss} onClick={() => generateCode("rename table")}>
          Rename Table
        </button>
        <button class={btnCss} onClick={() => generateCode("add column")}>
          Add Column
        </button>
        <button class={btnCss} onClick={() => generateCode("rename column")}>
          Rename Column
        </button>
        <button class={btnCss} onClick={() => generateCode("delete column")}>
          Delete Column
        </button>
      </div>
    );

    return (
      <div>
        <Helmet>
          <title>Sequelize migration</title>
          <meta name="description" content="Sequelize migration" />
        </Helmet>
        <div class="container my-12 mx-auto px-4 md:px-12">
          Sequelize migration template
        </div>
        <div class="container my-12 mx-auto px-4 md:px-12">
          {buttonGroup}
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="my-1 px-1 w-full md:w lg:my-4 lg:px-4 lg:w">
              <article class="overflow-hidden rounded-lg shadow-lg">
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="text-lg text-black">Sequelize migration script for {this.state.codeType}</h1>
                </header>

                <div class="block h-auto w-full p-4">
                  <CodeMirror
                    value={this.state.code}
                    options={{
                      theme: "monokai",
                      keyMap: "sublime",
                      mode: "jsx",
                      lineNumbers: false,
                    }}
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
