// const heading = React.createElement("h1",{id : "heading"},"hello world from react baby!!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
  
// root.render(heading);

/**<div id = "parent"> 
 *      <div id = "child">
 * 
 *          <h1> "hi, this is h1 tag using react" </h1>
 *          <h2> "hi, now this is h2 tag also using react" </h2>
 * 
 *      </div>
 * </div>
 * */

const parent = React.createElement("div", {id: "parent"},
        React.createElement("div", {id: "child"},
        [React.createElement("h1", {},"hi , i am a h1 using react.js") ,
         React.createElement("h4", {},"hi , i am h4 tag written using react.js")]));
          
         

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

const akshay = React.createElement("div")










