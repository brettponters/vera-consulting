CREATE TABLE IF NOT EXISTS outbound_roadmaps (
  public_id TEXT PRIMARY KEY,
  company_domain TEXT NOT NULL,
  recipient_email TEXT,
  payload JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'published'
    CHECK (status IN ('draft', 'published', 'revoked')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS outbound_roadmaps_domain_idx
  ON outbound_roadmaps (company_domain);

CREATE INDEX IF NOT EXISTS outbound_roadmaps_status_idx
  ON outbound_roadmaps (status);
