import WarningIcon from "@material-ui/icons/Warning";
import TextField from "@material-ui/core/TextField";
const hasEditErrorMessage = (touched, errors, field) => {
  let theField = field.name;
  if (errors.hasOwnProperty(theField) && touched.hasOwnProperty(theField)) {
    return true;
  }
  return false;
};
const displayErrorMessageEdit = (touched, errors, field) => {
  let theField = field.name;
  if (errors.hasOwnProperty(theField) && touched.hasOwnProperty(theField)) {
    const msg = Object.getOwnPropertyDescriptor(errors, theField);
    return (
      <span style={{ color: "red", display: "flex", marginTop: "2px" }}>
        {" "}
        <WarningIcon fontSize="small" />
        {msg.value}
      </span>
    );
  } else {
    return null;
  }
};

export const renderTextFieldEdit = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <TextField
    InputProps={{
      style: {
        color: "#fff",
        backgroundColor: "#1e2633",
      },
    }}
    InputLabelProps={{
      style: {
        fontWeight: "bold",
        letterSpacing: "1.5px",
        color: "#9fef00",
        fontSize: "12px",
        textTransform: "uppercase",
      },
    }}
    label={field.label}
    placeholder={field.label}
    error={hasEditErrorMessage(touched, errors, field)}
    id={field.id}
    {...field}
    {...props}
    margin={
      field.margin !== null && field.margin !== undefined
        ? field.margin
        : "dense"
    }
    fullWidth={true}
    variant="outlined"
    helperText={displayErrorMessageEdit(touched, errors, field)}
  />
);
