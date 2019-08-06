import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Button, Input, Item, List } from 'components';

import { validate } from 'shared/validators';
import { colors, texts } from 'shared/constants';
import { modulo, checkDay } from 'shared/helpers';

const Container = styled.div`
  padding: 30px;
`;

const Main = () => {
  const [data, setData] = useState([]);

  const _submit = ({number}) => {
    let items = [];

    if (number) {
      for (let i = 1; i <= number; i++) {
        if (modulo(i, 15)) {
          items.push(
            <>
              <Item color={colors.blue}>{checkDay() ? texts.wizz : texts.fizz} </Item>
              <Item color={colors.green}>{checkDay() ? texts.wuzz : texts.buzz}</Item>
            </>
          );
        } else if (modulo(i, 3)) {
          items.push(<Item color={colors.blue}>{checkDay() ? texts.wizz : texts.fizz}</Item>);
        } else if (modulo(i, 5)) {
          items.push(<Item color={colors.green}>{checkDay() ? texts.wuzz : texts.buzz}</Item>);
        } else {
          items.push(<Item>{i}</Item>);
        }
      }

      setData(items);
    }
  };

  return (
    <Container>
      <Formik
        initialValues={{number: 1}}
        onSubmit={_submit}
        validate={({ number }) => validate(number)}
      >
        <Form>
          <ErrorMessage name="number" component="div" />
          <Field
            component={Input}
            type="number"
            name="number"
          />
          <Button type="submit" label={texts.submit} />
        </Form>
      </Formik>
      <List data={data} />
    </Container>
  );
};

export { Main };
