import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation, useNavigate } from "react-router-dom"; // 1. استدعينا useNavigate

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate(); // 2. عشان التنقل

  // 3. شلنا الـ useEffect اللي كان بيخفي الشريط في الصفحات التانية
  // وبدله عملنا ده: لو كتبت حاجة وأنت مش في الكوليكشن، يوديك هناك
  useEffect(() => {
    if (search.length > 0 && !location.pathname.includes("collection")) {
      navigate("/collection");
    }
  }, [search]); // بيراقب الكتابة

  // 4. الشرط بقى بسيط: لو showSearch بترو، اظهر في أي مكان
  return showSearch ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
