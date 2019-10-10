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
};

export default TipCalculator;
