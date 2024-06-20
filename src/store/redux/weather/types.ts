export interface WeatherAppData {
  temperature: string
  temperatureFeels: string
  names: string
  icon: string
  description: string
}

export interface WeatherAppSliceState {
  data: WeatherAppData | null
  status: "default" | "loading" | "success" | "error"
  error: any
}
