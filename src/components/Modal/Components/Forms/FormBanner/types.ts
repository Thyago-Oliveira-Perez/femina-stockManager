export interface BannerRequest {
  id?: string;
  nome: string;
  tipo: TipoDeBanner | null;
  imagens: "";
}

export enum TipoDeBanner {
  DESTAQUE = "DESTAQUE",
  COLECAO = "COLECAO"
}

export interface IFormBannerProps {
  mode: string;
  id: string;
}

export interface IUseFormBannerProps {
  mode: string;
  id: string;
}