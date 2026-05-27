-- Tabla de inscripciones al concurso 35mm
create table if not exists inscripciones (
  id          uuid primary key default gen_random_uuid(),
  nombre      text not null,
  correo      text not null,
  nombre_corto text not null,
  institucion text not null,
  created_at  timestamptz not null default now()
);

-- Permitir inserciones anónimas (via clave pública)
alter table inscripciones enable row level security;

create policy "allow_insert" on inscripciones
  for insert with check (true);

-- Solo el service_role puede leer los datos
create policy "allow_select_service" on inscripciones
  for select using (auth.role() = 'service_role');
