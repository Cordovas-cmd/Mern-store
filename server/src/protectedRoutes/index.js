import { placeOrderRoute } from "./placeOrderRoute";
import{ testAuthRoute } from "./testAuthRoute"

export const protectedRoutes = [testAuthRoute, placeOrderRoute];