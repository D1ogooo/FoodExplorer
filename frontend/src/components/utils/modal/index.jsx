import React from "react";
import { ToastStyle } from "./style";
import { CheckCheck } from 'lucide-react';

export function Toast() {
  return (
    <ToastStyle>
     <section>
      <CheckCheck />
      <p>Sucesso!</p>
     </section>
     <section/>
    </ToastStyle>
  )
}