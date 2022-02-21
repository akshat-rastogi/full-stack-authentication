import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./style.css";

const CompanyInfo = ({ auth: { user } }) => {
  return (
    <>
      {user && (
        <table className="company-info">
          <tbody>
            <tr>
              <th>Company Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{user.phonenumber}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};
CompanyInfo.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(CompanyInfo);
