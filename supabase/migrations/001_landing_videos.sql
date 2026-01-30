-- Landing-Videos: Vimeo-IDs pro Section (hero, proof_roi)
-- Im Supabase SQL Editor ausführen oder via Supabase CLI migrieren.

create table if not exists public.landing_videos (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  vimeo_id text not null,
  title text,
  created_at timestamptz default now()
);

-- RLS: Öffentliches Lesen für anonyme Nutzer (Server fetcht mit Service Role ohnehin)
alter table public.landing_videos enable row level security;

create policy "Allow public read"
  on public.landing_videos
  for select
  using (true);

-- Optional: Kommentar für Slots
comment on column public.landing_videos.slug is 'Eindeutiger Slot: hero, proof_roi';
