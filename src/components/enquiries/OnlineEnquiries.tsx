import "./assets/murojat.scss";
import { useState } from "react";
import { PageTitle } from "../ui/PageTitle";
import { useTranslation } from "react-i18next";
import { AppField } from "../ui/AppField";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import MaskedInput from "react-text-mask";
import cx from "classnames";
import http from "../ui/Services";


interface InitialValuesProps {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    text: string;
}

function OnlineEnquiries() {
    const { t } = useTranslation();
    const validationSchema = () => object({
      firstName: string().required(t("Required")),
      lastName: string().required(t("Required")),
      phone: string().required(t("Required")),
      text: string().required(t("Required")),
      email: string().email("Email noto'g'ri").required("Required"),
    });
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const initialValues: InitialValuesProps = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        text: "",
    };
    const phoneNumberMask = [
        "+", "9", "9", "8", " ", "(", /[0-9]/, /\d/, ")", " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/
    ]

    const submitForm = (data: any) => {
        http.post<any>(`/PostApi/Application`, data)
            .then((res) => console.log('submit', res.data))
            .catch(e => console.log(e))
    }
    return (
        <div className="murojat">
            <div className="container">
                <PageTitle title={t('ONLAYN MUROJAAT')} />
                <div className="form">
                    <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            submitForm(values);
                            console.log(values)
                            resetForm();
                        }}>
                        {({ errors, touched, values }) => (
                            <Form>
                                <div className="form-group">
                                    <div>
                                        <AppField name="firstName"
                                            value={values.firstName} id="firstName" label={t("ism")}
                                            error={Boolean(errors.firstName) && Boolean(touched.firstName)}
                                        />
                                        <AppField name="lastName"
                                            value={values.lastName} label={t("familiya")} id="lastName"
                                            error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                                        />
                                    </div>
                                    <div>
                                    <AppField name="phone"
                                            value={values.phone} id="phone" label={"Phone"}
                                            error={Boolean(errors.phone) && Boolean(touched.phone)}
                                            render={({ field }: any) => (
                                                <MaskedInput {...field}
                                                    mask={phoneNumberMask} id="phone" type="text"
                                                    className={cx("app-field_input", {
                                                        "value": values.phone,
                                                        "error": Boolean(errors.phone) && Boolean(touched.phone)
                                                    })}
                                                />
                                            )}
                                        />
                                        <AppField id="email" value={values.email} error={Boolean(errors.email) && Boolean(touched.email)} name="email"
                                            label="E-mail" />
                                    </div>
                                </div>
                                <AppField as="textarea" name="text" value={values.text} id="text"
                                    error={Boolean(errors.text) && Boolean(touched.text)} label={t('shikoyat')} />
                                <div>
                                    <button type="submit" className='submit'>{t('yuborish')} </button>
                                </div>
                                <div className='crl'></div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default OnlineEnquiries;
