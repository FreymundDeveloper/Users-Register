import React from "react";
import Main from "../templates/Main/Main";

export default props =>
    <Main icon={"home"} title={"Register"} subtitle={"Current data in the database."} >
        <div className='display-4'>Welcome!</div>
        <hr />
        <p className='mb-0'>Do you want to register or manage a user?
            You come to the right place!</p>
    </Main>