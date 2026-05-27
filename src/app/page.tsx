"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import InscriptionForm from "@/components/InscriptionForm";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const bases = [
  {
    num: "01",
    titulo: "Duración",
    desc: "Los cortometrajes deben tener una duración mínima de 1 minuto y máxima de 15 minutos, incluyendo créditos.",
  },
  {
    num: "02",
    titulo: "Participantes",
    desc: "Abierto a estudiantes universitarios de Colombia. Al menos un integrante del equipo debe ser estudiante activo.",
  },
  {
    num: "03",
    titulo: "Formato",
    desc: "Entrega en formato digital MP4 o MOV, resolución mínima 1080p (Full HD), relación de aspecto 16:9.",
  },
  {
    num: "04",
    titulo: "Originalidad",
    desc: "El cortometraje debe ser una obra inédita, producida en los últimos dos años y no haber ganado premios en otros festivales.",
  },
];

const premios = [
  {
    lugar: "1er lugar",
    descripcion: "Premio principal + proyección en EAFIT",
    highlight: true,
  },
  {
    lugar: "2do lugar",
    descripcion: "Reconocimiento + kit de producción",
    highlight: false,
  },
  {
    lugar: "Mejor ópera prima",
    descripcion: "Reconocimiento especial TVU",
    highlight: false,
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-[var(--border)] backdrop-blur-sm bg-[var(--background)]/80">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono font-bold text-lg tracking-widest text-[var(--gold)]">
            35mm
          </span>
          <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition-colors">
              Sobre el concurso
            </a>
            <a href="#bases" className="hover:text-foreground transition-colors">
              Bases
            </a>
            <a href="#premios" className="hover:text-foreground transition-colors">
              Premios
            </a>
            <a
              href="#inscripcion"
              className="px-4 py-1.5 rounded-full border border-[var(--gold)] text-[var(--gold)] text-xs font-semibold hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] transition-colors"
            >
              Inscríbete
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute top-14 inset-x-0 h-8 flex gap-2 px-4 opacity-20 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="flex-none w-6 h-full border border-foreground/40 rounded-sm"
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 space-y-6 max-w-3xl"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-xs font-mono tracking-[0.3em] text-[var(--gold)] uppercase"
          >
            TVU EAFIT presenta
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-mono font-black text-[clamp(5rem,20vw,14rem)] leading-none tracking-tight text-foreground"
          >
            35mm
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            El concurso de cortometrajes para nuevos realizadores colombianos.
            Cuenta tu historia en celuloide digital.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#inscripcion"
              className="px-8 py-3 rounded-full bg-[var(--gold)] text-[var(--primary-foreground)] font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Inscribir mi cortometraje
            </a>
            <a
              href="#bases"
              className="px-8 py-3 rounded-full border border-[var(--border)] text-sm hover:border-foreground/40 transition-colors"
            >
              Ver las bases
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            className="flex items-center justify-center gap-8 pt-6 text-xs text-muted-foreground font-mono"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">2026</p>
              <p>Edición</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">15&apos;</p>
              <p>Duración máx.</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--gold)]">Gratis</p>
              <p>Inscripción</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 flex flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground/40" />
          <span className="font-mono">scroll</span>
        </motion.div>
      </section>

      {/* Sobre el concurso */}
      <section id="sobre" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xs font-mono tracking-[0.3em] text-[var(--gold)] uppercase">
              Sobre el concurso
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              El formato más honesto para contar historias.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">35mm</strong> es el concurso
              de cortometrajes organizado por{" "}
              <strong className="text-foreground">TVU</strong>, el grupo
              estudiantil de producción audiovisual de la{" "}
              <strong className="text-foreground">Universidad EAFIT</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nació con la idea de darle espacio a los realizadores emergentes
              de Colombia para mostrar sus historias sin filtros. El nombre
              rinde homenaje al film de 35 milímetros: el estándar que definió
              el cine durante un siglo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--card)] flex items-center justify-center"
          >
            <div className="text-center space-y-2 opacity-30">
              <p className="text-6xl font-mono font-black">TVU</p>
              <p className="text-xs font-mono tracking-widest">EAFIT</p>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col gap-1 p-0.5 bg-[var(--background)] opacity-60">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-none h-4 border border-foreground/20 rounded-sm"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bases */}
      <section id="bases" className="py-24 px-6 bg-[var(--card)]">
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-3"
          >
            <p className="text-xs font-mono tracking-[0.3em] text-[var(--gold)] uppercase">
              Bases del concurso
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">¿Cómo participar?</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {bases.map((base, i) => (
              <motion.div
                key={base.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-lg border border-[var(--border)] bg-[var(--background)] space-y-3 group hover:border-[var(--gold)]/40 transition-colors"
              >
                <p className="font-mono text-xs text-[var(--gold)] opacity-60 group-hover:opacity-100 transition-opacity">
                  {base.num}
                </p>
                <h3 className="font-semibold text-lg">{base.titulo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {base.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Bases sujetas a cambios. Versión definitiva disponible próximamente.
          </p>
        </div>
      </section>

      {/* Premios */}
      <section id="premios" className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-3"
          >
            <p className="text-xs font-mono tracking-[0.3em] text-[var(--gold)] uppercase">
              Reconocimientos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Premios</h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
            {premios.map((premio, i) => (
              <motion.div
                key={premio.lugar}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-lg border text-center space-y-3 ${
                  premio.highlight
                    ? "border-[var(--gold)] bg-[var(--gold)]/5"
                    : "border-[var(--border)] bg-[var(--card)]"
                }`}
              >
                {premio.highlight && (
                  <p className="text-xs font-mono text-[var(--gold)] uppercase tracking-widest">
                    ★ Principal
                  </p>
                )}
                <p className="text-xl font-bold">{premio.lugar}</p>
                <p className="text-sm text-muted-foreground">{premio.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de inscripción */}
      <section id="inscripcion" className="py-24 px-6 bg-[var(--card)]">
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-3"
          >
            <p className="text-xs font-mono tracking-[0.3em] text-[var(--gold)] uppercase">
              Participa
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Inscribe tu cortometraje
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Completa el formulario y un integrante de TVU se pondrá en
              contacto contigo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto p-8 rounded-xl border border-[var(--border)] bg-[var(--background)]"
          >
            <InscriptionForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-[var(--gold)] font-bold text-sm tracking-widest">
              35mm
            </p>
            <p>Un proyecto de TVU · Universidad EAFIT</p>
          </div>
          <p>© 2026 TVU EAFIT. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
