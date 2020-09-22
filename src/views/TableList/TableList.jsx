

import React,{useState} from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardFooter from "components/Card/CardFooter.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
 const { classes } = props;
  
  return (
    <div>
    <GridContainer>
      <GridItem xs={12} sm={12} md={8}>
        <form >
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Change Password</h4>
              <p className={classes.cardCategoryWhite}>
                Change Your Password
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
              <GridItem xs={19} sm={19} md={7}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                  
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      required: true,
                      defaultValue: "",
                      name: "password"
                    }}
                  />
                </GridItem>
                <GridItem xs={19} sm={19} md={7}>
                  <CustomInput
                    labelText="Confirm Password"
                    id="confirm_password"
                
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      required: true,
                      defaultValue:"",
                      name: "confirm_passowrd"
                    }}
                  />
                </GridItem>
             
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button type="submit" color="primary">
                Change Password
              </Button>
            </CardFooter>
          </Card>
        </form>
      </GridItem>
      </GridContainer>
      </div>
  );
}

export default withStyles(styles)(TableList);

