import { Box, Modal as MaterialUiModal } from "@mui/material";
import { ModalUserFeedbackProps } from "./types";
import BlockIcon from "@mui/icons-material/Block";

const ModalUserFeedback = (props: ModalUserFeedbackProps) => {
  return (
    <MaterialUiModal
      open={props.open}
      onClose={() => props.onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={props.style}>
        <BlockIcon
          style={{
            color: "#F05555",
            margin: "0 0 30px 0",
            width: "40px",
            height: "40px",
          }}
        />
        <p style={{ textAlign: "center", fontSize: "24px" }}>{props.children}</p>
      </Box>
    </MaterialUiModal>
  );
};

export default ModalUserFeedback;
