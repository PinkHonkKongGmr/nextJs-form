import { useState } from "react";
import FakeProgressRunner from "../fakeProgressRunner";
import { Upload } from "antd";
import Button from "../uploaderButton";
import "antd/dist/antd.css";
import classes from "./uploader.module.scss";

export default function SingleLightWeightFileWithFakeProgressUploader({
  text,
}) {
  const [isProgressRun, setIsProgressRun] = useState(false);
  const [isFileUpload, setIsFileUpload] = useState(false);
  const [opacityOfTheUploadWrapper, setOpacityOfTheUploadWrapper] = useState(1);
  const uploadProps = {
    beforeUpload() {
      setOpacityOfTheUploadWrapper(0);
      setIsProgressRun(true);
    },
    onChange(info) {
      console.log("info", info);
      const event = info.event;
      if (event) {
        setTimeout(() => {
          setOpacityOfTheUploadWrapper(1);
          setIsProgressRun(false);
        }, 300);
      }
      if (info.file.status === "done") {
        setIsFileUpload(true);
      }
    },
    onRemove() {
      setIsFileUpload(false);
    },
  };

  return (
    <>
      {isProgressRun && (
        <div className={classes.fakeProgressRunnerWrapper}>
          <FakeProgressRunner />
        </div>
      )}
      <div
        className={classes.antUploadCustom}
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
