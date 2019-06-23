import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';



function HomepageMain(props){
 return (
<div class="row valign-wrapper card-panel teal lighten-3">
    <div class="col s12 m7">
        <div class="card">
      <div class="card">
        <div class="card-content center">
          <span class="card-title red-text text-lighten-2">Never feel like you have to go it alone.</span>
          <p>You don't have to go through lifes struggles alone. You will always have a friend when you are in need.</p>
        </div>
        <div class="card-action">
          <a href="#">Register</a>
          <a href="#">Sign in</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div>       
     <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
        </div>

 );
};
export default HomepageMain;
export default GoogleApiWrapper({
  apiKey: 'TOKEN HERE'
})(MapContainer);