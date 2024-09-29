import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createCareerAction, createPropertyAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import TextAreaInput from "@/components/form/TextAreaInput";

import PDFInput from "@/components/form/PDFInput";

function CreatePropertyPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Apply BabbySister
      </h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createCareerAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Latvia"
            />
            <FormInput name="phone" type="phone" label="Phone Number" />
            <PDFInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description (10 - 1000 words)"
          />
          <SubmitButton text="Apply" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreatePropertyPage;
