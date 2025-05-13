// table.ts
export interface Column {
    key: string;
    label: string;
  }
  
  export interface UserData {
    [key: string]: string | number | boolean | null;
  }
  