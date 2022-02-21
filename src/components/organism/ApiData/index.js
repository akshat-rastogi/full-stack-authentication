import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadData } from "../../../global/actions/apidata";
import "./style.css";

const ApiData = ({ loadData, apidata: { loading, list, error } }) => {
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <h2>API DATA</h2>
      {!!loading && <em>Loading . . .</em>}
      {!loading && !!list && !error && list.length > 0 && (
        <table className="api-data">
          <thead>
            <tr>
              {Object.keys(list[0]).map((value, idx) => (
                <th key={idx}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.map((row) => (
              <tr key={row.id}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
ApiData.propTypes = {
  loadData: PropTypes.func.isRequired,
  apidata: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  apidata: state.apidata,
});

export default connect(mapStateToProps, { loadData })(ApiData);
