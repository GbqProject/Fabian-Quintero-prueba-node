export interface TiendaStock {
  idTienda: number;
  nombre: string;
  stock: number;
}

export interface ProductoStockResponse {
  idProducto: number;
  nombre: string;
  presentacion: string;
  tiendas: TiendaStock[];
}