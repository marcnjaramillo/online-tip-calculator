import React, { useState } from 'react';
import {
  Container,
  Col,
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

  //let combinedTotal = (Number(tipFields.bill) + Number(totalTip)).toFixed(2);

  return (
    <Container className='calculator'>
      <h1 className='header'>Online Tip Calculator</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label sm={2}>Total Bill</Label>
          <Col sm={10}>
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
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Tip</Label>
          <Col sm={10}>
            <Input
              type='select'
              name='tip'
              value={tipFields.tip}
              onChange={handleChange}
            >
              <option>Select a percentage</option>
              <option value='.10'>10%</option>
              <option value='.15'>15%</option>
              <option value='.18'>18%</option>
              <option value='.20'>20%</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Party Size</Label>
          <Col sm={10}>
            <Input
              type='number'
              name='party'
              value={tipFields.party}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
      </Form>
      <div className='tip'>
        <h2>Results</h2>
        <p>
          Total tip is <strong>${totalTip}</strong>
        </p>
        {tipFields.party > 1 ? (
          <p>
            Each person should contribute <strong>${splitTip}</strong>
          </p>
        ) : (
          undefined
        )}
        {/* <p> Including tip, the bill is now ${combinedTotal}</p> */}
      </div>
    </Container>
  );
};

export default TipCalculator;
