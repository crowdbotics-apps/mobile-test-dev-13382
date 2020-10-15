import axios from "axios"
import {
  NEW_CONNECTOR_MOBILE_USERNAME,
  NEW_CONNECTOR_MOBILE_PASSWORD
} from "react-native-dotenv"
const newConnectormobile = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/13382/storyboard/12324/",
  auth: {
    username: NEW_CONNECTOR_MOBILE_USERNAME,
    password: NEW_CONNECTOR_MOBILE_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
