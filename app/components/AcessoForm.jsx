
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Acesso.module.css";

export default function AcessoForm({ mode }) {
  const router = useRouter();

  const isRegistro = mode === "registro";

  function handleSubmit(event) {
    event.preventDefault();

    if (isRegistro) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>

        <div className={styles.brand}>
          <div className={styles.logo}>PE</div>

          <div>
            <span className={styles.brandTitle}>
              Projeto Escola
            </span>

            <span className={styles.brandSubtitle}>
              SESI Mirandópolis
            </span>
          </div>
        </div>

        <div className={styles.heading}>
          <span className={styles.tag}>
            {isRegistro ? "CADASTRO" : "ACESSO AO SISTEMA"}
          </span>

          <h1>
            {isRegistro
              ? "Criar conta"
              : "Bem-vindo de volta"}
          </h1>

          <p>
            {isRegistro
              ? "Preencha os campos abaixo para realizar seu cadastro."
              : "Entre com seus dados para acessar o sistema escolar."}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >

          <div className={styles.field}>
            <label htmlFor="usuario">
              Usuário
            </label>

            <input
              id="usuario"
              name="usuario"
              type="text"
              placeholder="Digite seu usuário"
              required
            />
          </div>

          {isRegistro && (
            <div className={styles.field}>
              <label htmlFor="nome">
                Nome completo
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome"
                required
              />
            </div>
          )}

          <div className={styles.field}>
            <label htmlFor="senha">
              Senha
            </label>

            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className={styles.primaryButton}
          >
            {isRegistro
              ? "Salvar cadastro"
              : "Entrar no sistema"}
          </button>

        </form>

        <div className={styles.alternative}>

          <span>
            {isRegistro
              ? "Já possui uma conta?"
              : "Ainda não possui uma conta?"}
          </span>

          <Link
            href={isRegistro ? "/login" : "/registro"}
            className={styles.secondaryButton}
          >
            {isRegistro
              ? "Voltar para o login"
              : "Criar uma conta"}
          </Link>

        </div>

        <div className={styles.bottom}>
          Projeto Escola · Sistema de gerenciamento escolar
        </div>

      </section>
    </main>
  );
}
