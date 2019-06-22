import React from 'react';
import background from './background.jpg';


function HomepageMain(props){
 return (
<div>
<image src={background} />
<div className="section white">
<div className="row container">
<h2 className="header">
A Friend in Need
</h2>
<p className="grey-text text-darken-3 lighten-3">
You don't have to go through lifes struggles alone. You will always have a friend when you are in need.
</p>
</div>
</div>
</div>
 );
};

export default HomepageMain;