import type {MetadataRoute} from 'next'
const routes=['/','/voyages','/destinations','/billetterie','/hotellerie','/visa','/omra','/offres','/a-propos','/contact','/demande']
export default function sitemap():MetadataRoute.Sitemap{return routes.map(path=>({url:`https://in-vacation.vercel.app${path}`,lastModified:new Date()}))}