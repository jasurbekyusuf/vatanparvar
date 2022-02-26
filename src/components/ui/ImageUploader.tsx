import cx from "classnames";
import { Modal } from "./Modal";
import "./assets/app-field.scss";
import { useEffect, useState } from 'react';
import { AiOutlineDownload } from "react-icons/ai";

interface Props {
    readonly setImageUrl: (url: string) => void
    readonly id: string
    readonly placeholder: string
    readonly descriptionDialogText?: string
}

function ImageUploader({ setImageUrl, descriptionDialogText, id, placeholder }: Props) {
    const [showDialog, setShowDialog] = useState(false);
    const [fileName, setFileName] = useState<string>("");
    const [imageByteUrl, setImageByteUrl] = useState<string>("");

    useEffect(() => setImageUrl(imageByteUrl), [imageByteUrl]);
    return (
        <>
            <div className="image_uploader">
                <label htmlFor={id}>
                    <div className="image_uploader-name">
                        {fileName ? fileName : placeholder}
                    </div>
                    <div className="image_uploader-btn">
                        <AiOutlineDownload className="icon" size="1.6rem" color="#fff" />
                    </div>
                    <input id={id} type="file" style={{ display: "none" }} onChange={(e: any) => {
                        const fileReader = new FileReader();
                        if (fileReader) {
                            fileReader.onload = () => {
                                if (fileReader.readyState === 2) {
                                    // setImageByteUrl(fileReader.result as string);
                                    setImageByteUrl(e.target.files[0]);
                                    setFileName(e.target.files[0].name)
                                }
                            };
                            fileReader.readAsDataURL(e.target.files[0]);
                        }
                    }} />

                </label>
                {descriptionDialogText && <div className={cx("what-this-is", {
                    "open": showDialog
                })} onClick={() => setShowDialog(true)}>
                    <span>?</span>
                </div>}
                {descriptionDialogText && (
                    <Modal show={showDialog} onClose={() => setShowDialog(false)}>
                        <p className="field-description">{descriptionDialogText}</p>
                    </Modal>
                )}
            </div>
        </>
    );
}

export default ImageUploader;
