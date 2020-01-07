import React, { Component } from "react";
import TinkerNewsList from "./TinkerNewsList";

const newsFromDatabase = [
  {
	id: '1',
	title: 'Weekly challenge!',
	description:
	  "We're going way way wayyyy back to Prehistory. Make a project about things that lived thousand (or millions) of year ago!",
  },
  {
	id: '2',
	title: '3D printer Tutorial Update',
	description:
	  'Have a look at our improved 3D printer tutorial!',
  },
  {
	id: '3',
	title: 'Hello Banana!',
	description:
	  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
  },
]

class TinkerNews extends Component {
  state={
    news: newsFromDatabase
  }

  render() {
    const {news} = this.state;

    return (
      <div>
        <div className='red-title'>Tinker News</div>
        <TinkerNewsList news={news}/>
      </div>
    );
  }
}

export default TinkerNews;
