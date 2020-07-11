import React, { Component } from 'react'

export class App extends Component {
  componentDidMount(){
    fetch(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then(r=> r.json())
    .then(console.log)

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App

