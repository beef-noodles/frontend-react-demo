import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  layout('layouts/auth-layout.tsx', [
    index('components/welcome/welcome.tsx'),
    route('login', 'components/auth/login.tsx'),
    route('register', 'components/auth/register.tsx'),
  ]),
  ...prefix('concerts', [
    index('./components/concerts/home.tsx'),
    route(':city', 'components/concerts/city.tsx'),
    route('trending', 'components/concerts/trending.tsx'),
  ]),
] satisfies RouteConfig
