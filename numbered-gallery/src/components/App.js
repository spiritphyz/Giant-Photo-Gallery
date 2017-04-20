import React from 'react';
import { Store } from './Store';
import MediaObject from './MediaObject';
import NumberBar from './NumberBar';
import '../css/app.css';

let images = Store.imgData;
let imgUrl = Store.imgData[1].url;
let alt = Store.imgData[1].alt;
let heading = Store.imgData[1].title;
let text = Store.imgData[1].description;

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="container-fluid">
          <NumberBar images={ images }></NumberBar>
          <MediaObject
            imgUrl={ imgUrl }
            alt={ alt }
            heading={ heading }
            text={ text }
          >
          </MediaObject>
        </div>
      </div>
    );
  }
}

export default App;
