import React from "react";

export default props => {
  const { user, updateField, save, clear } = props; // It is possible to get each prop item directly from a variable.

  return (
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={user.name}
                        onChange={(event) => updateField(event)} placeholder="Enter a name..." />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" value={user.email} 
                        onChange={(event) => updateField(event)} placeholder="Enter an email..." />
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary" onClick={save}>Save</button>

                <button className="btn btn-secondary ml-2" onClick={clear}>Cancel</button>
            </div>
        </div>
</div>
  );
}
