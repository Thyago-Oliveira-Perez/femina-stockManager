import { IProdutoResponse } from "../../types/common.types";

export interface IProductCard {
    item: IProdutoResponse;
    actions: any;
    useRef: React.Ref<HTMLInputElement>;
}
