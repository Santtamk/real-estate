import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeaturedListing.css";
import config from "../../config";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

export const FeaturedListing = () => {
  const [listingsData, setListingsData] = useState([]);

  async function fetchListing() {
    try {
      const response = await axios.get(
        `${config.backendEndpoint}/real-estate-data`
      );

      const data = response.data.listings;
      setListingsData(data.slice(0, 8));
      // console.log(response);
    } catch (error) {
      setListingsData([]);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListing();
  }, []);

  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {listingsData.length === 0 ? (
          <Grid item>
            <div className="error-message">
              <p>No Featured Listings Found</p>
            </div>
          </Grid>
        ) : (
          listingsData.map((ele, index) => (

         
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`/assets/real-estate-${index}.jpg`}
                  alt={ele.property_name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {ele.property_name.slice(0, 6)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className="listing-details">
                    <span className="property-price">Rs {ele.price}</span>
                    <span className="property-city">Rs {ele.city.slice(0, 6)}</span>
                  </div>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};
