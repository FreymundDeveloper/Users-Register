import React, { Component } from "react";
import axios from 'axios';
import Main from '../templates/Main/Main';
import FormRegister from "../templates/Form/FormRegister";
import TableUsers from "../templates/Table/TableUsers";

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Users Register: Create, Read, Update and Delete.'
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: { name: '', email: '' },
    list: []
};

export default class UserCrud extends Component {

    state = { ...initialState };

    componentDidMount() {
        axios(baseUrl).then(response => {
            this.setState({ list: response.data });
        });
    }

    clear() {
        this.setState({ user: initialState.user });
    }

    save() {
        const user = this.state.user;
        const method = (user.id) ? 'put' : 'post';
        const url = (user.id) ? `${baseUrl}/${user.id}` : baseUrl;
        
        axios[method](url, user).then(response => {
            const list = this.getUpdateList(response.data);
            this.setState({ user: initialState.user, list });
        });
    }

    getUpdateList(user, add = true) {
        const list = this.state.list.filter(userSelect => userSelect.id !== user.id);
        if (add) list.unshift(user);
        return list;
    }

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    load(user) {
        this.setState({ user });
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(response => {
            const list = this.getUpdateList(user, false);
            this.setState({ list });
        })
    }

    renderForm() {
        return (
            <FormRegister user={this.state.user} updateField={(event) => this.updateField(event)}
                 save={() => this.save()} clear={() => this.clear()} />
        );
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                <TableUsers list={this.state.list} load={(user) => this.load(user)}
                     remove={(user) => this.remove(user)} />
            </Main>
        );
    }
}