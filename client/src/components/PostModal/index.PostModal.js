import React from "react";
import { Button, Modal, TextField, TextareaAutosize } from "@material-ui/core";
import FileBase64 from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import { modalState$ } from "../../redux/selectors/index.selectors";
import useStyles from "./styles.PostModal";
import { hideModal } from "../../redux/action/index.action";

export default function PostModel() {
  const [data, setData] = React.useState({
    title: "",
    content: "",
    attachment: "",
  });

  const { isShow } = useSelector(modalState$);
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    console.log({ data });
  }, [data]);

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={10}
          maxRows={15}
          placeholder="Content..."
          value={data.content}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClick={{}}>
        {body}
      </Modal>
    </div>
  );
}
