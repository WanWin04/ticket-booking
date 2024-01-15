import React from "react";
import { Modal } from "@material-ui/core";

export default function PostModel() {
  const body = "This is body modal";

  return (
    <div>
      <Modal open={false} onClick={{}}>
        {body}
      </Modal>
    </div>
  );
}
