import { FormFunction } from "../FormProduto/types";

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
  mode?: FormFunction;
  id?: string;
}

export interface IUseFormBannerProps {
  mode?: FormFunction;
  id?: string;
}

export interface IValidationBanner {
  nome: {
    required: boolean;
  },
  tipo: {
    required: boolean;
  }
}