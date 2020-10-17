import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { Context } from "AppContext";
import { History } from "history";
import React, { ReactElement } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

interface Props {
  open: boolean;
  history?: History;
  modalTitle?: string;
  modalMaxWidth: "xs" | "sm" | "md" | "lg" | "xl" | false;
  height: string;
  className?: string;
  children?: any;
  onClose?: () => void;
}

const SimpleModal = ({
  onClose,
  open,
  modalTitle,
  modalMaxWidth,
  height,
  children,
  history,
  className,
}: Props): ReactElement => {
  const htlmElement: HTMLElement = document.getElementById("modal_root")!;

  return createPortal(
    <Dialog
      className={className + " rtl"}
      maxWidth={modalMaxWidth}
      fullWidth={true}
      open={open}
      disableBackdropClick={false}
      onClose={onClose}
    >
      {modalTitle && (
        <DialogTitle id="form-dialog-title">
          <div>
            {modalTitle}
            <i
              color="red"
              className="la la-close float-left pointer"
              onClick={(e: any) => {
                onClose && onClose();
              }}
            />
          </div>
        </DialogTitle>
      )}
      <DialogContent className="p-0">
        <div style={{ height: height }}>{children}</div>
      </DialogContent>
    </Dialog>,
    htlmElement,
  );
};

SimpleModal.contextType = Context;
export default SimpleModal;
