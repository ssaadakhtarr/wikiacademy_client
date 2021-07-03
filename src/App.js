import React, { useState, Component, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import Axios from "axios";
import "./App.css";
import Error from "./components/Error";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import userAuthenticated from "./components/Signin";
import checkAuth from "./components/Signin";
import Cookies from "universal-cookie";
import Forgot from "./components/Forgot";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Hacktivities from "./components/Hacktivities";
import ToolsPath from "./components/ToolsPath";
import CompleteBegineer from "./components/CompleteBegineer";
import Faq from "./components/Faq";


import Paths from "./components/Paths";
import Room from "./components/Room";
import NeueHaas from "./fonts/NeueHaasUnica-Regular.woff2";
import { createMuiTheme, responsiveFontSizes, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import {useStateValue} from "./StateProvider";
import PublicProfile from "./components/PublicProfile";
import WebHackingPath from "./components/WebHackingPath";
import VulPath from "./components/VulPath";
import AddRoom from "./components/AddRoom"
import Footer from "./components/Footer";
import CircleProgress from "./components/CircleProgress";
import AdminDashboard from "./components/AdminDashboard";
import UpdateUser from "./components/UpdateUser";
import DeleteRooms from "./components/DeleteRooms";
import PendingBlogs from "./components/PendingBlogs";
import DeleteBlogs from "./components/DeleteBlogs";
import Blog from "./components/Blog";
import BlogPage from "./components/BlogPage";
import AddBlog from "./components/AddBlog";
import AdminLogin from "./components/AdminLogin";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import {Box} from "@material-ui/core";
/* Client\src\fonts\style.css */

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


// const neueHaas = {
//   fontFamily: 'Neue Haas Unica',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//    local('Neue Haas Unica Regular'), 
//   local('Neue-Haas-Unica-Regular'),
//   url(${NeueHaas}) format('woff2'),
//   `
 
// }

function App() {
  const [{User}, dispatch] = useStateValue();
  const [loading, setLoading] = React.useState(true);
  console.log("In app.js User is: ");
  console.log(User);
  if (User !== null) {
  localStorage.setItem('user', JSON.stringify(User));
  }

  // const theme = createMuiTheme({
  //   typography: {
  //     fontFamily: '"neue-haas-unica",sans-serif',
  //   },
  //   overrides: {
  //     MuiCssBaseline: {
  //       '@global': {
  //         '@font-face': [neueHaas],
  //       },
  //     },
  //   },
  // });

  Axios.defaults.withCredentials = true;
  const cookies = new Cookies();

  //Defining specific routes
  const ProtectedRoute = ({
    component: Component,
    roles,
    ...rest
  }) => (
    <Route
      {...rest}
      render={(props) => {
        if (!cookies.get("userId")) {
          return <Redirect to={{ pathname: "/signin" }} />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );

  const NormalRoute = ({
    component: Component,
    roles,
    ...rest
  }) => (
    <Route
      {...rest}
      render={(props) => {
        if (cookies.get("userId")) {
          return <Redirect to={{ pathname: "/dashboard" }} />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  ); 

      useEffect(() => {
        Axios.post("http://localhost:3001/updateRank", {

        }).then((response) => {
          console.log(response.data);
        })
      }, [])

      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2500);
      }, [])


      if(loading) {
        return  (
          <div style={{backgroundColor: "#141d2b",height: '100vh', minHeight : '100vh'}}>
        <Box style={{backgroundColor: "#141d2b", position:"fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", }} >
        <HashLoader color={"#9fef00"} loading={true} css={override} size={150} />
        </Box>
       
      </div>
        );
      } else {

      


  return (
    <div>

      <Switch>
        <NormalRoute path="/" component={Home} exact/>
        <NormalRoute path="/signup" component={Signup} />
        <NormalRoute path="/signin" component={Signin} />
        <NormalRoute path="/password-reset" component={Forgot} />
        <ProtectedRoute path="/private" />
        <Route path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/hacktivities" component={Hacktivities} />
        <Route path="/room/:roomname" component={Room} />
        <ProtectedRoute path="/p/:username" component={PublicProfile} />
        <Route path="/path/tools" component={ToolsPath} />
        <Route path="/path/beginner" component={CompleteBegineer} />
        <Route path="/path/web-hacking" component={WebHackingPath} />
        <Route path="/path/vulnpath" component={VulPath} />
        <Route path="/add-room" component={AddRoom} />
        <Route path="/footer" component={Footer} />
        <Route path="/faq" component={Faq} />
        <Route path="/admin-Login" component={AdminLogin}/>
        

        <Route path="/circle" component={CircleProgress} />

        <Route path="/admin-dashboard" component={AdminDashboard}/>
        <Route path="/update-user" component={UpdateUser}/>
        <Route path="/delete-room" component={DeleteRooms}/>
        <Route path="/pending-blogs" component={PendingBlogs}/>
        <Route path="/delete-blogs" component={DeleteBlogs}/>

        <Route path="/blog" component={Blog}/>

        <Route path="/test" component={BlogPage}/>

        <ProtectedRoute path="/add-blog" component={AddBlog}/>
        <Route path="/blogs/:blogid" component={BlogPage}/>

        <Route component={Error} />
      </Switch>
      </div>
  
  );
}
}

export default App;