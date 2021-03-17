import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import SuperAdminRoute from "./SuperAdminRoute";
import Home from "../Components/pages/Home";
import Signin from "../Components/pages/Signin";
import MyBookings from "../Components/pages/Bookings";
import AllBookings from "../Components/pages/Bookings/all";
import AddNewBus from "../Components/pages/AddNewBus";
import EditBus from "../Components/pages/AddNewBus/EditBus";
import EditProfile from "../Components/pages/Profile/edit";
import BusAvailable from "../Components/pages/BusAvailable";
import AllBusAvailable from "../Components/pages/BusAvailable/all";
import BusUnavailable from "../Components/pages/BusUnavailable";
import AllBusUnavailable from "../Components/pages/BusUnavailable/all";

import Seats from "../Components/pages/Seats";
import Locations from "../Components/pages/Locations";
import EditLocation from "../Components/pages/Locations/edit";
import AddLocation from "../Components/pages/Locations/add";
import Travels from "../Components/pages/Travels";
import EditTravel from "../Components/pages/Travels/edit";
import AddTravel from "../Components/pages/Travels/add";

const MainRouter = () => (
  <Switch>
    <Route path="/signin" exact component={Signin} />
    <Route path="/my-bookings" exact component={MyBookings} />
    <Route path="/" exact component={Home} />
    <Route path="/add-bus" exact component={AddNewBus} />
    <Route path="/edit-bus/:slug" exact component={EditBus} />
    <Route path="/bus-available" exact component={BusAvailable} />
    <Route path="/bus-unavailable" exact component={BusUnavailable} />
    <Route path="/seats-details/:slug" exact component={Seats} />
    <Route
      path="/profile/edit"
      exact
      component={EditProfile}
    />
    <Route path="/all-bookings" exact component={AllBookings} />
    <Route
      path="/all-bus-available"
      exact
      component={AllBusAvailable}
    />
    <Route
      path="/all-bus-unavailable"
      exact
      component={AllBusUnavailable}
    />
    
    <Route path="/locations" exact component={Locations} />
    <Route path="/add-location" exact component={AddLocation} />
    <Route path="/edit-location/:slug" exact component={EditLocation} />
    <Route path="/travels" exact component={Travels} />
    <Route path="/add-travel" exact component={AddTravel} />
    <Route path="/edit-travel/:slug" exact component={EditTravel} />
  </Switch>
);

export default MainRouter;
