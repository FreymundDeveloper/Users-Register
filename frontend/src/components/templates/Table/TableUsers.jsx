import React from "react";

export default props => {
  const { list, load, remove } = props;

  const renderRows = () => {
        return list.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td className="d-block d-sm-none mb-2">
                        <button className="btn btn-warning" onClick={() => load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                    </td>
                    <td className="d-block d-sm-none">
                        <button className="btn btn-danger" onClick={() => remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                    <td className="d-none d-sm-table-cell">
                        <button className="btn btn-warning" onClick={() => load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            );
        });
    }

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
            <tbody>{renderRows()}</tbody>
        </table>
    );
}
