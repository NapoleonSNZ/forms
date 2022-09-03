import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  Alert,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { marginBottom } from "styled-system";

export default class App extends Component {
  render() {
    const inputStyle = {
      borderWidth: 1,
      borderColor: "white",
      padding: 15,
      borderRadius: 50,
      color: "white",
      marginBottom: 10,
      fontSize: 10,
    };

    const fondo1 = { require: "./assets/fondo1.jpg" };

    return (
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          edad: "",
          correo: "",
          telefono: "",
          domicilio: "",
          sueldo: "",
        }}
        onSubmit={(values) => alert(JSON.stringify(values,undefined, 2))}
        validationSchema={yup.object().shape({
          nombre: yup.string().min(2,"Debe tener más caracteres")
          .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
                'Nombres no puede tener numeros'
          ).required("Por favor, Digite su nombre!"),

          apellido: yup.string().min(2,"Debe tener más caracteres")
          .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
                'apellidos no puede tener numeros'
          ).required("Por favor, Digite su apellido!"),
          edad: yup.number().typeError('Solo se acepta numeros')
          .integer("Tiene que ser entero").min(18,"Debe ser mayor de edad")
          .max(100,"Debe ser menos de 100").required("Por favor, Digite su edad!"),
          correo: yup.string().email("Debe ser formato de correo").required("Por favor, Digite su correo!"),
          telefono: yup.string().matches(/\D*(\d{4})-\D*(\d{4})/,
          "Formato de numero invalido").required("Por favor, Digite su telefono!"),
          domicilio: yup.string().required("Por favor, Digite su domicilio!"),
          sueldo: yup
            .number()
            .typeError('Solo se acepta numeros')
            .min(0, "Sueldo no puede ser negativo")
            .required("Por favor, Digite su sueldo!"),
        })}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <ImageBackground
            source={require("./assets/fondo2.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.container}>
              <ScrollView style={styles.scrollView}>
                <Image
                  style={styles.tinyLogo}
                  alt="My Awesome Image"
                  source={
                    require('./assets/photo.png')
                  }
                />
                <Text style={styles.titulo}>Formulario de Registro</Text>
                <Text style={styles.titulo2}>Form con validaciones FORMIK - YUP </Text>

                 <Text style={styles.label}>Nombre:</Text>  
                <TextInput
                  value={values.nombre}
                  style={inputStyle}
                  onChangeText={handleChange("nombre")}
                  onBlur={() => setFieldTouched("nombre")}
                  placeholder="Digite su primer nombre"
                  placeholderTextColor="#797979"
                />
                {touched.nombre && errors.nombre && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {errors.nombre}
                  </Text>
                )}
                <Text style={styles.label}>Apellidos:</Text> 
                <TextInput
                  value={values.apellido}
                  style={inputStyle}
                  onChangeText={handleChange("apellido")}
                  onBlur={() => setFieldTouched("apellido")}
                  placeholder="Digite su primer apellido"
                  placeholderTextColor="#797979"
                />
                {touched.apellido && errors.apellido && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {errors.apellido}
                  </Text>
                )}
                <Text style={styles.label}>Edad:</Text>  
                <TextInput
                  value={values.edad}
                  style={inputStyle}
                  onChangeText={handleChange("edad")}
                  onBlur={() => setFieldTouched("edad")}
                  placeholder="Cuantos años?"
                  placeholderTextColor="#797979"
                />
                {touched.edad && errors.edad && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {errors.edad}
                  </Text>
                )}
                <Text style={styles.label}>Correo:</Text>  
                <TextInput
                  value={values.correo}
                  style={inputStyle}
                  onChangeText={handleChange("correo")}
                  onBlur={() => setFieldTouched("correo")}
                  placeholder="ej. micorreo@mail.com"
                  placeholderTextColor="#797979"
                />
                {touched.correo && errors.correo && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {errors.correo}
                  </Text>
                )}
                <Text style={styles.label}>Teléfono:</Text>  
                <TextInput
                  value={values.telefono}
                  style={inputStyle}
                  onChangeText={handleChange("telefono")}
                  onBlur={() => setFieldTouched("telefono")}
                  placeholder="####-####"
                  placeholderTextColor="#797979"
                />
                {touched.telefono && errors.telefono && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {errors.telefono}
                  </Text>
                )}
                <Text style={styles.label}>Domicilio:</Text>  
                <TextInput
                  value={values.domicilio}
                  style={inputStyle}
                  onChangeText={handleChange("domicilio")}
                  onBlur={() => setFieldTouched("domicilio")}
                  placeholder="Dirección exacta"
                  placeholderTextColor="#797979"
                />
                {touched.domicilio && errors.domicilio && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {errors.domicilio}
                  </Text>
                )}
                <Text style={styles.label}>Sueldo:</Text>  
                <TextInput
                  value={values.sueldo}
                  style={inputStyle}
                  onChangeText={handleChange("sueldo")}
                  onBlur={() => setFieldTouched("sueldo")}
                  placeholder="0.00"
                  placeholderTextColor="#797979"
                  marginBottom="30"
                />
                {touched.sueldo && errors.sueldo && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {errors.sueldo}
                  </Text>
                )}

                <Button
                  color="#4A235A"
                  title="INGRESAR!"
                  disabled={!isValid}
                  onPress={handleSubmit}
                  marginTop="40"
                />
              </ScrollView>
            </View>
          </ImageBackground>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  titulo: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  titulo2: {
    color: "gray",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 25,
    alignSelf: "flex-start",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 50,
    resizeMode: "cover",
    alignSelf: "flex-end",
  },
  label:{
    fontSize: 15,
    color: "white",
    marginBottom: 10,
    marginStart: 15
  },
   boton : {
    padding: 40,
  },
});

console.disabledYellowBox = true;
