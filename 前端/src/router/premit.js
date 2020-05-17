import router from './index';
import { getToken } from '../utils/app';

const whiteRouter = ['/admin/dashboard', '/admin/articlemanagement', '/admin/resourcesmanagement', '/admin/addresources', '/admin/timeline', '/admin/timeline/addtimeline', '/admin/timeline/timelinelist', '/admin/msgmanagement', '/admin/aboutskill/addskill', '/admin/aboutskill/skilllist', '/admin/friendsmanagements/addfriends', '/admin/friendsmanagements/friendslist', '/admin/aboutskill', '/admin/friendsmanagements'];
//路由守卫
router.beforeEach((to, from, next) => {
    if (getToken()) {
        next()
    } else {
        if (whiteRouter.indexOf(to.path) == -1) {
            next()
        } else {
            next('/admin/login')
        }
    }
})