import { Modal, Button } from "antd";
import classes from "./modalConfirm.module.scss";

type modalConfirmType = {
  title: string;
  text: any;
  btnText: string;
  visible: boolean;
  ok: any;
  cancel: any;
  width?: number | string;
};

export default function ModalConfirm({
  title,
  text,
  btnText,
  visible,
  ok,
  cancel,
  width,
}: modalConfirmType) {
  return width ? (
    <Modal
      title={title}
      visible={visible}
      onCancel={cancel}
      width={width}
      footer={[
        <div className={classes.confirmFooter}>
          {" "}
          <Button key="submit" type="primary" onClick={ok}>
            {btnText}
          </Button>
        </div>,
      ]}
    >
      <div className={classes.confirmMain}>{text}</div>
    </Modal>
  ) : (
    <Modal
      title={title}
      visible={visible}
      onCancel={cancel}
      footer={[
        <div className={classes.confirmFooter}>
          {" "}
          <Button key="submit" type="primary" onClick={ok}>
            {btnText}
          </Button>
        </div>,
      ]}
    >
      <div className={classes.confirmMain}>{text}</div>
    </Modal>
  );
}
