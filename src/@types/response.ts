export interface AppResponse<Data> {
  success: boolean;
  data?: Data;
  message?: string;
}
