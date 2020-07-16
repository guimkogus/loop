import React from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import { Container } from "./styles";

export default ({ description }) => {
  return (
    <Container>
      <img src={description.image} alt={"Car"} />
      <p className="name">{description.name}</p>
      <p className="details">{description.details}</p>
      <p className="price">{description.price}</p>
      <hr />
      <div className="locationContainer">
        <LocationOnOutlinedIcon />
        <p className="location">{description.location}</p>
      </div>
    </Container>
  );
};
