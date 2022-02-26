import { useEffect, useState } from "react";
import { PageTitle } from "../ui/PageTitle";
import "./assets/murojat.scss";
import { useTranslation } from "react-i18next";
import { AppField } from "../ui/AppField";
import { Formik, Form } from "formik";
import { number, object, string } from "yup";
import ImageUploader from "../ui/ImageUploader";
import MaskedInput from "react-text-mask";
import cx from "classnames"
import http from "../ui/Services";

import {BsChevronDown} from "react-icons/bs"

interface InitialValuesProps {
    categoryId: string; shiftId: string;  branchId: string; districtId: string;
    firstName: string; lastName: string; secondName: string; regionId: string; phone: string;birthDate:string
}

function ToDrivingSchool() {
    const { t } = useTranslation();
    const validationSchema = () =>
    object({
        firstName: string().required(t("name")),
        lastName: string().required(t("required")),
        phone: string().required(t("required")),
        secondName: string().required(t("required")),
        regionId: number().required(t("required")),
        districtId: number().required(t("required")),
        branchId: string().required(t("required")),
        birthDate: string().required(t("required")),
        shiftId: number().required(t("required")),
        categoryId: string().required(t("required")),
    });
    const initialObj = { diplom: null, passport: null, birthday: '' }
    const [school, setSchool] = useState<[]>([])
    const [shifts, setShifts] = useState<[]>([])
    const [regions, setRegions] = useState<[]>([])
    const [district, setDistrict] = useState<[]>([])
    const [category, setCategory] = useState<[]>([])
    const [data, setData] = useState<any>(initialObj)

    const initialValues: InitialValuesProps = {
        firstName: "", lastName: "",
        secondName: "", regionId: "", phone: "",
        categoryId: "", branchId: "",  shiftId: "", districtId: "",birthDate:""
    };

    const phoneNumberMask = [
        "+",
        "9",
        "9",
        "8",
        " ",
        "(",
        /[0-9]/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/
    ]
    const getRegion = () => {
        http.get<any>(`GetApi/GetRegionContacts`)
            .then((res) => setRegions(res.data))
            .catch(e => console.log(e))
    }
    const getShifts = () => {
        http.get<any>(`GetApi/GetStudyShifts`)
            .then((res) => setShifts(res.data))
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
    const handleCategory = (id: number) => {
        http.get<any>(`GetApi/GetBranchCategories/${id}`)
            .then((res) => setCategory(res.data))
            .catch(e => console.log(e))
    }
    useEffect(() => {
        getRegion()
        getShifts()
        return () => {
            setRegions([])
        }
    }, [])
    const submitForm = (params: any) => {
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
        http.post<any>(`PostApi/LicenseApplication`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(() => {
                setData(initialObj);
            })
            .catch(e => console.log('Error:', e))
    }

    const regionList = regions.map(({ regionId, regionName }) => <option key={regionId} value={regionId}>{regionName}</option>)
    const districtList = district.map(({ id, nameUz }) => <option key={id} value={id}>{nameUz}</option>)
    const schoolList = school.map(({ branchId, branchName }) => <option key={branchId} value={branchId}>{branchName}</option>)
    const categoryList = category.map(({ categoryId, categoryName }) => <option key={categoryId} value={categoryId}>{categoryName}</option>)
    const shiftList = shifts.map(({ id, nameUz }) => <option key={id} value={id}>{nameUz}</option>)
    console.log(data)
    return (
        <div className="murojat">
            <div className="container">
                <PageTitle title={t("HAYDOVCHILIK MAKTABIGA YOZILISH")} />
                <div className="form">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            submitForm(values);
                            console.log(values)
                            resetForm();
                        }}>
                        {({ errors, touched, values }) => (
                            <Form>
                                {console.log('values',values)}
                                <div className="form-group">
                                    <div>
                                        <AppField name="firstName"
                                            value={values.firstName} id="firstName" label={t("ism")}
                                            error={Boolean(errors.firstName) && Boolean(touched.firstName)} />
                                        <AppField
                                            id="lastName" label={t("familiya")}
                                            name="lastName" value={values.lastName}
                                            error={Boolean(errors.lastName) && Boolean(touched.lastName)} />
                                        <AppField
                                            name="secondName" value={values.secondName}
                                            id="secondName" label={t("otasining ismi")}
                                            error={Boolean(errors.secondName) && Boolean(touched.secondName)} />
                                            <AppField value={values.birthDate} type="date"  name="birthDate"
                                            id="birthDate" label={t("birthDate")} error={Boolean(errors.birthDate) && Boolean(touched.birthDate)}/>
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
                                    </div>
                                    <div>
                                        <AppField
                                            label2={<BsChevronDown className="label-icon"/>}
                                            name="regionId" value={values.regionId}
                                            id="regionId" label={t("hudud")}  as="select"
                                            onChange={(e: any) => handleDistrict(e.target.value)}
                                            error={Boolean(errors.regionId) && Boolean(touched.regionId)}
                                            >
                                            {regionList}
                                            <BsChevronDown className="label-icon"/>
                                        </AppField>
                                        <AppField name="districtId" as="select" disabled={district.length === 0}
                                            onChange={(e: any) => handleSchool(e.target.value)}
                                            value={values.districtId} id="districtId" label={t("tuman")}
                                            error={Boolean(errors.districtId) && Boolean(touched.districtId)}>
                                            {districtList}
                                        </AppField>
                                        <AppField as="select" name="branchId" disabled={school.length === 0}
                                            onChange={(e: any) => handleCategory(e.target.value)}
                                            value={values.branchId} id="branchId" label={t("avtomaktab")}
                                            error={Boolean(errors.branchId) && Boolean(touched.branchId)}>    
                                            {schoolList}
                                        </AppField>
                                        <AppField as="select" name="categoryId" disabled={category.length === 0}
                                            value={values.categoryId} id="categoryId" label={t("toifa")}
                                            error={Boolean(errors.categoryId) && Boolean(touched.categoryId)}>
                                            {categoryList}
                                        </AppField>
                                        <AppField as="select" name="shiftId"
                                            value={values.shiftId} id="shiftId" label={t("talim vaqti")}
                                            error={Boolean(errors.shiftId) && Boolean(touched.shiftId)}>
                                            {shiftList}
                                        </AppField>
                                        
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="group" style={{ marginBottom: "35px" }}>
                                        <ImageUploader descriptionDialogText={t("passport")}
                                            placeholder={t("passport")} id="passport"
                                            setImageUrl={(e: any) => setData((prev: any) => ({ ...prev, PassportFile: e }))} />
                                    </div>
                                    <div className="group" style={{ marginBottom: "35px" }} >
                                        <ImageUploader descriptionDialogText="Dimplom yoki attestat nusxasi"
                                            placeholder={t("diplom")} id="diplom"
                                            setImageUrl={(e: string) => setData((prev: any) => ({ ...prev, DiplomFile: e }))} />
                                    </div>
                                </div>
                                
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

export default ToDrivingSchool;
