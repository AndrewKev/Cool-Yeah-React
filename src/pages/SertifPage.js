import React, { Fragment } from "react";

// json
import data from './sertif.json';

// css
import '../style/output.css';

class SertifPage extends React.Component {
  render() {
    return (
      <Fragment>
        <main className="px-32">
          <div className="grid gap-6 grid-cols-4 justify-items-center">
            {data.sertif.map((srt) => {
              return (
                <img class="w-56 rounded" src={srt.url} alt=""/>
              )
            })}
          </div>
        </main>
      </Fragment>
    );
  }
}

export default SertifPage;