
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USE_MOCK_SERVICE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
