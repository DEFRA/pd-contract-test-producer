const route = {
  method: 'GET',
  path: '/session/clear',
  handler: (request, h) => {
    request.yar.reset()
    return h.redirect('/')
  }
}

export default route
