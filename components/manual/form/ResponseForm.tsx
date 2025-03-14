"use client";

import type React from "react";

import { createResponse } from "@/app/action/action";
import LoadingButton from "@/components/manual/button/LoadingButton";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

interface ResponseFormProps {
  interest: string;
}

const ResponseForm: React.FC<ResponseFormProps> = ({ interest }) => {
  const [formState, setFormState] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: interest,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formDataObj = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });

      const result = await createResponse(formDataObj);

      if (result.success) {
        toast("Success!", {
          description: "Your form has been submitted successfully.",
        });
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          interest: interest,
        });

        setFormState({ success: true, message: result.message });
      } else {
        toast("Error", {
          description:
            result.message || "Something went wrong. Please try again.",
        });
        setFormState({ success: false, message: result.message });
      }
    } catch {
      toast("Error", {
        description: "An error occurred while submitting the form.",
      });
      setFormState({
        success: false,
        message: "An error occurred while submitting the form.",
      });
    }
  };

  return (
    <div className="bg-Mbg flex-shrink-0 bg-opacity-70 border-[0.5px] border-[#00b1dc4d] w-full md:w-[350px] lg:w-[380px] h-auto py-8 px-5 rounded-md z-40">
      <h3 className="text-[#00b1dc] text-center text-lg md:text-2xl mb-8 font-semibold">
        Get your free consultation!
      </h3>

      {formState?.success ? (
        <div className="text-green-500 text-center p-4">
          <p className="mb-2">Thank you for your submission!</p>
          <p className="mb-4">We will contact you soon.</p>
          <button
            onClick={() => setFormState(null)}
            className="bg-Ttext text-[#F1F1F1] hover:bg-TtextH active:bg-TtextA py-2 px-4 rounded-md"
          >
            Submit another response
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              placeholder="Name"
              className="response-form-input w-full"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              placeholder="Email"
              className="response-form-input w-full"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              id="phone"
              placeholder="Phone"
              className="response-form-input w-full"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              className="response-form-input w-full !h-20"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          {formState?.message && !formState.success && (
            <p className="text-red-500 text-sm mb-4" role="alert">
              {formState.message}
            </p>
          )}

          <SubmitButton />
        </form>
      )}
    </div>
  );
};

// Separate button component to use the useFormStatus hook
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <LoadingButton
      defaultText="Submit"
      loadingText="Submitting..."
      isLoading={pending}
      className="bg-Ttext text-[#F1F1F1] hover:bg-TtextH active:bg-TtextA py-2 rounded-md w-full"
    />
  );
}

export default ResponseForm;
