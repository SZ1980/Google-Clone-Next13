"use client";

import { useEffect, useState } from "react";

function CountryLookup() {
  const [country, setCountry] = useState("United States");
  useEffect(() => {
    fetch(
      `http://api.ipstack.com/194.15.226.226?access_key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country_name));
  }, []);
  return <div>{country}</div>;
}

export default CountryLookup;
