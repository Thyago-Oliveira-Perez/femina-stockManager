import * as S from "./imageUpload.styles";
import upload_image from "../../assets/upload_imagem.svg";
import arrastar_imagem from "../../assets/arrastar_imagem.svg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useRef} from "react";
import { IImageUploadProps } from "./imageUpload.types";
import { actionFile, FormFunction } from "../Modal/Components/Forms/FormProduto/types";

const ImageUpload = (props: IImageUploadProps) => {
    const inputRef: any = useRef(null);

    const handleClick = () => {
        if (props.images.length >= 5) {
            props.setShowMessageLimitFiles(true);
        } else {
            // 👇️ open file input box on click of other element
            inputRef.current.click();
        }
    };
    return (
        <>
            {/* Upload file */}
            {props.mode != FormFunction.view ? 
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "97.2%",
                        maxWidth: "97.2%",
                        margin: "20px 20px",
                        height: "120px",
                        border: "dotted 1px #7A0000",
                        cursor: "pointer",
                        minHeight: "200px",
                    }}
                    onClick={() => handleClick()}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        <img style={{ margin: "10px 0px" }} src={upload_image} alt="" />
                        <img src={arrastar_imagem} alt="" />
                        <input
                            style={{ display: "none" }}
                            ref={inputRef}
                            type="file"
                            disabled={props.disabled}
                            onChange={(e) => props.handleFile(e, actionFile.add)}
                        />
                    </div>
                </div>
            : null}
            {props.images.length ? (
                <div
                    style={{
                        minWidth: "97.2%",
                        maxWidth: "97.2%",
                        margin: "20px 20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "auto",
                        border: "1.5px solid #9B4A46",
                    }}
                >
                    <h3
                        style={{
                            color: "#9B4A46",
                            fontSize: "20px",
                            margin: "20px 0 10px 0",
                        }}
                    >
                        Arquivos selecionados
                    </h3>
                    <hr
                        style={{
                            borderColor: "blue",
                            width: "20%",
                            border: "1px solid #9B4A46",
                        }}
                    />
                    <ul
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: "30px",
                            margin: "10px 0",
                        }}
                    >
                        {props.images.map((image: any, index: number) => {
                            return (
                                <li
                                    key={index}
                                    style={{
                                        margin: "10px 0",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            border: "1.5px solid #9B4A46",
                                            borderRadius: "8px",
                                            padding: "10px",
                                        }}
                                    >
                                        <p>{image.name}</p>
                                        {props.mode != FormFunction.view ? 
                                        <S.ButtonAreas>
                                            <S.ButtonActions
                                                color={"#F05555"}
                                                onClick={(e) => props.handleFile(e, actionFile.remove, index, image)}
                                                disabled={props.disabled}
                                            >
                                                <RiDeleteBin5Fill size={17} />
                                            </S.ButtonActions>
                                        </S.ButtonAreas>
                                        : null}      
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : null}
        </>
    );
}

export default ImageUpload;
