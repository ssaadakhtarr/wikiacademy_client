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
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import PublicProfile from "./components/PublicProfile";
import WebHackingPath from "./components/WebHackingPath";
import VulPath from "./components/VulPath";
import AddRoom from "./components/AddRoom";
import Footer from "./components/Footer";
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
import { Box } from "@material-ui/core";
import Test from "./components/Test";
import SqliOne from "./components/labs/2/SqliOne";
import routes from "./GetRoute";
import Xss from "./components/XSS";
/* Client\src\fonts\style.css */

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  const [{ User }, dispatch] = useStateValue();
  const [{ Admin }] = useStateValue();
  const [loading, setLoading] = React.useState(true);
  const [checkCookie, setCheckCookie] = React.useState();
  console.log("In app.js User is: ");
  console.log(User);
  if (User !== null) {
    localStorage.setItem("user", JSON.stringify(User));
  }
  if (Admin !== null) {
    localStorage.setItem("admin", JSON.stringify(Admin));
  }

  Axios.defaults.withCredentials = true;
  const cookies = new Cookies();
  const user = JSON.parse(localStorage.getItem("user"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  //Defining specific routes
  const ProtectedRoute = ({ component: Component, roles, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        if (user && cookies.get("userId") == user.session) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/signin" }} />;
        }
      }}
    />
  );

  const AdminLoginRoute = ({ component: Component, roles, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        if (cookies.get("isAdmin") === "true") {
          return <Component {...props} />;
        } else if (
          cookies.get("isAdmin") === "true" &&
          admin &&
          cookies.get("userId") == admin.session
        ) {
          return <Redirect to={{ pathname: "/admin-dashboard" }} />;
        } else {
          return <Redirect to={{ pathname: "/error" }} />;
        }
      }}
    />
  );

  const AdminRoute = ({ component: Component, roles, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        // console.log(cookies.get("userId"), admin.session);
        if (
          cookies.get("isAdmin") === "true" &&
          admin &&
          cookies.get("userId") == admin.session
        ) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/error" }} />;
        }
      }}
    />
  );

  const NormalRoute = ({ component: Component, roles, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        if (user && cookies.get("userId") == user.session) {
          return <Redirect to={{ pathname: "/dashboard" }} />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );

  useEffect(() => {
    Axios.post(`${routes}/updateRank`, {}).then((response) => {});

    Axios.post(`${routes}/updateTitle`).then((response) => {});
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          backgroundColor: "#141d2b",
          height: "100vh",
          minHeight: "100vh",
        }}
      >
        <Box
          style={{
            backgroundColor: "#141d2b",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <HashLoader
            color={"#9fef00"}
            loading={true}
            css={override}
            size={150}
          />
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <Switch>
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/hacktivities" component={Hacktivities} />
          <Route path="/p/:username" component={PublicProfile} />
          <Route path="/path/tools" component={ToolsPath} />
          <Route path="/path/beginner" component={CompleteBegineer} />
          <Route path="/path/web-hacking" component={WebHackingPath} />
          <Route path="/path/vulnpath" component={VulPath} />
          <Route path="/footer" component={Footer} />
          <Route path="/faq" component={Faq} />
          <Route path="/blog" component={Blog} />
          <Route path="/test" component={Test} />
          <Route path="/blogs/:blogid" component={BlogPage} />

          <NormalRoute path="/" component={Home} exact />
          <NormalRoute path="/signup" component={Signup} />
          <NormalRoute path="/signin" component={Signin} />
          <NormalRoute path="/password-reset" component={Forgot} />

          <ProtectedRoute path="/add-blog" component={AddBlog} />
          <ProtectedRoute path="/labs/2/sqli-one" component={SqliOne} />
          <ProtectedRoute path="/labs/3/xss" component={Xss} />
          <ProtectedRoute path="/private" />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/room/:roomname" component={Room} />

          <AdminLoginRoute path="/admin-Login" component={AdminLogin} />

          <AdminRoute path="/add-room" component={AddRoom} />
          <AdminRoute path="/admin-dashboard" component={AdminDashboard} />
          <AdminRoute path="/update-user" component={UpdateUser} />
          <AdminRoute path="/delete-room" component={DeleteRooms} />
          <AdminRoute path="/pending-blogs" component={PendingBlogs} />
          <AdminRoute path="/delete-blogs" component={DeleteBlogs} />

          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
