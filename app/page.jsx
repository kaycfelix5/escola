
import Link from "next/link";
import styles from "./components/Acesso.module.css";

export default function HomePage() {
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
            SISTEMA ESCOLAR
          </span>

          <h1>Bem-vindo ao Projeto Escola!</h1>

          <p>
            Você está na página principal do sistema.
            Aqui ficarão disponíveis as funcionalidades
            de gerenciamento escolar.
          </p>
        </div>

        <div className={styles.form}>
          <Link
            href="/login"
            className={styles.primaryButton}
          >
            Voltar para o login
          </Link>
        </div>

      </section>
    </main>
  );
}
