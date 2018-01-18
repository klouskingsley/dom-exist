describe('check a dom is exist', function () {
    it('dom exist', function () {
        var dom = document.createElement('div')
        document.body.appendChild(dom)
        assert(domExist(dom))
    })
})