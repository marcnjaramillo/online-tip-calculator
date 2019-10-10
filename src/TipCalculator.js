import React, { useState } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from 'reactstrap';

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

  let splitTip = (totalTip / tipFields.party).toFixed(2);

  return (
    <Container>
      <h1>Online Tip Calculator</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Total Bill</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <Input
              type='number'
              name='bill'
              value={tipFields.bill}
              onChange={handleChange}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Tip</Label>
          <Input
            type='select'
            name='tip'
            value={tipFields.tip}
            onChange={handleChange}
          >
            <option value='.10'>10%</option>
            <option value='.15'>15%</option>
            <option value='.18'>18%</option>
            <option value='.20'>20%</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Party Size</Label>
          <Input
            type='number'
            name='party'
            value={tipFields.party}
            onChange={handleChange}
          />
        </FormGroup>
      </Form>

      <h2>Results</h2>
      <p>Total tip is ${totalTip}</p>
      {tipFields.party > 1 ? (
        <p>Each person is responsible for ${splitTip}</p>
      ) : (
        undefined
      )}
    </Container>
  );
};

export default TipCalculator;
