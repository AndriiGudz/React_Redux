export interface WeatherAppData {
  temperature: string
  names: string
}

export interface WeatherAppSliceState {
  data: WeatherAppData | null
  status: "default" | "loading" | "success" | "error"
  error: any
}
