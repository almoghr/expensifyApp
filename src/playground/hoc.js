import React from "react";
import ReactDOM from "react-dom";

const Info = () => {
  <div>
    <h1>info</h1>
    <p>some info: {props.info} </p>
  </div>;
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => {
    <div>
      {props.isAdmin && <p>This is private info, please dont share</p>}
      <WrappedComponent {...props} />
    </div>;
  };
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>please login</p>
      )}
    </div>;
  };
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(
  //   <AdminInfo isAdmin={false} info="there are the details" />,
  <AuthInfo isAuthenticated={false} info="yaba daba" />,
  document.getElementById("root")
);

