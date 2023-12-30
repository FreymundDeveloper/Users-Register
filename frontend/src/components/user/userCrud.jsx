import React, { Component } from "react";
import axios from 'axios';
import Main from '../templates/Main/Main';
import FormRegister from "../templates/Form/FormRegister";

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

    renderForm() {
        return (
            <FormRegister user={this.state.user} updateField={(event) => this.updateField(event)}
                 save={() => this.save()} clear={() => this.clear()} />
        );
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

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            );
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        );
    }
}