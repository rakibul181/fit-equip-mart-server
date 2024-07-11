import { Router } from "express";
import { CategoryRoute } from "../module/cetagory/category.route";

const router = Router()

const modulesRoutes = [
    {
        path: '/category',
        route: CategoryRoute,
      }
]
 

modulesRoutes.forEach((route) => router.use(route.path, route.route))

export default router