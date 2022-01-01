import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toasterActions } from "../../redux/action-creators/toaster.js"
import Snackbar from "@mui/material/Snackbar"
import IconButton from "@mui/material/IconButton"

const Toaster = () => {
  const dispatch = useDispatch()
  const toaster = useSelector(({ toaster }) => toaster)

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={toaster === "" ? false : true}
      autoHideDuration={3000}
      onClose={() => dispatch(toasterActions.clear())}
      ContentProps={{
        "aria-describedby": "snackbar-message-id",
      }}
      message={<span id="snackbar-message-id">{toaster}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={() => dispatch(toasterActions.clear())}>
          <span className="material-icons">close</span>
        </IconButton>,
      ]}
    />
  )
}

export default Toaster
