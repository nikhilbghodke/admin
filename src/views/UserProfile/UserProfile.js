import React,{useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import avatar from "assets/img/faces/marc.jpg";
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, Typography } from "@material-ui/core";

const useStyles =makeStyles((theme) => ( {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  formControl: {
    //margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
}}))



export default function UserProfile() {
  const classes = useStyles();
  const [noProducts,setProduct] =useState(2)
 
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={7}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Customer Details</h4>
              
            </CardHeader>
            <CardBody>
              <GridContainer alignItems="baseline">
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Customer Phone"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
                <GridItem xs={12} md={6}>
                <Button color="primary">Get Details</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Customer Name"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
                
              </GridContainer>
              
            
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  
                  <CustomInput
                    labelText="Customer Address"
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 2
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Customer Previous History</h4>
              
            </CardHeader>
            <CardBody profile>
              
              <GridContainer>
                <GridItem xs={6}>
                  <Typography variant="body1">No of Transactions</Typography>
                  
                </GridItem>
                <GridItem xs={6}>
                  10
                </GridItem>
                <GridItem xs={6}>
                <Typography variant="body1">Last Transaction , Location</Typography>
                </GridItem>
                <GridItem xs={6}>
                  28 Nov,2020 / Pratap Nagar
                </GridItem>
                <GridItem xs={6}>
                <Typography variant="body1">
                    Most Frequently Bought Item
                    </Typography>
                </GridItem>
                <GridItem xs={6}>
                  Dark Chocolate 500Gm
                </GridItem>
                <GridItem xs={6}>
                <Typography variant="body1">
                    Loyalty Points
                    </Typography>
                </GridItem>
                <GridItem xs={6}>
                  200
                </GridItem>
              </GridContainer>
            
              
            </CardBody>
            
          </Card>
        </GridItem>
        <GridItem xs={12} md={12}>
          <Card>
          <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Sale</h4>
            </CardHeader>
            <CardBody>
              <GridContainer alignItems="baseline">
                <GridItem xs={12} md={5}>
                  <Typography variant="body2">Products</Typography>
                </GridItem>
                <GridItem xs={12} md={2}>
                  <Typography variant="body2">Quantity</Typography>
                </GridItem>
                <GridItem xs={12} md={2}>
                  <Typography variant="body2">Rate</Typography>
                </GridItem>
                <GridItem xs={12} md={2}>
                  <Typography variant="body2">Ammount</Typography>
                </GridItem>
                <GridItem xs={12} md={1}>
                  <IconButton><AddIcon/></IconButton>
                </GridItem>
              </GridContainer>
              
              <GridContainer alignItems="baseline" >
              <GridItem xs={12} md={5}>
              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Products</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Dark Chocolate</MenuItem>
                <MenuItem value={20}>Red velvet</MenuItem>
                <MenuItem value={30}>Another Cake</MenuItem>
              </Select>
            </FormControl>
              </GridItem>
              <GridItem xs={12} md={2}>
                <TextField id="standard-basic" label="Rate" />
              </GridItem>
              <GridItem xs={12} md={2}>
                <TextField id="standard-basic" label="Quantity" />
              </GridItem>
              <GridItem xs={12} md={2}>
                <TextField id="standard-basic" label="Ammount" />
              </GridItem>
              <GridItem xs={12} md={1}>
                <IconButton>
                  <CloseIcon/>
                </IconButton>
              </GridItem>
      </GridContainer>
              
            </CardBody>
            
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
