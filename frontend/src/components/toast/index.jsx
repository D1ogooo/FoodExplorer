import React from "react";
import { ToastStyle } from "./style";
import { CheckCheck } from 'lucide-react';

export function Toast({ message = "Operation successful!" }) {
  return (
    <ToastStyle>
      <section>
        <CheckCheck 
          style={{
            color: "#fff",
            borderRadius: "20px",
            height: "30px",
            width: "30px",
            padding: "4px",
            border: "solid 1px #fff"
          }}
        />
        <p style={{ fontSize: "1.25rem" }}>{message}</p>
      </section>
      <section />
    </ToastStyle>
  );
}
