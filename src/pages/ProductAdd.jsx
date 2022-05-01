import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
//import KodlamaDkTextInput from "../utilities/customFormControls/KodlamaDkTextInput";

export default function ProductAdd() {
  const initialValues = { name: "", price: 10 };

  const schema = Yup.object({
    name: Yup.string().required("Ürün adı zorunlu"),
    price: Yup.number().required("Ürün fiyatı zorunlu"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        {/* <KodlamaDkTextInput name="name" placeholder="Ürün adı" /> */}
        <FormField>
          <Field name="name" placeholder="Ürün adı"></Field>
          <ErrorMessage
            name="name"
            render={(error) => (
              <Label pointing basic color="red" content={error}></Label>
            )}
          ></ErrorMessage>
        </FormField>
        <FormField>
          <Field name="price" placeholder="Ürün fiyatı"></Field>
          <ErrorMessage
            name="price"
            render={(error) => (
              <Label pointing basic color="red" content={error}></Label>
            )}
          ></ErrorMessage>
        </FormField>
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
