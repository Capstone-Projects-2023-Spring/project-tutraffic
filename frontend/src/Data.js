import React, { useState, useEffect } from 'react';
import { useData } from './LotData';

const Data = () => {
  const [data1, data2] = useData();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col mb-4">
          {data1 ? (
            <div className="card">
              <div className="card-body">
                <p className="card-text">Lot: {data1.name}</p>
                <p className="card-text">Spots: {data1.spots}</p>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col  mb-4">
          {data2 ? (
            <div className="card">
              <div className="card-body">
                <p className="card-text">Lot: {data2.name}</p>
                <p className="card-text">Spots: {data2.spots}</p>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Data;
