import React, { useEffect, useState } from "react";
import { Box, Container, TextField, Typography } from "@material-ui/core";
const Xss = () => {
  document.addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault();

    var q = getQueryParameter("q");

    if (q) {
      search(q, function (error, results) {
        showQueryAndResults(q, results);
      });
    }
  });

  function search(q, callback) {
    // callback(null, results);
  }

  function showQueryAndResults(q, results) {
    var resultsEl = document.querySelector(".results");
    var html = "";

    html += "<p>Your search query: " + q + "</p>";

    for (var index = 0; index < results.length; index++) {
      html += "<li>" + results[index] + "</li>";
    }

    html += "</ul>";

    resultsEl.innerHTML = html;
  }

  function getQueryParameter(name) {
    var pairs = window.location.search.substring(1).split("&");
    var pair;

    for (var index = 0; index < pairs.length; index++) {
      pair = pairs[index].split("=");

      if (decodeURIComponent(pair[0]) === name) {
        return decodeURIComponent(pair[1]);
      }
    }

    return false;
  }

  // const [flag, setFlag] = React.useState(false);

  const createMarkup = () => {
    // console.log(getQueryParameter('q'))
    // console.log(decodeURIComponent(getQueryParameter('q')))
    return {
      __html:
        "Your searched query is: " + decodeURIComponent(getQueryParameter("q")),
    };
  };

  const alertFunc = function () {
    var _old_alert = window.alert;

    window.alert = function () {
      if (_old_alert) {
        _old_alert.apply(window, arguments);
        // run some code after the alert

        document.body.innerHTML += "$FLAG{ul25w9nemhjx6dufu9ug98oq2sk74i9w}";
        _old_alert = null;
        return false;
      }
    };
    return false;
  };

  useEffect(() => {
    alertFunc();
  }, []);

  return (
    <div>
      <Box
        padding={10}
        style={{ backgroundColor: "white", minHeight: "100vh" }}
      >
        <form action="" method="GET">
          <Container maxWidth="sm">
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              name="q"
              label="Enter your query"
            />
            <br></br>
            <br></br>

            <TextField
              fullWidth
              style={{ border: "1px solid green" }}
              type="submit"
              value="Search"
            />
          </Container>
          <br></br>
          <br></br>
          <Box style={{ textAlign: "center" }}>
            <Typography variant="h6">
              <div dangerouslySetInnerHTML={createMarkup()} />
            </Typography>
          </Box>
        </form>
      </Box>
    </div>
  );
};
export default Xss;
