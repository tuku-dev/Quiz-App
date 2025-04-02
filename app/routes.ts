import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "./routes/Home.tsx"),
  route('/quiz', "./routes/Quiz.tsx")
]