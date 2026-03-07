import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { z } from 'zod'
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Left, Form, ReturnLogin } from "./style"
import { Register } from "../Sign up/style"
import iconfoodexplorer from '../../assets/icons/Polygon 1.svg'

function SignUp() {
  const navigate = useNavigate()
  const { signup } = useAuth()

const schema = z
  .object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (!data.name || data.name.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Nome é obrigatório",
        path: ["name"],
      });
    }

    if (!data.email || data.email.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Email é obrigatório",
        path: ["email"],
      });
    }

    if (data.email && !data.email.includes("@")) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Email inválido",
        path: ["email"],
      });
    }

    if (!data.password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Senha é obrigatória",
        path: ["password"],
      });
    }

    if (data.password && data.password.length < 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Senha precisa ter no mínimo 6 caracteres",
        path: ["password"],
      });
    }

    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "As senhas não coincidem",
        path: ["confirmPassword"],
      });
    }
  });
  

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: zodResolver(schema),
});

  async function onSubmit(data) {
  try {
    await signup({
      name: data.name,
      email: data.email,
      password: data.password,
    })
    .then(() => {
      navigate("/");
    })
  } catch (error) {
    alert(error.message);
  }
}

  return (
   <>
     <Container>
      <Left>
       <img alt='' src={iconfoodexplorer}/>
       <h2>food explorer</h2>
      </Left>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Crie sua conta</h1>
        <label id="seunome">Seu nome
         <div >
          <input
            type="text"
            placeholder="Exemplo: Maria da Silva"
            {...register("name")}
          />
         </div>
         {errors.name && (
            <p style={{ marginTop: ".5rem" }}>{errors.name.message}</p>
          )}
        </label>
        <label id="email">Email
         <div >
          <input 
            type="email" 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            {...register("email")}
          />
         </div>
         {errors.email && (
            <p style={{ marginTop: ".5rem" }}>{errors.email.message}</p>
          )}
        </label>
        <label id="Sua senha">Senha
         <div>
          <input 
            type="password" 
            placeholder="No mínimo 6 caracteres"
            {...register("password")}
          />
         </div>
          {errors.senha && (
            <p style={{ marginTop: ".5rem" }}>{errors.password.message}</p>
          )}
        </label>
         <label id="Confirme sua senha">Senha
         <div>
          <input 
            type="password" 
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
         </div>
         {errors.confirmSenha && (
            <p style={{ marginTop: ".5rem" }}>{errors.confirmSenha.message}</p>
          )}
        </label>
        <Register type="submit">
         Criar conta
        </Register>
        <ReturnLogin to='/'>
         Já tenho uma conta
        </ReturnLogin>
       </Form>
     </Container>
   </>
  )
}

export default SignUp