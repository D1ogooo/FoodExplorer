import React from "react";
import { ToastStyle } from "./style";
import { CheckCheck } from 'lucide-react';

export function Toast({message}="Sem mensagem") {
  return (
    <ToastStyle>
     <section>
      <CheckCheck />
      {/* <p>Sucesso!</p> */}
      <p>{message}</p>
     </section>
     <section/>
    </ToastStyle>
  )
}