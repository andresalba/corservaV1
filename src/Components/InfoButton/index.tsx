import Button from "@mui/material/Button";

interface InfoButtonProps {
  onClick: () => void;
}

function InfoButton({ onClick }: InfoButtonProps) {
  const buttonStyle = {
    width: "123px",
    height: "48px",
    backgroundColor: "#022959",
    color: "white",
    border: "none",
    fontSize: "16px",
    borderRadius: "10px",
    textTransform: "none",
    cursor: "pointer",
  };
  return (
    <Button sx={buttonStyle} variant="contained" onClick={onClick}>
      Next Step
    </Button>
  );
}

export default InfoButton;
