import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCoupon, getAllCoupons } from "../services/couponService";
import Base from "./base";
import Loading from "./loader";

const CouponList = (props) => {
  let history = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [coupons, setCoupons] = useState([]);
  const [allCoupons, setAllCoupons] = useState([]);

  const [couponLang, setCouponLang] = useState("en");

  useEffect(() => {
    setIsLoading(true);
    getAllCoupons()
      .then((res) => {
        if (res)
          if (res.data.status) {
            const data = res.data.message;
            setAllCoupons(data);
            setCoupons(data.filter((coupon) => coupon.lang === couponLang));
            setIsLoading(false);
          }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id, lang) => {
    await deleteCoupon(id, lang)
      .then((res) => {
        setCoupons(coupons.filter((coupon) => coupon._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNavigate = () => {
    history("/addCoupon");
  };

  const toggleCouponLang = (couponLang) => {
    setCouponLang(couponLang);
    setCoupons(allCoupons.filter((d) => d.lang === couponLang));
  };

  return (
    <Base title="Coupons" description="">
      <Loading isLoading={isLoading} />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button
          onClick={handleNavigate}
          className="btn btn-primary btn-sm"
          type="button"
        >
          Create Coupon
        </button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <ul className="nav">
          <li className="nav-item me-2">
            <span className={`me-2`}>Coupons:</span>
          </li>
          <li className="nav-item me-2" onClick={() => toggleCouponLang("en")}>
            <span
              className={`clickable ${
                couponLang === "en" ? "text-primary" : ""
              }`}
            >
              English
            </span>
          </li>
          <li className="nav-item" onClick={() => toggleCouponLang("fr")}>
            <span
              className={`clickable ${
                couponLang === "fr" ? "text-primary" : ""
              }`}
            >
              French
            </span>
          </li>
        </ul>
      </div>
      <table className="table text-light">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Coupon Name</th>
            <th scope="col">Current Users Count</th>
            <th scope="col">Max Users Count</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
            {/* <th scope="col">Coupon Language</th> */}
            {/* <th scope="col">Task Type</th>
            <th scope="col">Task Size</th> */}
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {coupons.map((coupon, index) => (
            <tr key={coupon._id}>
              <th>{index + 1}</th>
              <td>{coupon.name}</td>
              <td>{coupon.usersCount}</td>
              <td>{coupon.maxUsersCount}</td>
              <td>{coupon.price}</td>
              <td>
                <div className="d-flex">
                  {/* <button
                    type="button"
                    onClick={() => handleEdit(task._id)}
                    className="btn btn-info btn-sm me-2"
                  >
                    <i className="fa fa-edit" />
                  </button> */}
                  <button
                    type="button"
                    onClick={() => handleDelete(coupon._id, coupon.lang)}
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fa fa-trash" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Base>
  );
};

export default CouponList;
