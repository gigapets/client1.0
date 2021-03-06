import React from "react";

class DayPost extends React.Component{
  state = {
    date: "",
    name: "",
    breakfast: "",
    bPoints: "",
    lunch: "",
    lPoints: "",
    dinner: "",
    dPoints: "",
    snacks: "",
    sPoints: "",
    key: ""

  };

  updateDayPost = (event, id) => {
    event.preventDefault();

    const updatedDayPost = {
      date: this.state.date,
    name: this.state.name,
    breakfast: this.state.breakfast,
    bPoints: this.state.bPoints,
    lunch: "",
    lPoints: "",
    dinner: "",
    dPoints: "",
    snacks: "",
    sPoints: "",
    key: ""

    }
  }

  return (
    <div className="dayPost">
    <h3>{props.date}</h3>
    <h3>{props.name}</h3>
    <p>Breakfast: {props.breakfast}</p>
    <p>Breakfast Score: {props.bPoints}</p>
    <p>Lunch:  {props.lunch}</p>
    <p>Lunch Score: {props.lPoints}</p>
    <p>Dinner: {props.dinner}</p>
    <p>Dinner Score: {props.dPoints}</p>
    <p>Snacks: {props.snacks}</p>
      <p>Snack Score: {props.sPoints}</p>
      
      <button onClick={props.deleteDayPost}> Delete Post</button>
                    
    </div>
  );
};

// DayPost.defaultProps = {
//   date: "",
//   name: "",
//   breakfast: "",
//   bPoints: "",
//   lunch: "",
//   lPoints: "",
//   dinner: "",
//   dPoints: "",
//   snacks: "",
//   sPoints: ""
// };

export default DayPost;
