import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import "./ReactHookForm.css";

export default function TravelAdvances() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      email: "",
      password: "",
      age: "",
      gender: "",
      skills: [{ value: "" }],
      newsletter: false
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills"
  });

  const newsletterChecked = watch("newsletter");

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted Successfully!");
    reset();
  };

  return (
    <div className="form-container w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="form-card">
        <h2>Advanced React Hook Form</h2>

        <div className="form-group">
          <label>First Name</label>
          <input {...register("firstName", { required: "Required" })} />
          {errors.firstName && <span className="error">{errors.firstName.message}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input {...register("email", { required: "Required" })} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" {...register("password", { required: "Required" })} />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" {...register("age", { required: "Required" })} />
          {errors.age && <span className="error">{errors.age.message}</span>}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <Controller
            control={control}
            name="gender"
            rules={{ required: "Select gender" }}
            render={({ field }) => (
              <select {...field}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            )}
          />
          {errors.gender && <span className="error">{errors.gender.message}</span>}
        </div>

        <div className="form-group">
          <label>Skills</label>
          {fields.map((item, index) => (
            <div key={item.id} className="skill-row">
              <input {...register(`skills.${index}.value`, { required: true })} />
              <button type="button" className="btn-danger" onClick={() => remove(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="btn-secondary" onClick={() => append({ value: "" })}>
            Add Skill
          </button>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" {...register("newsletter")} />
          <label>Subscribe to Newsletter</label>
        </div>

        {newsletterChecked && (
          <div className="form-group">
            <label>Referral Code</label>
            <input {...register("referral")} />
          </div>
        )}

        <div className="button-group">
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            Submit
          </button>
          <button type="button" onClick={() => reset()} className="btn-secondary">
            Reset
          </button>
          <button
            type="button"
            onClick={() => setValue("firstName", "Ankit")}
            className="btn-secondary"
          >
            Set Name
          </button>
        </div>

        <div className="status">
          <p>Dirty: {isDirty ? "Yes" : "No"}</p>
          <p>Valid: {isValid ? "Yes" : "No"}</p>
        </div>
      </form>
    </div>
  );
}