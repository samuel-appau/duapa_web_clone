// import React from "react";
// import PropTypes from "prop-types";
// // @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// import Hidden from "@material-ui/core/Hidden";
// // core components
// import GridItem from "components/Grid/GridItem.jsx";
// import GridContainer from "components/Grid/GridContainer.jsx";
// import Card from "components/Card/Card.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
// import CardBody from "components/Card/CardBody.jsx";

// import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";

// function Icons(props) {
//   const { classes } = props;
//   return (
//     <GridContainer>
//       <GridItem xs={12} sm={12} md={12}>
//         <Card plain>
//           <CardHeader plain color="primary">
//             <h4 className={classes.cardTitleWhite}>Material Design Icons</h4>
//             <p className={classes.cardCategoryWhite}>
//               Handcrafted by our friends from{" "}
//               <a
//                 href="https://design.google.com/icons/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Google
//               </a>
//             </p>
//           </CardHeader>
//           <CardBody>
//             <Hidden only={["sm", "xs"]}>
//               <iframe
//                 className={classes.iframe}
//                 src="https://material.io/icons/"
//                 title="Icons iframe"
//               >
//                 <p>Your browser does not support iframes.</p>
//               </iframe>
//             </Hidden>
//             <Hidden only={["lg", "md"]}>
//               <GridItem xs={12} sm={12} md={6}>
//                 <h5>
//                   The icons are visible on Desktop mode inside an iframe. Since
//                   the iframe is not working on Mobile and Tablets please visit
//                   the icons on their original page on Google. Check the
//                   <a
//                     href="https://design.google.com/icons/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Material Icons
//                   </a>
//                 </h5>
//               </GridItem>
//             </Hidden>
//           </CardBody>
//         </Card>
//       </GridItem>
//     </GridContainer>
//   );
// }

// Icons.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(iconsStyle)(Icons);



import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
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

function Icons(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={10} sm={10} md={8}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>MONTHLY PAYMENT LOG</h4>
            <p className={classes.cardCategoryWhite}>
              MONTHLY DUES
            </p>
          </CardHeader>
          <CardBody>
            <Table
            tableHeaderColor="primary"
              tableHead={["ID", "Amount", "Status",]}
              tableData={[
                ["1", "20", "Paid"],
                ["2", "20", "Paid"],
                ["3", "40", "Paid"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={10} sm={10} md={8}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Make Payment here
            </h4>
            <p className={classes.cardCategoryWhite}>
            Pay your dues frequently to 
            </p>
          </CardHeader>
          <CardBody>
          <Button type="submit" color="primary">
              Pay here
          </Button>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
export default withStyles(styles)(Icons);




