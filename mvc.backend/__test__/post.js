const postCtrl = require('../controllers/post.js')

const req = {
  params: {
    id: 1
  }
}
const res = {
  status (num) {
    return res
  },
  json: jest.fn()
}

describe('getOne', () => {
  test('should get one post by pk', () => {
    postCtrl.getOne(req, res)

    expect(res.json).toHaveBeenCalled()
  })
})
