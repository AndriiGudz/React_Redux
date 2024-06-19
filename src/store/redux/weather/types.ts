export interface WeatherState {
  city: string
  weatherData: any
  loading: boolean
  status: "default" | "loading" | "success" | "error"
  error: any
}
