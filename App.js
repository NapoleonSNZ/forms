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
      borderRadius: 10,
      color: "white",
      marginBottom: 10,
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
                  source={{
                    uri: "https://img.freepik.com/foto-gratis/estilo-vida-belleza-moda-concepto-emociones-personas-gerente-oficina-mujer-asiatica-joven-ceo-expresion-complacida-pie-sobre-fondo-blanco-sonriendo-brazos-cruzados-sobre-pecho_1258-59329.jpg?w=900&t=st=1662183602~exp=1662184202~hmac=f27c2693b74e7a531c3e6820c425ce0133e3b05f7ccab4968c24e6f0eb031944",
                  }}
                />
                <Text style={styles.titulo}>Formulario Examen 1</Text>


                 <Text style={styles.label}>Nombre:</Text>  
                <TextInput
                  value={values.nombre}
                  style={inputStyle}
                  onChangeText={handleChange("nombre")}
                  onBlur={() => setFieldTouched("nombre")}
                  placeholder="Digite su nombre"
                  placeholderTextColor="#FFF"
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
                  placeholder="Digite su apellido"
                  placeholderTextColor="#FFF"
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
                  placeholder="Digite su Edad"
                  placeholderTextColor="#FFF"
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
                  placeholder="Digite su Correo"
                  placeholderTextColor="#FFF"
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
                  placeholder="Digite su Teléfono"
                  placeholderTextColor="#FFF"
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
                  placeholder="Digite su Domicilio"
                  placeholderTextColor="#FFF"
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
                  placeholder="Digite su sueldo"
                  placeholderTextColor="#FFF"
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
    marginBottom: 15,
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
    marginStart: 3
  },
   boton : {
    padding: 40,
  },
});

console.disabledYellowBox = true;
