import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { insertCoupon } from "../services/couponService";
import Base from "./base";
import Loading from "./loader";

const AddCoupon = (props) => {
  let history = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset, setValue } = useForm();

  const [logoBase64, setLogoBase64] = useState("");

  const img2Base64 = (event) => {
    const file = event.target.files[0];

    // validate size and type
    // console.log(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogoBase64(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCouponFormSubmit = async (data) => {
    let body = {
      name: data.couponName,
      description: data.couponDesc,
      price: data.couponPrice,
      maxUsersCount: data.couponMaxUsers,
      code: data.couponCode,
      logoImg: logoBase64,
      lang: data.couponLang,
    };

    setIsLoading(true);

    insertCoupon(body)
      .then((res) => {
        if (res)
          if (res.data.status) {
            console.log(res);
            setIsLoading(false);
            toast.success("Task updated successfully...");
            history("/couponList");
          }
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Some error occured...");
        console.log(err);
      });
  };

  const cancelForm = () => {
    reset();
    history("/couponList");
  };

  useEffect(() => {
    setValue("couponLang", "en");
  }, []);

  return (
    <Base title="Add Coupon" description="">
      <Loading isLoading={isLoading} />
      <form className="w-50" onSubmit={handleSubmit(handleCouponFormSubmit)}>
        <div className="form-group mt-3">
          <label htmlFor="couponName">Coupon Name</label>
          <input
            type="text"
            className="form-control"
            id="couponName"
            name="couponName"
            placeholder="Coupon Name"
            {...register("couponName")}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="couponDesc">Coupon Description</label>
          <textarea
            className="form-control"
            placeholder="Coupon Description"
            id="couponDesc"
            name="couponDesc"
            {...register("couponDesc")}
            rows="3"
          ></textarea>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="couponCode">Coupon Code</label>
          <input
            type="text"
            className="form-control"
            id="couponCode"
            name="couponCode"
            placeholder="Coupon Code"
            {...register("couponCode")}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="couponMaxUsers">Max Users</label>
          <input
            className="form-control"
            type="number"
            id="couponMaxUsers"
            name="couponMaxUsers"
            placeholder="Max Users"
            {...register("couponMaxUsers")}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="couponPrice">Price</label>
          <input
            className="form-control"
            type="number"
            id="couponPrice"
            name="couponPrice"
            placeholder="Price"
            {...register("couponPrice")}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="couponImg">Company Image</label>
          <input
            className="form-control"
            type="file"
            id="couponImg"
            name="couponImg"
            placeholder="Company Image"
            {...register("couponImg")}
            onChange={img2Base64}
          />
        </div>
        <div className={`form-group mt-3 `}>
          <label>Coupon Language</label>
          <div className="d-flex">
            <select
              id="couponLang"
              name="couponLang"
              {...register("couponLang")}
              className="form-select"
              aria-label="Default select example"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
        <div className="d-flex col-6 mt-3">
          <button type="submit" className="btn btn-primary w-50 me-2">
            Submit
          </button>
          <button
            onClick={cancelForm}
            type="button"
            className="btn btn-danger w-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </Base>
  );
};

export default AddCoupon;
