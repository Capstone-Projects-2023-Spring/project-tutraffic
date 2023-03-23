import React from 'react';
import { useData } from './LotData';

const Data = () => {
  const data = useData();
  console.log(data);

  return (
    <div className="container mt-4">

      <h2>All Parking Lots data</h2>

      {data ? (
        Object.keys(data).map((key) => (
          <div className="row" key={key}>
            <div className="col mb-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">Lot: {data[key].name}</p>
                  <p className="card-text">Spots: {data[key].spots}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
};

export default Data;
