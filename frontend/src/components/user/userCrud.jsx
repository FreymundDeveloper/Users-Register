import React, { Component } from "react";
import Main from '../templates/Main/Main';

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Users Register: Crate, Read, Update and Delete'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                User
            </Main>
        );
    }
}