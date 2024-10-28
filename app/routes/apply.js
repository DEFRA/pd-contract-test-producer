import crypto from 'crypto'

const routes = [{
  method: 'GET',
  path: '/apply',
  handler: (request, h) => {
    return h.view('apply')
  }
}, {
  method: 'POST',
  path: '/apply',
  handler: (request, h) => {
    const reference = crypto.randomUUID()

    request.yar.set('needsFunding', request.payload.needsFunding)
    request.yar.set('reference', reference)

    return h.redirect('/confirmation')
  }
}]

export default routes
