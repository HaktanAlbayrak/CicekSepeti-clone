import React from "react";

const FooterInfo = ({ data }) => {
  return (
    <>
      {data.map((item, index) =>
        index === 0 ? (
          <li key={item.id} className="list-title">
            {item.name}
          </li>
        ) : (
          <li key={item.id}>{item.name}</li>
        )
      )}
    </>
  );
};

export default FooterInfo;
