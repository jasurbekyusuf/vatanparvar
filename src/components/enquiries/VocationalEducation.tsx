import { useState, useEffect } from "react";
import { PageTitle } from "../ui/PageTitle";
import { useTranslation } from "react-i18next";
import { AppField } from "../ui/AppField";
import { Formik, Form } from "formik";
import { number, object, string } from "yup";
import ImageUploader from "../ui/ImageUploader";
import MaskedInput from "react-text-mask";
import cx from "classnames"
import http from "../ui/Services";


interface InitialValuesProps {
    districtId: "", branchId: string; specializationId: string;
    firstName: string; lastName: string; secondName: string; regionId: string; phone: string; birthDate:""
}


function VocationalEducation() {
     const { t } = useTranslation();
    const validationSchema = () =>
        object({
            firstName: string().required(t("name")),
            lastName: string().required(t("required")),
            phone: string().required(t("required")),
            secondName: string().required(t("required")),
            regionId: number().required(t("required")),
            districtId: number().required(t("required")),
            specializationId: number().required(t("required")),
            birthDate: string().required(t("required")),
            branchId: number().required(t("required")),
        });
   
    const initialObj = { passport: null }
    const [jobs, setJobs] = useState<[]>([]);
    const [school, setSchool] = useState<[]>([]);
    const [regions, setRegions] = useState<[]>([]);
    const [district, setDistrict] = useState<[]>([]);
    const [data, setData] = useState<any>(initialObj);
    const initialValues: InitialValuesProps = {
        branchId: "", districtId: "", specializationId: "",
        firstName: "", lastName: "", secondName: "", regionId: "", phone: "" , birthDate:""
    };
    const phoneNumberMask = [
        "+", "9", "9", "8", " ", "(", /[0-9]/, /\d/, ")", " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/
    ]
    const getRegion = () => {
        http.get<any>(`GetApi/GetRegionContacts`)
            .then((res) => setRegions(res.data))
            .catch(e => console.log(e))
    }
    const getJobs = () => {
        http.get<any>(`GetApi/GetJobs`)
            .then((res) => setJobs(res.data))
            .catch(e => console.log(e))
    }
    const handleDistrict = (id: number) => {
        http.get<any>(`GetApi/GetDistricts/${id}`)
            .then((res) => setDistrict(res.data))
            .catch(e => console.log(e))
    }
    const handleSchool = (id: number) => {
        http.get<any>(`GetApi/GetBranches/${id}`)
            .then((res) => setSchool(res.data))
            .catch(e => console.log(e))
    }
    useEffect(() => {
        getJobs()
        getRegion()
        return () => {
            setJobs([])
            setRegions([])
        }
    }, [])
    const submitForm = (params: any) => {
        console.log('submitForm',data);
        
        const formData = new FormData();
        for (const key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                const element = params[key];
                formData.append(key, element)
            }
        }
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const element = data[key];
                formData.append(key, element)
            }
        }
        http.post<any>(`/PostApi/SpecializationApplication`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(() => {
                setData(initialObj);
            })
            .catch(e => console.log('Error:', e))
    }
    const jobList = jobs.map(({ id, nameUz }) => <option key={id} value={id}>{nameUz}</option>);
    const districtList = district.map(({ id, nameUz }) => <option key={id} value={id}>{nameUz}</option>);
    const schoolList = school.map(({ branchId, branchName }) => <option key={branchId} value={branchId}>{branchName}</option>);
    const regionList = regions.map(({ regionId, regionName }) => <option key={regionId} value={regionId}>{regionName}</option>);
    return (
        <div className="murojat">
            <div className="container">
                <PageTitle title={t("KASB-HUNAR MAKTABIGA YOZILISH")} />
                <div className="form">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            submitForm(values);
                            resetForm();
                        }}
                    >
                        {({ errors, touched, values }) => (
                            <Form id="submit">
                                {console.log(values)}
                                <div className="form-group">
                                    <div>
                                        <AppField
                                            name="firstName" id="firstName"
                                            value={values.firstName} label={t("ism")}
                                            error={Boolean(errors.firstName) && Boolean(touched.firstName)}
                                        />
                                        <AppField name="lastName"
                                            value={values.lastName} id="lastName" label={t("familiya")}
                                            error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                                        />
                                        <AppField value={values.secondName}
                                            name="secondName" id="secondName" label={t("otasining ismi")}
                                            error={Boolean(errors.secondName) && Boolean(touched.secondName)}
                                        />
                                        <AppField value={values.birthDate} type="date"  name="birthDate"
                                            id="birthDate" label={t("birthDate")} error={Boolean(errors.birthDate) && Boolean(touched.birthDate)}/>
                                    </div>
                                    <div>
                                        <AppField
                                            name="regionId" value={values.regionId}
                                            id="regionId" as="select" label={t("hudud")}
                                            onChange={(e: any) => handleDistrict(e.target.value)}
                                            error={Boolean(errors.regionId) && Boolean(touched.regionId)}>
                                            {regionList}
                                        </AppField>
                                        <AppField name="districtId" as='select' disabled={district.length === 0}
                                            onChange={(e: any) => handleSchool(e.target.value)}
                                            value={values.districtId} id="districtId" label={t("tuman")}
                                            error={Boolean(errors.districtId) && Boolean(touched.districtId)}>
                                            {districtList}
                                        </AppField>
                                        <AppField as="select" name="specializationId" disabled={jobs.length === 0}
                                            value={values.specializationId} id="specializationId" label={t("talim")}
                                            error={Boolean(errors.specializationId) && Boolean(touched.specializationId)}>
                                            {jobList}
                                        </AppField>
                                        <AppField name="phone"
                                            value={values.phone} label={t("telefon raqam")} id="phone"
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
                                    </div>
                                </div>
                                <div className="group" style={{ marginBottom: "35px" }}>
                                    <ImageUploader
                                        descriptionDialogText={t("passport")}
                                        placeholder={t("passport")} id="passport"
                                        setImageUrl={(e: any) => setData((prev: any) => ({ ...prev, PassportFile: e }))} />
                                </div>
                                <AppField as="select" name="branchId" disabled={school.length === 0}
                                    value={values.branchId} id="branchId" label={t("muassasa")}
                                    error={Boolean(errors.branchId) && Boolean(touched.branchId)}>
                                    {schoolList}
                                </AppField>
                                <div>
                                    <button  type="submit" className="submit">{t('yuborish')}</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default VocationalEducation;
