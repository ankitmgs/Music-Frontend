import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import ManageSongs from "./ManageSongs";
import PieChart from "../Graph/PieChart";

const ArtistDashboard = () => {
  const [num, setNum] = useState(100);

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div
            className="card mt-4 p-5 d-flex flex-row justify-content-between"
            style={{ alignItems: "center" }}
          >
            <div style={{ fontWeight: "bolder", fontSize: "2rem" }}>
              Total Music
            </div>
            <div>
              <AnimatedNumbers
                animateToNumber={num}
                fontStyle={{ fontSize: 32 }}
                configs={(number, index) => {
                  return {
                    mass: 1,
                    tension: 230 * (index + 1),
                    friction: 140,
                  };
                }}
              ></AnimatedNumbers>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card mt-4 p-5 d-flex flex-row justify-content-between"
            style={{ alignItems: "center" }}
          >
            <div style={{ fontWeight: "bolder", fontSize: "2rem" }}>
              Total Music
            </div>
            <div>
              <AnimatedNumbers
                animateToNumber={num}
                fontStyle={{ fontSize: 32 }}
                configs={(number, index) => {
                  return {
                    mass: 1,
                    tension: 230 * (index + 1),
                    friction: 140,
                  };
                }}
              ></AnimatedNumbers>
            </div>
          </div>{" "}
        </div>
        <div className="col-md-4">
          <div
            className="card mt-4 p-5 d-flex flex-row justify-content-between"
            style={{ alignItems: "center" }}
          >
            <div style={{ fontWeight: "bolder", fontSize: "2rem" }}>
              Uploaded Songs
            </div>
            <div>
              <AnimatedNumbers
                animateToNumber={num}
                fontStyle={{ fontSize: 32 }}
                configs={(number, index) => {
                  return {
                    mass: 1,
                    tension: 230 * (index + 1),
                    friction: 140,
                  };
                }}
              ></AnimatedNumbers>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-4 p-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h4>Manage Songs</h4>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div style={{ height: "20rem", overflowY: "auto" }}>
                    <ManageSongs />
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card mt-4 p-4">
            <center style={{maxWidth: "30rem"}}>
              <PieChart chartData={data} />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDashboard;
