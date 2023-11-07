
import { useForm, Controller } from "react-hook-form";

const DonationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Full Name</label>
        <Controller
          name="fullName"
          control={control}
          rules={{ required: "Full name is required" }}
          render={({ field }) => <input {...field} placeholder="John Doe" />}
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => <input {...field} placeholder="example@example.com" />}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Donation Amount ($)</label>
        <Controller
          name="donationAmount"
          control={control}
          rules={{ required: "Donation amount is required" }}
          render={({ field }) => <input {...field} type="number" placeholder="100" />}
        />
        {errors.donationAmount && <p>{errors.donationAmount.message}</p>}
      </div>

      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
