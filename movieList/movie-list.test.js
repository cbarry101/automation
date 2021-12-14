const {Builder, Capabilities} = require('selenium-webdriver')
const {Driver} = require('selenium-webdriver/chrome')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie} = require ('./addMovie')
const {deleteMovie} = require('./deleteMovie')
const {crossedOut} = require('./crossedOut')


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async() => {
    await driver.quit()
})

test('Add a movie', async() => {
    await addMovie(driver)

    await driver.sleep(3000)
})
test('Crosses out a movie', async() => {
    await crossedOut(driver)

    await driver.sleep(3000)
})


test('Delete a movie', async() => {
    await deleteMovie(driver)
    
    await driver.sleep(3000)
})

