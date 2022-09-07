import React from "react";

import styles from "../Design/Home.module.css";

const Card = (props) => {
  return (
    <div className={styles.projectIdDiv} key={props.projectId}>
      <table style={{ textAlign: "left" }}>
        <tr style={{ padding: "30px" }}>
          <th
            style={{
              width: "200px",
              padding: "15px",
              alignSelf: "center",
              fontWeight: "normal",
            }}
          >
            <div>{props.firstProperty}</div>
          </th>
          <th
            style={{ fontWeight: "normal", fontWeight: "normal" }}
          >{`: ${props.firstPropertyDetails}`}</th>
        </tr>
        {props.secondProperty ? (
          <tr>
            <th style={{ padding: "15px", fontWeight: "normal" }}>
              <div>{props.secondProperty}</div>
            </th>
            <th
              style={{ fontWeight: "normal" }}
            >{`: ${props.secondPropertyDetails}`}</th>
          </tr>
        ) : (
          ""
        )}
        {props.thirdProperty ? (
          <tr>
            <th style={{ padding: "15px", fontWeight: "normal" }}>
              <div>{props.thirdProperty}</div>
            </th>
            <th
              style={{ fontWeight: "normal" }}
            >{`: ${props.thirdPropertyDetails}`}</th>
          </tr>
        ) : (
          ""
        )}
        {props.fourthProperty ? (
          <tr>
            <th style={{ padding: "15px", fontWeight: "normal" }}>
              <div>{props.fourthProperty}</div>
            </th>
            <th
              style={{ fontWeight: "normal" }}
            >{`: ${props.fourthPropertyDetails}`}</th>
          </tr>
        ) : (
          ""
        )}
      </table>
    </div>
  );
};

export default Card;
