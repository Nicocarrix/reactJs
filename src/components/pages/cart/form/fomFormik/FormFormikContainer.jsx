import FormFormik from "./FormFormik";
import { useFormik } from "formik";
import * as Yup from "yup";


const FormFormikContainer = () => {
    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
          name: "",
          email: "",
          phone: "",
        },
        onSubmit: (datos) => {
          console.log("datos enviados");
          console.log(datos);
          // punto donde conecto con api
        },
        validateOnChange: false,
        validationSchema: Yup.object({
          name: Yup.string()
            .required("Este campo es requerido.")
            .min(3, "El nombre debe tener al menos 3 caracteres."),
          email: Yup.string()
            .email("Verifique que sea un email valido.")
            .required("Este campo es requerido."),
          phone: Yup.string("Coloque numero de telefono valido.")
            .matches(/^[0-9]+$/, { message: "Numero de telefono incorrecto." })
            .min(11, "Numero de telefono incorrecto.")
            .required("Este campo es requerido."),
        }),
      });

  return (
    <>
    <FormFormik handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}/>
    </>
  )
}

export default FormFormikContainer