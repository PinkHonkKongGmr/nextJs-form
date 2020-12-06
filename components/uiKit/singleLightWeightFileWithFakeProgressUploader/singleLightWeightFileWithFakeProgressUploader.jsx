import { useState } from "react";
import FakeProgressRunner from "../fakeProgressRunner";
import { Upload, notification } from "antd";
import Button from "../uploaderButton";
import "antd/dist/antd.css";
import classes from "./uploader.module.scss";

export default function SingleLightWeightFileWithFakeProgressUploader({
  text,
}) {
  const [isProgressRun, setIsProgressRun] = useState(false);
  const [isFileUpload, setIsFileUpload] = useState(false);
  const [isWarn, setIsWarn] = useState(false);
  const [opacityOfTheUploadWrapper, setOpacityOfTheUploadWrapper] = useState(1);
  const uploadProps = {
    beforeUpload(file) {
      if (file.size < 16000000) {
        setOpacityOfTheUploadWrapper(0);
        setIsProgressRun(true);
      } else {
        setIsWarn(true);
        notification.open({
          message: "Загружаемый файл слишком большой",
          description: "загружайте файл размером не более 16 mb",
        });
      }
    },
    onChange(info) {
      const event = info.event;
      if (event) {
        setTimeout(() => {
          setOpacityOfTheUploadWrapper(1);
          setIsProgressRun(false);
        }, 300);
      }
      if (info.file.status === "done" || info.file.status === "error") {
        info.fileList = [];
        console.log(info.fileList);
        setIsFileUpload(true);
      }
    },
    onRemove() {
      setIsFileUpload(false);
      setIsWarn(false);
    },
  };

  const classname = isWarn
    ? `${classes.antUploadCustom} ${classes.warn}`
    : classes.antUploadCustom;

  return (
    <>
      {isProgressRun && (
        <div className={classes.fakeProgressRunnerWrapper}>
          <FakeProgressRunner />
        </div>
      )}
      <div
        className={classname}
        style={{
          opacity: opacityOfTheUploadWrapper,
        }}
      >
        <Upload {...uploadProps}>
          {!isFileUpload && (
            <Button>
              <img src="/plus.svg" className={classes.plusIcon} /> {text}
            </Button>
          )}
        </Upload>
      </div>
    </>
  );
}
