import { async } from "rsvp"
describe('API',()=>{
    beforeAll(async()=>{
        await page.goto('https://api.publicapis.org/entries')
    })
    it ('Should display "api.publicapis.org/entries',async()=>{
        await expect(page).toMatch('api.publicapis.org/entries')
    })
})
