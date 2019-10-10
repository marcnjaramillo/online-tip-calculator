import React, { useState } from 'react';

const TipCalculator = () => {
  const [tipFields, setTipFields] = useState({
    bill: 0,
    tip: 0,
    party: 0
  });

  const handleChange = e => {
    setTipFields({
      ...tipFields,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  let totalTip = (tipFields.bill * tipFields.tip).toFixed(2);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label>Total Bill</label>
          $
          <input
            type='number'
            name='bill'
            value={tipFields.bill}
            onChange={handleChange}
          />
        </div>
        <div className='field'>
          <label>
            Select a tip amount:
            <select name='tip' value={tipFields.tip} onChange={handleChange}>
              <option value='.10'>10%</option>
              <option value='.15'>15%</option>
              <option value='.18'>18%</option>
              <option value='.20'>20%</option>
            </select>
          </label>
        </div>
        <div className='field'>
          <label>Party Size</label>
          <input
            type='number'
            name='party'
            value={tipFields.party}
            onChange={handleChange}
          />
        </div>
        <input type='submit' value='Submit' />
      </form>

      <h2>Results</h2>
      <p>Total tip is ${totalTip}</p>
    </div>
  );
};

export default TipCalculator;
