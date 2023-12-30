import { render } from '@testing-library/react';
import App from './main/App'
import UserCrud from './components/user/userCrud';
import Home from './components/home/Home';

import FormRegister from './components/templates/Form/FormRegister';
import TableUsers from './components/templates/Table/TableUsers';
import Main from './components/templates/Main/Main';

test('Renders App', () => {
    render(<App />);
});

test('Renders UserCrud component', () => {
    render(<UserCrud />);
});

test('Renders Home component', () => {
    render(<Home />);
});

test('Renders Main component', () => {
    render(<Main />);
});

test('Renders FormRegister component', () => {
    const users = {
        id: 1,
        name: "Delbaldo Oliva",
        email: "doliva@mail.com.br"
    }
    render(<FormRegister user={users} />);
});

test('Renders TableUsers component', () => {
    const list = [{
        id: 1,
        name: "Delbaldo Oliva",
        email: "doliva@mail.com.br"
    }]
    render(<TableUsers list={list} />);
});