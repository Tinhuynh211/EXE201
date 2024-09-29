import { Input } from "../ui/input";
import { Label } from "../ui/label";

function PDFInput() {
  const name = "file";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Upload PDF
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        required
        accept="application/pdf"
        className="max-w-xs"
      />
    </div>
  );
}

export default PDFInput;
