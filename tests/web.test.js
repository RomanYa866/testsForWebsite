const timeout = 10000
jest.setTimeout(55000)

// describe('California State Records', () => {
//     let page
//     beforeAll(async () => {
//         page = await global.__BROWSER__.newPage()
//         await page.goto('https://california.staterecords.org');
//     }, timeout);
//
//     afterAll(async () => {
//         await page.close()
//     })
//
//     it('should be titled "California State Records | StateRecords.org"', async () => {
//         await expect(page.title()).resolves.toMatch('California State Records | StateRecords.org');
//     });
// })

describe('California State Records', () => {
    let page
    beforeAll(async () => {
        page = await global.__BROWSER__.newPage()
        await page.goto('https://california.staterecords.org');
    }, timeout);

    afterAll(async () => {
        await page.close()
    })

    it('Here we are checking all inputs and press ENTER button', async () => {
        await page.$eval('input#firstname', el => el.value = "Peter")
        await page.$eval('input#lastname', el => el.value = "Parker")
        await page.$eval('input#city', el => el.value = "California")
        await (await page.$('input#search')).press("Enter")
        await page.$eval('button.agree', form => form.click())
    })
}, timeout);

describe('California State Records', () => {
    let page
    beforeAll(async () => {
        page = await global.__BROWSER__.newPage()
        await page.goto('https://california.staterecords.org/search.php?firstname=Peter&lastname=Parker&city=California&search=Search');
    }, timeout);

    afterAll(async () => {
        await page.close()
    })

    it('Here we are waiting the form with 2 btns (Next and Without) and press Without btn ', async () => {
        await page.waitFor('a#without');
        await page.$eval('a#without', el => el.click())
        await page.screenshot({path: 'screen.png'})

    })
}, timeout);

// describe('California State Records', () => {
//     let page
//     beforeAll(async () => {
//         page = await global.__BROWSER__.newPage()
//         await page.goto('https://california.staterecords.org/records.php?firstname=Peter&lastname=Parker&city=California&state=&from=');
//     }, timeout);
//
//     afterAll(async () => {
//         await page.close()
//     })
//
//     it('Here we are checking all info about Peter Parker  ', async () => {
//         const content = await page.evaluate(document.querySelectorAll('#content > div.sd-center.cf > div.top-block.teaser-top.cf > div.teaser-list > ul:nth-child(1) > li:nth-child(1) > i'), element => element.textContent);
//         await expect(content).toMatch('1 Match');

        // await expect(page.querySelectorAll('#content > div.sd-center.cf > div.top-block.teaser-top.cf > div.teaser-list')).resolves.toMatch('1 Match');
        // await expect(page.querySelectorAll('#content > div.sd-center.cf > div.top-block.teaser-top.cf > div.teaser-list')).resolves.toMatch('56 Matches');
        // await expect(page.querySelectorAll('#content > div.sd-center.cf > div.top-block.teaser-top.cf > div.teaser-list')).resolves.toMatch('16 Matches');

//     })
// }, timeout);


// describe('California State Records', () => {
//     let page
//     beforeAll(async () => {
//         page = await global.__BROWSER__.newPage()
//         await page.goto('https://checkout.staterecords.org/checkout?_ga=2.138185648.1828417541.1582116764-272433666.1579619714&_gid=GA1.2.1828417541.1582116764&age=65&cities=%5B%22TRABUCO+CANYON%2C+CA%22%5D&items=5624854c61bbb2169db1a1f2&merc_id=53c05477c601d54e4515f955&relatives=%5B%22CAMERON+PARKER%22%2C%22COLLEEN+PARKER%22%2C%22COLLIN+PARKER%22%2C%22COURTNEY+PARKER%22%2C%22CYNTHIA+PARKER%22%5D&reportId=3HlbL_Bn&searchState=CA&searchfname=peter&searchlname=Parker&tid=CHA-x-california-7e9c425f2a60bdb262afb158b98dda62&v=2');
//     }, timeout);
//
//     afterAll(async () => {
//         await page.close()
//     })
//
//     it('Here we are comparing info about Peter Parker from pre page  ', async () => {
//
//
//     })
// }, timeout);

