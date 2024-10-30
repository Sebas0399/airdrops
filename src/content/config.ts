import {defineColection,z} from 'astro:content';
const airdorps=defineColection({
    schema:z.object({
        title:z.string(),
        img:z.string().url(),
        link:z.string().url(),
        tge:z.string()
    })
})
export const collections={airdorps};