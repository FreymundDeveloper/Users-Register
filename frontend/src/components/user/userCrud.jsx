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
        this.fetchUsers();
    }

    async fetchUsers() {
        try {
            const response = await axios.get(baseUrl);
            this.setState({ list: response.data });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    clear() {
        this.setState({ user: initialState.user });
    }

    async save() {
        const user = this.state.user;

        if (!user.name || !user.email) {
            alert("Name and email are required!");
            return;
        }

        const method = (user.id) ? 'put' : 'post';
        const url = (user.id) ? `${baseUrl}/${user.id}` : baseUrl;

        try {
            const response = await axios[method](url, user);
            const list = this.getUpdateList(response.data);
            this.setState({ user: initialState.user, list });
        } catch (error) {
            console.error('Error saving user:', error);
        }
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

    async remove(user) {
        try {
            await axios.delete(`${baseUrl}/${user.id}`);
            const list = this.getUpdateList(user, false);
            this.setState({ list });
        } catch (error) {
            console.error('Error deleting user:', error);
        }
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
