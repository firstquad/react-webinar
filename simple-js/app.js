require("bootstrap/dist/css/bootstrap.css");
import React, {Component} from "react";
import {render} from "react-dom";
import GridComponent from "./grid";
import {SummaryActive} from "./summaries";

render(
    <GridComponent>
        <SummaryActive/>
        {/*<SummaryUsers/>*/}
    </GridComponent>,
    document.getElementById('app')
);
