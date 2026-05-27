"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";

const schema = z.object({
  nombre: z.string().min(3, "Ingresa tu nombre completo"),
  correo: z.string().email("Ingresa un correo válido"),
  nombre_corto: z.string().min(2, "Ingresa el nombre del cortometraje"),
  institucion: z.string().min(2, "Ingresa tu institución"),
});

type FormData = z.infer<typeof schema>;

export default function InscriptionForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    const { error } = await supabase.from("inscripciones").insert([data]);
    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      reset();
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 space-y-3"
          >
            <p className="text-5xl">🎬</p>
            <h3 className="text-xl font-semibold text-[var(--gold)]">
              ¡Inscripción recibida!
            </h3>
            <p className="text-muted-foreground text-sm">
              Te contactaremos pronto al correo ingresado.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-xs text-muted-foreground underline underline-offset-4 mt-4"
            >
              Inscribir otro corto
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div className="space-y-1.5">
              <Label htmlFor="nombre">Nombre completo</Label>
              <Input
                id="nombre"
                placeholder="Ej. Laura Gómez"
                {...register("nombre")}
                className="bg-[var(--secondary)] border-[var(--border)] focus-visible:ring-[var(--gold)]"
              />
              {errors.nombre && (
                <p className="text-xs text-destructive">{errors.nombre.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="correo">Correo electrónico</Label>
              <Input
                id="correo"
                type="email"
                placeholder="tu@correo.com"
                {...register("correo")}
                className="bg-[var(--secondary)] border-[var(--border)] focus-visible:ring-[var(--gold)]"
              />
              {errors.correo && (
                <p className="text-xs text-destructive">{errors.correo.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="nombre_corto">Nombre del cortometraje</Label>
              <Input
                id="nombre_corto"
                placeholder="Título de tu corto"
                {...register("nombre_corto")}
                className="bg-[var(--secondary)] border-[var(--border)] focus-visible:ring-[var(--gold)]"
              />
              {errors.nombre_corto && (
                <p className="text-xs text-destructive">
                  {errors.nombre_corto.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="institucion">Institución / Universidad</Label>
              <Input
                id="institucion"
                placeholder="Ej. Universidad EAFIT"
                {...register("institucion")}
                className="bg-[var(--secondary)] border-[var(--border)] focus-visible:ring-[var(--gold)]"
              />
              {errors.institucion && (
                <p className="text-xs text-destructive">
                  {errors.institucion.message}
                </p>
              )}
            </div>

            {status === "error" && (
              <p className="text-xs text-destructive text-center">
                Ocurrió un error al enviar. Intenta de nuevo.
              </p>
            )}

            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[var(--gold)] text-[var(--primary-foreground)] hover:opacity-90 font-semibold"
            >
              {status === "loading" ? "Enviando..." : "Inscribir cortometraje"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
